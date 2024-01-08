import{_ as e,o as i,c as n,d as s}from"./app-G0TSq-iO.js";const d={},l=s(`<p>##V005-父组件如何获取子组件的属性和方法</p><p>vue中通过在子组件上定义ref属性来获取子组件的属性和方法，</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 这里是父组件
&lt;templete&gt;
	&lt;child ref=&quot;child&quot;/&gt;
&lt;/templete&gt;


&lt;script&gt;
method: {
	getChild () {
		this.$refs.child.属性名（方法名）
	}
}
&lt;/script&gt;


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外详细说一下ref的三种用法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>	ref的3种使用场景：

	ref 加在普通的元素上，用this.$refs.name 获取到的是dom元素。
	ref 加在子组件上，在父组件中用this.$refs.name 获取到的是组件实例，可以调用组件的所有属性和方法。
	ref和v-for一起使用，用this.$refs.name获取到的将会是一个包含了对应数据源的这些子组件或者DOM元素的数组。
	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),t=[l];function r(a,v){return i(),n("div",null,t)}const m=e(d,[["render",r],["__file","V005-父组件如何获取子组件的属性和方法（偏基础).html.vue"]]);export{m as default};
