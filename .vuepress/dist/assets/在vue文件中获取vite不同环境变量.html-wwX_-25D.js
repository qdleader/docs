import{_ as n,o as s,c as a,d as p}from"./app-C59QzqDT.js";const t={},o=p(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;HelloWorld&quot;</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ↓读取内建环境变量</span>
    <span class="token keyword">const</span> mode <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">MODE</span><span class="token punctuation">;</span>
    <span class="token comment">// ↓读取自定义环境变量</span>
    <span class="token keyword">const</span> host <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_HOST</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> port <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_PORT</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> baseUrl <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_BASE_URL</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> baseDomain <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_API_DOMAIN</span> <span class="token punctuation">;</span>
    <span class="token comment">// ↓返回变量，使支持template获取</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      mode<span class="token punctuation">,</span>
      host<span class="token punctuation">,</span>
      port<span class="token punctuation">,</span>
      baseUrl<span class="token punctuation">,</span>
      baseDomain
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>

    <span class="token operator">&lt;</span>el<span class="token operator">-</span>button type<span class="token operator">=</span><span class="token string">&quot;primary&quot;</span><span class="token operator">&gt;</span>Primary<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>el<span class="token operator">-</span>button type<span class="token operator">=</span><span class="token string">&quot;success&quot;</span><span class="token operator">&gt;</span>Success<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span>

      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>h2 <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;red&quot;</span><span class="token operator">&gt;</span>环境变量<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
        <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> mode <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> host <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> port <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token literal-property property">baseUrl</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> baseUrl <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token literal-property property">baseDomain</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> baseDomain <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style scoped lang<span class="token operator">=</span><span class="token string">&quot;scss&quot;</span><span class="token operator">&gt;</span>
@<span class="token keyword">import</span> <span class="token string">&#39;@/assets/style/index.scss&#39;</span><span class="token punctuation">;</span>
a <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #42b983<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

label <span class="token punctuation">{</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token number">0</span><span class="token punctuation">.</span>5em<span class="token punctuation">;</span>
  font<span class="token operator">-</span>weight<span class="token operator">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

code <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> #eee<span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 2px 4px<span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> 4px<span class="token punctuation">;</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token number">304455</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),e=[o];function l(c,r){return s(),a("div",null,e)}const u=n(t,[["render",l],["__file","在vue文件中获取vite不同环境变量.html.vue"]]);export{u as default};
