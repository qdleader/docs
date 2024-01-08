import{_ as n,o as s,c as a,d as t}from"./app-otDwoQZb.js";const p={},e=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>手写数据双向绑定，vue实现双向绑定的原理就是Object<span class="token punctuation">.</span>defineProperty，重写其中的<span class="token keyword">get</span>，<span class="token keyword">set</span>方法
<span class="token operator">&lt;</span>input id<span class="token operator">=</span><span class="token string">&quot;txt&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
   <span class="token operator">&lt;</span>p id<span class="token operator">=</span><span class="token string">&quot;show-txt&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>


   <span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
     <span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
       <span class="token literal-property property">txt</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
     <span class="token punctuation">}</span><span class="token punctuation">;</span>
     <span class="token keyword">let</span> newData <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>obj <span class="token punctuation">}</span>
     Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;txt&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
       <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
         console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;读取&#39;</span><span class="token punctuation">)</span>
         <span class="token keyword">return</span> obj<span class="token punctuation">.</span>txt
       <span class="token punctuation">}</span><span class="token punctuation">,</span>
       <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">newValue</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
         console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;设置&#39;</span><span class="token punctuation">,</span> newValue<span class="token punctuation">)</span>
         newData<span class="token punctuation">.</span>txt <span class="token operator">=</span> newValue
         document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value <span class="token operator">=</span> newValue<span class="token punctuation">;</span>
         document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;show-txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> newValue<span class="token punctuation">;</span>
       <span class="token punctuation">}</span><span class="token punctuation">,</span>
     <span class="token punctuation">}</span><span class="token punctuation">)</span>
     document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;keyup&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       obj<span class="token punctuation">.</span>txt <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
     <span class="token punctuation">}</span><span class="token punctuation">)</span>
     obj<span class="token punctuation">.</span>txt <span class="token operator">=</span> <span class="token string">&#39;qdleader&#39;</span>
   <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Proxy</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;zs&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> newData <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span>obj<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span><span class="token punctuation">{</span>
    <span class="token comment">//obj 为目标对象, attr 为对象的属性</span>
    <span class="token function">get</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span>attr<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//当我们获取代理对象的属性值是会走这个方法</span>
        <span class="token keyword">return</span> obj<span class="token punctuation">[</span>attr<span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// obj为目标对象, attr为属性名, value为属性值</span>
    <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span>attr<span class="token punctuation">,</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//当我们设置代理对象的属性值是会走这个方法</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>attr <span class="token operator">===</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// obj[attr] = value</span>
            newData<span class="token punctuation">.</span>txt <span class="token operator">=</span> value
            document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#input1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
            document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#box&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> value<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//表示成功</span>
         <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

proxy<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token number">1231</span>


document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;keyup&#39;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;e&quot;</span><span class="token punctuation">,</span>e<span class="token punctuation">)</span>
  proxy<span class="token punctuation">.</span>name <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[e];function c(l,u){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","s007-手写一个数据双向绑定.html.vue"]]);export{r as default};
