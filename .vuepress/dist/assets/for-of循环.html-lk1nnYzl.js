import{_ as e,o as n,c as i,d as s}from"./app-otDwoQZb.js";const l={},d=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function muti(num) {
  return new Promise(resolve =&gt; {
      setTimeout(() =&gt; {
          resolve(num * num)
        }, 1000)
    })
}

const nums = [1,2,3]

nums.forEach(async (i) =&gt; {
    cosnt res = await muti(i);
    console.log(res)
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个打印的结果是：过一秒后：1,4,9同时打印</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>!(async function () {
    for (let i of nums) {
      const res = await muti(i)
      console.log(res)
    }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>过一秒后：1, 再过一秒打印：4, 再过一秒打印：9</p>`,4),a=[d];function c(r,t){return n(),i("div",null,a)}const u=e(l,[["render",c],["__file","for-of循环.html.vue"]]);export{u as default};
