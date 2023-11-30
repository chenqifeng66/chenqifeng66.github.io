import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,a as s}from"./app-0dcc4a8d.js";const a={},d=s(`<h2 id="只修改最后一次-commit" tabindex="-1"><a class="header-anchor" href="#只修改最后一次-commit" aria-hidden="true">#</a> 只修改最后一次 commit</h2><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>git commit --amend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>如果修改的是已 push 的 commit，此时 push 会提示远程分支有更新，不要 <strong>git pull !!!</strong></p><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code><span class="token comment"># 强制推送</span>
git push -f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="修改多个-commit" tabindex="-1"><a class="header-anchor" href="#修改多个-commit" aria-hidden="true">#</a> 修改多个 commit</h2><p>修改最近的两个 commit</p><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>git rebase -i HEAD~2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在交互界面将 pick 修改为 reword</p><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code><span class="token comment"># 最新commit的上一个commit</span>
<span class="token deleted">- pick e3e3da3 feat: 抢购订单已购优惠券显示</span>
<span class="token inserted">+ reword e3e3da3 feat: 抢购订单已购优惠券显示</span>
<span class="token comment"># 最新commit</span>
<span class="token deleted">- pick 1d4b8d6 fix: 抢购订单详情已购优惠券为空读取不到length属性问题</span>
<span class="token inserted">+ reword 1d4b8d6 fix: 抢购订单详情已购优惠券为空读取不到length属性问题</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在交互界面依次修改 commit</p><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code><span class="token comment"># 修改 commit</span>
<span class="token deleted">- feat: 抢购订单已购优惠券显示</span>
<span class="token inserted">+ feat: 已购优惠券显示</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>如果修改的是已 push 的 commit，此时 push 会提示远程分支有更新，不要 <strong>git pull !!!</strong></p><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code><span class="token comment"># 强制推送</span>
git push -f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div>`,11),t=[d];function c(l,r){return i(),n("div",null,t)}const p=e(a,[["render",c],["__file","修改commit.html.vue"]]);export{p as default};
