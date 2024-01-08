import{_ as n,o as s,c as a,d as e}from"./app-tSvYcIf0.js";const t={},p=e(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  email<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getUserProperty</span><span class="token punctuation">(</span>user<span class="token operator">:</span> User<span class="token punctuation">,</span> property<span class="token operator">:</span> <span class="token keyword">keyof</span> User<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> user<span class="token punctuation">[</span>property<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> user<span class="token operator">:</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">&#39;John Doe&#39;</span><span class="token punctuation">,</span>
  email<span class="token operator">:</span> <span class="token string">&#39;john@example.com&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token function">getUserProperty</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Output: John Doe</span>

<span class="token keyword">const</span> invalidProperty <span class="token operator">=</span> <span class="token function">getUserProperty</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error: Argument of type &#39;&quot;age&quot;&#39; is not assignable to parameter of type &#39;&quot;id&quot; | &quot;name&quot; | &quot;email&quot;&#39;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","keyof运算符.html.vue"]]);export{r as default};
