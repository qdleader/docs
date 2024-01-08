import{_ as s,o as n,c as a,d as e}from"./app-Ni1_oyYA.js";const p={},t=e(`<h2 id="extends" tabindex="-1"><a class="header-anchor" href="#extends" aria-hidden="true">#</a> extends</h2><p>继承，一个新的接口或者类，从父类或者接口继承所有的属性和方法，不可以重写属性，但可以重写方法</p><p>ts 中 extends 可以理解为 es6 class 对应的 extends 可以实现类的继承</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Son</span> <span class="token keyword">extends</span> <span class="token class-name">Father</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以实现和接口的继承</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">interface</span> <span class="token class-name">IPeople</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">IPerson</span> <span class="token keyword">extends</span> <span class="token class-name">IPeople</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">sex</span><span class="token operator">:</span> string<span class="token punctuation">;</span>  <span class="token comment">// IPerson上除了从IPeople继承的属性，还增加了sex属性</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="implements" tabindex="-1"><a class="header-anchor" href="#implements" aria-hidden="true">#</a> implements</h2><p>实现，一个新的类，从父类或者接口实现所有的属性和方法，同时可以重写属性和方法，包含一些新的功能</p><p>implements 理解为实现，A implements B，A 上要有 B 对应的属性和方法,不能用于两个 interface 之间 类和类之间 class Son implements Father {} // 用于类之间，此时没有继承的效果，而是要求Son上要有定义Father类的属性方法 类和接口之间： class Son implements IFather {} // 用接口去规范class， 要求Son的属性和方法等要按照IFather接口中定义的来</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">interface</span> <span class="token class-name">IPerson</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">IPeoPle</span> <span class="token keyword">extends</span> <span class="token class-name">IPerson</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">sex</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token keyword">implements</span> <span class="token class-name">IPerson</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">IRoles</span> <span class="token keyword">extends</span> <span class="token class-name">User</span><span class="token punctuation">{</span>

<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Roles</span> <span class="token keyword">extends</span> <span class="token class-name">User</span><span class="token punctuation">{</span>
  
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),l=[t];function c(i,o){return n(),a("div",null,l)}const d=s(p,[["render",c],["__file","implements和extends的区别.html.vue"]]);export{d as default};
