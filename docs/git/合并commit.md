---
title: 合并 commit
---

## 合并未 push 的 commit

1. 查看 commit 记录

```git
git log
```

```git{1,7,13}
commit 1d4b8d613b8eb34ce1483521c71fb18736851c63 (HEAD -> main, origin/main, origin/HEAD)
Author: chenqifeng66 <839860616@qq.com>
Date:   Sat Jul 1 11:04:51 2023 +0800

    fix: 抢购订单详情已购优惠券为空读取不到length属性问题

commit e3e3da3b3670b91243d733d615c4778dc9e16451
Author: chenqifeng66 <839860616@qq.com>
Date:   Sat Jul 1 10:54:39 2023 +0800

    feat: 抢购订单已购优惠券显示

commit b284b9067e4b0bfd65800b169fc46692f38b8258
Merge: a32cf12 8b12c1b
Author: leebo <me@bobo.im>
Date:   Fri Jun 30 16:46:48 2023 +0800

    Merge branch 'main' of github.com:lindo0/shequ_front

```

2. 合并最近两个 commit

```git
# 从HEAD版本开始往过数2个版本
git rebase -i HEAD~2

# 合并指定版本号（不包含此版本）
git rebase -i [commitid]
```

说明:

- `-i`: 弹出交互式的界面进行编辑合并
- `[commitid]`: 要合并多个版本之前的版本号，注意: `[commitid]` 本身不参与合并

3. 指定合并 commit

将要被合并的 commit 的 pick 改为 f

```git
# 最新commit的上一个commit
pick e3e3da3 feat: 抢购订单已购优惠券显示
# 最新commit
- pick 1d4b8d6 fix: 抢购订单详情已购优惠券为空读取不到length属性问题
+ f 1d4b8d6 fix: 抢购订单详情已购优惠券为空读取不到length属性问题

# 变基 b284b90..1d4b8d6 到 b284b90（2 个提交）
#
# 命令:
# p, pick <提交> = 使用提交
# r, reword <提交> = 使用提交，但编辑提交说明
# e, edit <提交> = 使用提交，但停止以便在 shell 中修补提交
# s, squash <提交> = 使用提交，但挤压到前一个提交
# f, fixup [-C | -c] <提交> = 类似于 "squash"，但只保留前一个提交
#                    的提交说明，除非使用了 -C 参数，此情况下则只
#                    保留本提交说明。使用 -c 和 -C 类似，但会打开
#                    编辑器修改提交说明
# x, exec <命令> = 使用 shell 运行命令（此行剩余部分）
# b, break = 在此处停止（使用 'git rebase --continue' 继续变基）
# d, drop <提交> = 删除提交
# l, label <label> = 为当前 HEAD 打上标记
# t, reset <label> = 重置 HEAD 到该标记
# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
# .       创建一个合并提交，并使用原始的合并提交说明（如果没有指定
# .       原始提交，使用注释部分的 oneline 作为提交说明）。使用
# .       -c <提交> 可以编辑提交说明。
#
# 可以对这些行重新排序，将从上至下执行。
```

4. 跳过冲突(如果有)

```git
git rebase --skip
```

## 合并已 push 的 commit

1. 查看 commit 记录

```git
git log
```

2. 合并最近两个 commit

```git
git rebase -i HEAD~2
```

3. 指定合并 commit

```git
# 最新commit的上一个commit
pick e3e3da3 feat: 抢购订单已购优惠券显示
# 最新commit
- pick 1d4b8d6 fix: 抢购订单详情已购优惠券为空读取不到length属性问题
+ f 1d4b8d6 fix: 抢购订单详情已购优惠券为空读取不到length属性问题
```

4. 跳过冲突(如果有)

```git
git rebase --skip
```

5. 强制推送

::: warning
此时 push 会提示远程分支有更新 不要 git pull !!!
:::

```git
# 强制推送
git push -f
```

## 取消合并

```git
git rebase --abort
```
