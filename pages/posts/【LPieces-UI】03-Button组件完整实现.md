---
title: 【LPieces-UI】03-Button组件完整实现
date: 2026-05-13T17:00:00.000+08:00
lang: zh
duration: 3min
---

## 引言

Button 组件是组件库中最常用的交互组件。在这篇文章中，我将详细介绍 LPieces-UI 的 Button 组件实现，包括类型定义、样式系统、交互逻辑、节流防抖等核心功能。

**你将学到：**

- Button 组件的完整 API 设计
- Vue3 插槽的灵活运用
- 节流防抖的实现
- TypeScript 类型声明

---

## 一、需求分析

### 1.1 核心功能

| 功能     | 说明                                               |
| -------- | -------------------------------------------------- |
| 按钮类型 | primary / success / warning / danger / info / text |
| 尺寸     | large / default / small                            |
| 禁用状态 | disabled                                           |
| 加载状态 | loading                                            |
| 朴素按钮 | plain                                              |
| 圆角按钮 | round                                              |
| 圆形按钮 | circle                                             |
| 图标按钮 | icon + loadingIcon                                 |
| 节流防抖 | useThrottle + throttleDuration                     |

### 1.2 API 设计

```vue
<lp-button type="primary">
主要按钮
</lp-button>

<lp-button type="success" size="large">
成功按钮
</lp-button>

<lp-button type="warning" disabled>
禁用按钮
</lp-button>

<lp-button type="danger" loading>
加载中
</lp-button>

<lp-button type="info" plain>
朴素按钮
</lp-button>

<lp-button round>
圆角按钮
</lp-button>

<lp-button circle icon="plus" />

<lp-button use-throttle :throttle-duration="1000" @click="handleClick">
节流按钮
</lp-button>
```

---

## 二、类型定义

`packages/components/Button/types.ts`：

```typescript
import type { ButtonHTMLAttributes } from 'vue'

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | ''
export type ButtonSize = 'large' | 'default' | 'small' | ''
export type ButtonNativeType = ButtonHTMLAttributes['type']

export interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize
  tag?: string
  nativeType?: ButtonNativeType
  disabled?: boolean
  loading?: boolean
  plain?: boolean
  round?: boolean
  circle?: boolean
  icon?: string
  loadingIcon?: string
  autofocus?: boolean
  useThrottle?: boolean
  throttleDuration?: number
}

export interface ButtonInstance {
  ref: HTMLButtonElement | undefined
}
```

---

## 三、组件实现

### 3.1 完整源码

`packages/components/Button/Button.vue`：

```vue
<script setup lang="ts">
import type { ButtonInstance, ButtonProps } from './types'
import { throttle } from 'lodash-es'
import { computed, ref } from 'vue'
import LpIcon from '../Icon/Icon.vue'

defineOptions({
  name: 'LpButton'
})

const props = withDefaults(defineProps<ButtonProps>(), {
  tag: 'button',
  nativeType: 'button',
  type: '',
  size: '',
  throttleDuration: 500,
  disabled: false,
  loading: false,
  plain: false,
  round: false,
  circle: false,
  useThrottle: false
})

const emits = defineEmits<{
  click: [event: MouseEvent]
}>()

const slots = defineSlots()
const _ref = ref<HTMLButtonElement>()

const hasDefaultSlot = computed(() => {
  if (!slots.default)
    return false
  const vnodes = slots.default()
  for (const vnode of vnodes) {
    if (typeof vnode.type === 'symbol' && vnode.type.toString().includes('Comment')) {
      continue
    }
    if (typeof vnode.children === 'string' && vnode.children.trim() === '') {
      continue
    }
    return true
  }
  return false
})

const iconStyle = computed(() => ({
  marginRight: hasDefaultSlot.value ? '4px' : '0'
}))

function handleButtonClick(event: MouseEvent) {
  if (props.disabled || props.loading)
    return
  emits('click', event)
}

const handleButtonClickThrottle = throttle(handleButtonClick, props.throttleDuration)

defineExpose<ButtonInstance>({
  ref: _ref
})
</script>

<template>
  <component
    :is="tag"
    ref="_ref"
    :autofocus="autofocus"
    :type="tag === 'button' ? nativeType : void 0"
    :disabled="disabled || loading ? true : void 0"
    class="lp-button" :class="[
      type ? `lp-button--${type}` : '',
      size ? `lp-button--${size}` : '',
      { 'is-plain': plain, 'is-round': round, 'is-circle': circle, 'is-disabled': disabled, 'is-loading': loading },
    ]"
    @click="(e: MouseEvent) => useThrottle ? handleButtonClickThrottle(e) : handleButtonClick(e)"
  >
    <template v-if="loading">
      <slot name="loading">
        <LpIcon class="lp-button__loading-icon" :icon="loadingIcon ?? 'spinner'" :style="iconStyle" size="1x" spin />
      </slot>
    </template>
    <LpIcon v-if="icon && !loading" :style="iconStyle" size="1x" :icon="icon" />
    <slot />
  </component>
</template>

<style scoped>
@import './style.css';
</style>
```

### 3.2 样式系统

`packages/components/Button/style.css`：

```css
.lp-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  cursor: pointer;
  background-color: var(--lp-button-bg-color, #fff);
  border: 1px solid var(--lp-button-border-color, #dcdfe6);
  color: var(--lp-button-text-color, #606266);
  border-radius: var(--lp-button-border-radius, 4px);
  font-size: var(--lp-button-font-size, 14px);
  padding: var(--lp-button-padding, 8px 16px);
  transition: all 0.3s;
}

.lp-button:hover {
  background-color: var(--lp-button-hover-bg-color, #ecf5ff);
  border-color: var(--lp-button-hover-border-color, #c6e2ff);
  color: var(--lp-button-hover-text-color, #409eff);
}

.lp-button:active {
  background-color: var(--lp-button-active-bg-color, #3a8ee6);
  border-color: var(--lp-button-active-border-color, #3a8ee6);
  color: var(--lp-button-active-text-color, #fff);
}

.lp-button--primary {
  --lp-button-bg-color: #409eff;
  --lp-button-border-color: #409eff;
  --lp-button-text-color: #fff;
  --lp-button-hover-bg-color: #79bbff;
  --lp-button-hover-border-color: #79bbff;
  --lp-button-hover-text-color: #fff;
}

.lp-button--success {
  --lp-button-bg-color: #67c23a;
  --lp-button-border-color: #67c23a;
  --lp-button-text-color: #fff;
}

.lp-button--warning {
  --lp-button-bg-color: #e6a23c;
  --lp-button-border-color: #e6a23c;
  --lp-button-text-color: #fff;
}

.lp-button--danger {
  --lp-button-bg-color: #f56c6c;
  --lp-button-border-color: #f56c6c;
  --lp-button-text-color: #fff;
}

.lp-button--info {
  --lp-button-bg-color: #909399;
  --lp-button-border-color: #909399;
  --lp-button-text-color: #fff;
}

.lp-button--large {
  --lp-button-padding: 10px 20px;
  --lp-button-font-size: 16px;
}

.lp-button--small {
  --lp-button-padding: 6px 12px;
  --lp-button-font-size: 12px;
}

.is-plain {
  --lp-button-bg-color: #fff;
  --lp-button-text-color: var(--lp-button-border-color);
}

.is-round {
  --lp-button-border-radius: 20px;
}

.is-circle {
  --lp-button-border-radius: 50%;
  --lp-button-padding: 8px;
}

.is-disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.is-loading {
  cursor: not-allowed;
}

.lp-button__loading-icon {
  margin-right: 4px;
}
```

---

## 四、组件导出

`packages/components/Button/index.ts`：

```typescript
import { withInstall } from '@lpieces-ui/utils'
import Button from './Button.vue'
import ButtonGroup from './ButtonGroup.vue'

export const LpButton = withInstall(Button)
export const LpButtonGroup = withInstall(ButtonGroup)
```

---

## 五、使用示例

```vue
<script setup lang="ts">
function handleClick() {
  console.log('Button clicked!')
}
</script>

<template>
  <div>
    <h3>基础用法</h3>
    <lp-button>默认按钮</lp-button>
    <lp-button type="primary">
      主要按钮
    </lp-button>
    <lp-button type="success">
      成功按钮
    </lp-button>
    <lp-button type="warning">
      警告按钮
    </lp-button>
    <lp-button type="danger">
      危险按钮
    </lp-button>
    <lp-button type="info">
      信息按钮
    </lp-button>

    <h3>尺寸</h3>
    <lp-button type="primary" size="large">
      大号按钮
    </lp-button>
    <lp-button type="primary">
      默认按钮
    </lp-button>
    <lp-button type="primary" size="small">
      小号按钮
    </lp-button>

    <h3>朴素按钮</h3>
    <lp-button type="primary" plain>
      朴素按钮
    </lp-button>
    <lp-button type="success" plain>
      朴素按钮
    </lp-button>

    <h3>圆角与圆形</h3>
    <lp-button type="primary" round>
      圆角按钮
    </lp-button>
    <lp-button type="primary" circle icon="plus" />

    <h3>禁用与加载</h3>
    <lp-button type="primary" disabled>
      禁用按钮
    </lp-button>
    <lp-button type="primary" loading>
      加载中
    </lp-button>

    <h3>节流按钮</h3>
    <lp-button type="primary" use-throttle :throttle-duration="1000" @click="handleClick">
      节流按钮
    </lp-button>
  </div>
</template>
```

---

## 六、总结

Button 组件的完整实现展示了组件库开发的多个核心要点：

- ✅ 丰富的 Props API
- ✅ 灵活的插槽设计
- ✅ 完整的样式系统
- ✅ 交互逻辑与节流防抖
- ✅ TypeScript 类型安全

---

**项目地址：** https://github.com/lpieces/lpieces-ui
