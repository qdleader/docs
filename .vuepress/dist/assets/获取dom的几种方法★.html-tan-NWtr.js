import{_ as e,o as i,c as d,d as n}from"./app-gxPsN6Nl.js";const t={},l=n(`<h1 id="获取dom的几种方法★" tabindex="-1"><a class="header-anchor" href="#获取dom的几种方法★" aria-hidden="true">#</a> 获取dom的几种方法★</h1><h2 id="_1-通过id获取" tabindex="-1"><a class="header-anchor" href="#_1-通过id获取" aria-hidden="true">#</a> 1.通过id获取</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div id=&quot;box&quot;&gt;&lt;/div&gt;


document.getElementById(&quot;box&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-通过class获取" tabindex="-1"><a class="header-anchor" href="#_2-通过class获取" aria-hidden="true">#</a> 2.通过class获取</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;box&quot;&gt;&lt;/div&gt;
&lt;div class=&quot;box&quot;&gt;&lt;/div&gt;



let boxList = document.getElementsByClassName(&#39;box&#39;)
let box1 = boxList[0]
let box2 = boxList[1]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-通过标签名获取" tabindex="-1"><a class="header-anchor" href="#_3-通过标签名获取" aria-hidden="true">#</a> 3.通过标签名获取</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div id=&quot;box&quot;&gt;
    &lt;p&gt;段落1&lt;/p&gt;
    &lt;p&gt;段落2&lt;/p&gt;
    &lt;p&gt;段落3&lt;/p&gt;
    &lt;p&gt;段落4&lt;/p&gt;
    &lt;p&gt;段落5&lt;/p&gt;
    &lt;p&gt;段落6&lt;/p&gt;
&lt;/div&gt;


let pCollection = document.getElementsByTagName(&quot;p&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-通过name属性获取" tabindex="-1"><a class="header-anchor" href="#_4-通过name属性获取" aria-hidden="true">#</a> 4.通过name属性获取</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div id=&quot;box&quot;&gt;
    &lt;input type=&quot;text&quot; name=&quot;user&quot; /&gt;
&lt;/div&gt;



let userInput = document.getElementsByName(&quot;user&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-通过queryselector获取" tabindex="-1"><a class="header-anchor" href="#_5-通过queryselector获取" aria-hidden="true">#</a> 5.通过querySelector获取</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div id=&quot;box&quot;&gt;&lt;/div&gt;


let box = document.querySelector(&quot;#box&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-通过queryselectorall获取" tabindex="-1"><a class="header-anchor" href="#_6-通过queryselectorall获取" aria-hidden="true">#</a> 6.通过querySelectorAll获取</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;box&quot;&gt;box1&lt;/div&gt;
&lt;div class=&quot;box&quot;&gt;box2&lt;/div&gt;
&lt;div class=&quot;box&quot;&gt;box3&lt;/div&gt;
&lt;div class=&quot;box&quot;&gt;box4&lt;/div&gt;
&lt;div class=&quot;box&quot;&gt;box5&lt;/div&gt;
&lt;script&gt;
    let box1= document.querySelector(&quot;.box&quot;);
    querySelector 只是获取的第一个


    let boxes= document.querySelectorAll(&quot;.box&quot;);
    querySelectorAll 获取的是全部。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了常用的还有</p><h2 id="_7-获取html的方法" tabindex="-1"><a class="header-anchor" href="#_7-获取html的方法" aria-hidden="true">#</a> 7.获取html的方法</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>document.documentElement

是专门获取html这个标签的

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-获取body的方法-document-body" tabindex="-1"><a class="header-anchor" href="#_8-获取body的方法-document-body" aria-hidden="true">#</a> 8.获取body的方法（document.body）</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>document.body

是专门获取body这个标签的。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),a=[l];function s(r,u){return i(),d("div",null,a)}const c=e(t,[["render",s],["__file","获取dom的几种方法★.html.vue"]]);export{c as default};
