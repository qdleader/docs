import{_ as e,o as n,c as a,d as s}from"./app-G0TSq-iO.js";const t={},d=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>	var a = [1,2,3];
	a[10] = 99; //会导致崩溃吗/
	console.log(a[6]) //输出什么?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答案：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>不会
a[6]输出 undefined
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,3),i=[d];function l(r,c){return n(),a("div",null,i)}const _=e(t,[["render",l],["__file","Arr002-数组的直接赋值.html.vue"]]);export{_ as default};
