import{_ as n,o as s,c as a,d as p}from"./app-tSvYcIf0.js";const t={},e=p(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">compose</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// 将接收的参数存到一个数组， args == [multiply, add]</span>
  <span class="token keyword">const</span> args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> args<span class="token punctuation">.</span><span class="token function">reduceRight</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">cb</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 我们来验证下这个方法</span>
<span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token parameter">x</span> <span class="token operator">=&gt;</span> x <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">multiply</span> <span class="token operator">=</span> <span class="token parameter">x</span> <span class="token operator">=&gt;</span> x <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> calculate <span class="token operator">=</span> <span class="token function">compose</span><span class="token punctuation">(</span>multiply<span class="token punctuation">,</span> add<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token function">calculate</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 结果还是200</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的compose函数使用ES6的话会更加简洁：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">compose</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token parameter">x</span> <span class="token operator">=&gt;</span> args<span class="token punctuation">.</span><span class="token function">reduceRight</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">cb</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Redux的中间件就是用compose实现的，webpack中loader的加载顺序也是从右往左，这是因为他也是compose实现的。</p><h2 id="pipe函数" tabindex="-1"><a class="header-anchor" href="#pipe函数" aria-hidden="true">#</a> pipe函数</h2><p>pipe函数跟compose函数的左右是一样的，也是将参数平铺，只不过他的顺序是从左往右。我们来实现下，只需要将reduceRight改成reduce就行了：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">pipe</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> args<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">cb</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 参数顺序改为从左往右</span>
<span class="token keyword">let</span> calculate <span class="token operator">=</span> <span class="token function">pipe</span><span class="token punctuation">(</span>add<span class="token punctuation">,</span> multiply<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token function">calculate</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 结果还是200</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ES6写法：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">const</span> <span class="token function-variable function">pipe</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token parameter">x</span> <span class="token operator">=&gt;</span> args<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">cb</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="compose函数" tabindex="-1"><a class="header-anchor" href="#compose函数" aria-hidden="true">#</a> compose函数</h2><p>compose函数可以将需要嵌套执行的函数平铺，嵌套执行就是一个函数的返回值将作为另一个函数的参数。我们考虑一个简单的需求：</p><p>给定一个输入值x，先给这个值加10，然后结果乘以10 这个需求很简单，直接一个计算函数就行：</p><p>const calculate = x =&gt; (x + 10) * 10; let res = calculate(10); console.log(res); // 200 但是根据我们之前讲的函数式编程，我们可以将复杂的几个步骤拆成几个简单的可复用的简单步骤，于是我们拆出了一个加法函数和一个乘法函数:</p><p>const add = x =&gt; x + 10; const multiply = x =&gt; x * 10;</p><p>// 我们的计算改为两个函数的嵌套计算，add函数的返回值作为multiply函数的参数 let res = multiply(add(10)); console.log(res); // 结果还是200 上面的计算方法就是函数的嵌套执行，而我们compose的作用就是将嵌套执行的方法作为参数平铺，嵌套执行的时候，里面的方法也就是右边的方法最开始执行，然后往左边返回，我们的compose方法也是从右边的参数开始执行，所以我们的目标就很明确了，我们需要一个像这样的compose方法：</p><p>// 参数从右往左执行，所以multiply在前，add在后 let res = compose(multiply, add)(10); 在讲这个之前我们先来看一个需要用到的函数Array.prototype.reduce</p><p>Array.prototype.reduce 数组的reduce方法可以实现一个累加效果，它接收两个参数，第一个是一个累加器方法，第二个是初始化值。累加器接收四个参数，第一个是上次的计算值，第二个是数组的当前值，主要用的就是这两个参数，后面两个参数不常用，他们是当前index和当前迭代的数组：</p><p>const arr = [[1, 2], [3, 4], [5, 6]]; // prevRes的初始值是传入的[]，以后会是每次迭代计算后的值 const flatArr = arr.reduce((prevRes, item) =&gt; prevRes.concat(item), []);</p><p>console.log(flatArr); // [1, 2, 3, 4, 5, 6] Array.prototype.reduceRight Array.prototype.reduce会从左往右进行迭代，如果需要从右往左迭代，用Array.prototype.reduceRight就好了</p><p>const arr = [[1, 2], [3, 4], [5, 6]]; // prevRes的初始值是传入的[]，以后会是每次迭代计算后的值 const flatArr = arr.reduceRight((prevRes, item) =&gt; prevRes.concat(item), []);</p><p>console.log(flatArr); // [5, 6, 3, 4, 1, 2] 那这个compose方法要怎么实现呢，这里需要借助Array.prototype.reduceRight:</p>`,21),o=[e];function c(l,u){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","S040-手写compose和pipe函数.html.vue"]]);export{r as default};
