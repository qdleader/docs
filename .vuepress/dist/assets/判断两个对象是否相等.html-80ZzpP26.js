import{_ as n,o as s,c as a,d as p}from"./app-xrgnhFxe.js";const e={},t=p(`<p>JavaScript 中，如何判断两个对象是否相等？</p><p>前言：如何判断两个对象是否相等？</p><p>两个Object类型对象，即使拥有相同属性、相同值，当使用 == 或 === 进行比较时，也不认为他们相等。这就是因为他们是通过引用（内存里的位置）比较的，不像基本类型是通过值比较的。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;qdleader&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sex</span> <span class="token operator">:</span> <span class="token string">&quot;male&quot;</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">var</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;qdleader&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sex</span> <span class="token operator">:</span> <span class="token string">&quot;male&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>console.log(obj1 === obj2); // false</p><p>但是如果浅拷贝指向同一内存的时候，此时两个对象相等。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;qdleader&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sex</span> <span class="token operator">:</span> <span class="token string">&quot;male&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
 
<span class="token keyword">var</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;qdleader&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sex</span> <span class="token operator">:</span> <span class="token string">&quot;male&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
 
<span class="token keyword">var</span> obj3 <span class="token operator">=</span> obj1<span class="token punctuation">;</span>
 
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1 <span class="token operator">===</span> obj3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
 
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2 <span class="token operator">===</span> obj3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>正如你所看想的，检查对象的“值相等”我们基本上是要遍历的对象的每个属性，看看它们是否相等</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * @param x {Object} 对象1
 * @param y {Object} 对象2
 * @return  {Boolean} true 为相等，false 为不等
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">deepEqual</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 指向同一内存时</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">===</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">==</span> <span class="token string">&quot;object&quot;</span> <span class="token operator">&amp;&amp;</span> x <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> y <span class="token operator">==</span> <span class="token string">&quot;object&quot;</span> <span class="token operator">&amp;&amp;</span> y <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">!==</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> prop <span class="token keyword">in</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>y<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>prop<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">deepEqual</span><span class="token punctuation">(</span>x<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">,</span> y<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>虽然这个简单的实现适用于我们的例子中，有很多情况下，它是不能处理。例如：</p><p>如果该属性值之一本身就是一个对象吗？ 如果属性值中的一个是NaN（在JavaScript中，是不是等于自己唯一的价值？） 如果一个属性的值为undefined，而另一个对象没有这个属性（因而计算结果为不确定？） 结语： 检查对象的“值相等”的一个强大的方法，最好是依靠完善的测试库，涵盖了各种边界情况。Underscore和LoDash有一个名为_.isEqual()方法，用来比较好的处理深度对象的比较。</p><p>最后附上Underscore里的_.isEqual()源码地址：[https://github.com/lessfish/underscore-analysis/blob/master/underscore-1.8.3.js/src/underscore-1.8.3.js#L1094-L1190]</p><p>或如果比较的两个对象的key顺序都一致</p><p>可以用 object.is &amp;&amp; JSON.stringify()</p>`,14),o=[t];function c(l,i){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","判断两个对象是否相等.html.vue"]]);export{r as default};
