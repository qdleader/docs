import{_ as e,o as i,c as n,d as t}from"./app-1IAv0yAY.js";const d={},l=t(`<h1 id="javascript中事件捕获和事件冒泡以及如何阻止冒泡事件和默认事件" tabindex="-1"><a class="header-anchor" href="#javascript中事件捕获和事件冒泡以及如何阻止冒泡事件和默认事件" aria-hidden="true">#</a> JavaScript中事件捕获和事件冒泡以及如何阻止冒泡事件和默认事件</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div id=&#39;div1&#39;&gt;
  &lt;div id=&#39;div2&#39;&gt;
    &lt;div id=&#39;div3&#39;&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
div1.οnclick=function(){
	alert(&quot;div1&quot;)
}
div2.οnclick=function(){
	alert(&quot;div2&quot;)
}
div3.οnclick=function(){
	alert(&quot;div3&quot;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当单击中间的div3时，先后弹出div3, div2, div1，此为事件冒泡的过程。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>div1.addEventListener(&#39;click&#39;,function(obj){
	alert(&quot;div1&quot;)
},true);//如果未false则为事件冒泡，不填的话，默认false
div2.addEventListener(&#39;click&#39;,function(obj){
	alert(&quot;div2&quot;)
},true);
div3.addEventListener(&#39;click&#39;,function(obj){
	alert(&quot;div3&quot;)
},true);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里将第三个参数设为true，指定事件处理机制为事件捕获。此时再次单击div3时，会依次弹出div1, div2, div3</p><p>顺序是由外到里。</p><p>而IE中只有事件冒泡，且没有addEventListener事件，取而代之的是attachEvent。</p><h1 id="阻止冒泡方法1" tabindex="-1"><a class="header-anchor" href="#阻止冒泡方法1" aria-hidden="true">#</a> 阻止冒泡方法1</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function stopBubble(event) {
	if(window.event) {
		window.event.cancelBubble = true
	} else {
		event.stopPropagation()
	}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="方法2不阻止-直接判断当前点击的是那个元素-不推荐" tabindex="-1"><a class="header-anchor" href="#方法2不阻止-直接判断当前点击的是那个元素-不推荐" aria-hidden="true">#</a> 方法2不阻止，直接判断当前点击的是那个元素（不推荐）</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>window.onload = function() {
	document.getElementById(&quot;div1&quot;).addEventListener(&quot;click&quot;, function() {
		if(event.target == event.currentTarget) {
			console.log(&quot;我是div1被点击了&quot;)
		}
	})
	document.getElementById(&quot;div2&quot;).addEventListener(&quot;click&quot;, function() {
		if(event.target == event.currentTarget) {
			console.log(&quot;我是div2被点击了&quot;)
		}
	})
	document.getElementById(&quot;div3&quot;).addEventListener(&quot;click&quot;, function() {
		if(event.target == event.currentTarget) {
			console.log(&quot;我是div3被点击了&quot;)
		}
	})
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="方法3-div1下面的所有都在这里统一处理" tabindex="-1"><a class="header-anchor" href="#方法3-div1下面的所有都在这里统一处理" aria-hidden="true">#</a> 方法3 div1下面的所有都在这里统一处理</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>window.onload = function() {
	document.getElementById(&quot;div&quot;).addEventListener(&quot;click&quot;, function() {
		let eTarget = event.target;
		switch(eTarget.id) {
			case &quot;div1&quot;:
			console.log(&quot;点击的div1&quot;)
			break;
			
			case &quot;div2&quot;:
			console.log(&quot;点击的div2&quot;)
			break;
			
			case &quot;div3&quot;:
			console.log(&quot;点击的div3&quot;)
			break;
		}
		event.stopPropagation()
	})
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>其实这种元素本身触发事件，但是事件执行的方法不在元素本身，而是在其父元素的某个节点上，这种“偷懒”的模式，叫做事件委托。</p></blockquote><h1 id="拓展-阻止默认事件" tabindex="-1"><a class="header-anchor" href="#拓展-阻止默认事件" aria-hidden="true">#</a> 拓展 (阻止默认事件)</h1><blockquote><p>像submit这类的表单元素，都会绑定默认事件，如果不阻止默认事件，则绑定的其他方法也会无效。使用方法如下（兼容IE）：</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function stopDefaultEvent(event) {
	if(window.event) {
		window.event.returnValue = false
	} else {
		event.preventDefault()
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),s=[l];function a(v,u){return i(),n("div",null,s)}const c=e(d,[["render",a],["__file","JavaScript中事件捕获和事件冒泡以及如何阻止冒泡事件和默认事件（偏基础）.html.vue"]]);export{c as default};
