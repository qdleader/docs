import{_ as e,o as i,c as n,d}from"./app-G0TSq-iO.js";const s={},a=d(`<p>##V001-vuerouter是怎么传值的</p><ol><li></li></ol><blockquote><p>在路由处配置</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>path:&#39;/detail/:id&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>调用：
this.$router.push({
	path:&#39;/home/\${id}&#39;
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在组件内通过this.$route.params.id即可获取。</p><p>2.在router-link标签中传递参数。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;router-link :to = {
	params:{
		id:1
	}
}/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可通过： this.$route.params.id获取</p><blockquote><p>这里通过router-link传参方式是隐形传参</p></blockquote><p>3.另一种params的是通过params传参，通过name配置路由。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//路由处：

{
	path：&#39;/home&#39;,
	name:&#39;Home&#39;,
	component:Home
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>调用：

this.$router.push({
	name:&#39;Home&#39;,
	params:{
		id:id
	}
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取： this.$route.params.id</p><p>4.通过query来传递参数，参数会在url后边的?id=?中显示</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//路由处：

{
	path：&#39;/home&#39;,
	name:&#39;Home&#39;,
	component:Home
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>调用：

this.$router.push({
	path:&#39;/home&#39;,
	query:{
		id:id
	}
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取： this.$route.query.id</p>`,18),l=[a];function t(r,v){return i(),n("div",null,l)}const c=e(s,[["render",t],["__file","V001-vuerouter是怎么传值的.html.vue"]]);export{c as default};
