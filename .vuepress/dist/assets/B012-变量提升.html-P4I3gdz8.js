import{_ as e,o as n,c as i,d}from"./app-Ni1_oyYA.js";const l={},s=d(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   console.log(&#39;global&#39;, i);
    var i = 1;
    foo(1);
    function foo(i) {
      if (i == 4) {
        return
      }
      console.log(&#39;foo begin&#39;, i);
      foo(i + 1)
      console.log(&#39;foo end&#39;, i);
    }
    console.log(&#39;foo ge&#39;, i);


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
    global undefined
foo begin 1
foo begin 2
foo begin 3
foo end 3
 foo end 2
 foo end 1
 foo ge 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),a=[s];function o(c,v){return n(),i("div",null,a)}const t=e(l,[["render",o],["__file","B012-变量提升.html.vue"]]);export{t as default};
