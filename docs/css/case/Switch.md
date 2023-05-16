---
title: Switch
---

::: normal-demo 效果展示

```html
<input type="checkbox" id="my-switch" /><label for="my-switch"></label>
```

```css
input[type="checkbox"] {
  display: none;
}
label {
  display: inline-block;
  width: 50px;
  height: 20px;
  background-color: #ccc;
  border-radius: 20px;
  position: relative;
}
label::after {
  content: "";
  width: 16px;
  height: 16px;
  position: absolute;
  background-color: #fff;
  border-radius: 50%;
  top: 2px;
  left: 2px;
  transition: 0.5s;
}
input[type="checkbox"]:checked ~ label {
  background-color: #6d9afc;
}
input[type="checkbox"]:checked ~ label::after {
  transform: translateX(30px);
}
```

:::

**实现思路**

1. 隐藏 input 的样式

```css
input[type="checkbox"] {
  display: none;
}
```

2. 设置背景

```css
label {
  display: inline-block;
  width: 50px;
  height: 20px;
  background-color: #ccc;
  border-radius: 20px;
  position: relative;
}
```

3. 设置小球

```css
label::after {
  content: "";
  width: 16px;
  height: 16px;
  position: absolute;
  background-color: #fff;
  border-radius: 50%;
  top: 2px;
  left: 2px;
  transition: 0.5s;
}
```

4. checkbox 选中时改变背景和小球位置

```css
input[type="checkbox"]:checked ~ label {
  background-color: #6d9afc;
}
input[type="checkbox"]:checked ~ label::after {
  transform: translateX(30px);
}
```
