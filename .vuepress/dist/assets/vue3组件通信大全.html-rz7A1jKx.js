import{_ as n,o as s,c as a,d as t}from"./app-C59QzqDT.js";const p={},e=t(`<h1 id="vue3-组件通信方式" tabindex="-1"><a class="header-anchor" href="#vue3-组件通信方式" aria-hidden="true">#</a> vue3 组件通信方式</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>props

$emit

expose<span class="token operator">/</span>ref

$attrs

v<span class="token operator">-</span>model

provide<span class="token operator">/</span>inject

Vuex

mitt

pinia

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-props" tabindex="-1"><a class="header-anchor" href="#_1-props" aria-hidden="true">#</a> 1.props</h2><p>用 props 传数据给子组件有两种方法，如下 方法一，混合写法</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// Parent.vue 传送</span>
<span class="token operator">&lt;</span>child <span class="token operator">:</span>msg1<span class="token operator">=</span><span class="token string">&quot;msg1&quot;</span> <span class="token operator">:</span>msg2<span class="token operator">=</span><span class="token string">&quot;msg2&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>child<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> child <span class="token keyword">from</span> <span class="token string">&quot;./child.vue&quot;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            msg1<span class="token operator">:</span><span class="token string">&quot;这是传级子组件的信息1&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 创建一个响应式数据</span>
        
        <span class="token comment">// 写法一 适用于基础类型  ref 还有其他用处，下面章节有介绍</span>
        <span class="token keyword">const</span> msg2 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&quot;这是传级子组件的信息2&quot;</span><span class="token punctuation">)</span>
        
        <span class="token comment">// 写法二 适用于复杂类型，如数组、对象</span>
        <span class="token keyword">const</span> msg2 <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;这是传级子组件的信息2&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            msg2
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token comment">// Child.vue 接收</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  props<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;msg1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;msg2&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token comment">// 如果这行不写，下面就接收不到</span>
  <span class="token function">setup</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token comment">// { msg1:&quot;这是传给子组件的信息1&quot;, msg2:&quot;这是传给子组件的信息2&quot; }</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法二-纯-vue3-写法-语法糖" tabindex="-1"><a class="header-anchor" href="#方法二-纯-vue3-写法-语法糖" aria-hidden="true">#</a> 方法二，纯 Vue3 写法(语法糖)</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// Parent.vue 传送</span>
<span class="token operator">&lt;</span>child <span class="token operator">:</span>msg2<span class="token operator">=</span><span class="token string">&quot;msg2&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>child<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
    <span class="token keyword">import</span> child <span class="token keyword">from</span> <span class="token string">&quot;./child.vue&quot;</span>
    <span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
    <span class="token keyword">const</span> msg2 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&quot;这是传给子组件的信息2&quot;</span><span class="token punctuation">)</span>
    <span class="token comment">// 或者复杂类型</span>
    <span class="token keyword">const</span> msg2 <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;这是传级子组件的信息2&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token comment">// Child.vue 接收</span>
<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
    <span class="token comment">// 不需要引入 直接使用</span>
    <span class="token comment">// import { defineProps } from &quot;vue&quot;</span>
    <span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token comment">// 写法一</span>
        msg2<span class="token operator">:</span> String
        <span class="token comment">// 写法二</span>
        msg2<span class="token operator">:</span><span class="token punctuation">{</span>
            type<span class="token operator">:</span>String<span class="token punctuation">,</span>
            <span class="token keyword">default</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token comment">// { msg2:&quot;这是传级子组件的信息2&quot; }</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意： 如果父组件是混合写法，子组件纯 Vue3 写法的话，是接收不到父组件里 data 的属性，只能接收到父组件里 setup 函数里传的属性。</p><p>如果父组件是纯 Vue3 写法，子组件混合写法，可以通过 props 接收到 data 和 setup 函数里的属性，但是子组件要是在 setup 里接收，同样只能接收到父组件中 setup 函数里的属性，接收不到 data 里的属性。</p><p>官方也说了，既然用了 3，就不要写 2 了</p><h2 id="_2-emit" tabindex="-1"><a class="header-anchor" href="#_2-emit" aria-hidden="true">#</a> 2. $emit</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// Child.vue 派发</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token comment">// 写法一</span>
    <span class="token operator">&lt;</span>button <span class="token decorator"><span class="token at operator">@</span><span class="token function">click</span></span><span class="token operator">=</span><span class="token string">&quot;emit(&#39;myClick&#39;)&quot;</span><span class="token operator">&gt;</span>按钮<span class="token operator">&lt;</span><span class="token operator">/</span>buttom<span class="token operator">&gt;</span>
    <span class="token comment">// 写法二</span>
    <span class="token operator">&lt;</span>button <span class="token decorator"><span class="token at operator">@</span><span class="token function">click</span></span><span class="token operator">=</span><span class="token string">&quot;handleClick&quot;</span><span class="token operator">&gt;</span>按钮<span class="token operator">&lt;</span><span class="token operator">/</span>buttom<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
    
    <span class="token comment">// 方法一 适用于Vue3.2版本 不需要引入</span>
    <span class="token comment">// import { defineEmits } from &quot;vue&quot;</span>
    <span class="token comment">// 对应写法一</span>
    <span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;myClick&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;myClick2&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token comment">// 对应写法二</span>
    <span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&quot;myClick&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;这是发送给父组件的信息&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 方法二 不适用于 Vue3.2版本，该版本 useContext()已废弃</span>
    <span class="token keyword">import</span> <span class="token punctuation">{</span> useContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> emit <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&quot;myClick&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;这是发送给父组件的信息&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token comment">// Parent.vue 响应</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>child <span class="token decorator"><span class="token at operator">@</span><span class="token function">myClick</span></span><span class="token operator">=</span><span class="token string">&quot;onMyClick&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>child<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
    <span class="token keyword">import</span> child <span class="token keyword">from</span> <span class="token string">&quot;./child.vue&quot;</span>
    <span class="token keyword">const</span> <span class="token function-variable function">onMyClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span>msg<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span> <span class="token comment">// 这是父组件收到的信息</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-expose-ref" tabindex="-1"><a class="header-anchor" href="#_3-expose-ref" aria-hidden="true">#</a> 3. expose / ref</h2><p>父组件获取子组件的属性或者调用子组件方法</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// Child.vue</span>
<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
    <span class="token comment">// 方法一 不适用于Vue3.2版本，该版本 useContext()已废弃</span>
    <span class="token keyword">import</span> <span class="token punctuation">{</span> useContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
    <span class="token keyword">const</span> ctx <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 对外暴露属性方法等都可以</span>
    ctx<span class="token punctuation">.</span><span class="token function">expose</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        childName<span class="token operator">:</span> <span class="token string">&quot;这是子组件的属性&quot;</span><span class="token punctuation">,</span>
        <span class="token function">someMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;这是子组件的方法&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    
    <span class="token comment">// 方法二 适用于Vue3.2版本, 不需要引入</span>
    <span class="token comment">// import { defineExpose } from &quot;vue&quot;</span>
    <span class="token function">defineExpose</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        childName<span class="token operator">:</span> <span class="token string">&quot;这是子组件的属性&quot;</span><span class="token punctuation">,</span>
        <span class="token function">someMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;这是子组件的方法&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token comment">// Parent.vue  注意 ref=&quot;comp&quot;</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>child ref<span class="token operator">=</span><span class="token string">&quot;comp&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>child<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>button <span class="token decorator"><span class="token at operator">@</span><span class="token function">click</span></span><span class="token operator">=</span><span class="token string">&quot;handlerClick&quot;</span><span class="token operator">&gt;</span>按钮<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
    <span class="token keyword">import</span> child <span class="token keyword">from</span> <span class="token string">&quot;./child.vue&quot;</span>
    <span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
    <span class="token keyword">const</span> comp <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> <span class="token function-variable function">handlerClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>comp<span class="token punctuation">.</span>value<span class="token punctuation">.</span>childName<span class="token punctuation">)</span> <span class="token comment">// 获取子组件对外暴露的属性</span>
        comp<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">someMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 调用子组件对外暴露的方法</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-attrs" tabindex="-1"><a class="header-anchor" href="#_4-attrs" aria-hidden="true">#</a> 4. attrs</h2><p>attrs：包含父作用域里除 class 和 style 除外的非 props 属性集合</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// Parent.vue 传送</span>
<span class="token operator">&lt;</span>child <span class="token operator">:</span>msg1<span class="token operator">=</span><span class="token string">&quot;msg1&quot;</span> <span class="token operator">:</span>msg2<span class="token operator">=</span><span class="token string">&quot;msg2&quot;</span> title<span class="token operator">=</span><span class="token string">&quot;3333&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>child<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
    <span class="token keyword">import</span> child <span class="token keyword">from</span> <span class="token string">&quot;./child.vue&quot;</span>
    <span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
    <span class="token keyword">const</span> msg1 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&quot;1111&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> msg2 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&quot;2222&quot;</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token comment">// Child.vue 接收</span>
<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
    <span class="token keyword">import</span> <span class="token punctuation">{</span> defineProps<span class="token punctuation">,</span> useContext<span class="token punctuation">,</span> useAttrs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
    <span class="token comment">// 3.2版本不需要引入 defineProps，直接用</span>
    <span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        msg1<span class="token operator">:</span> String
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// 方法一 不适用于 Vue3.2版本，该版本 useContext()已废弃</span>
    <span class="token keyword">const</span> ctx <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 如果没有用 props 接收 msg1 的话就是 { msg1: &quot;1111&quot;, msg2:&quot;2222&quot;, title: &quot;3333&quot; }</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>attrs<span class="token punctuation">)</span> <span class="token comment">// { msg2:&quot;2222&quot;, title: &quot;3333&quot; }</span>
    
    <span class="token comment">// 方法二 适用于 Vue3.2版本</span>
    <span class="token keyword">const</span> attrs <span class="token operator">=</span> <span class="token function">useAttrs</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>attrs<span class="token punctuation">)</span> <span class="token comment">// { msg2:&quot;2222&quot;, title: &quot;3333&quot; }</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-v-model" tabindex="-1"><a class="header-anchor" href="#_5-v-model" aria-hidden="true">#</a> 5. v-model</h2><p>可以支持多个数据双向绑定</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>
<span class="token comment">// Parent.vue</span>
<span class="token operator">&lt;</span>child v<span class="token operator">-</span>model<span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">&quot;key&quot;</span> v<span class="token operator">-</span>model<span class="token operator">:</span>value<span class="token operator">=</span><span class="token string">&quot;value&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>child<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
    <span class="token keyword">import</span> child <span class="token keyword">from</span> <span class="token string">&quot;./child.vue&quot;</span>
    <span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
    <span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&quot;1111&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&quot;2222&quot;</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token comment">// Child.vue</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>button <span class="token decorator"><span class="token at operator">@</span><span class="token function">click</span></span><span class="token operator">=</span><span class="token string">&quot;handlerClick&quot;</span><span class="token operator">&gt;</span>按钮<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
    
    <span class="token comment">// 方法一  不适用于 Vue3.2版本，该版本 useContext()已废弃</span>
    <span class="token keyword">import</span> <span class="token punctuation">{</span> useContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> emit <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token comment">// 方法二 适用于 Vue3.2版本，不需要引入</span>
    <span class="token comment">// import { defineEmits } from &quot;vue&quot;</span>
    <span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;value&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    
    <span class="token comment">// 用法</span>
    <span class="token keyword">const</span> <span class="token function-variable function">handlerClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&quot;update:key&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;新的key&quot;</span><span class="token punctuation">)</span>
        <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&quot;update:value&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;新的value&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-provide-inject" tabindex="-1"><a class="header-anchor" href="#_6-provide-inject" aria-hidden="true">#</a> 6. provide / inject</h2><p>provide / inject 为依赖注入 provide：可以让我们指定想要提供给后代组件的数据或 inject：在任何后代组件中接收想要添加在这个组件上的数据，不管组件嵌套多深都可以直接拿来用</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// Parent.vue</span>
<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
    <span class="token keyword">import</span> <span class="token punctuation">{</span> provide <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
    <span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;沐华&quot;</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token comment">// Child.vue</span>
<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
    <span class="token keyword">import</span> <span class="token punctuation">{</span> inject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
    <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token comment">// 沐华</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-vuex" tabindex="-1"><a class="header-anchor" href="#_7-vuex" aria-hidden="true">#</a> 7. Vuex</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// store/index.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuex&quot;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    state<span class="token operator">:</span><span class="token punctuation">{</span> count<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    getters<span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token function-variable function">getCount</span><span class="token operator">:</span> state <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>count
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    mutations<span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token function">add</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">{</span>
            state<span class="token punctuation">.</span>count<span class="token operator">++</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// main.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&quot;./App.vue&quot;</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&quot;./store&quot;</span>
<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// Page.vue</span>
<span class="token comment">// 方法一 直接使用</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> $store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>button <span class="token decorator"><span class="token at operator">@</span><span class="token function">click</span></span><span class="token operator">=</span><span class="token string">&quot;$store.commit(&#39;add&#39;)&quot;</span><span class="token operator">&gt;</span>按钮<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token comment">// 方法二 获取</span>
<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
    <span class="token keyword">import</span> <span class="token punctuation">{</span> useStore<span class="token punctuation">,</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuex&quot;</span>
    <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token comment">// 1</span>

    <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token comment">// 响应式，会随着vuex数据改变而改变</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span> <span class="token comment">// 1 </span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-mitt" tabindex="-1"><a class="header-anchor" href="#_8-mitt" aria-hidden="true">#</a> 8. mitt</h2><p>Vue3 中没有了 EventBus 跨组件通信，但是现在有了一个替代的方案 mitt.js，原理还是 EventBus</p><p>先安装 npm i mitt -S</p><p>然后像以前封装 bus 一样，封装一下</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// mitt.js</span>
<span class="token keyword">import</span> mitt <span class="token keyword">from</span> <span class="token string">&#39;mitt&#39;</span>
<span class="token keyword">const</span> mitt <span class="token operator">=</span> <span class="token function">mitt</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> mitt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后两个组件之间通信的使用</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 组件 A</span>
<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
<span class="token keyword">import</span> mitt <span class="token keyword">from</span> <span class="token string">&#39;./mitt&#39;</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    mitt<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;handleChange&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token comment">// 组件 B </span>
<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
<span class="token keyword">import</span> mitt <span class="token keyword">from</span> <span class="token string">&#39;./mitt&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> onUnmounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">const</span> <span class="token function-variable function">someMethed</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
mitt<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;handleChange&#39;</span><span class="token punctuation">,</span>someMethed<span class="token punctuation">)</span>
<span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    mitt<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token string">&#39;handleChange&#39;</span><span class="token punctuation">,</span>someMethed<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pinia" tabindex="-1"><a class="header-anchor" href="#pinia" aria-hidden="true">#</a> pinia</h2><h4 id="pinia的api" tabindex="-1"><a class="header-anchor" href="#pinia的api" aria-hidden="true">#</a> pinia的api</h4><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 定义仓库</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span>
<span class="token keyword">const</span> useMainStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;main&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
<span class="token function">state</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token comment">// 状态变量</span>
    count<span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
getters<span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">countTen</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">10</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
actions<span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> useMainStore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>pinia的使用</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
<span class="token keyword">import</span> useMainStore <span class="token keyword">from</span> <span class="token string">&#39;./store/index.js&#39;</span>
<span class="token keyword">const</span> mainStore <span class="token operator">=</span> <span class="token function">useMainStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  mainStore<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    count<span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">{</span>mainStore<span class="token punctuation">.</span>count<span class="token punctuation">}</span><span class="token punctuation">}</span>
    countTen<span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">{</span>mainStore<span class="token punctuation">.</span>countTen<span class="token punctuation">}</span><span class="token punctuation">}</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>button <span class="token decorator"><span class="token at operator">@</span><span class="token function">click</span></span><span class="token operator">=</span><span class="token string">&quot;increment&quot;</span><span class="token operator">&gt;</span>
    increment
  <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vuex-和-pinia-两者的比较" tabindex="-1"><a class="header-anchor" href="#vuex-和-pinia-两者的比较" aria-hidden="true">#</a> vuex 和 pinia 两者的比较</h2><p>pinia 没有 mutations，actions的使用不同，getters的使用是一致的 pinia 没有总出口全是模块化，需要定义模块名称，当多个模块需要协作的时候需要引入多个模块，vuex是有总入口的，在使用模块的化的时候不需要引入多个模块 pinia 在修改状态的时候不需要通过其他api，vuex需要通过commit，dispatch去修改</p>`,41),o=[e];function c(i,l){return s(),a("div",null,o)}const u=n(p,[["render",c],["__file","vue3组件通信大全.html.vue"]]);export{u as default};
