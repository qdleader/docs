import{_ as e,o as a,c as n,d as s}from"./app-otDwoQZb.js";const t={},o=s(`<h2 id="前端常遇到的解决跨域问题解决的尝试方案" tabindex="-1"><a class="header-anchor" href="#前端常遇到的解决跨域问题解决的尝试方案" aria-hidden="true">#</a> 前端常遇到的解决跨域问题解决的尝试方案</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>	axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">withCredentials</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	or axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>withCredentials <span class="token operator">=</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>withCredentials: false, // default
</code></pre><p>首先将axios.defaults.withCredentials设置为true，允许请求携带Cookie；设置该属性后访问会报跨域错误，需要后端支持，</p><p>后端修改header信息</p><blockquote><p>前端设置了该属性为true时，后端需要设置Access-Control-Allow-Origin为前端项目的源地址，不可设置为*(此时设置为*是不生效的，会一直报跨域)；</p></blockquote><blockquote><p>此外还需要设置Access-Control-Allow-Creaentials为true</p></blockquote><h3 id="关于-withcredentials-属性的介绍" tabindex="-1"><a class="header-anchor" href="#关于-withcredentials-属性的介绍" aria-hidden="true">#</a> 关于 withCredentials 属性的介绍</h3><blockquote><p>不同域的 XMLHttpRequest 响应可以为自己的域设置 cookie 值 不会影响到同源请求</p></blockquote><p>mdn[https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/withCredentials]</p>`,10),i=[o];function c(l,p){return a(),n("div",null,i)}const d=e(t,[["render",c],["__file","前端常遇到的解决跨域问题解决的尝试方案.html.vue"]]);export{d as default};
