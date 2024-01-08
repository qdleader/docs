import{_ as e,o as i,c as n,d as l}from"./app-gxPsN6Nl.js";const d={},s=l(`<p>题目：</p><blockquote><p>2、使用原生js，ul li中的最后一个p标签。 (1) 删除最后一个p标签<br> (2) 点击任意li标签，打印所在序号。（用直接绑定 和 事件委托） 2种方式</p></blockquote><p>答案：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
&lt;ul id=&quot;oBox&quot;&gt;
    &lt;li&gt;
        &lt;p&gt;1&lt;/p&gt;
        &lt;p&gt;2&lt;/p&gt;
    &lt;/li&gt;
    &lt;li&gt;
        &lt;p&gt;1&lt;/p&gt;
        &lt;p&gt;2&lt;/p&gt;
    &lt;/li&gt;
    &lt;li&gt;
        &lt;p&gt;1&lt;/p&gt;
        &lt;p&gt;2&lt;/p&gt;
    &lt;/li&gt;
&lt;/ul&gt;

&lt;script&gt;



let oUl = document.getElementById(&#39;oBox&#39;);
let oLi = oUl.getElementsByTagName(&#39;li&#39;);
// 移除最后一个p节点
for(let i = 0; i &lt; oLi.length; i ++) {
  var lastChild = oLi[i].lastElementChild ? oLi[i].lastElementChild : oLi[i].lastChild;
  oLi[i].removeChild(lastChild)
}


// 直接绑定
for(let i = 0;i &lt; oLi.length; i ++) {
  oLi[i].onclick = function() {
      alert(i)
  }
}


// 事件委托
oUl.addEventListener(&quot;click&quot;,clickHandler);
function clickHandler(e) {
    if(e.target.nodeName.toLowerCase() !== &#39;li&#39;) return;  // 或者写 if(e.target.constructor!==HTMLLIElement) return;
    let arr = Array.from(oUl.children)
    let index = arr.indexOf(e.target);
    alert(index)
}


&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="优化" tabindex="-1"><a class="header-anchor" href="#优化" aria-hidden="true">#</a> 优化</h2><p>如果用户点击的是 li里面的 span，就没法触发 fn，这显然不对。 那下面我们来看一下正确的事件委托应该怎么写：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function delegate(element, eventType, selector, fn) {
     element.addEventListener(eventType, e =&gt; {
       let el = e.target
       while (!el.matches(selector)) {
         if (element === el) {
           el = null
           break
         }
         el = el.parentNode
       }
       el &amp;&amp; fn.call(el, e, el)
     })
     return element
   }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),t=[s];function v(a,r){return i(),n("div",null,t)}const u=e(d,[["render",v],["__file","事件委托类.html.vue"]]);export{u as default};
