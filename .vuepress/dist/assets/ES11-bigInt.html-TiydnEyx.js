import{_ as n,o as s,c as a,d as t}from"./app-xrgnhFxe.js";const p={},e=t(`<h2 id="bigint" tabindex="-1"><a class="header-anchor" href="#bigint" aria-hidden="true">#</a> BigInt</h2><p>BigInt 是一种数字类型的数据，它可以表示任意精度格式的整数。在此之前，JS 中安全的最大数字是 9009199254740991，即2^53-1，在控制台中输入 Number.MAX_SAFE_INTEGER 即可查看。超过这个值，JS 没有办法精确表示。另外，大于或等于2的1024次方的数值，JS 无法表示，会返回 Infinity。 BigInt 即解决了这两个问题。BigInt 只用来表示整数，没有位数的限制，任何位数的整数都可以精确表示。为了和 Number 类型进行区分，<strong>BigInt 类型的数据必须添加后缀 n.</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">//Number类型在超过9009199254740991后，计算结果即出现问题</span>
<span class="token keyword">const</span> num1 <span class="token operator">=</span> <span class="token number">90091992547409910</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num1 <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//90091992547409900</span>

<span class="token comment">//BigInt 计算结果正确</span>
<span class="token keyword">const</span> num2 <span class="token operator">=</span> <span class="token number">90091992547409910n</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num2 <span class="token operator">+</span> <span class="token number">1n</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//90091992547409911n</span>

<span class="token comment">//Number 类型不能表示大于 2 的 1024 次方的数值</span>
<span class="token keyword">let</span> num3 <span class="token operator">=</span> <span class="token number">9999</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    num3 <span class="token operator">=</span> num3 <span class="token operator">*</span> num3<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Infinity</span>

<span class="token comment">//BigInt 类型可以表示任意位数的整数</span>
<span class="token keyword">let</span> num4 <span class="token operator">=</span> <span class="token number">9999n</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0n</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10n</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    num4 <span class="token operator">=</span> num4 <span class="token operator">*</span> num4<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num4<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//一串超级长的数字，这里就不贴了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们还可以使用 BigInt 对象来初始化 BigInt 实例：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">BigInt</span><span class="token punctuation">(</span><span class="token number">999</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 999n 注意：没有 new 关键字！！！</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>需要说明的是，BigInt 和 Number 是两种数据类型，不能直接进行四则运算，不过可以进行比较操作。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">99n</span> <span class="token operator">==</span> <span class="token number">99</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">99n</span> <span class="token operator">===</span> <span class="token number">99</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false </span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">99n</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//TypeError: Cannot mix BigInt and other types, use explicit conversionss</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","ES11-bigInt.html.vue"]]);export{r as default};
