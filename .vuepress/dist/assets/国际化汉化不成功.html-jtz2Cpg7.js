import{_ as s,o as n,c as a,d as e}from"./app-C59QzqDT.js";const t={},o=e(`<p>vite 本地可以 ，传到线上不可以</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> zhCN <span class="token keyword">from</span> <span class="token string">&#39;antd/locale/zh_CN&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">return</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>ConfigProvider locale<span class="token operator">=</span><span class="token punctuation">{</span>zhCN<span class="token punctuation">}</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>ConfigProvider<span class="token operator">&gt;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>改成</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> zhCN <span class="token keyword">from</span> <span class="token string">&#39;antd/es/locale/zh_CN&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">return</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>ConfigProvider locale<span class="token operator">=</span><span class="token punctuation">{</span>zhCN<span class="token punctuation">}</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>ConfigProvider<span class="token operator">&gt;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),p=[o];function l(r,c){return n(),a("div",null,p)}const d=s(t,[["render",l],["__file","国际化汉化不成功.html.vue"]]);export{d as default};
