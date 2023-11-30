import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as e,c as o,b as n,d as s,e as c,a as l}from"./app-0dcc4a8d.js";const i={},u=n("h2",{id:"场景",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#场景","aria-hidden":"true"},"#"),s(" 场景")],-1),r=n("p",null,[s("在微信公众号 H5 项目中实现 "),n("code",null,"点击按钮跳转到拼多多小程序"),s(" 功能")],-1),d=n("h2",{id:"实现",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#实现","aria-hidden":"true"},"#"),s(" 实现")],-1),k={href:"https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_Open_Tag.html#%E8%B7%B3%E8%BD%AC%E5%B0%8F%E7%A8%8B%E5%BA%8F%EF%BC%9Awx-open-launch-weapp",target:"_blank",rel:"noopener noreferrer"},m=l(`<ol><li><p>绑定域名</p><p>登录微信公众平台进入 <code>公众号设置</code> 的 <code>功能设置</code> 里填写 <code>JS接口安全域名</code>。</p></li><li><p>引入 js 文件</p><p>在需要调用 JS 接口的页面引入如下 JS 文件：http://res.wx.qq.com/open/js/jweixin-1.6.0.js （支持 https）</p><p>如需进一步提升服务稳定性，当上述资源不可访问时，可改访问：http://res2.wx.qq.com/open/js/jweixin-1.6.0.js （支持 https）</p><p>备注：支持使用 AMD/CMD 标准模块加载方法加载。</p></li><li><p>通过 config 接口注入权限验证配置并申请所需开放标签</p></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">debug</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印</span>
  <span class="token literal-property property">appId</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 必填，公众号的唯一标识</span>
  <span class="token literal-property property">timestamp</span><span class="token operator">:</span> <span class="token punctuation">,</span> <span class="token comment">// 必填，生成签名的时间戳</span>
  <span class="token literal-property property">nonceStr</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 必填，生成签名的随机串</span>
  <span class="token literal-property property">signature</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span><span class="token comment">// 必填，签名</span>
  <span class="token literal-property property">jsApiList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 必填，需要使用的JS接口列表</span>
  <span class="token literal-property property">openTagList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 可选，需要使用的开放标签列表，例如[&#39;wx-open-launch-app&#39;]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>通过 ready 接口处理成功验证</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// config信息验证后会执行ready方法，</span>
  <span class="token comment">// 所有接口调用都必须在config接口获得结果之后，</span>
  <span class="token comment">// config是一个客户端的异步操作，</span>
  <span class="token comment">// 所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。</span>
  <span class="token comment">// 对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>通过 error 接口处理失败验证</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// config信息验证失败会执行error函数</span>
  <span class="token comment">// 如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，</span>
  <span class="token comment">// 也可以在返回的res参数中查看，对于SPA可以在这里更新签名</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>使用微信的开发标签 <code>wx-open-launch-weapp</code></li></ol><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wx-open-launch-weapp</span>
  <span class="token attr-name">appid</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>所需跳转的小程序appid<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>所需跳转的小程序内页面路径及参数<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">username</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>所需跳转的小程序原始id（跳转时，有appid会优先使用appid，没有appid才会使用username）<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">@launch</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>用户点击跳转按钮并对确认弹窗进行操作后触发;<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">@error</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>用户点击跳转按钮后出现错误;<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>script&#39;<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/wxtag-template<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 内容 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span>点击跳转小程序<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>component</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wx-open-launch-weapp</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function v(g,b){const a=p("ExternalLinkIcon");return e(),o("div",null,[u,r,d,n("p",null,[n("a",k,[s("官方文档"),c(a)])]),m])}const q=t(i,[["render",v],["__file","h5跳转小程序.html.vue"]]);export{q as default};
