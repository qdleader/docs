import{_ as n,o as a,c as s,d as e}from"./app-tSvYcIf0.js";const t={},p=e(`<h1 id="reactive对象重新赋值后丢失响应而ref不会" tabindex="-1"><a class="header-anchor" href="#reactive对象重新赋值后丢失响应而ref不会" aria-hidden="true">#</a> reactive对象重新赋值后丢失响应而ref不会</h1><p>为什么 ref 调用 reactive 处理对象，为什么重新赋值后，没有失去响应式，但是 reactive 却失去了响应式？</p><p>我们去看看源码咋写的：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">RefImpl</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> __v_isShallow</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>__v_isShallow <span class="token operator">=</span> __v_isShallow<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>dep <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>__v_isRef <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_rawValue <span class="token operator">=</span> __v_isShallow <span class="token operator">?</span> value <span class="token operator">:</span> <span class="token function">toRaw</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_value <span class="token operator">=</span> __v_isShallow <span class="token operator">?</span> value <span class="token operator">:</span> <span class="token function">toReactive</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">get</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">trackRefValue</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_value<span class="token punctuation">;</span> <span class="token comment">// getter 返回的是_value的值</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">set</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token parameter">newVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        newVal <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>__v_isShallow <span class="token operator">?</span> newVal <span class="token operator">:</span> <span class="token function">toRaw</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hasChanged</span><span class="token punctuation">(</span>newVal<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_rawValue<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>_rawValue <span class="token operator">=</span> newVal<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>_value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>__v_isShallow <span class="token operator">?</span> newVal <span class="token operator">:</span> <span class="token function">toReactive</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// setter 调用 toReactive 方法</span>
            <span class="token function">triggerRefValue</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> newVal<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们读取 xxx.value 值的时候，getter 返回的是 xxx._value 的值，就是说，ref 定义的数据，value 和 _value 的值是一样的 我们修改 xxx.value 值的时候，setter 调用 toReactive 方法</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">toReactive</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">isObject</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token function">reactive</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">:</span> value<span class="token punctuation">;</span>

toReactive 方法判断是否是对象，是的话就调用 reactive 方法（印证了官网说的，ref 定义对象时，底层调用 reactive 方法实现）
<span class="token keyword">function</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// if trying to observe a readonly proxy, return the readonly version.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isReadonly</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> target<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">createReactiveObject</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> mutableHandlers<span class="token punctuation">,</span> mutableCollectionHandlers<span class="token punctuation">,</span> reactiveMap<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>reactive 方法，先判断数据是否是 “只读” 的，不是就返回 createReactiveObject 方法处理后的数据</p><p>createReactiveObject 方法将对象通过 proxy 处理为响应式数据</p><h2 id="结论" tabindex="-1"><a class="header-anchor" href="#结论" aria-hidden="true">#</a> 结论</h2><p>ref 定义数据（包括对象）时，都会变成 RefImpl(Ref 引用对象) 类的实例，无论是修改还是重新赋值都会调用 setter，都会经过 reactive 方法处理为响应式对象。 但是 reactive 定义数据（必须是对象），是直接调用 reactive 方法处理成响应式对象。如果重新赋值，就会丢失原来响应式对象的引用地址，变成一个新的引用地址，这个新的引用地址指向的对象是没有经过 reactive 方法处理的，所以是一个普通对象，而不是响应式对象</p><h3 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h3><p>使用 ref() 定义响应式变量 （推荐此方法，虽然需要多写 .value。但是可以避免很多坑） 在目标对象外边再多定义一个变量 let obj = reactive({ targetObj: {a:1,b:2}})，重新赋值时 obj.targetObj = {c:1,d:2}，不会丢失响应式，但是也是要多写一个 obj. 的前缀 （推荐方法一）</p>`,12),o=[p];function c(l,i){return a(),s("div",null,o)}const r=n(t,[["render",c],["__file","reactive对象重新赋值后丢失响应而ref不会.html.vue"]]);export{r as default};
