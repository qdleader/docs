import{_ as n,o as s,c as a,d as t}from"./app-xrgnhFxe.js";const p={},e=t(`<p>删除两个数组的相同元素</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>curUsers <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>curUsers<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>tableData<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除两个数组某一属性相同的元素</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>      <span class="token keyword">this</span><span class="token punctuation">.</span>curUsers <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>curUsers<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> tableIdList <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tableData<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">v</span> <span class="token operator">=&gt;</span> v<span class="token punctuation">.</span>alphaId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token operator">!</span>tableIdList<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>alphaId<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[e];function c(l,u){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","Arr007-删除两个数组的相同元素.html.vue"]]);export{r as default};
