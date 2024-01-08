import{_ as i,o as e,c as d,d as n}from"./app-gxPsN6Nl.js";const l={},s=n(`<h1 id="朝花夕拾之-盒模型宽度的计算" tabindex="-1"><a class="header-anchor" href="#朝花夕拾之-盒模型宽度的计算" aria-hidden="true">#</a> 朝花夕拾之---盒模型宽度的计算</h1><blockquote><p>难度：很简单不到一星</p></blockquote><blockquote><p>重要程度： 星级拉满</p></blockquote><h2 id="offsetwidth-内容宽度-内边距-边框-无外边距" tabindex="-1"><a class="header-anchor" href="#offsetwidth-内容宽度-内边距-边框-无外边距" aria-hidden="true">#</a> offsetWidth = (内容宽度 + 内边距 + 边框)， 无外边距</h2><p>eg：</p><h3 id="_1-计算-div1的offsetwith是多少" tabindex="-1"><a class="header-anchor" href="#_1-计算-div1的offsetwith是多少" aria-hidden="true">#</a> 1.计算#div1的offsetWith是多少？</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#div {
  width:100px;
  padding:10px;
  border:1px solid #ccc;
  margin:20px;
}
&lt;div id=&quot;div1&quot;&gt;&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答案是：</p><p>122</p><h3 id="_2-追问如果让offsetwidth-100-我们要怎么做" tabindex="-1"><a class="header-anchor" href="#_2-追问如果让offsetwidth-100-我们要怎么做" aria-hidden="true">#</a> 2.追问如果让offsetWidth =100，我们要怎么做？</h3><p>加上怪异盒子模型即可</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#div {
  width:100px;
  padding:10px;
  border:1px solid #ccc;
  margin:0;
  box-sizing:border-box;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-两个盒子的距离" tabindex="-1"><a class="header-anchor" href="#_3-两个盒子的距离" aria-hidden="true">#</a> 3.两个盒子的距离</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;style&gt;
  .div1 {
    width: 100px;
    height: 30px;
    margin: 20px 0 30px;
    background: red;
  }
  .div2 {
    width: 100px;
    height: 100px;
    margin: 10px 0 30px;
    background: pink;
  }
&lt;/style&gt;
&lt;div&gt;
  &lt;div class=&quot;div1&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;div2&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答案是：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>30
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解析：</p><blockquote><p>上下间距重叠了，按大的间距算</p></blockquote><h3 id="_4-两个盒子的距离" tabindex="-1"><a class="header-anchor" href="#_4-两个盒子的距离" aria-hidden="true">#</a> 4.两个盒子的距离</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;style&gt;
		.div1 {
			width: 10px;
			height: 30px;
			margin: 20px 10px 30px;
			background: red;
			display: inline-block;
		}
		.div2 {
			width: 100px;
			height: 100px;
			margin: 10px 10px 30px;
			background: pink;
			display: inline-block;
		}
	&lt;/style&gt;
	&lt;div class=&quot;div1&quot;&gt;&lt;/div&gt;
	&lt;div class=&quot;div2&quot;&gt;&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答案是：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>20
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解析：</p><blockquote><p>左右间距正常加减</p></blockquote><h3 id="_5-两个盒子的距离" tabindex="-1"><a class="header-anchor" href="#_5-两个盒子的距离" aria-hidden="true">#</a> 5.两个盒子的距离</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  &lt;style&gt;
  .div1 {
    width: 10px;
    height: 30px;
    margin: 20px 10px 30px;
    background: red;
    float: left;
  }
  .div2 {
    width: 100px;
    height: 100px;
    margin: 10px 10px 30px;
    background: pink;
    float: left;
  }
  .divfa {
    width: 100px;
  }
&lt;/style&gt;
&lt;div class=&quot;divfa&quot;&gt;
  &lt;div class=&quot;div1&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;div2&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答案是：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>40
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解析：</p><blockquote><p>浮动后就不会出现上下间距叠加问题，可以正常相加</p></blockquote>`,30),t=[s];function a(v,r){return e(),d("div",null,t)}const u=i(l,[["render",a],["__file","盒模型宽度计算★.html.vue"]]);export{u as default};
