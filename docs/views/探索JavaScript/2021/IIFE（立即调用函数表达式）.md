---
title: IIFE（立即调用函数表达式）
date: 2021-11-09 14:24
tags: 
 - IIFE
categories:
 - 探索JavaScript
---

## 什么是IIFE，它的全称是什么？
IIFE全称是`Immediately Invoked Function Expression`翻译过来就是`立即地调用函数表达式`。

函数声明不等于函数表达式，比如：
```
// 这是函数声明
function test1 () {
    console.log("Function Declaration");
}

// 这是函数表达式。把一个（匿名）函数（函数声明式）赋值给一个变量的形式就是函数表达式
var test2 = function () {
    console.log("Function Expression");
}
```
## W3C推荐的立即执行函数的编写规范
```
(function () {
  console.log('Function Expression');
}());
```
**实践中的写法**
```
(function () {
  console.log('Function Expression');
})()
```
**在前面加`;`的原因**
```
;(function () {
  console.log('Function Expression');
})()
```
括号太多的话,js引擎无法分辨，所以行业内部约定立即执行函数前面手动的加`;` 防止在压缩或打包出错。

()后面如果没有;号引擎无法分辨，有些人习惯括号后面不加`;`号，所以避免不必要的出错，再前面加`;`

## 立即执行函数的特点与好处

**1. 立即执行函数可以创建一个与外界没有任何关联的作用域，独立作用域**

**2. 执行完成以后，自动销毁**

**3. 在 ES3 ES5 立场上是没有模块概念，立即执行函数来模拟模块化**

模块化的作用：封闭作用域、抛出接口
```
(function test (a, b, c) {
    // 立即执行函数其实就是个普通函数内部可以向外部抛出一系列属性和方法
    // 也可以向window上保存属性和方法
    console.log(test);
    console.log(test.length);
    console.log(arguments.length);
    console.log('Hello');
})(1,2,3);
```