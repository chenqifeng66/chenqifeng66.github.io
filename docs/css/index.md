---
title: CSS
---

# 案例

## 圆角导航栏

**效果展示**

![最终效果](/css/圆角导航栏/最终效果.png)

**HTML 结构**

```html
<ul>
  <li>菜单一</li>
  <li class="active">菜单二</li>
  <li>菜单三</li>
</ul>
```

**实现原理**

1. 外层容器圆角

```css
ul {
  /* 顺时针 从左上角开始 */
  border-radius: 10px 10px 0 0;
}
```

2. 每个导航栏圆角

```css
li {
  /* 顺时针 从左上角开始 */
  border-radius: 10px 10px 0 0;
}
```

3. 选中的导航栏添加阴影

![阴影](/css/圆角导航栏/阴影.png)

```css
.active {
  box-shadow: 12px 12px 0 0 #fff, -12px 12px 0 0 #fff;
}
```

4. 选中的导航栏左右添加伪元素绝对定位盖住阴影

![伪元素](/css/圆角导航栏/伪元素.png)

```css
.active::before {
  content: "";
  position: absolute;
  left: -12px;
  bottom: 0;
  width: 12px;
  height: 42.5px;
  /* ul 背景色 */
  background-color: #e2e8f8;
  border-bottom-right-radius: 10px;
}
.active::after {
  content: "";
  position: absolute;
  right: -12px;
  bottom: 0;
  width: 12px;
  height: 42.5px;
  /* ul 背景色 */
  background-color: #e2e8f8;
  border-bottom-left-radius: 10px;
}
```

5. 超出隐藏

```css
ul {
  overflow: hidden;
}
```
