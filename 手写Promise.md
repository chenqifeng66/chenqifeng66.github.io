<!-- ---
title: 手写 Promise
---

## Promise

用于处理异步代码

## 实现思路

Promise 逻辑：

1. 构造函数，可以被 `new` 关键字调用
2. 构造函数可以传入一个回调函数，回调函数的参数为 `resolve` 和 `reject`
3. promise 有三种状态：`pending(待定)`、`fulfilled(已兑现)`、`rejected(已拒绝)` 状态改变只能由 `pedding` 变为其他两种状态
4. 构造后的实例拥有 `then` 、 `catch` 、 `finally` 三个基础方法
5. 支持链式调用

## 实现 `resolve` 和 `then`

```js
class MyPromise {
  const PENDING = 'pending'
  const FULFILLED = 'fulfilled'
  const REJECTED = 'rejected'
  let state = PENDING
  constructor(func) {
    func(this.resolve.bind(this), this.reject.bind(this));
  }

  resolve(value) {
    console.log(state)
    // 由于 promise 属于微任务，这里用 queueMicrotask 来将回调添加到微任务队列中
    window.queueMicrotask(() => {
      this.thenCallback && this.thenCallback(value);
    });
  }

  then(callback) {
    this.thenCallback = callback;
    // 返回 this，支持链式调用
    return this;
  }

}
``` -->
