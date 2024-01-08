import{_ as e,o as n,c as a,d as i}from"./app-xrgnhFxe.js";const s={},d=i(`<h2 id="_01-实现浅拷贝" tabindex="-1"><a class="header-anchor" href="#_01-实现浅拷贝" aria-hidden="true">#</a> 01.实现浅拷贝</h2><p>如果一个变量复制一个对象，那么两者的值会是同一个引用，其中一个改变，另一方也会相应改变。针对引用类型我们需要实现数据的拷贝。</p><p>1.用...实现</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const copy = {...{x:1}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-用oject-assign-实现" tabindex="-1"><a class="header-anchor" href="#_2-用oject-assign-实现" aria-hidden="true">#</a> 2.用Oject.assign 实现</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const copy = Object.assign({},{x:1})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>扩展运算符跟Object.assign({},obj)是一样的，对于对象中的值修改，是深拷贝，而里面的对象则是浅拷贝</p><p>但是呢</p><p>Object.assign(obj) 这么写就是单纯的引用了，无论里面是值还是对象</p><h2 id="_3-用slice-或concat-实现" tabindex="-1"><a class="header-anchor" href="#_3-用slice-或concat-实现" aria-hidden="true">#</a> 3.用slice(或concat([]))实现</h2><pre><code>\`\`\`
let arr = [1,3,{
	x:1
}]
let copy = arr.slice();
\`\`\`
</code></pre><p>数组中的值的变化是，深拷贝，对象变化就是浅拷贝同1，2</p><h2 id="_4-新建对象-循环添加" tabindex="-1"><a class="header-anchor" href="#_4-新建对象-循环添加" aria-hidden="true">#</a> 4.新建对象，循环添加</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>	let obj2 = {}
	for(let key in obj){
			obj2[key] = obj[key]
	}
	obj2.name = &#39;CCC&#39;

	\`\`\`



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),t=[d];function c(r,l){return n(),a("div",null,t)}const v=e(s,[["render",c],["__file","S001-实现浅拷贝★.html.vue"]]);export{v as default};
