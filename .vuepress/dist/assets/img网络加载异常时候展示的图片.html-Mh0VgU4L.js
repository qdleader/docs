import{_ as n,o as s,c as a,d as e}from"./app-tgHnmF2J.js";const p={},t=e(`<h2 id="图片加载异常" tabindex="-1"><a class="header-anchor" href="#图片加载异常" aria-hidden="true">#</a> 图片加载异常</h2><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>img {
    width: 128px; height: 96px;
    object-fit: cover;
}
img[src$=&quot;break.svg&quot;] {
    object-fit: contain;
    outline: 1px solid #ddd;
    outline-offset: -1px;
}
HTML代码：
&lt;img src=&quot;qdleader.jpg&quot; onerror=&quot;this.src=&#39;break.svg&#39;;&quot;&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方式2" tabindex="-1"><a class="header-anchor" href="#方式2" aria-hidden="true">#</a> 方式2</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">&quot;qdleader.png&quot;</span> alt<span class="token operator">=</span><span class="token string">&quot;你好呀&quot;</span> onerror<span class="token operator">=</span><span class="token string">&quot;this.classList.add(&#39;error&#39;);&quot;</span><span class="token operator">&gt;</span>

img<span class="token punctuation">.</span>error <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> inline<span class="token operator">-</span>block<span class="token punctuation">;</span>
  <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
img<span class="token punctuation">.</span>error<span class="token operator">:</span><span class="token operator">:</span>before <span class="token punctuation">{</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
  <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span> top<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span> height<span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> #f5f5f5 <span class="token function">url</span><span class="token punctuation">(</span><span class="token keyword">break</span><span class="token punctuation">.</span>svg<span class="token punctuation">)</span> no<span class="token operator">-</span>repeat center <span class="token operator">/</span> <span class="token number">50</span><span class="token operator">%</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> transparent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
img<span class="token punctuation">.</span>error<span class="token operator">:</span><span class="token operator">:</span>after <span class="token punctuation">{</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token function">attr</span><span class="token punctuation">(</span>alt<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
  <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span> bottom<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
  line<span class="token operator">-</span>height<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">;</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> white<span class="token punctuation">;</span>
  font<span class="token operator">-</span>size<span class="token operator">:</span> 12px<span class="token punctuation">;</span>
  text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
  white<span class="token operator">-</span>space<span class="token operator">:</span> nowrap<span class="token punctuation">;</span>
  <span class="token literal-property property">overflow</span><span class="token operator">:</span> hidden<span class="token punctuation">;</span>
  text<span class="token operator">-</span>overflow<span class="token operator">:</span> ellipsis<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[t];function r(l,c){return s(),a("div",null,o)}const u=n(p,[["render",r],["__file","img网络加载异常时候展示的图片.html.vue"]]);export{u as default};
