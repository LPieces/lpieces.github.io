---
title: JS预编译
date: 2021-11-10 16:20
tags: 
 - 预编译
categories:
 - 探索JavaScript
---

## JS运行三步曲

1. 语法分析：扫描看有没有语法错误，但不执行

2. 预编译

3. 解释执行：解释一行执行一行

## 预编译在什么时候发生？

全局预编译发生在`页面加载完成`时执行，而函数预编译发生在`函数执行的前一刻`。

预编译会把`函数声明提升`，`变量`的`声明提升`

## 预编译前奏

1. `imply global` 暗示全局变量：即任何变量，如果变量未经声明就赋值，此变量就为全局对象所有。
```
// eg(exempli gratia):
a = 123;
var a = 123;
```
2. 一切声明的全局变量，都是window的属性。
```
eg: var a = 123; ===> window.a = 123;
```

## 预编译四部曲：

1. 创建`AO(Activation Object，执行期上下文)`对象

2. 找形参和变量声明，将变量和形参名作为`AO`对象的属性名，赋值为`undefined`

3. 将`实参`的值和`形参相统一`

4. 找`function函数声明`(非函数表达式)，值`赋予函数体`

>注：上面是函数预编译四部曲，相比全局预编译不同点在于创建对象为`GO(Global Object，全局执行期上下文，在浏览器中为window)`，全局预编译`无形参`自然也`没有第三步`！！！

## 函数预编译举例
```
function fu(a){
    console.log(a);

    var a = 123;

    console.log(a);

    function a(){}

    console.log(a);

    var b = function(){}

    console.log(b);

    console.log(d);

    var d = 456;

    function d(){}
    
    console.log(d);

    var d = function(){}

    console.log(d);
  }
  fu(7);
```

### 第一步
创建AO对象
```
AO {

}
```
### 第二步

找形参和变量声明，形参有a，变量声明有a，b，d，作为AO对象属性名，值为undefined。
```
AO {
    a: undefined,
    b: undefined,
    d: undefined
}
```

### 第三步

实参和形参相统一，把实参7丢给形参a
```
AO {
    a: 7,
    b: undefined,
    d: undefined
}
```
### 第四步

找函数声明，函数声明有fun a,fun d，值赋予函数体。
```
AO {
    a: function a(){},
    b: undefined,
    d: function d(){}
}
```

### 解释执行

到这预编译就结束了，开始解释执行代码，结果如下：
```
function fu(a){
    console.log(a); // function a(){}

    var a = 123;

    console.log(a); // 123

    function a(){}

    console.log(a); // 123

    var b = function(){}

    console.log(b); // function(){}

    console.log(d); // function d(){}

    var d = 456;

    function d(){}

    console.log(d); // 456

    var d = function(){}

    console.log(d); // function(){}
  }
  fu(7);
```

## 全局预编译举例

预编译先成GO对象，再生成AO对象，看下面这个例子：

```
console.log(test);
  function test(){
    console.log(test);
    var test = 123;
    console.log(test);
    function test(){}
  }
  test(1);
  var test = 234;
```
### 第一步

创建GO对象
```
GO {

}
```
### 第二步

全局`没有形参`只找变量声明test，作为GO对象属性名，值为undefined。

```
GO {
    test: undefined
}
```
### 第三步

全局没有第三步

### 第四步

找函数声明，函数声明有fun test，值赋予函数体。

```
GO {
    test: function (){...}
}
```
### 解释执行

函数预编译发生在函数执行的前一刻，所以当test执行前一刻会预编译AO对象，再执行函数体

```
console.log(test); // 输出函数体
  /*
      AO { // AO预编译最终结果
          test: function (){}
      }
  */
  function test(){
    console.log(test); // 输出AO自己的test function (){}
    var test = 123;
    console.log(test); // 123
    function test(){}
  }
  test(1);
  var test = 234;
```
## 练习
### 1.
```
function test(){
    console.log(b);
    if(a){
      var b = 100;
    }
    c = 234;
    console.log(c);
  }
  var a;
  test();
  a = 10;
  console.log(c);
```
### 2.1
```
function bar() {
    return foo;
    foo = 10;
    function foo() {}
    var foo = 11;
  }
  console.log(bar());
```
### 2.2
```
console.log(bar());
  function bar() {
    foo = 10;
    function foo() {}
    var foo = 11;
    return foo;
  }
```
### 3.
```
a = 100;
  function demo(e){
    function e() {}
    arguments[0] = 2;
    console.log(e);
    if(a){
      var b = 123;
      function c() {}
    }
    var c;
    a = 10;
    var a;
    console.log(b);
    f = 123;
    console.log(c);
    console.log(a);
  }
  var a;
  demo(1);
  console.log(a);
  console.log(f);
```