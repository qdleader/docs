import{_ as n,o as s,c as a,d as t}from"./app-tSvYcIf0.js";const p={},o=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> type <span class="token punctuation">{</span> Ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

type AutoLoadingResult <span class="token operator">=</span> <span class="token punctuation">[</span>
  Ref<span class="token operator">&lt;</span>boolean<span class="token operator">&gt;</span><span class="token punctuation">,</span>
  <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">requestPromise</span><span class="token operator">:</span> Promise<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Promise<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">/* 在给run方法传入一个promise，会在promise执行前或执行后将loading状态设为true，在执行完成后设为false */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useAutoLoading</span><span class="token punctuation">(</span><span class="token parameter">defaultLoading <span class="token operator">=</span> <span class="token boolean">false</span></span><span class="token punctuation">)</span><span class="token operator">:</span> AutoLoadingResult <span class="token punctuation">{</span>
  <span class="token keyword">const</span> ld <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>defaultLoading<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> run<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>requestPromise<span class="token operator">:</span> Promise<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> Promise<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    ld<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> requestPromise<span class="token punctuation">.</span><span class="token function">finally</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      ld<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">[</span>ld<span class="token punctuation">,</span> run<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组件中使用</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token operator">&lt;</span>script setup name<span class="token operator">=</span><span class="token string">&quot;Index&quot;</span> lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
<span class="token comment">// import { useAutoRequest } from &quot;./hook&quot;;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useAutoLoading <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./hook2&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;ant-design-vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> submitApi<span class="token punctuation">,</span> cancelApi <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/api&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// const [loading, submit] = useAutoRequest(submitApi);</span>

<span class="token keyword">const</span> <span class="token punctuation">[</span>commonLoading<span class="token punctuation">,</span> fetch<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useAutoLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">onSubmit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token function">submitApi</span><span class="token punctuation">(</span><span class="token string">&quot;submit&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;res&quot;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">onCancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token function">cancelApi</span><span class="token punctuation">(</span><span class="token string">&quot;cancel&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;res&quot;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;col&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>Button type<span class="token operator">=</span><span class="token string">&quot;primary&quot;</span> <span class="token operator">:</span>loading<span class="token operator">=</span><span class="token string">&quot;commonLoading&quot;</span> @click<span class="token operator">=</span><span class="token string">&quot;onSubmit&quot;</span><span class="token operator">&gt;</span>
      提交
    <span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>Button <span class="token operator">:</span>loading<span class="token operator">=</span><span class="token string">&quot;commonLoading&quot;</span> @click<span class="token operator">=</span><span class="token string">&quot;onCancel&quot;</span><span class="token operator">&gt;</span>取消<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里也是用到了promise链式调用的特性，在接口调用之后马上将loading置为true，在接口调用完成后置为false。而useAutoRequest则是在接口调用之前就将loading置为true。 useAutoRequest调用时代码更简洁，useAutoLoading的使用则更灵活，可以同时服务给多个接口使用，比较适合提交、取消这种互斥的场景。</p>`,4),e=[o];function c(l,i){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","按钮loading的hooks2.html.vue"]]);export{r as default};
