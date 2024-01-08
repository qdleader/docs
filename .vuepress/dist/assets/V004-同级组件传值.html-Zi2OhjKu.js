import{_ as i,o as e,c as n,d as l}from"./app-FRQgbCNf.js";const t={},d=l(`<p>1.如果是兄弟组件，可通过父元素作为中间组件进行传值</p><p>1.2 $emit传值，props接收</p><p>使用$emit将child1.vue的值给父组件，父组件将值传给child2.vue,child2.vue使用props接收</p><p>parent.vue</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;div&gt;
     &lt;h2&gt;我是父组件&lt;/h2&gt;
     &lt;child1 @handleClickChange=&quot;handleClickChangeTitle&quot;&gt;&lt;/child1&gt;
     &lt;child2 :ptitle=&quot;title&quot;&gt;&lt;/child2&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
import child1 from &quot;child1&quot;;//文件地址
import child2 from &quot;child2&quot;;//文件地址
export default {
  data() {
    return {
      title: &quot;&quot;
    };
  },
  components: {
    child1,
    child2
  },
  methods: {
    handleClickChangeTitle(title){//将改方法传递给child1组件
        this.title = title
    }
  }
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>child1.vue</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;div&gt;
     &lt;h2&gt;我是child1组件&lt;/h2&gt;
     &lt;div&gt;
     &lt;input type=&quot;text&quot;v-model=&quot;title&quot;/&gt;
      &lt;button type=&quot;button&quot; @click=&quot;handleClickChangeTitle(title)&quot;&gt;更改title的值&lt;/button&gt;
    &lt;div&gt;{{title}}&lt;/div&gt;
  &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
  data() {
    return {
      title: &quot;&quot;
    };
  },
  methods: {
    handleClickChangeTitle(title){
        this.$emit(&quot;handleClickChange&quot;,title)//连接父组件的handleClickChange方法，同时将值传递给父组件
    }
  }
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>child2.vue</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;div&gt;{{ptitle}}&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
//接收父组件穿过来的值ptitle
 props:{ptitle:{ type: String}}
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.通过创建一个bus，进行传值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 创建一个文件，定义bus中间件，并导出
const bus = new Vue()
// 在一个组件中发送事件
bus.$emit(&#39;事件名称&#39;, 传递的参数)


// 在另一个组件中监听事件
bus.$on(&#39;事件名称&#39;, 得到传过来的参数)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体使用： 在main.js同级目录下新建bus.js文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import Vue from &#39;vue&#39;
export default new Vue()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、在组件a中传出值</p><p>先引入bus.js文件，再通过$emit传值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
	&lt;div @click=&quot;onfocus&quot;&gt;&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    import Bus from &#39;@/bus.js&#39;
    
	export default{
		methods:{
	    	onfocus:function(fromid){
		    	Bus.$emit(&#39;getisshow&#39;,{
		    		show:true
		    	})
		     }
	    }
	}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、在同级b组件中通过$on接收</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
    import Bus from &#39;@/bus.js&#39;
    
	export default{
		created(){
			Bus.$on(&#39;getisshow&#39;,data =&gt; {
				console.log(data)   //{show:true}
			})
		}
	}
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),s=[d];function v(a,u){return e(),n("div",null,s)}const r=i(t,[["render",v],["__file","V004-同级组件传值.html.vue"]]);export{r as default};
