import{_ as e,o as n,c as i,d}from"./app-qTEUp92E.js";const s={},l=d(`<h1 id="promise" tabindex="-1"><a class="header-anchor" href="#promise" aria-hidden="true">#</a> Promise</h1><h2 id="promise-的三种状态" tabindex="-1"><a class="header-anchor" href="#promise-的三种状态" aria-hidden="true">#</a> promise 的三种状态</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pengding

resolved

rejected

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="then-和-catch-改变状态" tabindex="-1"><a class="header-anchor" href="#then-和-catch-改变状态" aria-hidden="true">#</a> then 和 catch 改变状态</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>then 正常返回 resolved， 里面报错返回 rejected

catch 正常返回 resolved，里面报错返回 rejected
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>eg: 1.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Promise.resolve().then(() =&gt; {
  console.log(1)
}).catch(() =&gt; {
  console.log(2)
}).then(() =&gt; {
  console.log(3)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答案：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1,3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解析：</p><blockquote><p>then 里面没有报错，所以不会走catch方法，直接走then方法。打印1,3</p></blockquote><ol start="2"><li></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Promise.resolve().then(() =&gt; {
  console.log(1)
  throw new Error(&#39;error1&#39;)
}).catch(() =&gt; {
  console.log(2)
}).then(() =&gt; {
  console.log(3)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答案：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1,2,3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解析：</p><blockquote><p>then 里面有报错，返回rejected，所以会走catch方法，catch里面没有报错，返回resolved，会继续走走then方法。所以打印1,2，3</p></blockquote><ol start="3"><li></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Promise.resolve().then(() =&gt; {
  console.log(1)
  throw new Error(&#39;error1&#39;)
}).catch(() =&gt; {
  console.log(2)
}).catch(() =&gt; {
  console.log(3)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答案：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1,2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解析：</p><blockquote><p>then 里面有报错，返回rejected，所以会走catch方法，catch里面没有报错，返回resolved，所以不会走catch方法，所以打印1,2</p></blockquote><p>未完待续</p>`,24),a=[l];function t(r,c){return n(),i("div",null,a)}const o=e(s,[["render",t],["__file","promise.html.vue"]]);export{o as default};
