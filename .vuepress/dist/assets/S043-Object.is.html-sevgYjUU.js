import{_ as n,o as s,c as a,d as e}from"./app-xrgnhFxe.js";const t={},p=e(`<p>Object.is不会转换被比较的两个值的类型，这点和===更为相似，他们之间也存在一些区别。 1. NaN在===中是不相等的，而在Object.is中是相等的 2. +0和-0在===中是相等的，而在Object.is中是不相等的</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function-variable function">is</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">===</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 当前情况下，只有一种情况是特殊的，即 +0 -0</span>
    <span class="token comment">// 如果 x !== 0，则返回true</span>
    <span class="token comment">// 如果 x === 0，则需要判断+0和-0，则可以直接使用 1/+0 === Infinity 和 1/-0 === -Infinity来进行判断</span>
    <span class="token keyword">return</span> x <span class="token operator">!==</span> <span class="token number">0</span> <span class="token operator">||</span> <span class="token number">1</span> <span class="token operator">/</span> x <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">/</span> y<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// x !== y 的情况下，只需要判断是否为NaN，如果x!==x，则说明x是NaN，同理y也一样</span>
  <span class="token comment">// x和y同时为NaN时，返回true</span>
  <span class="token keyword">return</span> x <span class="token operator">!==</span> x <span class="token operator">&amp;&amp;</span> y <span class="token operator">!==</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function c(i,l){return s(),a("div",null,o)}const u=n(t,[["render",c],["__file","S043-Object.is.html.vue"]]);export{u as default};
