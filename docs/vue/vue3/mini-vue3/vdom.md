---
title: vdom
order: 1
---

## 前言

使用 vue3 也有一段时间，过程中碎片式地学习了一些 vue3 原理相关的知识，但还是对 vue3 的整个逻辑不是很清楚，所以试着实现一下 mini-vue 以加深对 vue3 的理解。

## 虚拟 dom

虚拟 DOM: Virtual DOM，即用 js 对象描述真实 DOM。

真实 DOM

```html
<div>hello</div>
```

虚拟 DOM

```js
{
  tag:'div',  // 标签名
  props:{}, // 属性和事件
  children: 'hello' // 子节点 string | array
}
```

## 渲染挂载流程

vue3的初始流程为

1. 创建虚拟 DOM
2. 将虚拟 DOM 渲染为真实 DOM
3. 将真实 DOM 挂载到页面容器上（ #app ）

## h

生成 `虚拟dom` 对象

```js
/**
 * @description: 生成虚拟 dom
 * @param {string} tag html 标签名
 * @param {object} props 属性及事件
 * @param {string | array} children 子节点
 * @return {object} 虚拟dom
 */
function h(tag, props, children) {
  return {
    tag,
    props,
    children,
  };
}
```

- 虚拟 dom

```js
h("div", null, "hello"); // { tag: 'div', props: null , children: 'hello' }
```

## mountDom

将 `虚拟dom` 渲染为 `真实dom`

### 思路

```js
用虚拟 dom 创建真实 dom
  if 虚拟 dom 存在 props 属性
    遍历 props
    if prop 是事件
      给真实 dom 绑定事件
    else prop 是属性
      给真实 dom 添加属性
  if 虚拟 dom 存在 children 属性
    if children 为 string
      将 children 设为真实 dom 的文本
    else children 为 array
      调用本函数生成真实 dom
  将真实 dom 追加到 container 中
```

### 实现

```js
/**
 * @description:
 * @param {object} vdom 虚拟 dom
 * @param {object} container 挂载节点
 * @return {*}
 */
function mountDom(vdom, container) {
  // real dom
  const el = (vdom.el = document.createElement(vdom.tag));

  // props
  if (vdom.props) {
    for (const key in vdom.props) {
      const value = vdom.props[key];
      // event
      if (key.startsWith("on")) {
        el.addEventListener(key.slice(2).toLowerCase(), value);
      } else {
        // attribute
        el.setAttribute(key, value);
      }
    }
  }

  // children
  if (vdom.children) {
    if (typeof vdom.children === "string") {
      el.textContent = vdom.children;
    } else {
      vdom.children.forEach((child) => {
        mountDom(child, el);
      });
    }
  }

  // add el to the end of the container
  container.appendChild(el);
}
```

- 生成真实 dom

```js
const vdom = h("div", null, "hello");
mountDom(vdom, document.getElementById("app"));
```

- html 结构

```html
<div id="app">
  <div>hello</div>
</div>
```

## 总结

这两个方法就可以将虚拟 DOM 挂载到页面上，下一节实现新旧虚拟 DOM 的对比，来更新视图。
