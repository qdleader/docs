import{_ as e,o as n,c as i,d as s}from"./app-G0TSq-iO.js";const d={},a=s(`<h2 id="props-自定义验证" tabindex="-1"><a class="header-anchor" href="#props-自定义验证" aria-hidden="true">#</a> props 自定义验证</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>props: {
  num: {
    default:1,
    validator: function(val) {
      // 返回值为true 则验证不通过，报错
      return [
        1,2,3,4,5
      ].indexOf(val) !== -1
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),r=[a];function l(c,t){return n(),i("div",null,r)}const o=e(d,[["render",l],["__file","V016-props怎么自定义验证.html.vue"]]);export{o as default};
