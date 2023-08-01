---
title: commit 时格式化代码
---

## 安装 husky

husky：创建 git hook 的工具

```
pnpm add husky -D
```

## 启用 git hook

```shell
pnpm husky install
# npx husky install
```

该命令作用：

1.  会创建 `.husky` 目录
2.  设置所在项目本地环境存放 `git hook` 脚本的目录位置 `core.hookspath = .husky`

可通过 `git config --local --list` 查看 git 本地配置

## 添加 npm 生命周期

```json{6}
// package.json
"scripts": {
    "dev": "vite",
    "build": "vite build",
    "serve": "vite preview",
    "prepare": "husky install"
},
```

prepare：在 `npm install` 之后执行

作用：在重新拉取代码执行 `npm install` 时自动启用 `git hook`

## 安装 prettier

prettier：格式化代码工具

```shell
pnpm add prettier -D
```

格式化命令：`pnpm prettier --write` or `npx prettier --write`

## 安装 lint-staged

lint-staged：暂存区文件格式化工具

```shell
pnpm add lint-staged -D
```

## 添加 lint-staged 命令

```json
// package.json
"lint-staged":{
    "*.{js,vue}": "prettier --write"    // 对 js、vue 文件进行格式化
}
```

## 创建 git hook

```shell
pnpm husky add .husky/pre-commit "pnpm lint-staged —-allow—-empty"
# npx husky add .husky/pre-commit "npx lint-staged -—allow—-empty"
```

该命令作用：

1. 在 `.husky` 目录下添加 `pre-commit` 文件
2. 写入内容 `pnpm lint-staged —-allow-—empty`

注：`--allow--empty` 当撤回 commit 时允许空提交，否则撤回 commit 会报错

## 总流程

1. `commit` 后触发 `pre-commit (git hook)` 钩子
2. 执行 `pnpm lint-staged —allow--empty`
3. 通过 package.json 的 `lint-staged` 对所选文件执行格式化
