import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,a as s}from"./app-0dcc4a8d.js";const a={},l=s(`<h2 id="合并未-push-的-commit" tabindex="-1"><a class="header-anchor" href="#合并未-push-的-commit" aria-hidden="true">#</a> 合并未 push 的 commit</h2><ol><li>查看 commit 记录</li></ol><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>git log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>commit 1d4b8d613b8eb34ce1483521c71fb18736851c63 (HEAD -&gt; main, origin/main, origin/HEAD)
Author: chenqifeng66 &lt;839860616@qq.com&gt;
Date:   Sat Jul 1 11:04:51 2023 +0800

    fix: 抢购订单详情已购优惠券为空读取不到length属性问题

<span class="token commit-sha1">commit e3e3da3b3670b91243d733d615c4778dc9e16451</span>
Author: chenqifeng66 &lt;839860616@qq.com&gt;
Date:   Sat Jul 1 10:54:39 2023 +0800

    feat: 抢购订单已购优惠券显示

<span class="token commit-sha1">commit b284b9067e4b0bfd65800b169fc46692f38b8258</span>
Merge: a32cf12 8b12c1b
Author: leebo &lt;me@bobo.im&gt;
Date:   Fri Jun 30 16:46:48 2023 +0800

    Merge branch <span class="token string">&#39;main&#39;</span> of github.com:lindo0/shequ_front

</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>合并最近两个 commit</li></ol><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code><span class="token comment"># 从HEAD版本开始往过数2个版本</span>
git rebase -i HEAD~2

<span class="token comment"># 合并指定版本号（不包含此版本）</span>
git rebase -i [commitid]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明:</p><ul><li><code>-i</code>: 弹出交互式的界面进行编辑合并</li><li><code>[commitid]</code>: 要合并多个版本之前的版本号，注意: <code>[commitid]</code> 本身不参与合并</li></ul><ol start="3"><li>指定合并 commit</li></ol><p>将要被合并的 commit 的 pick 改为 f</p><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code><span class="token comment"># 最新commit的上一个commit</span>
pick e3e3da3 feat: 抢购订单已购优惠券显示
<span class="token comment"># 最新commit</span>
<span class="token deleted">- pick 1d4b8d6 fix: 抢购订单详情已购优惠券为空读取不到length属性问题</span>
<span class="token inserted">+ f 1d4b8d6 fix: 抢购订单详情已购优惠券为空读取不到length属性问题</span>

<span class="token comment"># 变基 b284b90..1d4b8d6 到 b284b90（2 个提交）</span>
<span class="token comment">#</span>
<span class="token comment"># 命令:</span>
<span class="token comment"># p, pick &lt;提交&gt; = 使用提交</span>
<span class="token comment"># r, reword &lt;提交&gt; = 使用提交，但编辑提交说明</span>
<span class="token comment"># e, edit &lt;提交&gt; = 使用提交，但停止以便在 shell 中修补提交</span>
<span class="token comment"># s, squash &lt;提交&gt; = 使用提交，但挤压到前一个提交</span>
<span class="token comment"># f, fixup [-C | -c] &lt;提交&gt; = 类似于 &quot;squash&quot;，但只保留前一个提交</span>
<span class="token comment">#                    的提交说明，除非使用了 -C 参数，此情况下则只</span>
<span class="token comment">#                    保留本提交说明。使用 -c 和 -C 类似，但会打开</span>
<span class="token comment">#                    编辑器修改提交说明</span>
<span class="token comment"># x, exec &lt;命令&gt; = 使用 shell 运行命令（此行剩余部分）</span>
<span class="token comment"># b, break = 在此处停止（使用 &#39;git rebase --continue&#39; 继续变基）</span>
<span class="token comment"># d, drop &lt;提交&gt; = 删除提交</span>
<span class="token comment"># l, label &lt;label&gt; = 为当前 HEAD 打上标记</span>
<span class="token comment"># t, reset &lt;label&gt; = 重置 HEAD 到该标记</span>
<span class="token comment"># m, merge [-C &lt;commit&gt; | -c &lt;commit&gt;] &lt;label&gt; [# &lt;oneline&gt;]</span>
<span class="token comment"># .       创建一个合并提交，并使用原始的合并提交说明（如果没有指定</span>
<span class="token comment"># .       原始提交，使用注释部分的 oneline 作为提交说明）。使用</span>
<span class="token comment"># .       -c &lt;提交&gt; 可以编辑提交说明。</span>
<span class="token comment">#</span>
<span class="token comment"># 可以对这些行重新排序，将从上至下执行。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>跳过冲突(如果有)</li></ol><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>git rebase --skip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="合并已-push-的-commit" tabindex="-1"><a class="header-anchor" href="#合并已-push-的-commit" aria-hidden="true">#</a> 合并已 push 的 commit</h2><ol><li>查看 commit 记录</li></ol><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>git log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>合并最近两个 commit</li></ol><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>git rebase -i HEAD~2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>指定合并 commit</li></ol><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code><span class="token comment"># 最新commit的上一个commit</span>
pick e3e3da3 feat: 抢购订单已购优惠券显示
<span class="token comment"># 最新commit</span>
<span class="token deleted">- pick 1d4b8d6 fix: 抢购订单详情已购优惠券为空读取不到length属性问题</span>
<span class="token inserted">+ f 1d4b8d6 fix: 抢购订单详情已购优惠券为空读取不到length属性问题</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>跳过冲突(如果有)</li></ol><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>git rebase --skip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>强制推送</li></ol><div class="hint-container warning"><p class="hint-container-title">注意</p><p>此时 push 会提示远程分支有更新 不要 git pull !!!</p></div><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code><span class="token comment"># 强制推送</span>
git push -f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="取消合并" tabindex="-1"><a class="header-anchor" href="#取消合并" aria-hidden="true">#</a> 取消合并</h2><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>git rebase --abort
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,27),d=[l];function t(c,m){return i(),n("div",null,d)}const v=e(a,[["render",t],["__file","合并commit.html.vue"]]);export{v as default};
