import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,a as e}from"./app-0dcc4a8d.js";const t={},o=e(`<h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 报错: Cannot find module &#39;@/xxx/xxx&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> xxx <span class="token punctuation">}</span> <span class="token keyword">from</span> &quot;@<span class="token operator">/</span>xxx<span class="token operator">/</span>xxx&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="原因" tabindex="-1"><a class="header-anchor" href="#原因" aria-hidden="true">#</a> 原因</h2><p><code>typescript</code> 无法识别路径别名</p><h2 id="解决" tabindex="-1"><a class="header-anchor" href="#解决" aria-hidden="true">#</a> 解决</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;@/*&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;src/*&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),p=[o];function c(i,r){return a(),s("div",null,p)}const u=n(t,[["render",c],["__file","路径别名报错.html.vue"]]);export{u as default};
