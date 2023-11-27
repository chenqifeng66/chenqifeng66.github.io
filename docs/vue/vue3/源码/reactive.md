---
title: reactive
order: 4
---

## 前言

上一节实现的类无法实现对引用类型数据的操作捕获，所以这一节使用 `Proxy` 来实现对引用类型数据的操作捕获。

_Vue2 使用的是 Object.defineProperty实现_

_Vue3 使用的是 Proxy实现_

## dep

修改一下上一节实现的 `dep` 类，移除 value 属性和 `getter` `setter`

```js
let activeEffect;

class Dep {
  subscribers = new Set();
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

## reactive

在 vue3 中，`reactive` 函数接收的是一个引用类型的数据，使之具有响应式。

### 思路

```js
接收引用类型的数据;
返回数据的代理;
```

### 实现

```js
// WeakMap：只接受 object 作为 key；当 key 不被引用时，该 key 也就随之清除（垃圾回收）
const targetsMap = new WeakMap(); // 记录所有响应式对象的依赖

/**
 * @description: 获取指定值的 Dep 实例(记录着该值的所有依赖)
 * @param target 目标对象
 * @param key 键
 * @return {object} dep
 */
function getDep(target, key) {
  let depsMap = targetsMap.get(target);
  if (!depsMap) {
    depsMap = new Map();
    targetsMap.set(target, depsMap);
  }
  let dep = depsMap.get(key);
  if (!dep) {
    dep = new Dep();
    depsMap.set(key, dep);
  }
  return dep;
}

// 拦截器
const reactiveHandlers = {
  // receiver 解决 this 指向问题
  get(target, key, receiver) {
    const dep = getDep(target, key);
    // 收集依赖
    dep.depend();

    return Reflect.get(target, key, receiver);
  },
  set(target, key, value, receiver) {
    const result = Reflect.set(target, key, value, receiver);
    const dep = getDep(target, key);
    // 触发依赖
    dep.notify();
    return result;
  },
};

/**
 * @description: 创建响应式对象
 * @param raw 要代理的对象
 * @return {object} proxy
 */
function reactive(raw) {
  return new Proxy(raw, reactiveHandlers);
}
```

## 创建响应式对象

```js
const state = reactive({
  count: 1,
});

watchEffect(() => {
  console.log(state.count);
});

state.count++; // 2
```

## 总结

响应式的原理

1. 访问属性时收集依赖
2. 修改属性时触发依赖
