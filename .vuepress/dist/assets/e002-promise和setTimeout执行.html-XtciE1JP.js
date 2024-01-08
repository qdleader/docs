import{_ as e,o as i,c as n,d as s}from"./app-Ni1_oyYA.js";const d={},a=s(`<h2 id="下面输出结果" tabindex="-1"><a class="header-anchor" href="#下面输出结果" aria-hidden="true">#</a> 下面输出结果</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console.log(100)
setTimeout(() =&gt; {
  console.log(200)
})
Promise.resolve().then(() =&gt; {
  console.log(300)
})
console.log(400)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>100
400
300
200
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[a];function t(r,c){return i(),n("div",null,l)}const v=e(d,[["render",t],["__file","e002-promise和setTimeout执行.html.vue"]]);export{v as default};
