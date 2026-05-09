---
title: 从零实现 AI 流式对话：SSE + Node.js 完整指南
date: 2026-05-09T17:00:00.000+08:00
lang: zh
duration: 6min
---

仓库地址：[https://gitee.com/lpieces/sse-demo](https://gitee.com/lpieces/sse-demo)

## 一、引言

在 AI 对话应用中，流式响应已经成为标配。用户不再需要等待完整的回答，而是可以逐字看到 AI 的思考过程。这种交互方式极大提升了用户体验。

本实战项目展示了如何使用 **Server-Sent Events (SSE)** 技术实现 AI 流式对话。我们将从服务端到客户端完整实现一个可运行的流式对话系统。

---

## 二、什么是 SSE

**Server-Sent Events (SSE)** 是一种基于 HTTP 的服务器推送技术，允许服务器主动向客户端发送数据，而不需要客户端发起请求。

### SSE 的核心特点

| 特性          | 说明                         |
| ------------- | ---------------------------- |
| **单向通信**  | 数据仅从服务器流向客户端     |
| **基于 HTTP** | 无需额外协议，兼容性好       |
| **自动重连**  | 连接中断时自动重试           |
| **文本格式**  | 数据以文本形式传输，易于解析 |
| **事件类型**  | 支持自定义事件类型           |

### SSE vs WebSocket

| 特性       | SSE    | WebSocket   |
| ---------- | ------ | ----------- |
| 通信方向   | 单向   | 双向        |
| 协议       | HTTP   | WebSocket   |
| 数据格式   | 纯文本 | 二进制/文本 |
| 实现复杂度 | 低     | 高          |
| 兼容性     | 优秀   | 良好        |
| 自动重连   | 内置   | 需手动实现  |

> **选择建议**：如果你的应用只需要服务器向客户端推送数据（如 AI 对话、实时通知、日志流等），SSE 是更简单的选择。

---

## 三、项目架构设计

### 3.1 整体架构

```
┌─────────────────┐         SSE Stream         ┌─────────────────┐
│   客户端 (Vue)   │ ◄───────────────────────── │  服务端 (Node)   │
│  ┌───────────┐  │                            │  ┌───────────┐  │
│  │   Chat    │  │                            │  │  Stream   │  │
│  │ Component │────────── POST Request ──────►│  │ Endpoint  │  │
│  └───────────┘  │                            │  └───────────┘  │
│  ┌───────────┐  │                            │  ┌───────────┐  │
│  │AiMessage  │  │                            │  │ Mock AI   │  │
│  │ Component │  │                            │  │ Generator │  │
│  └───────────┘  │                            │  └───────────┘  │
└─────────────────┘                            └─────────────────┘
```

### 3.2 项目结构

```
sse-demo/
├── sse-service/          # Node.js 服务端
│   ├── index.js          # 主服务文件
│   └── package.json
└── sse-client/           # Vue 客户端
    ├── src/
    │   ├── components/
    │   │   ├── Chat.vue      # 聊天主组件
    │   │   ├── AiMessage.vue # AI 消息组件
    │   │   ├── Text.vue      # Markdown 文本渲染
    │   │   ├── Card.vue      # 卡片组件
    │   │   └── List.vue      # 列表组件
    │   ├── App.vue
    │   ├── main.js
    │   └── style.css
    └── package.json
```

### 3.3 数据协议设计

服务端支持三种消息类型：

```typescript
// 文本类型 - 用于 Markdown 内容
const TextMessage = {
  type: 'text',
  content: string // 逐字发送的文本内容
}

// 卡片类型 - 用于信息展示
const CardMessage = {
  type: 'card',
  config: {
    title: string,
    content: string
  }
}

// 列表类型 - 用于任务列表
const ListMessage = {
  type: 'list',
  config: Array<{
    title: string
    content: string
  }>
}

// 结束标记
const DoneMessage = {
  type: 'DONE'
}
```

---

## 四、服务端实现

### 4.1 初始化项目

```bash
mkdir sse-service && cd sse-service
pnpm init -y
pnpm add express
```

### 4.2 核心代码实现

```javascript
const express = require('express')

const app = express()
const port = 3000

// 关键：SSE 响应头配置
app.get('/stream', (req, res) => {
  res.set({
    'Content-Type': 'text/event-stream', // 必须设置为 SSE 类型
    'Cache-Control': 'no-cache', // 禁用缓存
    'Connection': 'keep-alive', // 保持连接
    'Access-Control-Allow-Origin': '*' // 允许跨域
  })

  // 立即发送响应头，建立连接
  res.flushHeaders()

  // 逐字发送文章
  const sendArticleCharByChar = (res, article, callback) => {
    let index = 0
    const interval = setInterval(() => {
      if (index < article.length) {
        const char = article[index]
        // SSE 数据格式：data: <内容>\n\n
        res.write(`data:{"type":"text","content":${JSON.stringify(char)}}\n\n`)
        index++
      }
      else {
        clearInterval(interval)
        if (callback)
          callback()
      }
    }, 10) // 控制发送速度
  }

  const article = generateMarkdownArticle()
  sendArticleCharByChar(res, article, () => {
    // 文章发送完成后，继续发送其他类型消息
    let count = 0
    const interval = setInterval(() => {
      const mockData = generateMockData()
      res.write(`data:${JSON.stringify(mockData)}\n\n`)
      count++
      if (count >= 10) {
        clearInterval(interval)
        // 发送结束标记
        res.write('data:{type:\'DONE\'}\n\n')
        res.end()
      }
    }, 1000)
  })

  // 处理客户端断开连接
  req.on('close', () => {
    console.log('Client disconnected')
  })
})

app.listen(port, () => {
  console.log(`SSE server running on http://localhost:${port}`)
})
```

### 4.3 SSE 协议格式详解

SSE 数据必须遵循特定格式：

```
data: {"type":"text","content":"H"}\n\n
data: {"type":"text","content":"e"}\n\n
data: {"type":"text","content":"l"}\n\n
```

- 每条消息以 `data:` 开头
- 消息内容为 JSON 字符串
- 每条消息以 `\n\n` 结尾

---

## 五、客户端实现

### 5.1 初始化项目

```bash
mkdir sse-client && cd sse-client
pnpm create vite@6.5.0 . --template vue
pnpm add element-plus @comark/vue comark github-markdown-css
```

### 5.2 主入口配置

```javascript
import ElementPlus from 'element-plus'
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/dist/index.css'
import './style.css'

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
```

### 5.3 Chat 组件核心实现

```vue
// src/components/Chat.vue
<script setup>
import { nextTick, onUnmounted, ref } from 'vue'
import AiMessage from './AiMessage.vue'

const messages = ref([])
const inputMessage = ref('')
const isStreaming = ref(false)

// 滚动到底部
function scrollToBottom() {
  nextTick(() => {
    const container = document.querySelector('.chat-messages')
    if (container) {
      container.scrollTop = container.scrollHeight
    }
  })
}

async function sendMessage() {
  if (!inputMessage.value.trim() || isStreaming.value)
    return

  // 添加用户消息
  messages.value.push({
    type: 'user',
    content: inputMessage.value.trim()
  })
  inputMessage.value = ''
  scrollToBottom()

  // 准备响应消息
  const responseIndex = messages.value.length
  messages.value.push({
    type: 'response',
    items: []
  })

  isStreaming.value = true

  try {
    const response = await fetch('/api/stream', { method: 'GET' })
    const reader = response.body.getReader()
    const decoder = new TextDecoder()
    let buffer = ''

    while (true) {
      const { done, value } = await reader.read()
      if (done)
        break

      buffer += decoder.decode(value, { stream: true })
      const lines = buffer.split('\n')
      buffer = lines.pop() || ''

      for (const line of lines) {
        if (line.startsWith('data:')) {
          const dataStr = line.slice(5).trim()
          const data = JSON.parse(dataStr)

          if (data.type === 'DONE')
            return

          // 根据类型处理消息
          if (data.type === 'text') {
            // 追加到最后一个文本项
            const items = messages.value[responseIndex].items
            const lastItem = items[items.length - 1]
            if (lastItem && lastItem.type === 'text') {
              lastItem.content += data.content
            }
            else {
              items.push({ type: 'text', content: data.content })
            }
          }
          else {
            items.push({ type: data.type, config: data.config })
          }
          scrollToBottom()
        }
      }
    }
  }
  catch (error) {
    console.error('Error:', error)
  }
  finally {
    isStreaming.value = false
  }
}
</script>
```

### 5.4 Markdown 流式渲染

```vue
<!-- src/components/Text.vue -->
<script setup>
import { Comark } from '@comark/vue'
import 'github-markdown-css'

defineProps({
  data: { type: Object, required: true }
})
</script>

<template>
  <div class="markdown-body">
    <Suspense>
      <Comark :markdown="data.content" streaming />
    </Suspense>
  </div>
</template>
```

### 5.5 响应式组件设计

```vue
<!-- src/components/AiMessage.vue -->
<script setup>
import { computed } from 'vue'
import Card from './Card.vue'
import List from './List.vue'
import Text from './Text.vue'

const props = defineProps({
  message: { type: Object, required: true },
  isStreaming: { type: Boolean, default: false }
})

// 动态组件映射
const components = {
  text: Text,
  card: Card,
  list: List
}
</script>

<template>
  <div class="message-wrapper response">
    <div class="avatar">
      ...
    </div>
    <div class="message-bubble response">
      <div v-for="(item, index) in message.items" :key="index">
        <component :is="components[item.type]" :data="item" />
      </div>
      <!-- 打字指示器 -->
      <div v-if="isStreaming" class="typing-indicator">
        <span class="dot" />
        <span class="dot" />
        <span class="dot" />
      </div>
    </div>
  </div>
</template>
```

## 七、运行项目

### 7.1 启动服务端

```bash
cd sse-service
pnpm install
pnpm run dev
```

### 7.2 启动客户端

```bash
cd sse-client
pnpm install
pnpm run dev
```

### 7.3 访问应用

打开浏览器访问 `http://localhost:5173`，即可看到完整的 AI 流式对话界面。

---

## 八、关键技术点总结

### 8.1 SSE 实现要点

1. **响应头设置**：必须设置 `Content-Type: text/event-stream`
2. **禁用缓存**：`Cache-Control: no-cache`
3. **保持连接**：`Connection: keep-alive`
4. **数据格式**：`data: <JSON>\n\n`
5. **跨域处理**：`Access-Control-Allow-Origin: *`

### 8.2 流式渲染技巧

1. **逐字追加**：使用 `+=` 操作符逐字追加内容
2. **虚拟滚动**：大量消息时考虑虚拟滚动优化
3. **Markdown 增量渲染**：使用支持流式的 Markdown 库
4. **自动滚动**：每次收到新数据后滚动到底部

### 8.3 错误处理

1. **连接中断**：监听 `req.on('close')` 清理资源
2. **解析错误**：使用 try-catch 处理 JSON 解析异常
3. **超时处理**：设置合理的超时时间

---

## 九、扩展方向

1. **接入真实 AI 服务**：将模拟数据替换为 OpenAI API 调用
2. **支持多轮对话**：添加对话历史管理
3. **消息类型扩展**：支持图片、表格等更多类型
4. **性能优化**：实现虚拟滚动、懒加载
5. **消息持久化**：使用 localStorage 或后端存储对话记录

---

## 十、总结

本项目完整实现了基于 SSE 的 AI 流式对话系统，涵盖了从服务端到客户端的全链路。核心技术点包括：

- **SSE 协议**：轻量级的服务器推送方案
- **流式渲染**：逐字显示提升用户体验
- **组件化设计**：Vue 3 响应式组件架构
- **Markdown 渲染**：支持富文本内容展示

这套方案可直接用于构建 AI 聊天应用、实时日志系统、进度展示等场景，具有良好的扩展性和可维护性。
