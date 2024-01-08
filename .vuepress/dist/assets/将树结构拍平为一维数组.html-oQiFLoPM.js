import{_ as n,o as s,c as a,d as p}from"./app-otDwoQZb.js";const t={},e=p(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> 使用递归处理路由菜单，生成一维数组，做菜单权限判断
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">menuList</span> 所有菜单列表
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">newArr</span> 菜单的一维数组
 * <span class="token keyword">@return</span> array
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">handleRouter</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">routerList</span><span class="token operator">:</span> Menu<span class="token punctuation">.</span>MenuOptions<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">newArr</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  routerList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">item</span><span class="token operator">:</span> Menu<span class="token punctuation">.</span>MenuOptions</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">typeof</span> item <span class="token operator">===</span> <span class="token string">&quot;object&quot;</span> <span class="token operator">&amp;&amp;</span> item<span class="token punctuation">.</span>path <span class="token operator">&amp;&amp;</span> newArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
    item<span class="token punctuation">.</span>children <span class="token operator">&amp;&amp;</span> item<span class="token punctuation">.</span>children<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> <span class="token function">handleRouter</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>children<span class="token punctuation">,</span> newArr<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> newArr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","将树结构拍平为一维数组.html.vue"]]);export{r as default};
