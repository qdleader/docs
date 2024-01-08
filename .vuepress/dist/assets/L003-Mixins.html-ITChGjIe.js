import{_ as n,r as s,o as l,c as d,a as e,b as r,f as c,d as a}from"./app-tgHnmF2J.js";const v={},t=a(`<p>#mixins</p><blockquote><p>less允许我们将已有的class和id的样式应用到另一个不同的选择器上。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#circle {
	background-color:#333333;
	border-radius:100%;
}

#small-circle {
	width:50px;
	height:150px;
	#circle
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#写法2：
#circle {
	background-color:#333333;
	border-radius:100%;
}

#small-circle {
	width:50px;
	height:150px;
	#circle
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#Mixin 比较酷就是可以传参</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>写法3：

#circle(@size: 25px) {
	background-color:#333333;
	border-radius:100%;
	width:@size;
	height:@size;
}

#small-circle{
	#circle
}

#big-circle {
	#circle(100px)
}



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),u={href:"http://lesscss.org/features/#mixins-feature",target:"_blank",rel:"noopener noreferrer"};function m(b,o){const i=s("ExternalLinkIcon");return l(),d("div",null,[t,e("p",null,[e("a",u,[r("Mixin"),c(i)])])])}const p=n(v,[["render",m],["__file","L003-Mixins.html.vue"]]);export{p as default};
