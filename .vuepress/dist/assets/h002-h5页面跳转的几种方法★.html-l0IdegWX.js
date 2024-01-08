import{_ as e,o as i,c as a,d}from"./app-C59QzqDT.js";const n={},t=d(`<h1 id="h002-h5页面跳转的几种方法★" tabindex="-1"><a class="header-anchor" href="#h002-h5页面跳转的几种方法★" aria-hidden="true">#</a> h002-h5页面跳转的几种方法★</h1><ol><li></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>window.location.replace(&quot;www.baidu.com&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>window.location.href = &#39;www.baudu.com&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>window.history.go(-1)   //返回上一页


window.history.go(-2)   //返回上两页



window.history.go(&quot;www.baudu.com&quot;) //跳转
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>window.history.back()   // 返回上一页
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>window.history.forward()   //返回下一页

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>6.meta</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;meta charset=&quot;utf-8&quot; http-equiv=&quot;refresh&quot; content=&quot;3;url=www.baidu.com&quot;&gt; //3秒后跳转到baidu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,13),l=[t];function s(r,o){return i(),a("div",null,l)}const u=e(n,[["render",s],["__file","h002-h5页面跳转的几种方法★.html.vue"]]);export{u as default};
