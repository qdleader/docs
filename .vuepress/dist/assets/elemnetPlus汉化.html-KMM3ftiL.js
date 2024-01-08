import{_ as n,o as s,c as a,d as t}from"./app-C59QzqDT.js";const e={},p=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> ↓总路由视图 <span class="token operator">--</span><span class="token operator">&gt;</span>
   <span class="token operator">&lt;</span>ElConfigProvider <span class="token operator">:</span>locale<span class="token operator">=</span><span class="token string">&quot;locale&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>router<span class="token operator">-</span>view<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>view<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>ElConfigProvider<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token string">&#39;@/assets/style/index.scss&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
    useRouter
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> onMounted <span class="token punctuation">,</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ElConfigProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> zhLocale <span class="token keyword">from</span> <span class="token string">&#39;element-plus/lib/locale/lang/zh-cn&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>
<span class="token keyword">import</span> Util <span class="token keyword">from</span> <span class="token string">&#39;@/utils/utils&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;App&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>ElConfigProvider<span class="token punctuation">.</span>name<span class="token punctuation">]</span><span class="token operator">:</span> ElConfigProvider<span class="token punctuation">,</span> <span class="token comment">//添加组件</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
     <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> baseDomain <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_API_DOMAIN</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> locale <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>zhLocale<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">{</span>
            locale
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[p];function l(c,i){return s(),a("div",null,o)}const u=n(e,[["render",l],["__file","elemnetPlus汉化.html.vue"]]);export{u as default};
