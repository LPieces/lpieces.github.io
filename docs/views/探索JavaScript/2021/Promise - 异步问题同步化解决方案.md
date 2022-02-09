---
title: Promise - 异步问题同步化解决方案
date: 2021-10-12 11:10
tags: 
 - Promise
categories:
 - 探索JavaScript
---

## 什么是 Promise?
**Promise** 是ES6提供的一个原生的构造函数，我们可以打印看一下这个构造函数：
```
console.log(Promise)
打印结果： ƒ Promise() { [native code] }
console.log(typeof Promise)
打印结果： function
```
![截屏2021-10-08 上午11.20.52.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/663b8e1f30a142b588341930f800bc79~tplv-k3u1fbpfcp-watermark.image?)

可以看到 `Promise` 是一个构造函数，自身有`all`、`reject`、`resolve`这几个方法，原型上有`then`、`catch`等方法。
用`new`关键字和`Promise`构造器创建它的对象。该函数接受两个函数参数。当异步成功时，第一个函数（`resolve`）将被调用，并返回一个值代表成功。当其失败时，第二个函数（`reject`）将被调用，并返回失败原因。
## 一个简单的例子
```
const myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        Math.random() > 0.5 ? resolve('success') : reject('fail');
    }, 1000);
});

console.log(myFirstPromise); // Promise {<pending>}

myFirstPromise.then((result) => {
    console.log(result);
}, (err) => {
    console.log(err);
});
```
一个 `Promise` 必然处于以下几种状态之一：

-   **等待（pending）** : 初始状态，既没有被完成，也没有被拒绝。
-   **已实现（fulfilled）** : 意味着操作成功完成。
-   **已拒绝（rejected）** : 意味着操作失败。

`then()`方法返回一个`Promise`它最多有两个参数：Promise 的成功和失败情况的回调函数。

第一个参数(`onFulfilled`)：当`Promise`的状态为`fulfilled`时被调用，该函数有一个参数，即完成的最终结果。如果该参数不是一个函数，则会被内部替换为`(x) => x`, 即原样返回 Promise 最终结果的函数。

第二个参数(`onRejected`)：当`Promise`的状态为`rejected`时被调用，该函数有一个参数，即拒绝的原因。如果该参数不是一个函数，则会被内部替换为一个`"Thrower" 函数 (it throws an error it received as argument)`。

```
myFirstPromise.then((result) => {
    // 当 Promise 被 fulfilled 时
    console.log(result);
}).catch((reason) => {
    // 当 Promise 被 rejected 时
    console.log(reason);
});
```
`catch()`方法返回一个`Promise`并且处理拒绝的情况。它的行为与调用`then(undefined, onRejected)` 相同。

`catch()`接受一个参数 (回调函数)：

当`Promise`被`rejected`时调用的函数。该函数拥有一个参数`reason`(`rejected`的原因)

如果这个参数 (指的是 `onRejected`) 不是函数时，也是会报错的。**这与 `then()` 方法中第二个参数不是函数的情况吻合。**

```
myFirstPromise.finally(() => {

});
```
`finally()`方法在 Promise 结束时，无论结果是`fulfilled`还是`rejected`，都会执行的回调函数。这样可以避免同样的语句需要在`then()`和`catch()`中都要写一次的情况。

如果你想在`Promise`执行完毕后无论其结果怎样都做一些处理或清理时`finally()`方法或许是你需要的。

`finally()`方法的回调函数不接受任何参数，这意味着没有办法知道前面的`Promise`状态到底是`fulfilled`还是`rejected`。
这表明`finally`仅用于无论最终结果如何都要执行的情况，而不能依赖`Promise`执行结果。

`finally()`方法本身无异常抛出的情况下，总是会返回原来的`Promise`对象值；若抛出异常，则返回异常的 Promise`对象。
<p align="right"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise">更多关于Promise>>></a></p>

## Promise 存在的意义是什么？
 
我们都知道`Promise()`执行是同步的，而`then()`执行是异步的，为什么？

为什么`Promise()`执行是同步的，而 `then()`执行是异步的呢？我就想把`then()`设计成同步不行吗？

那么先看一个ajax的例子测试，这里用的是`jquery`。
```
data.json
[
    {
        "id": 1,
        "name": "zhangsan"
    },
    {
        "id": 2,
        "name": "lisi"
    },
    {
        "id": 3,
        "name": "wangwu"
    },
    {
        "id": 7,
        "name": "LPieces"
    }
]

index.js
// 异步程序
$.ajax({
    url: "http://localhost:3000/data.json",
    success (data) {
        console.log(data.map(item=>item.name));
    }
});
console.log("My name is LPieces.");
```

运行结果：

![截屏2021-10-11 上午11.19.37.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5d98b058ed3941b294ff361509fe3a80~tplv-k3u1fbpfcp-watermark.image?)

上面的代码中`$.ajax()`是异步程序，而js执行是从上往下同步执行，当异步程序请求没回来时，下面`console.log()`当然就打印了这个很简单。那现在我想要把`success`中的操作抽离到外层出来怎么做呢？看下面的代码：
```
// 异步程序
const data = $.ajax({
    url: "http://localhost:3000/data.json",
    async: false // 同步
});
console.log(data.responseJSON.map(item=>item.name));
console.log("My name is LPieces.");
```
运行结果：

![截屏2021-10-11 下午6.19.25.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/16fe2875fb904297a50cefba5d2f1525~tplv-k3u1fbpfcp-watermark.image?)

当我设置了`async: false`上面的`ajax`和下面的打印就形成了同步的关系，虽然实现了我想要的结果，但是打印的`My name is LPieces`跑到下面去了，它要等着上面`ajax`执行完才打印出来，那这就不对了哦，这会阻塞了下面所有的代码。既然这样，来看看`Promise`怎么帮我解决这个问题：
```
const p = new Promise((resolve, reject) => {
    $.ajax({
        url: 'http://localhost:3000/data.json',
        success (data) {
            resolve(data);
        }
    })
})
p.then(res => {
    console.log(res.map(item=>item.name));
})
console.log("My name is LPieces.");
```
运行结果：

![截屏2021-10-12 上午10.11.40.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cc7c5f86c1e441e381a734e9b353e2b9~tplv-k3u1fbpfcp-watermark.image?)

是不是完美的解决了阻塞的问题呀，到这里应该能理解为什么`Promise()`的执行一定是同步的，而 `then()`的执行一定是异步的了吧，如果`then()`是同步执行的话，那么就会回到上面阻塞的问题去了，那我设置`async: false`不香吗？干嘛还要写个`Promise`包裹`ajax`的代码呢？
### Promise 的存在是解决回调地狱吗？
`Promise`只是顺便解决回调地狱，解决回调地狱最好的方法是`Promise + async awiat`的结合，举个栗子：
```
function getData(){
    return new Promise((resolve, reject) => {
        // 注：当然 ajax 本身也有 Promise , 这里只是举个栗子
        $.ajax({
            url: 'http://localhost:3000/data.json',
            success (data) {
                resolve(data);
            }
        })
    })
}
async function doSth(){
    try{
        const data = await getData();
        console.log(data.map(item=>item.name));
        console.log("My name is LPieces.");
    }catch(err){
        console.log(err);
    }
}
doSth();
console.log("My name is LPieces.");
```
运行结果：

![截屏2021-10-12 上午10.56.09.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/17caeba4043141e88946145b922bec44~tplv-k3u1fbpfcp-watermark.image?)

`doSth()`和下面的打印是同步的执行关系。在`doSth()`里处理异步请求，如果需要上一个请求有结果后再请求，一路`await`下去就行了。

### **Promise 存在的意义是异步问题同步化解决方案**