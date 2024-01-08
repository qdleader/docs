import{_ as n,o as s,c as t,d as a}from"./app-tSvYcIf0.js";const p={},e=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>		<span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;category&quot;</span><span class="token punctuation">,</span>
				<span class="token literal-property property">boundaryGap</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
				<span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token literal-property property">showMinLabel</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
					<span class="token literal-property property">formatter</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
						<span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
							<span class="token keyword">const</span> isLast <span class="token operator">=</span> value <span class="token operator">===</span> timeArr<span class="token punctuation">[</span>timeArr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
							<span class="token keyword">const</span> label <span class="token operator">=</span> isLast <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">{a|</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">}</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">:</span> value<span class="token punctuation">;</span>
							<span class="token keyword">return</span> label<span class="token punctuation">;</span>
						<span class="token punctuation">}</span><span class="token punctuation">;</span>
					<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
					<span class="token literal-property property">showMaxLabel</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
					<span class="token literal-property property">rich</span><span class="token operator">:</span> <span class="token punctuation">{</span>
						<span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span>
							<span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span>
							<span class="token literal-property property">align</span><span class="token operator">:</span> <span class="token string">&quot;left&quot;</span>
						<span class="token punctuation">}</span>
					<span class="token punctuation">}</span><span class="token punctuation">,</span>
					<span class="token literal-property property">interval</span><span class="token operator">:</span> <span class="token number">0</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token literal-property property">axisPointer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
						<span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span>
					<span class="token punctuation">}</span><span class="token punctuation">,</span>
					<span class="token literal-property property">z</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
					<span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
						<span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#FBAC5E&quot;</span><span class="token punctuation">,</span>
						<span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">2</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token literal-property property">data</span><span class="token operator">:</span> timeArr
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[e];function l(r,c){return s(),t("div",null,o)}const u=n(p,[["render",l],["__file","echart横坐标最后一个刻度左对齐.html.vue"]]);export{u as default};
