---
title: Icon
---

## 实现

### 1. 生成所需图标的 `symbol` 代码文件

使用阿里巴巴矢量图标库 `iconfont`

### 2. 导入生成的文件 `iconfont.js` 到组件下的 `font` 目录中

```目录结构
src
 ┣ components
    ┣ icon
      ┣ font
      ┃ ┗ iconfont.js
      ┣ style
      ┃ ┗ index.less
      ┗ Icon.vue
```

### 3. 引入 `./font/iconfont.js` 文件

```js
// Icon.vue
import "./font/iconfont.js";
```

### 4. 添加 `svg` html 结构

```vue
<template>
  <svg class="icon" aria-hidden="true" :style="`height:${size};width:${size};`">
    <use :xlink:href="iconName"></use>
  </svg>
</template>
```

### 5. 添加 Icon 的默认样式

```less
/* index.less */
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
```

### 6. 定义组件所需属性

```js
// Icon.vue
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: String,
  },
});
```

### 7. 通过计算属性将传入的 `name` 属性转为实际图标名称

```js
// Icon.vue
import { computed } from "vue";
const iconName = computed(() => "#icon-" + props.name);
```

## 效果

🌰

```vue
<Icon name="lizi" size="1rem" />
```
