import{_ as n,o as i,c as e,d as s}from"./app-pokGQ7aS.js";const l={},d=s(`<p>下面问题打印什么？</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div id=&quot;btn&quot;&gt;
  按钮
&lt;/div&gt;


    &lt;script type=&quot;text/javascript&quot;&gt;
        var btn = document.getElementById(&#39;btn&#39;)

        var str = &#39;hh&#39;;

        (function() {
          console.log(1,this)
        })()

        setTimeout(function() {
          console.log(2,this)
        },1000)

        btn.onclick = function() {
          console.log(3,this)
          setTimeout(function() {
            console.log(4,this)
          },1000)
        }

        var Cat = function() {
          this.str = &#39;bb&#39;
        }

        Cat.prototype.say = function() {
          console.log(5,this.str)
          setTimeout(function() {
            console.log(6,this.str)
          },1000)
          setTimeout(() =&gt; {
            console.log(7,this.str)
          },1000)
        }

        var cat = new Cat()
        cat.say()

    &lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1, window
5, bb
2, window
6, hh
7, bb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果用户点击了按钮再输出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>3,&lt;div id=&quot;btn&quot;&gt;
  按钮
&lt;/div&gt;

4,window
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),v=[d];function t(a,c){return i(),e("div",null,v)}const u=n(l,[["render",t],["__file","T002-this.html.vue"]]);export{u as default};
