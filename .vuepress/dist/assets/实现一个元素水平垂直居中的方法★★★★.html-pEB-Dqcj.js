import{_ as e,o as i,c as n,d as s}from"./app-Ni1_oyYA.js";const l={},d=s(`<h1 id="实现一个元素水平垂直居中的方法★★★★" tabindex="-1"><a class="header-anchor" href="#实现一个元素水平垂直居中的方法★★★★" aria-hidden="true">#</a> 实现一个元素水平垂直居中的方法★★★★</h1><h1 id="重要程度★★★★" tabindex="-1"><a class="header-anchor" href="#重要程度★★★★" aria-hidden="true">#</a> 重要程度★★★★</h1><p>1.absolute + 负margin</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.parent {
	position:relative;
}
.son {
	position:absolute;
	left:50%;
	top:50%;
	width:100px;
	height:100px;
	margin-left:-50px;
	margin-top:-50px;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.absolute + margin auto</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.parent {
	position:relative;
}

.son {
	position:absolute;
	left:0;
	top:0;
	right:0;
	bottom:0;
	margin:auto;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.flex</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.parent {
	display:flex;
	align-items:center;
	justify-content:center;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.absolute + calc</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.parent {
	position:relative;
}
.son {
	position:absolute;
	width:100px;
	height:100px;
	left:calc(50% - 50px);
	top:calc(50% - 50px);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5.absolute + transform</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.parent {
	position:relative;
}
.son {
	position:absolute;
	left:50%;
	top:50%;
	transform:translate(-50%,-50%);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6.css-table</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.parent {
	display:table-cell;
	text-align:center;
	vertical-align:middle;
}
.son {
	display:inline-block;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7.grid</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.parent {
	display:grid;
}

.son {
	align-self:center;
	justify-self:center;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),a=[d];function t(v,r){return i(),n("div",null,a)}const u=e(l,[["render",t],["__file","实现一个元素水平垂直居中的方法★★★★.html.vue"]]);export{u as default};
