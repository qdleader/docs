import{_ as n,o as s,c as a,d as t}from"./app-xrgnhFxe.js";const e={},p=t(`<h2 id="字符串转驼峰处理" tabindex="-1"><a class="header-anchor" href="#字符串转驼峰处理" aria-hidden="true">#</a> 字符串转驼峰处理</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">camelCase</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">_([a-z])</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">match<span class="token punctuation">,</span> group1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> group1<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">camelCase</span><span class="token punctuation">(</span><span class="token string">&quot;some_string&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// &quot;someString&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="写法2" tabindex="-1"><a class="header-anchor" href="#写法2" aria-hidden="true">#</a> 写法2</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">camelCase</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">-\\w</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token keyword">function</span> <span class="token function">camelCase</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">-([a-z])</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">camelCase</span><span class="token punctuation">(</span><span class="token string">&quot;some-string&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[p];function o(u,l){return s(),a("div",null,c)}const r=n(e,[["render",o],["__file","字符串转驼峰处理.html.vue"]]);export{r as default};
