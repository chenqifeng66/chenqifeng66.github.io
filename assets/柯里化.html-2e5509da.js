import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as t}from"./app-0dcc4a8d.js";const p={},e=t(`<h2 id="什么是柯里化" tabindex="-1"><a class="header-anchor" href="#什么是柯里化" aria-hidden="true">#</a> 什么是柯里化</h2><p>柯里化是一种函数的转换方法</p><p>它是将一个函数从可调用的 <code>f(a,b,c)</code> 转换为可调用的 <code>f(a)(b)(c)</code></p><h2 id="为什么需要柯里化" tabindex="-1"><a class="header-anchor" href="#为什么需要柯里化" aria-hidden="true">#</a> 为什么需要柯里化</h2><p>可以固定前几个参数，生成实现部分功能的函数</p><h3 id="🌰" tabindex="-1"><a class="header-anchor" href="#🌰" aria-hidden="true">#</a> 🌰</h3><p>一个日志函数</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token parameter">date<span class="token punctuation">,</span> type<span class="token punctuation">,</span> message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> hour <span class="token operator">=</span> date<span class="token punctuation">.</span><span class="token function">getHours</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> month <span class="token operator">=</span> date<span class="token punctuation">.</span><span class="token function">getMonths</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>hour<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>month<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>type<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;DEBUG&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;some bug&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// hh:mm DEBUG some bug</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>柯里化 - 部分功能函数</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> curryLog <span class="token operator">=</span> <span class="token function">curry</span><span class="token punctuation">(</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 固定日期的日志函数</span>
<span class="token keyword">const</span> logNow <span class="token operator">=</span> <span class="token function">curryLog</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">logNow</span><span class="token punctuation">(</span><span class="token string">&quot;DEBUG&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;some bug&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// hh:mm DEBUG some bug</span>
<span class="token comment">// 固定日期、类型的日志函数</span>
<span class="token keyword">const</span> logNowDebug <span class="token operator">=</span> <span class="token function">curryLog</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;DEBUG&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">logNowDebug</span><span class="token punctuation">(</span><span class="token string">&quot;some bug&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// hh:mm DEBUG some bug</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="简单实现" tabindex="-1"><a class="header-anchor" href="#简单实现" aria-hidden="true">#</a> 简单实现</h2><p>一个简单的加法函数</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b <span class="token operator">+</span> c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将 <code>sum(1,2,3)</code> 函数转为 <code>sum(1)(2)(3)</code> 调用</p><h3 id="思考" tabindex="-1"><a class="header-anchor" href="#思考" aria-hidden="true">#</a> 思考</h3><p>柯里化函数逻辑：</p><ol><li>接收一个函数</li><li>返回一个函数/调用原函数的结果 <ol><li>返回一个函数：在最后一个参数之前</li><li>返回调用原函数的结果：在最后一个参数的时候</li></ol></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">curry</span><span class="token punctuation">(</span><span class="token parameter">func</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">func</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> currySum <span class="token operator">=</span> <span class="token function">curry</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">currySum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从以上代码的实现可以看出，原函数接收多少个参数，<code>curry</code> 函数就得返回多少层</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">curry</span><span class="token punctuation">(</span><span class="token parameter">func</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// .... 最终调用原函数</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="存在的问题" tabindex="-1"><a class="header-anchor" href="#存在的问题" aria-hidden="true">#</a> 存在的问题</h3><ol><li>不灵活，无法通用。<code>curry</code> 函数内部无法根据原函数参数个数来适应</li><li>无法以原函数的方式调用柯里化后的函数。既可以以 <code>currySum(1,2,3)</code> 的方式调用，也可以以 <code>currySum(1)(2)(3)</code> 的方式调用</li></ol><h2 id="改进" tabindex="-1"><a class="header-anchor" href="#改进" aria-hidden="true">#</a> 改进</h2><ul><li>将传入的参数与原函数所需的参数比较 <ul><li>当传入参数个数多于或等于原函数所需参数时，以原函数方式调用</li><li>当传入参数个数少于原函数所需参数时，以柯里化方式调用</li></ul></li></ul><p>核心：<strong>收集参数，最终将所有参数传入原函数</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">curry</span><span class="token punctuation">(</span><span class="token parameter">func</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">curried</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>arg1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// func.length 获取函数所需参数个数</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>arg1<span class="token punctuation">.</span>length <span class="token operator">&gt;=</span> func<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 【传入参数 &gt;= 原函数所需的参数】时则以原函数调用</span>
      <span class="token keyword">return</span> <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arg1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 【传入参数 &lt; 原函数所需的参数】以柯里化方式调用</span>
      <span class="token comment">// 返回一个函数，该函数将后续参数拼接，最终以原函数调用</span>
      <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>arg2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">curried</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arg1<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>arg2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> currySum <span class="token operator">=</span> <span class="token function">curry</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">currySum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 6</span>
<span class="token function">currySum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 6</span>
<span class="token function">currySum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>柯里化：把接收多参的函数转化成可以逐个调用单个参数并返回接收剩下参数的函数</p><p>应用： 使用柯里化可以更容易获取部分功能函数，如🌰中的【日志函数】</p><p>注意：<strong>只允许转化确定参数个数的函数</strong></p>`,30),o=[e];function c(u,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","柯里化.html.vue"]]);export{k as default};
