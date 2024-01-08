import{_ as e,o as n,c as i,d as s}from"./app-qTEUp92E.js";const a={},d=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const obj = {
    a:{
        b:{
            c:666
        }
    }
}

var str = &#39;a.b.c&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let getData = (obj,str) =&gt; {
  let arr = str.split(&#39;.&#39;);
  arr.map(item =&gt; {
      obj = obj.item
  })
  return obj
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),l=[d];function r(t,c){return n(),i("div",null,l)}const _=e(a,[["render",r],["__file","编写函数获得对象中的值666，必须使用到 str _ 'a.b.c'.html.vue"]]);export{_ as default};
