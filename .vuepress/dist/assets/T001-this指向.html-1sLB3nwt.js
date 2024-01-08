import{_ as n,o as s,c as a,d as e}from"./app-C59QzqDT.js";const t={},i=e(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> hero <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">_name</span><span class="token operator">:</span> <span class="token string">&#39;john Doe&#39;</span><span class="token punctuation">,</span>
	<span class="token function-variable function">getSelectIdentify</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_name
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> stoleSecretIdentify <span class="token operator">=</span> hero<span class="token punctuation">.</span>getSelectIdentify<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">stoleSecretIdentify</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>hero<span class="token punctuation">.</span><span class="token function">getSelectIdentify</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答案:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>undefined

&#39;john Doe&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解析:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>因为我们在hero中提取的getSelectIdentify方法,在_name属性不存在的全局上下文中被调用,所以为undefined

那我们能否改进能
当然:
赋值时候绑定一下this即可:
var stoleSecretIdentify = hero.getSelectIdentify.bind(hero);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[i];function o(p,l){return s(),a("div",null,c)}const d=n(t,[["render",o],["__file","T001-this指向.html.vue"]]);export{d as default};
