import{_ as e,o as t,c as o,d as i}from"./app-G0TSq-iO.js";const n={},r=i(`<h1 id="s013-字符串原位反转" tabindex="-1"><a class="header-anchor" href="#s013-字符串原位反转" aria-hidden="true">#</a> S013-字符串原位反转</h1><p>将“I am the good boy”反转变为 “I ma eht doog yob”。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>	let str = &#39;I am the good boy&#39;
	let arr1 = str.split(&#39; &#39;).reverse()
	arr1
	(5) [&quot;boy&quot;, &quot;good&quot;, &quot;the&quot;, &quot;am&quot;, &quot;I&quot;]
	let arr2 = arr1.join(&#39; &#39;)
	arr2
	&quot;boy good the am I&quot;
	let arr3 = arr2.split(&#39;&#39;).reverse()
	arr3
	(17) [&quot;I&quot;, &quot; &quot;, &quot;m&quot;, &quot;a&quot;, &quot; &quot;, &quot;e&quot;, &quot;h&quot;, &quot;t&quot;, &quot; &quot;, &quot;d&quot;, &quot;o&quot;, &quot;o&quot;, &quot;g&quot;, &quot; &quot;, &quot;y&quot;, &quot;o&quot;, &quot;b&quot;]
	arr3.join(&#39;&#39;)
	&quot;I ma eht doog yob&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="解决" tabindex="-1"><a class="header-anchor" href="#解决" aria-hidden="true">#</a> 解决</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function reverseInPlace(str) {
	return str.split(&#39; &#39;).reverse().join(&#39; &#39;).split(&#39;&#39;).reverse().join(&#39;&#39;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种问题你说你直接打印，面试时候没地方打印出来的，直接想很可能绕进去。 推荐直接记住 可以这样记：</p><p>一半一半 两个部分都是： split.reverse.join</p><p>然后前面都是&#39; &#39;;</p><p>后面两个都是&#39;&#39;</p>`,9),u=[r];function a(s,d){return t(),o("div",null,u)}const c=e(n,[["render",a],["__file","S013-字符串原位反转.html.vue"]]);export{c as default};
