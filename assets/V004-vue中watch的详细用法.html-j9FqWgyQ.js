import{_ as e,o as n,c as i,d}from"./app-tSvYcIf0.js";const l={},s=d(`<p>####中watch的详细用法：</p><p>##watch:常规用法1</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;input type=&quot;text&quot; v-model=&quot;uerName&quot;/&gt;

data(){
	return {
		userName:&#39;qdleader&#39;
	}
},
watch:{
	userName(newName, oldName) {
		//...
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以写一个监听处理函数， 当每次监听到 cityName 值发生改变时，执行函数。也可以在所监听的数据后面直接加字符串形式的方法名：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>watch: {
    userName: &#39;nameChange&#39;
    }
 } 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>这样使用watch时有一个特点，就是当值第一次绑定的时候，不会执行监听函数，只有值发生改变才会执行。如果我们需要在最初绑定值的时候也执行函数，则就需要用到immediate属性。</p></blockquote><p>因此当我门在子组件props首次获取父组件传过来的默认值时候，需要立即执行一次函数，这就引出第二种immediate</p><p>##2.immediate和handler</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>data(){
	return {
		userName:&#39;qdleader&#39;
	}
},
watch: {
	userName:{
		handler(newName, oldName) {
			//..
		},
		immediate:true,//immediate表示在watch中首次绑定的时候，是否执行handler，值为true则表示在watch中声明的时候，就立即执行handler方法，值为false，则和一般使用watch一样，在数据发生变化的时候才执行handler。
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-deep" tabindex="-1"><a class="header-anchor" href="#_3-deep" aria-hidden="true">#</a> 3.deep</h2><p>还有很多时候，我们是要监听对象某一属性变化的，这时候就可以用deep</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>data(){
	return {
		userInfo:{
			id:1,
			name:&#39;qdleader&#39;
		}
	}
},

watch:{
	userInfo: {
		handler (newName, oldName) {
			//...
		},
		deep:true,
		immediate:true
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里有个不太好的地方。虽然设置了deep：true，我们可以坚挺到userInfo.name的变化。但是此时会给userinfo的所有属性都加上这个监听器，当对象属性较多时，每个属性值的变化都会执行handler。如果只需要监听对象中的一个属性值，则可以做以下优化：使用字符串的形式监听对象属性：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>watch:{
	&#39;userInfo.name&#39;: {
		handler (newName, oldName) {
			//...
		},
		deep:true,
		immediate:true
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同学问了，监听对象属性还有没有别的方法呢？</p><p>别着急呀！</p><p>监听对象属性computed也可以帮帮忙的。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>computed: {
  getName: function() {
	return this.userInfo.name
 }
},
watch:{
	getName:{
		handler:function(){
			//do something
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>//延伸。。 监听路由变化：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>watch:{
      &#39;$route.path&#39;:function(newVal,oldVal){
        //console.log(newVal+&quot;---&quot;+oldVal);
        if(newVal === &#39;/login&#39;){
          console.log(&#39;欢迎进入登录页面&#39;);
        } else if(newVal === &#39;/register&#39;){
          console.log(&#39;欢迎进入注册页面&#39;);
        }
      }
 }
或者：
watch:{
  $route(to,from){
    console.log(to.path);
  }
},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),a=[s];function t(v,r){return n(),i("div",null,a)}const u=e(l,[["render",t],["__file","V004-vue中watch的详细用法.html.vue"]]);export{u as default};
