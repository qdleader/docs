import{_ as s,o as n,c as a,d as e}from"./app-xrgnhFxe.js";const t={},o=e(`<pre><code>	package.json
</code></pre><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;build:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cross-env NEXT_PUBLIC_DOMAIN_ENV=dev next build&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;build:prod&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cross-env NEXT_PUBLIC_DOMAIN_ENV=prod next build&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;build:test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cross-env NEXT_PUBLIC_DOMAIN_ENV=test next build&quot;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">BASE_URL</span> <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NEXT_PUBLIC_DOMAIN_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;prod&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;https://dev.qdleader.cc&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;https://qdleader.cc&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),p=[o];function c(r,l){return n(),a("div",null,p)}const i=s(t,[["render",c],["__file","next 中区分不同环境变量.html.vue"]]);export{i as default};
