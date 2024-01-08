import{_ as n,o as s,c as e,d as a}from"./app-C59QzqDT.js";const t={},o=a(`<p>.d.ts文件放置的目录与tsconfig.json文件指定的includes匹配列表路径一致</p><p>我的是放到src 下面 新建一个 vite-env.d.ts文件</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/// &lt;reference types=&quot;vite/client&quot; /&gt;</span>

<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&quot;*.vue&quot;</span> <span class="token punctuation">{</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> Component<span class="token operator">:</span> ReturnType<span class="token operator">&lt;</span><span class="token keyword">typeof</span> defineComponent<span class="token operator">&gt;</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> Component<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&quot;*.ts&quot;</span><span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),p=[o];function c(l,i){return s(),e("div",null,p)}const r=n(t,[["render",c],["__file","Vue3_ts项目中找不到文件声明的处理.html.vue"]]);export{r as default};
