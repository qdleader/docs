import{_ as e,o as n,c as i,d as s}from"./app-G0TSq-iO.js";const d={},a=s(`<h1 id="q004-instanceof与typeof的区别★★" tabindex="-1"><a class="header-anchor" href="#q004-instanceof与typeof的区别★★" aria-hidden="true">#</a> Q004-instanceOf与typeof的区别★★</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>相同点：

都用来判断一个变量是否为空,或者什么类型

不同点:
	typeof返回值是一个字符串,用来说明变量的数据类型.(number,boolean,string,function,object,undefined)

	判断一个变量是否存在:
		if(typeof(a)!=&#39;undefined&#39;) {
			alert(&#39;ok&#39;)
		}

	 2.对于Array,null等特殊对象使用Typeof 一律返回 object 这正是typeof的局限
 instanceof用于判断一个变量是否属于某个对象的实例


 var a = new Array();
  alert(a instanceof Object)  //true
 alert(a instanceof Array)  //true

 我们用instanceOf可以判定a为数组，而typeof 是不可以的

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="当我们被问到怎么判断一个变量是否为数组时候。" tabindex="-1"><a class="header-anchor" href="#当我们被问到怎么判断一个变量是否为数组时候。" aria-hidden="true">#</a> 当我们被问到怎么判断一个变量是否为数组时候。</h2><p>可以用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>第一种方法是：instanceof

&gt; [] instanceof Array
true

这是es3的规定，但是这必须假定只有一个全局执行环境



第二种方法是：isArray

这是ES5的标准，被IE9+支持

&gt; Array.isArray([])
true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=[a];function r(v,t){return n(),i("div",null,l)}const u=e(d,[["render",r],["__file","Q004-instanceOf与typeof的区别★★.html.vue"]]);export{u as default};
