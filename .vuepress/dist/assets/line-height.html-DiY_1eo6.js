import{_ as e,o as i,c as n,d as l}from"./app-FRQgbCNf.js";const s={},d=l(`<h1 id="line-height" tabindex="-1"><a class="header-anchor" href="#line-height" aria-hidden="true">#</a> line-height</h1><h2 id="说一下下面三种情况-p的line-height分别是多少" tabindex="-1"><a class="header-anchor" href="#说一下下面三种情况-p的line-height分别是多少" aria-hidden="true">#</a> 说一下下面三种情况，p的line-height分别是多少？</h2><ol><li></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;box&quot;&gt;
  &lt;p&gt;&lt;/p&gt;
&lt;/div&gt;

&lt;style&gt;
.box {
  font-size:30px;
  line-height:40px;
}
p{
  font-size:12px;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答案：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>40px
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解析：</p><blockquote><p>直接继承 父元素的lineheight，所以为 40px</p></blockquote><ol start="2"><li></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;box&quot;&gt;
  &lt;p&gt;&lt;/p&gt;
&lt;/div&gt;

&lt;style&gt;
.box {
  font-size:30px;
  line-height:2;
}
p{
  font-size:12px;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答案：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>24px
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解析：</p><blockquote><p>父元素的lineheight是比例，这种是自身的font-size乘比例就是自身line-height 12*2 = 24</p></blockquote><ol start="3"><li></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;box&quot;&gt;
  &lt;p&gt;&lt;/p&gt;
&lt;/div&gt;

&lt;style&gt;
.box {
  font-size:30px;
  line-height:200%;
}
p{
  font-size:20px;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答案：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>60px

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>解析：</p><blockquote><p>父元素的lineheight是百分比的最特殊，这种是父元素的font-size乘父元素line-height 30*200% = 60，子元素p直接继承父元素line-height 60px</p></blockquote>`,20),t=[d];function a(v,c){return i(),n("div",null,t)}const u=e(s,[["render",a],["__file","line-height.html.vue"]]);export{u as default};
