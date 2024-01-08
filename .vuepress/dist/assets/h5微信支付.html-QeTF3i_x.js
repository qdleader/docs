import{_ as n,o as s,c as a,d as e}from"./app-tgHnmF2J.js";const t={},p=e(`<h1 id="h5微信支付" tabindex="-1"><a class="header-anchor" href="#h5微信支付" aria-hidden="true">#</a> h5微信支付</h1><p>微信内支付用sdk，这在微信公众开发的文章已详细提到。 我们在这说一下，微信外浏览器微信支付。</p><p>我们在这先判断是微信内浏览器还是微信外浏览器。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 判断是否公众号（微信H5）</span>
  <span class="token function">isWechat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// #ifdef H5</span>
      <span class="token keyword">const</span> ua <span class="token operator">=</span> window<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>ua<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">micromessenger</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&#39;micromessenger&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// #endif</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">//支付</span>

<span class="token function">doPay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isWechat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//微信浏览器</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">//微信外浏览器</span>
    window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> dataUrl
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>微信外的只需要，这一步打开后台返回的链接即可。</p><p>另外跳转回来会发现，h5成白页面了，另可参考我们文章，h5微信外浏览器微信支付跳转白页面的优化</p>`,6),c=[p];function o(i,l){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","h5微信支付.html.vue"]]);export{r as default};
