---
title: 深拷贝(deepClone) ES5 与 ES6
date: 2021-12-25 06:11
tags: 
 - 深拷贝
categories:
 - 探索JavaScript
---

## ES5
利用`Object.prototype.toString.call()`去判断是对象还是数组。
```
function deepClone (origin, target) {
  var toStr = Object.prototype.toString;
  var tar = target || toStr.call(origin) === '[object Array]' ? [] : {};

  for (var k in origin){
    if (origin.hasOwnProperty(k)) {
      if (typeof origin[k] === 'object' && origin[k] !== null) {
        tar[k] = toStr.call(origin[k]) === '[object Array]' ? [] : {};
        deepClone(origin[k], tar[k]);
      }else{
        tar[k] = origin[k];
      }
    }
  }

  return tar;
}
```
## ES6
利用`new origin.constructor()`将返回一个与之不同的新的对象，省了用`Object.prototype.toString.call()`去判断，来做到深拷贝。
```
function deepClone (origin, hashMap = new WeakMap()) {
  if (origin == undefined || typeof origin !== 'object') {
    return origin;
  }
  if (origin instanceof Date) {
    return new Date(origin);
  }
  if (origin instanceof RegExp) {
    return new RegExp(origin);
  }
  const hashKey = hashMap.get(origin);
  if (hashKey) {
    return hashKey;
  }
  const target = new origin.constructor();
  hashMap.set(origin, target);
  for (let k in origin) {
    if (origin.hasOwnProperty(k)) {
      target[k] = deepClone(origin[k], hashMap);
    }
  }
  return target;
}
```