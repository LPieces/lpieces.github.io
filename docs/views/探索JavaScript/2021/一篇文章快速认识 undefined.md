---
title: 一篇文章快速认识 undefined
date: 2021-10-18 15:13
tags: 
 - undefined
categories:
 - 探索JavaScript
---

## undefined 是什么？

`undefined`即是一个原始数据类型，也是一个原始值数据

`undefined`是全局对象上的一个属性

![截屏2021-10-15 下午6.20.49.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a74d5e9083274b2298e6f2170b998818~tplv-k3u1fbpfcp-watermark.image?)
```
console.log(window.undefined) // undefined
```

## undefined 是否可写？是否配置？

### 不可写 `writable: false`

```
window.undefined = 1; // 不可写
console.log(window.undefined) // undefined
```

### 不可配置 `configurable: false`
```
delete window.undefined;
console.log(window.undefined) // 还是正常打印出undefined
```

### 不可枚举 `enumerable: false`
```
for(var k in window){
  if(k === undefined){
    console.log(k); // 没有打印
  }
}
```
### 不可重新定义 `Object.defineProperty()` 报错了
```
Object.defineProperty(window, 'undefined', {
  enumerable: true,
  writable: true,
  configurable: true
})
```

![截屏2021-10-15 下午6.31.29.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3874b94adea74ff89d23164d1e4c071b~tplv-k3u1fbpfcp-watermark.image?)

## 关于 undefined

### 未赋值的变量系统会自动赋值为 `undefined`，类型也是 `undefined`
```
var a;
console.log(a); // undefined
function test(a){
  console.log(typeof a); // 类型undefined
  return a;
}
```
### 函数没有传值打印 `undefined`
```
console.log(test()); // undefined
```

### 在函数内部没有写返回值系统默认返回 `undefined`
```
function test2(){
  console.log(123);
  // return undefined
}
console.log(test2()); // undefined
```
### `undefined` 不能作为变量使用
```
var undefined = 1; 
console.log(undefined); // undefined
```
### `undefined` 不是JS的保留字和关键字，在全局下不可写，但是在局部作为变量时，它不会去全局找，局部作用域可以打印出 `1` ，就算在严格模式下也仍然可以
```
function test3(){
  'use strict'; // 严格模式
  var undefined = 1; 
  console.log(undefined); // 1
}
test3();
```
### `void(0)` 对0进行求值，始终返回 `undefined`
```
var a, b, c;
a = void(b = 1, c = 2);
console.log(a, b, c); // undefined 1 2

// <a href="javascript:void(0)"> // 返回 undefined 阻止 <a> 标签跳转

console.log(void(0) === window.undefined); // true  void(0) 全等于 window.undefined
```
### 为了避免局部作用域中取不到真正的 `undefined`，老的程序会用`void(0)`返回的`undefined` 来作为 `undefined` 去和其他变量判断是否等于 `undefined`
```
function test4(){
  var undefined = 1;
  console.log(undefined); // 1
  console.log(void(0)); // undefined
  console.log(void(0) === undefined); // false, 因为 undefined 可以在局部作用域中作为变量使用
}
```