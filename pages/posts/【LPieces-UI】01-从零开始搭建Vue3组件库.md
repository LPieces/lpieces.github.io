---
title: 【LPieces-UI】01-从零开始搭建Vue3组件库
date: 2026-05-13T17:00:00.000+08:00
lang: zh
duration: 3min
---

## 引言

你好，最近我开始打造一个 Vue3 + TypeScript 的组件库，参考了 ElementPlus 的设计理念。在这篇文章中，我将分享如何从零开始搭建一个现代化的 Vue3 组件库项目。

**本文适合人群：**

- Vue3 开发者
- 想了解组件库开发的同学
- 对 monorepo 工程化感兴趣的前端工程师

**你将学到：**

- 使用 pnpm + monorepo 管理项目
- 配置 TypeScript + Vue3 开发环境
- Vite 构建组件库
- 项目目录结构设计

---

## 一、技术选型

在开始之前，先确定我们的技术栈：

| 技术     | 选择       | 原因                               |
| -------- | ---------- | ---------------------------------- |
| 包管理器 | pnpm       | 快，节省磁盘空间，monorepo 支持好  |
| 构建工具 | Vite       | 快，原生支持 ESM                   |
| 框架     | Vue3       | Composition API，TypeScript 支持好 |
| 语言     | TypeScript | 类型安全，更好的开发体验           |
| 测试框架 | Vitest     | 与 Vite 生态一致，快               |
| 文档     | VitePress  | 轻量，Vue3 原生支持                |
| 组件预览 | Storybook  | 组件开发预览神器                   |

---

## 二、项目初始化

### 2.1 创建项目目录

```bash
mkdir lpieces-ui
cd lpieces-ui
```

### 2.2 初始化项目

```bash
git init // 初始化git

mkdir packages // 创建packages目录

echo -e 'packages:\n "packages/*"' > pnpm-workspace.yaml // 创建pnpm-workspace.yaml

pnpm init // 初始化package.json
```

### 2.3 创建所有的目录

```bash
cd packages

mkdir components core docs hooks theme utils // 创建所有子目录

vim init.shell // 创建一个init.shell脚本来init所有子目录

./init.shell // 执行创建好的init.shell脚本

```

init.shell脚本写入以下代码：

```shell
for i in components core docs hooks theme utils; do
 cd $i
 pnpm init
 cd ..

done
```

确保在packages下，创建 play组件预览目录

```bash
pnpm create vite play --telmplate vue-ts
```

### 2.4 修改子包package.json的name

除了core跟我们的项目名字一样，其他的子包都是以 **@lpieces-ui/** 为开头,如下：

```
core/package.json -> name: 'lpieces-ui'
components/package.json -> name: '@lpieces-ui/components'
hooks/package.json -> name: '@lpieces-ui/hooks'
utils/package.json -> name: '@lpieces-ui/utils'
docs/package.json -> name: '@lpieces-ui/docs'
play/package.json -> name: '@lpieces-ui/play'
theme/package.json -> name: '@lpieces-ui/theme'
```

### 2.5 安装项目依赖

确保在项目根目录下安装

```bash
pnpm add -Dw typescript vite vitest vue-tsc postcss-color-mix postcss-each postcss-each-variables postcss-for postcss-nested @types/node @types/lodash-es @vitejs/plugin-vue @vitejs/plugin-vue-jsx @vue/tconfig @popperjs/core async-validator

pnpm add -w lodash-es vue
```

### 2.6 修改根目录的package.json

把name改为 **@lpieces-ui/workspace**
添加子包依赖

```
"dependencies": {
    "lodash-es": "^4.17.23",
    "vue": "^3.5.30",
    "lpieces-ui": "workspace:*",
    "@lpieces-ui/hooks": "workspace:*",
    "@lpieces-ui/theme": "workspace:*",
    "@lpieces-ui/utils": "workspace:*"
 }
```

### 2.7 安装子包依赖

```bash
pnpm add -D @vue/test-utils @vitest/coverage-v8 jsdom --filter @lpieces-ui/components

pnpm add -D @vitepress --filter @lpieces-ui/docs
```

core可以看作是components的唯一出口，所以只需要把components链接进来就可以了

在core/package.json中添加devDependencies

```json
{
  "devDependencies": {
    "@lpieces-ui/components": "workspace:*"
  }
}
```

之后打开play，删除ts配置文件，因为ts配置后续我们会写一个全局的，修改package.json 对比根目录的配置，删除多余的依赖

## 四、配置 TypeScript

在根目录创建 `tsconfig.json`：

```json
{
  "extends": "@vue/tsconfig/tsconfig.dom.json",
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "preserve",
    "jsxImportSource": "vue",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": [
    "env.d.ts",
    "packages/**/*.ts",
    "packages/**/*.tsx",
    "packages/**/*.vue"
  ]
}
```

创建 postcss.config.cjs

```javascript
module.exports = {
  plugins: [
    require('postcss-nested'),
    require('postcss-each-variables'),
    require('postcss-each')({
      plugins: {
        beforeEach: [require('postcss-for'), require('postcss-color-mix')]
      }
    }),
    // require('cssnano')({ preset: 'default' })
  ]
}
```

之后在根目录跑一次 pnpm install

## 五、withInstall 工具函数

在 `packages/utils/install.ts` 中创建组件安装工具：

```typescript
import type { App, Plugin } from 'vue'
import { each } from 'lodash-es'

type SFCWithInstall<T> = T & Plugin

export function makeInstaller(components: Plugin[]) {
  const installer = (app: App) => each(components, c => app.use(c))

  return installer as Plugin
}

export function withInstall<T>(components: T) {
  (components as SFCWithInstall<T>).install = (app: App) => {
    const name = (components as any).name
    app.component(name, components as Plugin)
  }
  return components as SFCWithInstall<T>
}
```

utils/index.ts 统一导出

```
export * from './install'
```

## 六、第一个组件：Button

让我们创建一个简单的 Button 组件来验证项目配置。

### 6.1 创建 Button 组件

`packages/components/Button/Button.vue`：

```vue
<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | ''
  size?: 'large' | 'default' | 'small' | ''
  disabled?: boolean
  plain?: boolean
}

defineOptions({
  name: 'LpButton'
})

const props = withDefaults(defineProps<Props>(), {
  type: '',
  size: '',
  disabled: false,
  plain: false
})

const classes = computed(() => [
  'lp-button',
  props.type ? `lp-button--${props.type}` : '',
  props.size ? `lp-button--${props.size}` : '',
  { 'is-disabled': props.disabled, 'is-plain': props.plain }
])
</script>

<template>
  <button :class="classes" :disabled="disabled">
    <slot />
  </button>
</template>

<style scoped>
.lp-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  background: #fff;
  color: #606266;
  cursor: pointer;
  transition: all 0.3s;
}

.lp-button:hover {
  border-color: #c6e2ff;
  color: #409eff;
}

.lp-button--primary {
  background: #409eff;
  border-color: #409eff;
  color: #fff;
}

.lp-button--primary:hover {
  background: #79bbff;
  border-color: #79bbff;
}

.is-disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.is-plain {
  background: transparent;
}
</style>
```

### 6.2 组件导出

`packages/components/Button/index.ts`：

```typescript
import { withInstall } from '@lpieces-ui/utils'
import Button from './Button.vue'

export const LpButton = withInstall(Button)
```

## 七、core配置

创建core/components.ts

```typescript
import type { Plugin } from 'vue'
import { LpButton, LpButtonGroup, LpIcon } from '@lpieces-ui/components'

export default [
  LpButton,
  LpIcon,
  LpButtonGroup
] as Plugin[]
```

创建core/index.ts

```typescript
import { makeInstaller } from '@lpieces-ui/utils'
import components from './components'

const installer = makeInstaller(components)

export * from '@lpieces-ui/components'
export default installer
```

## 八、play预览配置

在main.ts引入我们的组件库

```
import { createApp } from 'vue'
import App from './App.vue'
import LPiecesUI from 'lpieces-ui'

createApp(App).use(LPiecesUI).mount('#app')

```

之后再App.vue使用\<lp-button>组件

## 九、docs文档配置

初始化

```bash
npx vitepress init
```

之后修改下scripts

```json
{
  "scripts": {
    "dev": "vitepress dev",
    "build": "vitepress build",
    "preview": "vitepress preview"
  }
}
```

## 十 主题样式

创建theme/reset.css重置样式文件 具体样式请查看仓库

在theme创建index.css入口文件，引入reset.css 具体样式请查看仓库

修改package.json，添加main字段

```json
{
  "main": "index.css"
}
```

## 十一、根目录 package.json

配置根目录的脚本：

```json
{
  "name": "@lpieces-ui/workspace",
  "version": "1.0.0",
  "scripts": {
    "dev": "pnpm --filter @lpieces-ui/play dev",
    "docs:dev": "pnpm --filter @lpieces-ui/docs dev",
    "docs:build": "pnpm --filter @lpieces-ui/docs build"
  }
}
```

到这一步项目就可以启动了

```bash
pnpm dev 启动预览

pnpm docs:dev 启动文档
```

**项目地址：** https://github.com/lpieces/lpieces-ui
