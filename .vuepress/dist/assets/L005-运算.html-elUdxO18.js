import{_ as e,o as i,c as n,d}from"./app-FRQgbCNf.js";const s={},l=d(`<p>#L005 less 运算</p><p>#可以对数值和颜色进行基本的数学运算</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@div-width:100px;
@color:#3a9f4;


div {
	height:50px;
	display:inline-block;
}

#left {
	width:@div-width;
	color:@color;
}
#right{
	width:@div-width*2;
	color:@color -100;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.在css中我们可以使用100vh表示屏幕高度，我们还可以通过calc(expression)来动态计算宽高，于是便有了如下代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>height:calc(100vh - 50px);
但出来的结果为什么是：


height:calc(50vh);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你来下面这样写就可以啦：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>height: calc(~&quot;100vh - 50px&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7),a=[l];function c(v,t){return i(),n("div",null,a)}const u=e(s,[["render",c],["__file","L005-运算.html.vue"]]);export{u as default};
