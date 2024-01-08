import{_ as e,o as a,c as l,d as s}from"./app-qTEUp92E.js";const d={},i=s(`<h1 id="b006-truly和falsely变量" tabindex="-1"><a class="header-anchor" href="#b006-truly和falsely变量" aria-hidden="true">#</a> B006-truly和falsely变量</h1><blockquote><p>if判断时的truly变量和falsely变量，这点和c语言有所不同，c语言直接判断true和false，只有是truly变量才会走到if语句内</p></blockquote><h2 id="truly-变量" tabindex="-1"><a class="header-anchor" href="#truly-变量" aria-hidden="true">#</a> truly 变量：</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>!!a === true 的变量
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="falsely-变量" tabindex="-1"><a class="header-anchor" href="#falsely-变量" aria-hidden="true">#</a> falsely 变量：</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>!!a === false 的变量
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="以下是falsely-变量-除此之外都是truly变量" tabindex="-1"><a class="header-anchor" href="#以下是falsely-变量-除此之外都是truly变量" aria-hidden="true">#</a> 以下是falsely 变量，除此之外都是truly变量</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>!!0 === false
!!NaN === false
!!&#39;&#39; === false
!!null === false
!!undefined === false
!!false === false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),n=[i];function r(t,c){return a(),l("div",null,n)}const f=e(d,[["render",r],["__file","B006-truly和falsely变量.html.vue"]]);export{f as default};
