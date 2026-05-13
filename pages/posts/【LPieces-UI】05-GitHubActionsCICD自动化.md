---
title: 【LPieces-UI】05-GitHub Actions CI/CD 自动化
date: 2026-05-13T17:00:00.000+08:00
lang: zh
duration: 3min
---

## 引言

CI/CD（持续集成/持续部署）是现代软件工程中不可或缺的一部分。在这篇文章中，我将介绍如何使用 GitHub Actions 为 LPieces-UI 实现完整的自动化测试、构建和部署流程。

**你将学到：**

- GitHub Actions 工作流配置
- 自动化测试流程
- 自动化构建文档
- 自动部署到 GitHub Pages
- 依赖缓存优化
- PR 自动化检查

---

## 一、GitHub Actions 简介

GitHub Actions 是 GitHub 提供的 CI/CD 服务：

- 🚀 与 GitHub 深度集成，无需额外服务器
- 📦 丰富的官方和社区 Action
- 🔄 工作流自动化，代码推送到仓库即可触发
- 🆓 开源项目免费使用（每月 2000 分钟）

---

## 二、完整工作流配置

### 2.1 工作流文件

`.github/workflows/test-and-deploy.yaml`：

```yaml
name: Test and deploy

on:
  push:
    branches:
      - main
  pull_request:
    branches: [main]

jobs:
  test:
    name: Run Lint and Test
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repo
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Setup pnpm
        uses: pnpm/action-setup@v3
        with:
          version: 10

      - name: Get pnpm store directory
        id: pnpm-cache
        shell: bash
        run: |
          echo "STORE_PATH=$(pnpm store path)" >> $GITHUB_OUTPUT

      - name: Setup pnpm cache
        uses: actions/cache@v4
        with:
          path: ${{ steps.pnpm-cache.outputs.STORE_PATH }}
          key: ${{ runner.os }}-pnpm-store-${{ hashFiles('**/pnpm-lock.yaml') }}
          restore-keys: |
            ${{ runner.os }}-pnpm-store-

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Run tests
        run: npm run test

  build:
    name: Build docs
    runs-on: ubuntu-latest
    needs: test

    steps:
      - name: Checkout repo
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Setup pnpm
        uses: pnpm/action-setup@v3
        with:
          version: 10

      - name: Get pnpm store directory
        id: pnpm-cache
        shell: bash
        run: |
          echo "STORE_PATH=$(pnpm store path)" >> $GITHUB_OUTPUT

      - name: Setup pnpm cache
        uses: actions/cache@v4
        with:
          path: ${{ steps.pnpm-cache.outputs.STORE_PATH }}
          key: ${{ runner.os }}-pnpm-store-${{ hashFiles('**/pnpm-lock.yaml') }}
          restore-keys: |
            ${{ runner.os }}-pnpm-store-

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Build docs
        run: npm run docs:build

      - name: Copy CNAME to dist
        run: cp ./packages/docs/CNAME ./packages/docs/.vitepress/dist/CNAME

      - name: Upload docs
        uses: actions/upload-artifact@v4
        with:
          name: docs
          path: ./packages/docs/.vitepress/dist

  deploy:
    name: Deploy to GitHub Pages
    runs-on: ubuntu-latest
    needs: build
    if: github.ref == 'refs/heads/main'
    steps:
      - name: Download docs
        uses: actions/download-artifact@v4
        with:
          name: docs

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.LPIECES_UI_SECRET }}
          publish_dir: .
```

---

## 三、工作流详解

### 3.1 触发条件

```yaml
on:
  push:
    branches:
      - main
  pull_request:
    branches: [main]
```

- **push 到 main 分支**：触发完整流程（测试 → 构建 → 部署）
- **PR 到 main 分支**：仅触发测试和构建，不部署

### 3.2 Jobs 说明

#### Job 1: test（测试）

| 步骤                     | 说明                      |
| ------------------------ | ------------------------- |
| Checkout repo            | 拉取代码到 Runner         |
| Setup Node               | 配置 Node.js 20 环境      |
| Setup pnpm               | 使用官方 action 安装 pnpm |
| Get pnpm store directory | 获取 pnpm 缓存目录路径    |
| Setup pnpm cache         | 配置依赖缓存              |
| Install dependencies     | 安装项目依赖              |
| Run tests                | 运行单元测试              |

#### Job 2: build（构建）

- **依赖关系**：`needs: test` - 测试通过后才执行
- **主要任务**：构建 VitePress 文档
- **产物处理**：复制 CNAME 文件，上传构建产物

#### Job 3: deploy（部署）

- **依赖关系**：`needs: build` - 构建成功后才执行
- **部署条件**：`if: github.ref == 'refs/heads/main'` - 仅 main 分支部署
- **部署工具**：使用 `peaceiris/actions-gh-pages` 部署到 GitHub Pages

---

## 四、关键优化配置

### 4.1 依赖缓存（大幅提升速度）

```yaml
- name: Get pnpm store directory
  id: pnpm-cache
  shell: bash
  run: |
    echo "STORE_PATH=$(pnpm store path)" >> $GITHUB_OUTPUT

- name: Setup pnpm cache
  uses: actions/cache@v4
  with:
    path: ${{ steps.pnpm-cache.outputs.STORE_PATH }}
    key: ${{ runner.os }}-pnpm-store-${{ hashFiles('**/pnpm-lock.yaml') }}
    restore-keys: |
      ${{ runner.os }}-pnpm-store-
```

**效果**：依赖安装时间从 ~1 分钟缩短到 ~10 秒

### 4.2 使用官方 pnpm Action

```yaml
- name: Setup pnpm
  uses: pnpm/action-setup@v3
  with:
    version: 10
```

**优势**：比 `npm install -g pnpm` 更稳定、更快

### 4.3 部署条件控制

```yaml
if: github.ref == 'refs/heads/main'
```

**作用**：确保只有 main 分支才能触发部署，PR 不会误部署

---

## 五、GitHub Token 配置

### 5.1 创建 Personal Access Token

1. 访问 GitHub Settings → Developer settings → Personal access tokens
2. 点击 Generate new token (classic)
3. 选择以下权限：
   - `repo`（完全控制私有仓库）
   - `workflow`（更新 GitHub Actions 工作流）
4. 生成并复制 token

### 5.2 配置仓库 Secrets

1. 进入仓库 Settings → Secrets and variables → Actions
2. 点击 New repository secret
3. Name：`LPIECES_UI_SECRET`
4. Value：粘贴刚才的 token
5. 点击 Add secret

---

## 六、分支保护配置

### 6.1 配置步骤

1. 进入仓库 Settings → Branches
2. 点击 Add rule
3. 设置规则：
   - Branch name pattern：`main`
   - Require status checks to pass before merging：勾选
   - Search for status checks：选择 `test` 和 `build`
   - Require pull request reviews before merging：建议勾选
   - Dismiss stale pull request approvals：建议勾选

### 6.2 状态徽章

在 README.md 中添加 CI 状态徽章：

```markdown
![CI](https://github.com/lpieces/lpieces-ui/actions/workflows/test-and-deploy.yaml/badge.svg)
```

---

## 七、查看工作流执行

1. 进入仓库 **Actions** 标签
2. 选择对应的工作流（Test and deploy）
3. 查看执行日志和结果
4. 点击失败的步骤可以查看详细错误信息

---

## 八、总结

通过这篇文章，我们完成了：

- ✅ GitHub Actions 工作流配置
- ✅ 自动化测试（push 和 PR 都触发）
- ✅ 自动化构建文档
- ✅ 自动部署到 GitHub Pages
- ✅ 依赖缓存优化（提升 80%+ 速度）
- ✅ PR 检查和分支保护

CI/CD 让我们的开发流程更加高效和可靠！

---

**项目地址**：https://github.com/lpieces/lpieces-ui
