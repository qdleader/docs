import{_ as e,o as n,c as i,d}from"./app-gxPsN6Nl.js";const a={},l=d(`<p>1.字面量</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let obj = {
  name:&#39;qdleader&#39;
}

let obj1 = new Object({
  name:&#39;qdleader&#39;
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.通过构造函数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let M = function(name) {
  this.name = name
}
let obj3 = new M(&#39;o3&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.第三种方式 Object.create</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let p ={name:&#39;qdleader&#39;}

let obj4 = Object.create(p)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),s=[l];function t(c,r){return n(),i("div",null,s)}const m=e(a,[["render",t],["__file","y002-创建对象的三种方式.html.vue"]]);export{m as default};
