import{_ as n,o as s,c as i,e as c,d as l,a as e}from"./app-C59QzqDT.js";const a={},r=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>async function async1() {
  console.log(&#39;async1 start&#39;);
  await async2();
  console.log(&#39;async1 end&#39;);
}
async function async2() {
  console.log(&#39;async2&#39;);
}
 
console.log(&#39;script start&#39;);
setTimeout(function() {
  console.log(&#39;setTimeout&#39;);
}, 0)
async1();
new Promise(function(resolve) {
  console.log(&#39;promise1&#39;);
  resolve();
}).then(function() {
  console.log(&#39;promise2&#39;);
});
console.log(&#39;script end&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答案：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>script start
async1 start
async2
promise1
script end
async1 end
promise2
setTimeout
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先，事件循环从宏任务（macrostack）队列开始，这个时候，宏任务(整体script、setTimeout、setInterval)队列中，只有一个 script (整体代码)任务 ()。 首先执行 console.log(&#39;script start&#39;)，输出 ‘script start&#39; 遇到 setTimeout 把 console.log(&#39;setTimeout&#39;) 放到 macrotask 队列中 执行 aync1() 输出 ‘async1 start&#39; 和 &#39;async2&#39; ,把 console.log(&#39;async1 end&#39;) 放到 micro 队列中 执行到 promise ，输出 &#39;promise1&#39; ，把 console.log(&#39;promise2&#39;) 放到 micro 队列中 执行 console.log(&#39;script end&#39;)，输出 ‘script end&#39; macrotask 执行完成会执行 microtask ，把 microtask quene 里面的 microtask 全部拿出来一次性执行完，所以会输出 &#39;async1 end&#39; 和 ‘promise2&#39; 开始新一轮的事件循环，去除执行一个 macrotask 执行，所以会输出 ‘setTimeout&#39;</p><h2 id="涉及知识点" tabindex="-1"><a class="header-anchor" href="#涉及知识点" aria-hidden="true">#</a> 涉及知识点：</h2><pre><code>Promise 优先于 setTimeout 宏任务，所以 setTimeout 回调会最后执行
Promise 一旦被定义就会立即执行
Promise 的 resolve 和 reject  是异步执行的回调。所以 resolve() 会被放到回调队列中，在主函数执行完和 setTimeout 之前调用
await 执行完后，会让出线程。async 标记的函数会返回一个 Promise 对象
</code></pre><p>同理下面这个:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    async function async1() {
    console.log(&#39;async1 start&#39;)
    await new Promise(resolve =&gt; {
      console.log(&#39;promise1&#39;)
    })
    console.log(&#39;async1 success&#39;)
    return &#39;async1 end&#39;
  }
  console.log(&#39;srcipt start&#39;)
  async1().then(res =&gt; console.log(res))
  console.log(&#39;srcipt end&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=e("p",null,"// srcipt start // async1 start // promise1 // srcipt end",-1),d=e("p",null,"提醒一点是 await new Promise 没有resolve 所以它后边代码，是不执行的。",-1);function t(v,m){return s(),i("div",null,[r,c(" 答案： "),o,d])}const b=n(a,[["render",t],["__file","异步打印类async function async1() _.html.vue"]]);export{b as default};
