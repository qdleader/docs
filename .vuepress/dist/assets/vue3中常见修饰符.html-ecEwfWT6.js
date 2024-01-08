import{_ as e,o as n,c as i,d as s}from"./app-C59QzqDT.js";const d={},l=s(`<p>vue3 常见修饰符 vue3 中常见的事件修饰符 vue3中的事件修饰符跟vue2是一样的。。。我们在这再过一下常用的的吧</p><h2 id="_1-stop-阻止冒泡-通俗讲就是阻止事件向上级dom元素传递" tabindex="-1"><a class="header-anchor" href="#_1-stop-阻止冒泡-通俗讲就是阻止事件向上级dom元素传递" aria-hidden="true">#</a> （１）. stop：阻止冒泡（通俗讲就是阻止事件向上级DOM元素传递）</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>　　　.stop

&lt;div @click.stop=&quot;doS&quot;&gt;

&lt;/div&gt;
\`\`\`　

## （２）. prevent：阻止默认事件的发生

　　默认事件指对DOM的操作会引起自动执行的动作，比如点击超链接的时候会进行页面的跳转，点击表单提交按钮时会重新加载页面等，使用&quot;.prevent&quot;修饰符可以阻止这些事件的发生。

##（３）. capture：捕获冒泡，即有冒泡发生时，有该修饰符的dom元素会先执行，如果有多个，从外到内依次执行，然后再按自然顺序执行触发的事件。

　　　
##（４）. self：将事件绑定到自身，只有自身才能触发，通常用于避免冒泡事件的影响




##（５）. once：设置事件只能触发一次，比如按钮的点击等。

##（６）. passive：该修饰符大概意思用于对DOM的默认事件进行性能优化，根据官网的例子比如超出最大范围的滚动条滚动的。


## （7）. native：在父组件中给子组件绑定一个原生的事件，就将子组件变成了普通的HTML标签，不加&#39;. native&#39;事件是无法触 发的。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),v=[l];function a(c,r){return n(),i("div",null,v)}const u=e(d,[["render",a],["__file","vue3中常见修饰符.html.vue"]]);export{u as default};
