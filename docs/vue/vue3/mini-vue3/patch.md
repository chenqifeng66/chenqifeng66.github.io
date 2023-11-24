---
title: patch
order: 2
---

## 前言

上一节实现了 `h函数` 和 `mountDom` 函数，最终能将虚拟 DOM 渲染到页面上，这一节将实现 `patch函数`，来对新旧虚拟 DOM 进行更新替换。

## patch

对比 `新旧虚拟 dom` 并更新视图

### 思路

```js
if 标签相同
  比较 props
     添加新 prop
     删除旧 prop
  比较 children
    if 旧 chidlren 为 string
      if 新 children 为 string
        比较新旧 children，不同则更新当前节点文本
      else 新 children 为 array
        清空当前节点下的内容
        循环新 children 挂载到当前节点下
    else 旧 chidlren 为 array
      if 新 children 为 string
        用新 children 作为当前节点文本替换掉旧内容
      else 新 chidlren 为 array
        比较相同部分
        添加新 child
        删除旧 child
else 标签不同
  直接替换掉旧虚拟 dom
```

### 实现

```js
function patch(oldVdom, newVdom) {
  // same tag
  if (oldVdom.tag === newVdom.tag) {
    const el = (newVdom.el = oldVdom.el);
    // patch props
    const oldProps = oldVdom.props || {};
    const newProps = newVdom.props || {};

    // add new prop
    for (const key in newProps) {
      const newValue = newProps[key];
      const oldValue = oldProps[key];

      if (newValue !== oldValue) {
        el.setAttribute(key, newValue);
      }
    }

    // remove old prop
    for (const key in oldProps) {
      if (!(key in newProps)) {
        el.removeAttribute(key);
      }
    }

    // patch children
    const oldChildren = oldVdom.children;
    const newChildren = newVdom.children;

    if (typeof oldChildren === "string") {
      if (typeof newChildren === "string") {
        // oldChildren: string newChildren: string
        if (oldChildren !== newChildren) {
          el.textContent = newChildren;
        }
      } else {
        // oldChildren: string newChildren: array
        el.innerHTML = "";
        newChildren.forEach((child) => {
          mountDom(child, el);
        });
      }
    } else {
      if (typeof newChildren === "string") {
        // oldChildren: array newChildren: string
        // clear old node
        el.textContent = newChildren;
      } else {
        // oldChildren: array newChildren: array
        // patch common
        const commonLength = Math.min(oldChildren.length, newChildren.length);
        for (let i = 0; i < commonLength; i++) {
          patch(oldChildren[i], newChildren[i]);
        }
        // add new child
        if (newChildren.length > oldChildren.length) {
          newChildren.slice(oldChildren.length).forEach((child) => {
            mountDom(child, el);
          });
        }
        // remove old child
        if (newChildren.length < oldChildren.length) {
          oldChildren.slice(newChildren.length).forEach((child) => {
            el.removeChild(child.el);
          });
        }
      }
    }
  } else {
    // replace
    // get parent node
    const container = oldVdom.el.parentNode;
    // clear current node
    container.innerHTML = "";
    // mount
    mountDom(newVdom, container);
  }
}
```

## 总结

结合上一节的 `h函数` 和 `mountDom函数`

```js
const vdom = h("div", null, "hello");
mountDom(vdom, document.getElementById("app"));
```

更新虚拟 DOM，页面更新

```js
const newVdom = h("span", { class: "red" }, "world");
patch(vdom, newVdom);
```

截止目前为止，可以实现手动更新视图，下一节将实现 `watchEffect函数`，来收集和触发依赖
