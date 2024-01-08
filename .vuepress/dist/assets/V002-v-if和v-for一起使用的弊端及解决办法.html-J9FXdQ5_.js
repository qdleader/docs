import{_ as e,o as i,c as t,d as n}from"./app-tgHnmF2J.js";const l={},d=n(`<p>##V002-v-if和v-for一起使用的弊端及解决办法</p><blockquote><p>由于v-for的优先级比v-if高，所以导致每循环一次就会去v-if一次，而v-if是通过创建和销毁dom元素来控制元素的显示与隐藏，所以就会不停的去创建和销毁元素，造成页面卡顿，性能下降。</p></blockquote><blockquote><p>解决办法：</p></blockquote><p>1.在v-for的外层或内层包裹一个元素来使用v-if</p><p>2.用computed处理</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  &lt;ul&gt;
		&lt;li
		  v-for=&quot;item in qdleaderArr&quot;
		  v-if=&quot;item.isActive&quot;
		  :key=&quot;item.id&quot;
		&gt;
		  {{ item.name }}
		&lt;/li&gt;
  &lt;/ul&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>处理为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>computed: {
	qdleaderArrActive: function () {
		return this.qdleaderArr.filter(function (item) {
		  return item.isActive
		})
	}
}
&lt;ul&gt;
	&lt;li
	  v-for=&quot;item in qdleaderArrActive&quot;
	  :key=&quot;item.id&quot;
	&gt;
		{{ item.name }}
	&lt;/li&gt;
&lt;/ul&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),s=[d];function v(r,a){return i(),t("div",null,s)}const u=e(l,[["render",v],["__file","V002-v-if和v-for一起使用的弊端及解决办法.html.vue"]]);export{u as default};
