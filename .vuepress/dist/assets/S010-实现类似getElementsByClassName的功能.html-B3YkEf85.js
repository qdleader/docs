import{_ as e,o as n,c as s,d as i}from"./app-tgHnmF2J.js";const t={},l=i(`<p>##S010-实现类似getElementsByClassName的功能</p><p>#实现一个函数，查找某个DOM节点下面的包含某个class的所有DOM节点，不允许使用原生的getElementsByClassName</p><p>querySelectorAll等原生提供DOM查找函数。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function queryClassName(node, name) {
	var starts = &#39;(^|[ \\n\\r\\t\\f])&#39;,
		ends = &#39;([\\n\\r\\t\\f]|$)&#39;;
		
	var array = [],
	    regex = new RegExp(starts + name + ends),
		elements = node.getElementsByTagName(&quot;*&quot;),
		length = elements.length,
		i = 0,
		element;
	
	while (i &lt; length) {
		element = element[i];
		if(regex.test(element.className)) {
			array.push(element);
		}
		
		i += 1;
	}
	return array;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方式2：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function getAllClassName(attr) {
	let  arr = [];
	let  doms = document.getElementsByTagName(&quot;*&quot;);
	 for(var i = 0; i &lt; doms.length; i ++) {
		 if(doms[i].className == attr || doms[i].className.indexof(attr + &quot; &quot;) != -1 || doms[i].className.indexOf(&quot; &quot; +attr+ &quot; &quot;) != -1) {
			 arr.push(doms[i])
		 }
		 return arr;
	 }
	 
	 var classNames = getAllClass(&#39;ykactive&#39;);
	 for(let i = 0; i &lt; classNames.length; i ++) {
		 classNames[i].style.background= &#39;orange&#39;
	 }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>//未完待续。。</p>`,7),a=[l];function d(r,v){return n(),s("div",null,a)}const c=e(t,[["render",d],["__file","S010-实现类似getElementsByClassName的功能.html.vue"]]);export{c as default};
