import{_ as n,o as e,c as i,d as s}from"./app-otDwoQZb.js";const a={},d=s(`<h1 id="async-await-和-promise-关系。" tabindex="-1"><a class="header-anchor" href="#async-await-和-promise-关系。" aria-hidden="true">#</a> async/await 和 promise 关系。</h1><blockquote><p>执行 async函数，返回的是promise对象。</p></blockquote><blockquote><p>await 相当于Promise 的then</p></blockquote><blockquote><p>try...catch 可捕获异常，代替Promise的catch</p></blockquote><p>eg1:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>async function fn1() {
  return 100
}

const res1 = fn1() //执行 async 函数，返回的是一个Promise对象

res1.then(data =&gt; {
    console.log(&#39;data&#39;, data)
})


结果打印：
100
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>eg2:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>async function fn1() {
  return Promise.resolve(200)
}

const res1 = fn1() //执行 async 函数，返回的是一个Promise对象

res1.then(data =&gt; {
    console.log(&#39;data&#39;, data)
})


结果打印：
200
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>eg3:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>!(async function() {
  const p4 = Promise.reject(&#39;err&#39;)
    try {
      const res = await p4
      console.log(res)
    } catch (ex) {
      console.error(ex) //相当于promise的catch
    }
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>!(async function () {
    const p1 = Promise.resolve(300)
    const data = await p1;
    console.log(&#39;data&#39;,data)
})()

//打印300

!(async function () {
    const data = await 400;
    console.log(&#39;data&#39;,data)
})()
//打印400



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>await 可以 跟别的async 函数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>async function fn1() {
  return Promise.resolve(200)
}

!(async function () {
    const data2 = await fn1();
    console.log(&#39;data2&#39;,data2)
})

//打印 200
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>eg4：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>async function fn() {
  return 100
}

(async function () {
    const a = fn()
    console.log(a)
    const b = await fn();
    console.log(b)
})()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答案：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Promise {}

100

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果不使用await 那么async函数返回的就是一个promise对象，</p><p>加上await后，就是返回then之后的结果了。</p>`,19),l=[d];function c(v,r){return e(),i("div",null,l)}const u=n(a,[["render",c],["__file","asyncawait和promise关系.html.vue"]]);export{u as default};
