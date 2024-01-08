import{_ as n,o as s,c as a,d as e}from"./app-tSvYcIf0.js";const t={},i=e(`<p>matchAll</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[0-3]</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token string">&#39;2020&#39;</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">matchAll</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>data<span class="token punctuation">.</span><span class="token function">matchAll</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>







<span class="token doc-comment comment">/**
 * 0: [&quot;2&quot;, index: 0, input: &quot;2020&quot;, groups: undefined]
 * 1: [&quot;0&quot;, index: 1, input: &quot;2020&quot;, groups: undefined]
 * 2: [&quot;2&quot;, index: 2, input: &quot;2020&quot;, groups: undefined]
 * 3: [&quot;0&quot;, index: 3, input: &quot;2020&quot;, groups: undefined]
 */</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[i];function c(p,l){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","ES11-matchAll.html.vue"]]);export{d as default};
