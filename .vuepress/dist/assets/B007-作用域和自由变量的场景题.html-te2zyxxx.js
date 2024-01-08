import{_ as e,o as i,c as n,d as l}from"./app-qTEUp92E.js";const s={},d=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let i

for(i = 1; i &lt;=3; i ++ ) {
  setTimeout(function() {
      console.log(i)
    })
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出： 4 4 4</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for(let i = 1; i &lt;=3; i ++ ) {
  setTimeout(function() {
      console.log(i)
    })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出： 1 2 3</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> var i

 for(i = 1; i &lt;=3; i ++ ) {
   setTimeout(function() {
      console.log(i)
     })
 }


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：4 4 4</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
 for(var i = 1; i &lt;=3; i ++ ) {
   setTimeout(function() {
      console.log(i)
     })
 }


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：4 4 4</p><blockquote><p>我们可以看出 当在for循环外边声明时候 var 和 let 效果是一样的</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for(var i = 1; i &lt; 4; i ++) {
    setTimeout((function(i) {
        return function() {
            console.log(i)
        }
    })(i),0)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出： 1 2 3</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    var i
          for(i = 1; i &lt;=3; i ++ ) {
              console.log(i)
          }


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出： 1 2 3</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let i
         for(var i = 1; i &lt;=3; i ++ ) {
             console.log(i)
         }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出:1 2 3</p>`,15),a=[d];function v(r,c){return i(),n("div",null,a)}const u=e(s,[["render",v],["__file","B007-作用域和自由变量的场景题.html.vue"]]);export{u as default};
