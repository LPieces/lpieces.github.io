---
title: 从零实现理解TypeScript工具类型
date: 2026-05-11T17:00:00.000+08:00
lang: zh
duration: 5min
---

TypeScript 内置了许多实用的工具类型，帮助我们在类型层面进行各种转换和操作。理解这些工具类型的实现原理，不仅能让我们更好地使用它们，还能学会如何编写自己的类型工具。

## 1. Partial&lt;T&gt; - 将所有属性变为可选

```typescript
type MyPartial<T> = {
  [P in keyof T]?: T[P]
}

// 使用示例
interface User {
  id: number
  name: string
  age: number
}

type PartialUser = MyPartial<User>
// 等价于 { id?: number; name?: string; age?: number }
```

**原理**：使用映射类型遍历 T 的所有属性键，并在每个属性后加上 `?` 修饰符。

## 2. Required&lt;T&gt; - 将所有属性变为必选

```typescript
type MyRequired<T> = {
  [P in keyof T]-?: T[P]
}

interface Props {
  a?: string
  b?: number
}

type RequiredProps = MyRequired<Props>
// 等价于 { a: string; b: number }
```

**原理**：`-?` 语法用于移除属性的可选修饰符。

## 3. Readonly&lt;T&gt; - 将所有属性变为只读

```typescript
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

interface Config {
  host: string
  port: number
}

type ReadonlyConfig = MyReadonly<Config>
// 等价于 { readonly host: string; readonly port: number }
```

## 4. Pick&lt;T, K&gt; - 从 T 中挑选一组属性

```typescript
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

interface Person {
  name: string
  age: number
  address: string
}

type NameAndAge = MyPick<Person, 'name' | 'age'>
// 等价于 { name: string; age: number }
```

**原理**：`K extends keyof T` 约束 K 必须是 T 的键的子集。

## 5. Omit&lt;T, K&gt; - 从 T 中排除一组属性

```typescript
// 基于 Pick 和 Exclude 的实现（推荐）
type MyOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

// 直接使用映射类型的实现
type MyOmit2<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P]
}

interface Product {
  id: number
  name: string
  price: number
  description: string
}

type ProductPreview = MyOmit<Product, 'description'>
// 等价于 { id: number; name: string; price: number }
```

## 6. Exclude&lt;T, U&gt; - 从联合类型 T 中排除 U 中的类型

```typescript
type MyExclude<T, U> = T extends U ? never : T

type T1 = 'a' | 'b' | 'c'
type T2 = 'a'

type Result = MyExclude<T1, T2> // 'b' | 'c'
```

**原理**：条件类型作用于联合类型时具有**分布行为**——当 `T` 是裸类型参数（未被数组、元组等包装）时，条件类型会分别应用于联合类型的每个成员。

## 7. Extract&lt;T, U&gt; - 从 T 中提取 U 中的类型

```typescript
type MyExtract<T, U> = T extends U ? T : never

type T1 = 'a' | 'b' | 'c'
type T2 = 'a' | 'd'

type Result = MyExtract<T1, T2> // 'a'
```

## 8. NonNullable&lt;T&gt; - 排除 null 和 undefined

```typescript
type MyNonNullable<T> = T extends null | undefined ? never : T

type T = string | number | null | undefined
type Result = MyNonNullable<T> // string | number
```

## 9. Record&lt;K, T&gt; - 构建键类型为 K、值类型为 T 的对象类型

```typescript
type MyRecord<K extends keyof any, T> = {
  [P in K]: T
}

type UserMap = MyRecord<'admin' | 'user', { name: string }>
// 等价于：
// {
//   admin: { name: string }
//   user: { name: string }
// }
```

## 10. ReturnType&lt;T&gt; - 获取函数类型的返回值类型

```typescript
type MyReturnType<T> = T extends (...args: never) => infer R ? R : never

function greet(): string {
  return 'hello'
}

type GreetReturn = MyReturnType<typeof greet> // string
```

**原理**：使用 `infer` 在条件类型中推断返回值类型。`...args: never` 能够匹配更多函数类型（包括泛型函数和重载函数）。

## 11. Parameters&lt;T&gt; - 获取函数类型的参数类型（元组形式）

```typescript
type MyParameters<T> = T extends (...args: infer P) => any ? P : never

function add(a: number, b: number): number {
  return a + b
}

type AddParams = MyParameters<typeof add> // [a: number, b: number]
```

## 12. InstanceType&lt;T&gt; - 获取构造函数类型的实例类型

```typescript
type MyInstanceType<T extends abstract new (...args: any) => any>
  = T extends abstract new (...args: any) => infer R ? R : never

class Person {
  name: string
  constructor(name: string) {
    this.name = name
  }
}

type PersonInstance = MyInstanceType<typeof Person> // Person
```

## 13. ConstructorParameters&lt;T&gt; - 获取构造函数参数类型

```typescript
type MyConstructorParameters<T extends abstract new (...args: any) => any>
  = T extends abstract new (...args: infer P) => any ? P : never

class Person {
  constructor(name: string, age: number) {}
}

type PersonParams = MyConstructorParameters<typeof Person> // [name: string, age: number]
```

## 14. 高级组合示例：深层 Partial

```typescript
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

interface Nested {
  user: {
    info: {
      name: string
      age: number
    }
  }
}

type DeepPartialNested = DeepPartial<Nested>
// 所有层级的属性都变成可选的
```

## 15. 补充说明：条件类型的分布行为

在使用 `Exclude`、`Extract` 等工具类型时，理解条件类型的分布行为至关重要：

```typescript
// ✅ 会分布 - T 是裸类型参数
type Distribute<T> = T extends string ? true : false

// ❌ 不会分布 - T 被包装在元组中
type NoDistribute<T> = [T] extends [string] ? true : false

type Test = 'a' | 123
type Result1 = Distribute<Test> // true | false
type Result2 = NoDistribute<Test> // false（整个联合类型不满足条件）
```

## 总结

通过从零实现这些工具类型，我们掌握了 TypeScript 类型编程的核心技巧：

| 核心语法               | 用途                   |
| ---------------------- | ---------------------- |
| `keyof T`              | 获取类型的所有键       |
| `[P in K]`             | 映射类型，遍历键       |
| `?` / `-?`             | 添加/移除可选修饰符    |
| `readonly`             | 添加只读修饰符         |
| `extends`              | 条件类型判断           |
| `infer`                | 在条件类型中推断类型   |
| `never`                | 表示永不存在的类型     |
| 裸类型参数 + `extends` | 触发条件类型的分布行为 |

掌握这些基础构件后，你就可以根据自己的业务需求，编写复杂的类型工具来增强代码的类型安全性了。
