import{_ as e,o as n,c as i,d}from"./app-gxPsN6Nl.js";const l={},s=d(`<p>#1.在下面的代码中 typeof a 和 typeof b 结果各自是什么？</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function foo() {
	let a = b = 0;
	a++;
	return a;
}

foo();
typeof a;     
typeof b;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#答案是：</p><p>&#39;undefined&#39; &#39;number&#39;</p><p>#解析：</p><p>let a = b = 0;</p><p>这一句中声明了一个局部变量a，和一个全局变量b，</p><p>#还有这种情况的有：</p><blockquote><p>1</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function foo(data) {
	for(i = 0; i &lt; data; i ++) {
		//.........
	}
}



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>2</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function foo() {
	i = 0;
	//........
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>3 <code> function foo() { let j = i = 0; //........ } </code> 这三种情况中i，都是全局变量了</p></blockquote><p>###上边这个题目可以演变为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function foo() {
	let a;
	window.b = 0;
	a = window.b;
	a++;
	return a;
}

foo();
typeof a;   // =&gt; &#39;undefined&#39;
typeof window.b; // =&gt; &#39;number&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),a=[s];function t(c,v){return n(),i("div",null,a)}const u=e(l,[["render",t],["__file","B001-偶然创建的全局变量.html.vue"]]);export{u as default};
