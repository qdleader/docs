import{_ as e,o as n,c as i,d as a}from"./app-Ni1_oyYA.js";const s={},d=a(`<h1 id="宏任务和微任务" tabindex="-1"><a class="header-anchor" href="#宏任务和微任务" aria-hidden="true">#</a> 宏任务和微任务</h1><h2 id="宏任务" tabindex="-1"><a class="header-anchor" href="#宏任务" aria-hidden="true">#</a> 宏任务</h2><p>setTimeout setInterval Ajax DOM事件</p><h2 id="微任务" tabindex="-1"><a class="header-anchor" href="#微任务" aria-hidden="true">#</a> 微任务</h2><p>Promise async/await</p><h2 id="执行顺序" tabindex="-1"><a class="header-anchor" href="#执行顺序" aria-hidden="true">#</a> 执行顺序</h2><p>微任务执行时机比宏任务要早</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console.log(1)

setTimeout(() =&gt; {
  console.log(2)
})

Promise.resolve().then(() =&gt; {
    console.log(3)
})
console.log(4)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答案 ：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1
4
3
2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),l=[d];function r(t,c){return n(),i("div",null,l)}const v=e(s,[["render",r],["__file","宏任务和微任务.html.vue"]]);export{v as default};
