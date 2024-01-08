import{_ as n,o as s,c as a,d as t}from"./app-G0TSq-iO.js";const e={},p=t(`<h2 id="scroll-中的-e的类型" tabindex="-1"><a class="header-anchor" href="#scroll-中的-e的类型" aria-hidden="true">#</a> scroll 中的 e的类型</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">onScroll</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> UIEvent</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> target <span class="token operator">=</span> event<span class="token punctuation">.</span>target <span class="token keyword">as</span> HTMLElement<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">&amp;&amp;</span> target<span class="token punctuation">.</span>scrollTop <span class="token operator">+</span> target<span class="token punctuation">.</span>clientHeight <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&gt;=</span> target<span class="token punctuation">.</span>scrollHeight<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// do the magic</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>antd 中 Button 中的e</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ReactNode<span class="token punctuation">,</span> MouseEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">handleOpenAplly</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span> MouseEvent</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		e<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token operator">&lt;</span>Button
				type<span class="token operator">=</span><span class="token string">&quot;primary&quot;</span>
				onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
					<span class="token function">handleOpenAplly</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span><span class="token punctuation">}</span>
			<span class="token operator">&gt;</span>
				分配
			<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[p];function c(l,i){return s(),a("div",null,o)}const u=n(e,[["render",c],["__file","一些事件中的e类型.html.vue"]]);export{u as default};
