import{_ as e,o as n,c as i,d as a}from"./app-otDwoQZb.js";const d={},r=a(`<h1 id="下面结果输出什么" tabindex="-1"><a class="header-anchor" href="#下面结果输出什么" aria-hidden="true">#</a> 下面结果输出什么？</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var b =1;
function outer() {
	var b = 2
	function inner() {
		b++;
		var b = 3;
		console.log(b)
	}
	inner()
}
outer()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="解析" tabindex="-1"><a class="header-anchor" href="#解析" aria-hidden="true">#</a> 解析</h1><p>首先执行outer(),因为outer 里面的b是重新声明并被赋值的，这里的b为2，</p><p>然后走里面的inner方法，由于inner 里面也有个b的声明所以这里面的b跟外面的b是两回事了。就等价于</p><p>function inner() { var b; // 此时b为undefined b ++; // 此时b为NaN b = 3 // 此时b为3 }</p>`,8),s=[r];function t(l,c){return n(),i("div",null,s)}const v=e(d,[["render",t],["__file","B005-变量提升.html.vue"]]);export{v as default};
