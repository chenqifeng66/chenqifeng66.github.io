---
title: 字节 - 判断传入的函数是否标记了 async
---

## 题目

写一个函数来判断传入的函数是否标记了 async

## 示例

```js
function isAsyncFunction(func) {}

isAsyncFunction(() => {}); // expect: false
isAsyncFunction(async () => {}); // expect: true
```

## 解决方法

在 async 标记的函数原型上有一个 `Symbol.toStringTag` 属性

```js{7}
console.dir(async function () {});
/*
  expect:
  ...
  [[Prototype]]: AsyncFunction
    constructor: f AsyncFunction()
    Symbol(Symbol.toStringTag): "AsyncFunction"
    ...
*/
```

通过判断 `Symbol.toStringTag` 属性即可知道传入函数是否为 async 标记的函数

```js
function isAsyncFunction(func) {
  return func[Symbol.toStringTag] === "AsyncFunction";
}
```
