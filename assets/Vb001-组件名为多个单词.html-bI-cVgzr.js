import{_ as n,o as s,c as a,d as e}from"./app-tSvYcIf0.js";const i={},l=e(`<h3 id="组件的命名为多个单词" tabindex="-1"><a class="header-anchor" href="#组件的命名为多个单词" aria-hidden="true">#</a> 组件的命名为多个单词</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>#组件名应该始终是多个单词的，根组件 App 以及 <span class="token operator">&lt;</span>transition<span class="token operator">&gt;</span>、<span class="token operator">&lt;</span>component<span class="token operator">&gt;</span> 之类的 Vue 内置组件除外。
这样避免和html元素冲突。



bad eg：


Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;todo&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
	<span class="token comment">//...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;ToDo&#39;</span>
	<span class="token comment">//..</span>
<span class="token punctuation">}</span>






good eg<span class="token operator">:</span>


Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;todo-item&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
	<span class="token comment">//..</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;TodoItem&#39;</span><span class="token punctuation">,</span>
	<span class="token comment">//..</span>
<span class="token punctuation">}</span>



我认为驼峰方式 效果最好，因为大多数<span class="token constant">IDE</span>自动完成功能都支持它。

bad


mycomponent<span class="token punctuation">.</span>vue
myComponent<span class="token punctuation">.</span>vue
Mycomponent<span class="token punctuation">.</span>vue



good


MyComponent<span class="token punctuation">.</span>vue

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[l];function c(p,o){return s(),a("div",null,t)}const u=n(i,[["render",c],["__file","Vb001-组件名为多个单词.html.vue"]]);export{u as default};
