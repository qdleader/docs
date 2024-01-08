import{_ as e,o as n,c as i,d as s}from"./app-gxPsN6Nl.js";const l={},t=s(`<h1 id="手写冒泡排序" tabindex="-1"><a class="header-anchor" href="#手写冒泡排序" aria-hidden="true">#</a> 手写冒泡排序</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function sort(elements) {
  for(let i = 0;i &lt; elements.length; i ++) {
    for(let j = 0; j &lt; elements.length - i - j; j ++) {
      if(elements[j] &gt; elements[j + 1]) {
        let swap = elements[j];
        elements[j] = elements[j + 1];
        elements[j + 1] = swap
      }
    }
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d=[t];function a(r,c){return n(),i("div",null,d)}const v=e(l,[["render",a],["__file","S004-冒泡排序★.html.vue"]]);export{v as default};
