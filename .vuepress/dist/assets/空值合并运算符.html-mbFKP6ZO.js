import{_ as n,o as s,c as a,d as e}from"./app-G0TSq-iO.js";const t={},o=e(`<p>空值合并运算符 (??)</p><p>空值合并运算符在变量为 null 或 undefined 时提供默认值。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> defaultName <span class="token operator">=</span> name <span class="token operator">??</span> <span class="token string">&#39;Unknown&#39;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>defaultName<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Output: Unknown</span>

<span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> defaultAge <span class="token operator">=</span> age <span class="token operator">??</span> <span class="token number">18</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>defaultAge<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Output: 0</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),p=[o];function c(l,i){return s(),a("div",null,p)}const r=n(t,[["render",c],["__file","空值合并运算符.html.vue"]]);export{r as default};
