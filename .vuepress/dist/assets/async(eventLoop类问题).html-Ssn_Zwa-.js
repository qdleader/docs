import{_ as e,o as n,c as i,d as s}from"./app-FRQgbCNf.js";const l={},d=s(`<p>下面输出什么？</p><p>eg1:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
async function async1 () {
  console.log(&#39;1&#39;)
  await async2();
  console.log(&#39;2&#39;)
}

saync function async2() {
  console.log(&quot;3&quot;)
}

console.log(&#39;4&#39;)
async1()
console.log(&#39;5&#39;)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>4
1
3
5
2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重点解析：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>最后输出2，（在await async2()之后的代码你可以理解为，放到了settimeOut里面执行了）执行到await async2()下面的代码会被放到event queue中，所以会先执行
同步代码，再执行event queue中的代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>eg2:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(async function () {
  console.log(&#39;start&#39;)
  const a = await 100;
  console.log(a)
  const b = await Promise.resolve(200)
  console.log(b)
  const c = await Promise.reject(300)
  console.log(c)
  console.log(&#39;end&#39;)
})()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答案：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>start
100
200
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解析：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>由于c 是返回reject的promise，所以  console.log(c)
  console.log(&#39;end&#39;)根本就不执行了。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),a=[d];function c(v,t){return n(),i("div",null,a)}const o=e(l,[["render",c],["__file","async(eventLoop类问题).html.vue"]]);export{o as default};
