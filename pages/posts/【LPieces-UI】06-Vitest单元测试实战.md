---
title: 【LPieces-UI】06-Vitest单元测试实战
date: 2026-05-13T17:00:00.000+08:00
lang: zh
duration: 3min
---

## 引言

单元测试是保证代码质量的重要手段。在这篇文章中，我将介绍如何使用 Vitest 为 LPieces-UI 的组件编写单元测试，包括测试环境配置、测试用例编写、测试覆盖率等内容。

**你将学到：**

- Vitest 测试环境配置
- Vue3 组件测试方法
- 使用 Vue Test Utils
- 测试覆盖率统计

---

## 一、Vitest 简介

Vitest 是一个基于 Vite 的测试框架：

- ⚡ 极快的启动和执行速度
- 📦 原生支持 ES Modules
- 🎯 与 Jest 兼容的 API
- 🔍 内置测试覆盖率
- 🔄 热重载支持

---

## 二、测试环境配置

### 2.1 安装依赖

```bash
pnpm add -D vitest @vue/test-utils jsdom @vitest/coverage-v8
```

### 2.2 配置 Vitest

在项目根目录创建 `vitest.config.ts`：

```typescript
import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    globals: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['packages/components/**']
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './packages')
    }
  }
})
```

### 2.3 配置 package.json 脚本

```json
{
  "scripts": {
    "test": "pnpm --filter @lpieces-ui/components test"
  }
}
```

`packages/components/package.json`：

```json
{
  "scripts": {
    "test": "vitest  --coverage"
  }
}
```

---

## 三、Button 组件测试

### 3.1 完整测试用例

`packages/components/Button/Button.test.tsx`：

```typescript
import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import LpButton from './Button.vue'

describe('LpButton', () => {
  describe('basic', () => {
    it('renders correctly', () => {
      const wrapper = mount(LpButton, {
        slots: {
          default: 'Button'
        }
      })
      expect(wrapper.text()).toBe('Button')
    })

    it('applies type classes correctly', () => {
      const wrapper = mount(LpButton, {
        props: { type: 'primary' }
      })
      expect(wrapper.classes()).toContain('lp-button--primary')
    })

    it('applies size classes correctly', () => {
      const wrapper = mount(LpButton, {
        props: { size: 'small' }
      })
      expect(wrapper.classes()).toContain('lp-button--small')
    })
  })

  describe('props', () => {
    it('handles disabled prop', async () => {
      const wrapper = mount(LpButton, {
        props: { disabled: true }
      })
      expect(wrapper.classes()).toContain('is-disabled')
    })

    it('handles loading prop', async () => {
      const wrapper = mount(LpButton, {
        props: { loading: true }
      })
      expect(wrapper.classes()).toContain('is-loading')
    })

    it('handles plain prop', () => {
      const wrapper = mount(LpButton, {
        props: { plain: true }
      })
      expect(wrapper.classes()).toContain('is-plain')
    })

    it('handles round prop', () => {
      const wrapper = mount(LpButton, {
        props: { round: true }
      })
      expect(wrapper.classes()).toContain('is-round')
    })

    it('handles circle prop', () => {
      const wrapper = mount(LpButton, {
        props: { circle: true }
      })
      expect(wrapper.classes()).toContain('is-circle')
    })
  })

  describe('events', () => {
    it('emits click event when clicked', async () => {
      const wrapper = mount(LpButton)
      await wrapper.trigger('click')
      expect(wrapper.emitted()).toHaveProperty('click')
      expect(wrapper.emitted('click')).toHaveLength(1)
    })

    it('does not emit click event when disabled', async () => {
      const wrapper = mount(LpButton, {
        props: { disabled: true }
      })
      await wrapper.trigger('click')
      expect(wrapper.emitted('click')).toBeUndefined()
    })

    it('does not emit click event when loading', async () => {
      const wrapper = mount(LpButton, {
        props: { loading: true }
      })
      await wrapper.trigger('click')
      expect(wrapper.emitted('click')).toBeUndefined()
    })

    it('throttles click events when useThrottle is true', async () => {
      const wrapper = mount(LpButton, {
        props: {
          useThrottle: true,
          throttleDuration: 100
        }
      })

      await wrapper.trigger('click')
      await wrapper.trigger('click')
      await wrapper.trigger('click')

      // 节流后应该只触发一次
      expect(wrapper.emitted('click')).toHaveLength(1)
    })
  })

  describe('slots', () => {
    it('renders default slot content', () => {
      const wrapper = mount(LpButton, {
        slots: {
          default: 'Custom Button'
        }
      })
      expect(wrapper.text()).toBe('Custom Button')
    })

    it('renders loading slot content', () => {
      const wrapper = mount(LpButton, {
        props: { loading: true },
        slots: {
          loading: 'Loading...'
        }
      })
      expect(wrapper.text()).toBe('Loading...')
    })
  })
})
```

---

## 四、Icon 组件测试

`packages/components/Icon/Icon.test.tsx`：

```typescript
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import LpIcon from './Icon.vue'

describe('LpIcon', () => {
  it('renders correctly', () => {
    const wrapper = mount(LpIcon)
    expect(wrapper.classes()).toContain('lp-icon')
  })

  it('applies size style correctly', () => {
    const wrapper = mount(LpIcon, {
      props: { size: 'large' }
    })
    expect(wrapper.attributes('style')).toContain('font-size: 20px')
  })

  it('applies color style correctly', () => {
    const wrapper = mount(LpIcon, {
      props: { color: '#f56c6c' }
    })
    expect(wrapper.attributes('style')).toContain('color: #f56c6c')
  })

  it('applies spin class when spin is true', () => {
    const wrapper = mount(LpIcon, {
      props: { spin: true }
    })
    expect(wrapper.classes()).toContain('is-spin')
  })

  it('renders slot content', () => {
    const wrapper = mount(LpIcon, {
      slots: {
        default: 'Icon Content'
      }
    })
    expect(wrapper.text()).toBe('Icon Content')
  })
})
```

---

## 五、运行测试

### 5.1 运行所有测试

```bash
npm run test
```

## 六、测试最佳实践

### 6.1 测试原则

1. **F.I.R.S.T 原则**
   - **F**ast：测试运行快
   - **I**ndependent：测试独立
   - **R**epeatable：可重复执行
   - **S**elf-validating：自我验证
   - **T**imely：及时编写

2. **AAA 模式**
   - **A**rrange：准备测试数据
   - **A**ct：执行操作
   - **A**ssert：断言结果

### 6.2 测试覆盖率目标

- **行覆盖率**：80%+
- **函数覆盖率**：80%+
- **分支覆盖率**：70%+

---

## 七、总结

通过这篇文章，我们完成了：

- ✅ Vitest 测试环境配置
- ✅ Button 组件测试用例
- ✅ Icon 组件测试用例
- ✅ 测试覆盖率统计
- ✅ 测试最佳实践

单元测试让我们的代码更加健壮和可维护！

---

**项目地址：** https://github.com/lpieces/lpieces-ui
