---
title: watchEffect
order: 3
---

## 前言

在vue3的整个响应式系统中，靠的是 `watchEffect函数` 收集依赖，数据发生变化时触发依赖。

## watchEffect

收集依赖，触发依赖

### 思路

```js
定义一个临时变量;

将传入的依赖记录到临时变量中;
执行依赖;
清空临时变量;
```

### 实现

```js
// 记录要收集的依赖的变量
let activeEffect;

/**
 * @description: 收集触发依赖
 * @param {function} effect 依赖
 */
function watchEffect(effect) {
  activeEffect = effect;
  effect();
  activeEffect = null;
}
```

## dep

现在收集触发依赖的方法有了，就需要在访问数据时记录依赖，修改数据时触发依赖，即 `getter` 和 `setter`。

每一个数据都可以是一个实例，该实例记录着与自己有关的所有依赖

```js
class Dep {
  constructor(value) {
    // 存储所有关于该数据的依赖
    this.subscribers = new Set();
    // 数据
    this._value = value;
  }
  // getter
  get value() {
    // 访问数据时记录依赖
    depend();
    return this._value;
  }
  // setter
  set value(newValue) {
    this._value = newValue;
    // 修改数据时触发依赖
    notify();
  }
  depend() {
    if (activeEffect) {
      this.subscribers.add(activeEffect);
    }
  }
  notify() {
    this.subscribers.forEach((effect) => {
      effect();
    });
  }
}
```

## 结合

```js
const dep = new Dep("hello");
watchEffect(() => {
  // 访问了数据，所以该依赖被记录了
  console.log(dep.value);
});

// 修改数据，依赖被触发
dep.value = "world"; // world
```

## 总结

本节为了理清收集触发依赖的流程，所以使用了 dep 这个类来实现逻辑，但 getter 和 setter 无法捕获引用类型数据的操作，所以下节将实现 `reactive函数` 来实现对引用类型数据的操作捕获。
