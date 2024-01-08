import{_ as n,o as s,c as a,d as t}from"./app-otDwoQZb.js";const e={},p=t(`<p>原生生成随机串</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> uuid <span class="token operator">=</span> window<span class="token punctuation">.</span>crypto<span class="token punctuation">.</span><span class="token function">randomUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>uuid<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 例如 &quot;36b8f84d-df4e-4d49-b662-bcde71a8764f&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>项目中 用 uuid</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> v4 <span class="token keyword">as</span> uuidv4 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;uuid&#39;</span><span class="token punctuation">;</span>
<span class="token function">uuidv4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ⇨ &#39;9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[p];function o(i,u){return s(),a("div",null,c)}const l=n(e,[["render",o],["__file","获取随机字符串.html.vue"]]);export{l as default};
