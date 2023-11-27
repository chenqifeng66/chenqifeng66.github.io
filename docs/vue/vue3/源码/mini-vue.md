---
title: mini-vue
order: 5
---

## 前言

基于前几节的实现，现在已经可以搭建一个 vue 的雏形了。

现在需要实现一个 `mount` 函数来挂载整个 app

## 思路

该函数接收两个参数，一个是 App(组件)，一个是要挂载到的节点

`App对象` 上要有响应式数据，并且要有 `虚拟 dom`，当虚拟dom依赖的响应式数据发生变化时(即被 `watchEffect函数` 监听到)，对比 `新旧虚拟 dom`。

```js
watchEffect(()=>{
  if 未挂载
    渲染虚拟 dom
    挂载真实 dom
  else 已挂载
    重新渲染虚拟 dom
    比较新旧虚拟 dom
    替换掉旧虚拟 dom
})
```

## 实现

App

```js
const App = {
  data:reactive({
    count:0
  }),
  render(){
    return {
      'div',
      {
        onClick:()=>{this.data.count++}
      },
      String(this.data.count) // vue 编译器会对非 array 类型的数据做字符串转换
    }
  }
}
```

mount

```js
function mount(component, container) {
  let isMounted = false;
  let preDom;
  watchEffect(() => {
    if (!isMounted) {
      preDom = component.render();
      mountDom(preDom, container);
      isMounted = true;
    } else {
      const newDom = component.render();
      patch(preDom, newDom);
      preDom = newDom;
    }
  });
}
```

挂载 App

```js
mount(App, document.getElementById("app"));
```

## 总结

至此，就实现了一个简易版的 vue，符合 `MVVM` 模式， Model - view - viewModel，定义数据，定义视图，数据修改时通过 vm 驱动视图更新。
