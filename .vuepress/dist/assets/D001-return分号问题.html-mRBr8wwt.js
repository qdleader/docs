import{_ as e,o as n,c as i,d}from"./app-1IAv0yAY.js";const s={},t=d(`<h2 id="_001" tabindex="-1"><a class="header-anchor" href="#_001" aria-hidden="true">#</a> 001</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function foo1() {
	return {
		bar: 1234
	}
}

function foo2() {
	return 
	{
		bar: 4567
	}
}

console.log(foo1());
console.log(foo2());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>result:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Object

undefined
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解析:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//         foo2()就等价于
// 			function foo2() {
// 				return;
// 				{
// 					bar:456
// 				}
// 			}
// 			在js中,一句独占一行会默认给加个分号(;),所以直接return就退出了.所以返回object 和undefined over
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),l=[t];function a(r,c){return n(),i("div",null,l)}const u=e(s,[["render",a],["__file","D001-return分号问题.html.vue"]]);export{u as default};
