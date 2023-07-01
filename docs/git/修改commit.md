---
title: 修改 commit
---

## 只修改最后一次 commit

```git
git commit --amend
```

::: warning
如果修改的是已 push 的 commit，此时 push 会提示远程分支有更新，不要 **git pull !!!**

```git
# 强制推送
git push -f
```

:::

## 修改多个 commit

修改最近的两个 commit

```git
git rebase -i HEAD~2
```

在交互界面将 pick 修改为 reword

```git
# 最新commit的上一个commit
- pick e3e3da3 feat: 抢购订单已购优惠券显示
+ reword e3e3da3 feat: 抢购订单已购优惠券显示
# 最新commit
- pick 1d4b8d6 fix: 抢购订单详情已购优惠券为空读取不到length属性问题
+ reword 1d4b8d6 fix: 抢购订单详情已购优惠券为空读取不到length属性问题
```

在交互界面依次修改 commit

```git
# 修改 commit
- feat: 抢购订单已购优惠券显示
+ feat: 已购优惠券显示
```

::: warning
如果修改的是已 push 的 commit，此时 push 会提示远程分支有更新，不要 **git pull !!!**

```git
# 强制推送
git push -f
```

:::
