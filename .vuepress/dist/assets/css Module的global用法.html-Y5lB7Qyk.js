import{_ as n,o as s,c as a,d as e}from"./app-qTEUp92E.js";const l={},i=e(`<p>css Module的global用法</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>
&lt;div className=<span class="token string">&quot;noDisplay&quot;</span>&gt;1111&lt;/div&gt;
<span class="token comment">/* .playing 会被提升为全局样式 */</span>
  <span class="token selector">:global(.noDisplay)</span> <span class="token punctuation">{</span>
      <span class="token property">display</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>


  
<span class="token selector">&lt;div className=</span><span class="token punctuation">{</span>styles.noDisplay<span class="token punctuation">}</span>&gt;1111&lt;/div&gt;
  <span class="token comment">/* .playing仍未局部样式，rotate确不会被加上hash */</span>
  <span class="token selector">.noDisplay :global</span> <span class="token punctuation">{</span>
      <span class="token property">display</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[i];function c(o,p){return s(),a("div",null,t)}const u=n(l,[["render",c],["__file","css Module的global用法.html.vue"]]);export{u as default};
