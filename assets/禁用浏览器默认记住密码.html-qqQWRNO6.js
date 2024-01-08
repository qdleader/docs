import{_ as s,o as a,c as n,d as t}from"./app-tSvYcIf0.js";const p={},o=t(`<h2 id="方法1" tabindex="-1"><a class="header-anchor" href="#方法1" aria-hidden="true">#</a> 方法1</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>Form
  <span class="token punctuation">{</span><span class="token operator">...</span>formItemLayout<span class="token punctuation">}</span>
  form<span class="token operator">=</span><span class="token punctuation">{</span>form<span class="token punctuation">}</span>
  <span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>Form<span class="token punctuation">.</span>Item name<span class="token operator">=</span><span class="token string">&quot;username&quot;</span> label<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;用户名&quot;</span><span class="token punctuation">}</span> <span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>Input <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Form<span class="token punctuation">.</span>Item<span class="token operator">&gt;</span>
  
  <span class="token comment">// 中间加一个类型为 password、隐藏的输入框</span>
  <span class="token operator">&lt;</span>Form<span class="token punctuation">.</span>Item style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>Input name<span class="token operator">=</span><span class="token string">&quot;password&quot;</span> style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">visibility</span><span class="token operator">:</span> <span class="token string">&#39;hidden&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Form<span class="token punctuation">.</span>Item<span class="token operator">&gt;</span>
  
  <span class="token operator">&lt;</span>Form<span class="token punctuation">.</span>Item  name<span class="token operator">=</span><span class="token string">&quot;password&quot;</span> label<span class="token operator">=</span><span class="token string">&quot;密码&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>Input type<span class="token operator">=</span><span class="token string">&quot;password&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Form<span class="token punctuation">.</span>Item<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>Form<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法2" tabindex="-1"><a class="header-anchor" href="#方法2" aria-hidden="true">#</a> 方法2</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>Form
  <span class="token punctuation">{</span><span class="token operator">...</span>formItemLayout<span class="token punctuation">}</span>
  form<span class="token operator">=</span><span class="token punctuation">{</span>form<span class="token punctuation">}</span>
  <span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>Form<span class="token punctuation">.</span>Item name<span class="token operator">=</span><span class="token string">&quot;username&quot;</span> label<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;用户名&quot;</span><span class="token punctuation">}</span> <span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>Input <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Form<span class="token punctuation">.</span>Item<span class="token operator">&gt;</span>
  
  <span class="token operator">&lt;</span>Form<span class="token punctuation">.</span>Item  name<span class="token operator">=</span><span class="token string">&quot;password&quot;</span> label<span class="token operator">=</span><span class="token string">&quot;密码&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>Input type<span class="token operator">=</span><span class="token string">&quot;password&quot;</span> autoComplete<span class="token operator">=</span><span class="token string">&quot;new-password&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Form<span class="token punctuation">.</span>Item<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>Form<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),e=[o];function r(l,c){return a(),n("div",null,e)}const u=s(p,[["render",r],["__file","禁用浏览器默认记住密码.html.vue"]]);export{u as default};
