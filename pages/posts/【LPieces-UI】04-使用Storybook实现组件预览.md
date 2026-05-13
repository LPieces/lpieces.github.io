---
title: 【LPieces-UI】04-使用Storybook实现组件预览
date: 2026-05-13T17:00:00.000+08:00
lang: zh
duration: 3min
---

## 引言

Storybook 是前端组件开发的利器，它可以让你在独立的环境中开发、测试和展示组件。在这篇文章中，我将介绍如何在 LPieces-UI 中集成 Storybook，实现组件的交互式预览。

**你将学到：**

- Storybook 初始化配置
- 编写组件 stories
- 使用 controls 实现交互式预览
- 自定义 Storybook 主题

---

## 一、Storybook 简介

Storybook 是一个用于 UI 组件开发的工具：

- 🎨 独立开发环境
- 🔄 实时预览组件
- 🎮 交互式控制面板
- 📱 响应式预览
- 📚 自动生成文档

---

## 二、初始化配置

### 2.1 安装 Storybook

```bash
cd packages/play
npx storybook@latest init
```

### 2.2 项目结构

```
packages/play/
├── .storybook/
│   ├── main.ts         # Storybook 主配置
│   └── preview.ts      # 预览配置
├── src/
│   ├── stories/
│   │   ├── Button.stories.ts
│   │   └── Icon.stories.ts
│   ├── App.vue
│   └── main.ts
├── index.html
└── package.json
```

### 2.3 配置 main.ts

`packages/play/.storybook/main.ts`：

```typescript
import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
  stories: ['../src/stories/**/*.stories.ts'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  }
}

export default config
```

### 2.4 配置 preview.ts

`packages/play/.storybook/preview.ts`：

```typescript
import type { Preview } from '@storybook/vue3'
import { setup } from '@storybook/vue3'
import lpieces from 'lpieces-ui'

setup((app) => {
  app.use(lpieces)
})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#fff' },
        { name: 'dark', value: '#222' }
      ]
    }
  }
}

export default preview
```

---

## 三、编写 Stories

### 3.1 Button Stories

`packages/play/src/stories/Button.stories.ts`：

```typescript
import type { Meta, StoryObj } from '@storybook/vue3'
import { fn } from '@storybook/test'
import LpButton from '../../components/Button/Button.vue'

const meta: Meta<typeof LpButton> = {
  title: 'Example/Button',
  component: LpButton,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['primary', 'success', 'warning', 'danger', 'info', ''] },
    size: { control: 'select', options: ['large', 'default', 'small', ''] },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    plain: { control: 'boolean' },
    round: { control: 'boolean' },
    circle: { control: 'boolean' },
    useThrottle: { control: 'boolean' },
    throttleDuration: { control: 'number' }
  },
  args: { onClick: fn() }
}

export default meta
type Story = StoryObj<typeof LpButton> & { args: { content: string } }

export const Default: Story = {
  argTypes: {
    content: {
      control: { type: 'text' }
    }
  },
  args: {
    type: 'primary',
    content: 'Button'
  },
  render: (args: { type: string, content: string }) => ({
    components: { LpButton },
    setup() {
      return { args }
    },
    template: `<lp-button v-bind="args">{{ args.content }}</lp-button>`
  })
}

export const Success: Story = {
  args: {
    type: 'success',
    content: 'Success'
  }
}

export const Warning: Story = {
  args: {
    type: 'warning',
    content: 'Warning'
  }
}

export const Danger: Story = {
  args: {
    type: 'danger',
    content: 'Danger'
  }
}

export const Disabled: Story = {
  args: {
    type: 'primary',
    content: 'Disabled',
    disabled: true
  }
}

export const Loading: Story = {
  args: {
    type: 'primary',
    content: 'Loading',
    loading: true
  }
}

export const Plain: Story = {
  args: {
    type: 'primary',
    content: 'Plain',
    plain: true
  }
}

export const Round: Story = {
  args: {
    type: 'primary',
    content: 'Round',
    round: true
  }
}

export const Circle: Story = {
  args: {
    type: 'primary',
    icon: 'plus',
    circle: true
  }
}
```

### 3.2 Icon Stories

`packages/play/src/stories/Icon.stories.ts`：

```typescript
import type { Meta, StoryObj } from '@storybook/vue3'
import LpIcon from '../../components/Icon/Icon.vue'

const meta: Meta<typeof LpIcon> = {
  title: 'Example/Icon',
  component: LpIcon,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'default', 'large'] },
    color: { control: 'color' },
    spin: { control: 'boolean' }
  }
}

export default meta
type Story = StoryObj<typeof LpIcon>

export const Default: Story = {
  args: {
    icon: 'user'
  }
}

export const Small: Story = {
  args: {
    icon: 'search',
    size: 'small'
  }
}

export const Large: Story = {
  args: {
    icon: 'bell',
    size: 'large'
  }
}

export const Colored: Story = {
  args: {
    icon: 'heart',
    color: '#f56c6c'
  }
}

export const Spinning: Story = {
  args: {
    icon: 'spinner',
    spin: true
  }
}
```

---

## 四、启动 Storybook

```bash
# 在项目根目录
npm run story

# 或者在 packages/play 目录
cd packages/play
npm run storybook
```

访问 http://localhost:6006 即可看到 Storybook 界面。

---

## 五、Storybook 功能介绍

### 5.1 Controls 控制面板

- **Props 控制**：动态修改组件属性
- **Actions**：监听组件事件
- **Args**：预设参数组合

### 5.2 Docs 自动文档

启用 `autodocs: 'tag'` 后，Storybook 会自动生成组件文档：

- Props 类型说明
- Slots 文档
- Events 文档

### 5.3 其他 Addons

- **Viewport**：响应式预览
- **Backgrounds**：背景切换
- **Outline**：组件边框高亮

---

## 六、自定义 Storybook 主题

### 6.1 创建自定义主题

在 `.storybook/` 目录下创建 `theme.ts`：

```typescript
import { create } from '@storybook/theming'

export default create({
  base: 'light',
  brandTitle: 'LPieces-UI',
  brandUrl: 'https://github.com/lpieces/lpieces-ui',
  brandImage: 'https://vuejs.org/images/logo.png',
  colorPrimary: '#409EFF',
  colorSecondary: '#67C23A',
  appBg: '#fff',
  appContentBg: '#f5f7fa',
  appBorderColor: '#e4e7ed',
  textColor: '#303133',
  textInverseColor: '#fff',
  barTextColor: '#909399',
  barSelectedColor: '#409EFF',
  barBg: '#fff',
  inputBg: '#fff',
  inputBorder: '#dcdfe6',
  inputTextColor: '#606266',
  inputBorderRadius: 4
})
```

### 6.2 应用主题

在 `preview.ts` 中导入主题：

```typescript
import theme from './theme'

const preview: Preview = {
  parameters: {
    // ...
    docs: {
      theme
    }
  }
}
```

---

## 七、总结

通过这篇文章，我们完成了：

- ✅ Storybook 初始化配置
- ✅ 编写 Button 和 Icon 的 stories
- ✅ 使用 Controls 实现交互式预览
- ✅ 自定义 Storybook 主题

Storybook 让组件开发变得更加高效和愉悦！

---

**项目地址：** https://github.com/lpieces/lpieces-ui
