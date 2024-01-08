import{_ as e,o as n,c as a,d as i}from"./app-otDwoQZb.js";const d={},r=i(`<p>1.结果打印什么?★</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var x = 21;
var girl = function() {
	console.log(x);
	var x = 20;
}
girl();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2><p>undefined</p><h2 id="解析" tabindex="-1"><a class="header-anchor" href="#解析" aria-hidden="true">#</a> 解析</h2><blockquote><p>当函数后执行时候,当前局部作用域中声明了x,但打印时候没有赋值,因此他不回去查找全局变量,所以为undefined</p></blockquote>`,6),s=[r];function t(c,l){return n(),a("div",null,s)}const u=e(d,[["render",t],["__file","B003-变量提升2★.html.vue"]]);export{u as default};
