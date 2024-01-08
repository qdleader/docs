import{_ as e,o as n,c as i,d}from"./app-tgHnmF2J.js";const l={},s=d(`<h2 id="addeventlistener-默认是捕获还是冒泡" tabindex="-1"><a class="header-anchor" href="#addeventlistener-默认是捕获还是冒泡" aria-hidden="true">#</a> addEventListener 默认是捕获还是冒泡</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>默认是冒泡

addEventListener第三个参数默认为 false 代表执行事件冒泡行为。

当为 true 时执行事件捕获行为。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例子</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div id=&quot;box&quot;&gt;
    &lt;div id=&quot;outer&quot;&gt;
        &lt;div id=&quot;inner&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;style&gt;
    #box {
        width: 200px;
        height: 200px;
        background: #222;
    }
    #outer {
        width: 100px;
        height: 100px;
        background: #ddd;
    }
    #inner {
        width: 50px;
        height: 50px;
        background: #eee;
    }
&lt;/style&gt;
&lt;script&gt;
    var outer = document.getElementById(&quot;outer&quot;);
    var inner = document.getElementById(&#39;inner&#39;);
    var oBox = document.getElementById(&#39;box&#39;);
    oBox.addEventListener(&quot;click&quot;, function () {
        alert(&#39;1&#39;);
    }, true)
    oBox.addEventListener(&quot;click&quot;, function () {
        alert(&#39;4&#39;);
    }, false)
    outer.addEventListener(&quot;click&quot;, function () {
        alert(&quot;2&quot;);
    }, true);
    inner.addEventListener(&quot;click&quot;, function () {
        alert(&#39;3.2&#39;)
    }, false)

    inner.addEventListener(&quot;click&quot;, function () {

        alert(&quot;3.1&quot;);

    }, true);


&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>现在点击obox依次弹出 1 和 4 ，点击 outer 依次弹出 1，2，4，而点击 inner 依次弹出 1，2，3.1，3.2，4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>若都改为false</p><p>结果为</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>3.2 3.1 2 1 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9),t=[s];function v(a,r){return n(),i("div",null,t)}const c=e(l,[["render",v],["__file","事件捕获和事件冒泡.html.vue"]]);export{c as default};
