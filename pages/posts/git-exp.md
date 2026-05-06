---
title: Git命令使用经验总结（一）
date: 2026-03-16T17:00:00.000+08:00
lang: zh
duration: 6min
---
在日常开发中，Git 是我们不可或缺的版本控制工具。为了更好地管理和协作代码，我整理了一些我常用的 Git 命令和使用经验，涵盖提交规范、标签管理、暂存操作、推送策略、分支同步、版本回退等多个方面。

# 一、Commit 提交前缀规范

- `feat(常用)`：新增功能（开发新功能时必用）
- `fix(常用)`：修复 bug
- `wip(常用)`：开发中/未完成，用于临时保存工作进度
- `perf(常用)`：优化相关，比如提升性能、体验 （优化时常用）
- `docs`：仅仅修改了文档，比如 README, CHANGELOG, CONTRIBUTE等等
- `style`：仅仅修改了空格、格式缩进、逗号等等，不改变代码逻辑
- `refactor`：代码重构，没有加新功能或者修复 bug
- `test`：测试用例，包括单元测试、集成测试等
- `chore`：改变构建流程、或者增加依赖库、工具等
- `revert`：回滚到上一个版本

# 二、Stash 暂存操作

当你需要切换分支但不想提交当前修改时，可以使用 `stash`。

```bash
# 快速暂存，不写描述（适合临时、马上就会恢复的情况）
git stash

# 暂存并写描述（适合需要离开当前任务，回头再处理的情况）
git stash push -m "订单模块开发中，优先处理线上bug"

# 查看暂存列表
git stash list

# 恢复并删除最近暂存
git stash pop

# 恢复指定的暂存，并从列表中删除
git stash pop stash@{1}

# 恢复但不删除暂存
git stash apply

# 恢复指定的暂存，但保留在暂存列表中
git stash apply stash@{1}

# 恢复到新分支，如果当前分支和暂存的内容差异较大，容易出现冲突，建议创建新分支恢复
git stash branch <新分支名> stash@{1}
```

# 三、Push 的默认行为
```bash
# ========== 一、基础概念 ==========
# push.default 是 Git 的一个配置选项，决定了执行 git push 时的默认行为
# 查看当前配置
git config --global push.default

# 设置全局配置
git config --global push.default <模式名称>

# 只对当前仓库设置（去掉 --global）
git config push.default <模式名称>


# ========== 二、五种模式详解 ==========

# 【模式1】simple - Git 2.0+ 默认值（推荐）
# 行为：推送当前分支到同名的远程分支
# 要求：本地分支和远程分支名称必须一致
# 优点：最安全，防止意外推送
git config --global push.default simple

# 【模式2】current
# 行为：推送当前分支到远程同名的分支
# 特点：如果远程没有同名分支，会自动创建
# 优点：方便创建新分支
# 缺点：可能创建多余分支
git config --global push.default current

# 【模式3】matching - Git 1.x 默认行为
# 行为：推送所有本地分支到远程同名的分支
# 特点：只要远程存在同名分支，就会推送
# 缺点：容易误推送，不推荐使用
git config --global push.default matching

# 【模式4】upstream
# 行为：推送当前分支到它的上游分支（跟踪分支）
# 特点：必须提前设置好跟踪关系
# 适用：团队协作，多人共同开发同一分支
git config --global push.default upstream

# 【模式5】nothing
# 行为：不推送任何内容，必须显式指定推送的分支
# 优点：最安全
# 缺点：最繁琐，每次都要写完整命令
git config --global push.default nothing

# ========== 三、常用推送命令 ==========

# 基本推送
git push                          # 按配置规则推送
git push origin 分支名             # 推送指定分支
git push -u origin 分支名          # 推送并设置上游跟踪
git push --all                    # 推送所有分支
git push --tags                    # 推送所有标签

# 强制推送（谨慎使用！）
git push --force                   # 强制覆盖远程
git push --force-with-lease        # 更安全的强制推送

# 删除操作
git push origin --delete 分支名    # 删除远程分支
git push origin :分支名            # 同上（旧语法）
git push origin --delete tag 标签名 # 删除远程标签

# 查看信息
git push --dry-run                 # 模拟推送，不实际执行
git push -v                        # 显示详细推送过程
git branch -vv                     # 查看分支跟踪关系

# ========== 四、常见问题解决 ==========

# 问题1：no upstream branch（没有上游分支）
git push -u origin 当前分支名

# 问题2：failed to push some refs（推送被拒绝）
# 原因：远程有本地没有的提交
git pull --rebase origin 当前分支名  # 先拉取并变基
git push                             # 再推送

# 问题3：non-fast-forward 错误
git fetch origin                     # 获取最新代码
git rebase origin/当前分支名          # 变基
git push                             # 推送

# 问题4：想要撤销刚刚的推送
git reset --hard HEAD^                # 本地回退
git push --force                      # 强制推送（慎用）

# ========== 五、总结 ==========

# 保持默认 simple 模式最安全
# 首次推送新分支用 git push -u origin 分支名
# 后续推送直接用 git push
# 避免使用 matching 模式
# 慎用 --force
```
# 四、Cherry-pick 同步提交
```bash
# ========== 基础操作 ==========

# 同步单个提交到当前分支
git cherry-pick <commit-hash>

# 同步多个不连续的提交（按顺序应用）
git cherry-pick <commit-hash1> <commit-hash2> <commit-hash3>

# 同步连续多个提交（包含start-hash，不包含end-hash）
git cherry-pick <start-hash>^..<end-hash>

# 同步连续多个提交（包含两端）
git cherry-pick <start-hash>..<end-hash>

# 同步某个分支的最新N个提交
git cherry-pick <分支名>~N..<分支名>


# ========== 常用参数 ==========

# 只将改动放到工作区，不自动创建commit（-n = --no-commit）
git cherry-pick -n <commit-hash>

# 编辑提交信息（-e = --edit）
git cherry-pick -e <commit-hash>

# 保留原提交者信息，添加来源标注（-x）
git cherry-pick -x <commit-hash>


# ========== 冲突处理 ==========

# 解决冲突后，继续cherry-pick
git add .
git cherry-pick --continue

# 放弃当前cherry-pick操作
git cherry-pick --abort

# 跳过当前冲突的提交（谨慎使用）
git cherry-pick --skip
```

# 五、更新远程分支列表
```bash
# ========== 两个核心命令的区别 ==========

# 【命令1】git fetch --prune origin（推荐，最常用）
# 适用：只有一个远程仓库（90%的场景）
git fetch --prune origin
git fetch -p origin  # 简写形式

# 【命令2】git remote update origin --prune（多远程仓库时使用）
# 适用：有多个远程仓库
git remote update origin --prune
git remote update origin -p  # 简写形式

# 查看所有远程分支
git branch -r

# 仅清理本地已删除的远程分支引用
git remote prune origin
````

# 六、拉取远程分支到本地

```bash
# ========== 拉取远程分支到本地（5种方式） ==========

# 先更新，再拉取并跟踪（推荐）
git fetch origin
git checkout --track origin/<远程分支名>

# 如果不想用远程分支名，可以自定义本地分支名
git fetch origin
git checkout -b <本地分支名> origin/<远程分支名>

# 简写（Git自动识别）
git fetch origin
git checkout <远程分支名>

# 一步到位（组合命令）
git fetch origin && git checkout --track origin/<远程分支名>

# 创建新分支并拉取（不自动切换）
git fetch origin
git branch <本地分支名> origin/<远程分支名>


# ========== 查看跟踪关系 ==========
git branch -vv              # 查看所有分支的跟踪关系
git branch -u origin/<远程分支名>  # 为当前分支设置上游
```
# 七、替换默认源

```bash
# 查看当前地址
git remote -v

# 替换远程地址
git remote set-url origin <新地址>        # 直接替换（推荐）
git remote remove origin                   # 先删除
git remote add origin <新地址>             # 再添加           
```
# 八、配置 Git 代理
```bash
# 设置代理
git config --global http.proxy http://127.0.0.1:7890
git config --global https.proxy http://127.0.0.1:7890


git config http.proxy http://127.0.0.1:7890
git config https.proxy http://127.0.0.1:7890

# 取消代理
git config --global --unset http.proxy
git config --global --unset https.proxy

git config --unset http.proxy
git config --unset https.proxy
```
