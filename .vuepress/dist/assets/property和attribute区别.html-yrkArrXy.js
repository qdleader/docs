import{_ as e,o as t,c as i,d as l}from"./app-C59QzqDT.js";const n={},a=l(`<h1 id="property-和-attribute-的区别" tabindex="-1"><a class="header-anchor" href="#property-和-attribute-的区别" aria-hidden="true">#</a> property 和 attribute 的区别</h1><blockquote><p>property是DOM中的属性，是JavaScript里的对象； attribute是HTML标签上的特性，它的值只能够是字符串；</p></blockquote><p>通俗来讲： attribute 是在我们代码中将常看到的键值对，例如</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;input id=&quot;inputBox&quot; type=&quot;text&quot; value=&quot;qdleader&quot;&gt;





</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个input上有三个attribute</p><blockquote><p>id: inputBox type: text value: Name</p></blockquote><p>property 是 attribute 对应的DOM节点 对象属性</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let oBox = document.getElementById(&#39;inputBox&#39;);
oBox.id === &#39;inputBox&#39;
oBox.type === &#39;text&#39;
oBox.value === &#39;qdleader&#39;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里看好像差不多，那他们有什么区别？</p><h2 id="_1-特性-attribute-和属性-property-的同步" tabindex="-1"><a class="header-anchor" href="#_1-特性-attribute-和属性-property-的同步" aria-hidden="true">#</a> 1.特性(attribute)和属性(property)的同步</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;input id=&quot;inputBox&quot; type=&quot;texo&quot; value=&quot;qdleader&quot;&gt;

//页面加载后，我们输入“前端架构师”
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// attribute
input.getAttribute(&#39;id&#39;) // inputBox
input.getAttribute(&#39;type&#39;) // texo
input.getAttribute(&#39;value&#39;) // qdleader


// property
input.id // inputBox
input.type //  text
input.value // 前端架构师

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到, 在 attribute 中, 值仍然是 html 代码中的值. 而在 property 中, type 被自动修正为了 text, 而 value 随着用户改变 input 的输入, 也变更为了 &quot;前端架构师&quot;</p><p>attribute 会始终保持 html 代码中的初始值, 而 Property 是有可能变化的</p><h2 id="eg2" tabindex="-1"><a class="header-anchor" href="#eg2" aria-hidden="true">#</a> eg2</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;input type=&quot;text&quot; id=&quot;oInput&quot;&gt;


 &lt;script&gt;
 let el = document.getElementById(&quot;oInput&quot;);
 el.setAttribute(&#39;value&#39;, &#39;jjc&#39;);   
 console.log(&quot;el.value&quot;,el.value)
 console.log(&quot;el.getAttribute(&#39;value&#39;))&quot;,el.getAttribute(&#39;value&#39;))

 el.value = &#39;newValue&#39;;   
 console.log(&quot;el.value&quot;,el.value)
 console.log(&quot;el.getAttribute(&#39;value&#39;))&quot;,el.getAttribute(&#39;value&#39;))

 el.setAttribute(&#39;value&#39;, &#39;qdleader&#39;);
 console.log(&quot;el.value&quot;,el.value)
 console.log(&quot;el.getAttribute(&#39;value&#39;))&quot;,el.getAttribute(&#39;value&#39;))
 &lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面打印：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>el.value jjc
el.getAttribute(&#39;value&#39;)) jjc


el.value newValue
el.getAttribute(&#39;value&#39;)) jjc


el.value newValue
el.getAttribute(&#39;value&#39;)) qdleader

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从eg2中可以看出，当el.value没有设置时候，el.setAttribute(&#39;value&#39;, &#39;jjc&#39;); 设置了，el.value会同步，</p><p>但是当el.value设置后，再打印el.value会发现，值变了，然而el.getAttribute(&#39;value&#39;)的值，并没有变，(attribute你不讲武德呀），可以看出<b>property的改变不会导致attribute的变化</b>，并且，再继续实验。我们在再继续设置attribute ，el.setAttribute(&#39;value&#39;, &#39;qdleader&#39;); 会发现property没有变，attribute变了，</p><p>eg3：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let el = document.getElementById(&quot;oInput&quot;);

el.setAttribute(&#39;value&#39;, &#39;jjc&#39;);   
console.log(&quot;el.value&quot;,el.value)
console.log(&quot;el.getAttribute(&#39;value&#39;))&quot;,el.getAttribute(&#39;value&#39;))



el.setAttribute(&#39;value&#39;, &#39;qdleader&#39;);
console.log(&quot;el.value&quot;,el.value)
console.log(&quot;el.getAttribute(&#39;value&#39;))&quot;,el.getAttribute(&#39;value&#39;))

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果打印</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>el.value jjc
el.getAttribute(&#39;value&#39;)) jjc

el.value qdleader
el.getAttribute(&#39;value&#39;)) qdleader
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也就是说 如果没有设置property时候，设置attribute，property会跟着改变，如果过设置了property了，他俩就分道扬镳，耗子尾汁了，attribute变化就不会影响到property了(有同学说，那我首次设置el.value=&quot;123&quot;,会发现property变了，而attribute为null)。由此，可得出结论：</p><p>property能够从attribute中得到同步； attribute不会同步property上的值； attribute和property之间的数据绑定是单向的，attribute-&gt;property； 更改property和attribute上的任意值，都会将更新反映到HTML页面中；</p><h2 id="attribute-or-property-修改class、id、name" tabindex="-1"><a class="header-anchor" href="#attribute-or-property-修改class、id、name" aria-hidden="true">#</a> Attribute or Property 修改class、id、name</h2><p>对于class、id、name、等属性，无论哪一方面发生改变，都会互相影响。（这一part比较直观就不演示了）</p><h2 id="对于新增加的属性" tabindex="-1"><a class="header-anchor" href="#对于新增加的属性" aria-hidden="true">#</a> 对于新增加的属性</h2><p>eg4:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;input value=&quot;customInput&quot; qdleader=&quot;前端架构师&quot; /&gt;

input.test = &#39;one&#39;

console.log(input.test) //one
console.log(input.getAttribute) //null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>eg5：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;input value=&quot;customInput&quot; qdleader=&quot;前端架构师&quot; /&gt;

input.getAttribute(&#39;qdleader&#39;) // 前端架构师
input.qdleader // undefined
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到, 我们能够成功的获取自定义的 attribute, 但是无法获取 property.</p><p>其实不难理解, DOM 节点在初始化的时候会将html 规范中定义的 attribute 赋值到 property 上, 而自定义的 attribute 并不属于这个氛围内, 自然生成的 DOM 节点就没有这个 property.</p><p>好在 DOM 对象也提供了操作特性的 API：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  Element.hasAttribute(name) – 判断某个特性是否存在
  elem.getAttribute(name) – 获取指定特性的值
  elem.setAttribute(name, value) – 设置指定特性的值
  elem.removeAttribute(name) – 移除指定特性
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上 API 定义在 Element 上。 根据 HTML 规范，标签以及特性名是不区分大小写的，因此以下代码是一样的：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  el.getAttribute(&#39;id&#39;)
  el.getAttribute(&#39;ID&#39;)
  el.getAttribute(&#39;iD&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制代码并且，特性永远都是字符串或 null。如果我们为特性设置非字符串的值，则引擎会将此值转换为字符串。属性是具有类型的： el.getAttribute(&#39;checked&#39;) === &#39;&#39; // 特性是字符串 el.checked === false // 属性是 boolean 类型的值</p><p>el.getAttribute(&#39;style&#39;) === &#39;color:blue&#39; // 特性是字符串 typeof el.style === &#39;object&#39; // 属性是 CSSStyleDeclaration 对象 复制代码即使都是字符串，属性和特性也可能不同，有一个例外就是 href： el.getAttribute(&#39;href&#39;) === &#39;#&#39; // 特性原样返回 html 设置的值 el.href === &#39;www.baidu.com&#39; // 属性返回解析后的完整 uri</p><h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h2><blockquote><p>对属性Property可以赋任何类型的值，而对特性Attribute只能赋值字符串！并且setAttribute()的两个参数，都必须是字符串 class特性在变成属性时，名字改成了“className”，因此div1.className和div1.getAttrbute(&#39;class&#39;)相同。 两者都有可能引起DOM重新渲染。</p></blockquote><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><blockquote><p>1、property和attributies都是properties的子集，而每个attribute是attributies的子集； 2、attribute可以理解为特性，可以自定义，直接在html标签上添加的和使用setAttribute添加的情况一致，即html标签添加的都是attribute属性， property则是使用xx.属性进行更改，通常来讲，更改互相影响（value除外） 3、当添加新的非默认属性时，是不互通的</p></blockquote>`,45),u=[a];function d(r,s){return t(),i("div",null,u)}const o=e(n,[["render",d],["__file","property和attribute区别.html.vue"]]);export{o as default};
