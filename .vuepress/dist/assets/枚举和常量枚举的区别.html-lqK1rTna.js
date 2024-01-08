import{_ as n,o as s,c as a,d as e}from"./app-C59QzqDT.js";const i={},c=e(`<h2 id="枚举和常量枚举的区别" tabindex="-1"><a class="header-anchor" href="#枚举和常量枚举的区别" aria-hidden="true">#</a> 枚举和常量枚举的区别</h2><p>枚举和常量枚举（const枚举）：使用枚举可以清晰地表达意图或创建一组有区别的用例</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 枚举</span>
<span class="token keyword">enum</span> Color <span class="token punctuation">{</span> Red<span class="token punctuation">,</span> Green<span class="token punctuation">,</span> Blue <span class="token punctuation">}</span>
<span class="token comment">// 常量枚举</span>
<span class="token keyword">const</span> <span class="token keyword">enum</span> Color <span class="token punctuation">{</span> Red<span class="token punctuation">,</span> Green<span class="token punctuation">,</span> Blue <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="两者的区别" tabindex="-1"><a class="header-anchor" href="#两者的区别" aria-hidden="true">#</a> 两者的区别：</h2><p>枚举会被编译时会编译成一个对象，可以被当作对象使用</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 枚举</span>
<span class="token keyword">enum</span> Color <span class="token punctuation">{</span>
  Red<span class="token punctuation">,</span>
  Green<span class="token punctuation">,</span>
  Blue
<span class="token punctuation">}</span>
<span class="token keyword">var</span> sisterAn <span class="token operator">=</span> Color<span class="token punctuation">.</span>Red
<span class="token comment">// 会被编译成 JavaScript 中的 var sisterAn = Color.Red</span>
<span class="token comment">// 即在运行执行时，它将会查找变量 Color 和 Color.Red</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>const 枚举会在 typescript 编译期间被删除，const 枚举成员在使用的地方会被内联进来，避免额外的性能开销</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 常量枚举</span>
<span class="token keyword">const</span> <span class="token keyword">enum</span> Color <span class="token punctuation">{</span>
  Red<span class="token punctuation">,</span>
  Green<span class="token punctuation">,</span>
  Blue
<span class="token punctuation">}</span>
<span class="token keyword">var</span> sisterAn <span class="token operator">=</span> Color<span class="token punctuation">.</span>Red
<span class="token comment">// 会被编译成 JavaScript 中的 var sisterAn = 0</span>
<span class="token comment">// 在运行时已经没有 Color 变量</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由此可见，使用 常量枚举 会有更好的性能。</p><p>定义的枚举，在经过编译器编译后是一个对象，这个对象我们可以在程序运行时使用，前面有说到。但有时定义枚举可能只是为了让程序可读性更好，而不需要编译后的代码，即不需要编译成对象。typescript中考虑到这种情况，所以加入了 const enum (完全嵌入的枚举)。</p>`,10),t=[c];function l(o,p){return s(),a("div",null,t)}const r=n(i,[["render",l],["__file","枚举和常量枚举的区别.html.vue"]]);export{r as default};
