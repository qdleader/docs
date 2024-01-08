import{_ as n,o as s,c as a,d as e}from"./app-tSvYcIf0.js";const p={},t=e(`<p>把数字格式化为指定的长度:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Number</span><span class="token punctuation">(</span><span class="token number">13.3714</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> n<span class="token operator">=</span>num<span class="token punctuation">.</span><span class="token function">toPrecision</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
n 输出结果<span class="token operator">:</span>

<span class="token number">13</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义和用法 toPrecision() 方法返回指定长度的数值字符串。</p><p>toPrecision() 方法以指定的精度返回该数值对象的字符串表示，四舍五入到 precision 参数指定的显示数字位数。</p><p>使用不同进制把数字格式化为指定的长度:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Number</span><span class="token punctuation">(</span><span class="token number">13.3714</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> num<span class="token punctuation">.</span><span class="token function">toPrecision</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> b <span class="token operator">=</span> num<span class="token punctuation">.</span><span class="token function">toPrecision</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> c <span class="token operator">=</span> num<span class="token punctuation">.</span><span class="token function">toPrecision</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> d <span class="token operator">=</span> num<span class="token punctuation">.</span><span class="token function">toPrecision</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
a、b、c 和 d 输出结果<span class="token operator">:</span>

<span class="token number">13.3714</span>
<span class="token number">13</span>
<span class="token number">13.4</span>
<span class="token number">13.37140000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[t];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","toPrecision.html.vue"]]);export{r as default};
