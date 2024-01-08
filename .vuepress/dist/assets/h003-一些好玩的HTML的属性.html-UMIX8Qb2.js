import{_ as s,o as n,c as a,d as e}from"./app-qTEUp92E.js";const t={},o=e(`<h3 id="inputmode" tabindex="-1"><a class="header-anchor" href="#inputmode" aria-hidden="true">#</a> inputmode</h3><p>在移动端，inputmode 会影响弹出的键盘布局</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 默认值</span>
<span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span> inputmode<span class="token operator">=</span><span class="token string">&quot;text&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token comment">// 电话号码</span>
<span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span> inputmode<span class="token operator">=</span><span class="token string">&quot;tel&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token comment">// url</span>
<span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span> inputmode<span class="token operator">=</span><span class="token string">&quot;url&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token comment">// 邮箱</span>
<span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span> inputmode<span class="token operator">=</span><span class="token string">&quot;email&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token comment">// 数字</span>
<span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span> inputmode<span class="token operator">=</span><span class="token string">&quot;numeric&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token comment">// 小数</span>
<span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span> inputmode<span class="token operator">=</span><span class="token string">&quot;decimal&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token comment">// 搜索</span>
<span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span> inputmode<span class="token operator">=</span><span class="token string">&quot;search&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>### a 元素的 download 属性

<span class="token operator">&lt;</span>a<span class="token operator">&gt;</span> 元素的 download 属性
网页上到处都是链接，所以我们喜欢能增强链接功能的属性，download 属性就有这种功能，它可以把链接设置为点击即下载。

<span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">&quot;/example.pdf&quot;</span> download<span class="token operator">&gt;</span>Download File<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
在没有值的情况下，download 属性会强制下载链接页面；如果我们提供值，浏览器会将该值作为下载资源的建议文件名。

<span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">&quot;/example.pdf&quot;</span> download<span class="token operator">=</span><span class="token string">&quot;my-download.pdf&quot;</span><span class="token operator">&gt;</span>Download File<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>




### spellcheck 
该属性可以启用拼写检查，通常用于富文本编辑
<span class="token operator">&lt;</span>div contenteditable spellcheck<span class="token operator">=</span><span class="token string">&quot;true&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>


### translate

<span class="token operator">&lt;</span>div translate<span class="token operator">=</span><span class="token string">&quot;yes&quot;</span><span class="token operator">&gt;</span>how are you<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),p=[o];function l(r,i){return n(),a("div",null,p)}const d=s(t,[["render",l],["__file","h003-一些好玩的HTML的属性.html.vue"]]);export{d as default};
