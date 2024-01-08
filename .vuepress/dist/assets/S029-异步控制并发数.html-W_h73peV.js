import{_ as i,o as n,c as e,d as s}from"./app-xrgnhFxe.js";const l={},d=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function limitRequest(urls = [], limit = 3) {
  return new Promise((resolve, reject) =&gt; {
    const len = urls.length
    let count = 0

    // 同时启动limit个任务，一开始把最大可以发送的次数全部执行完
    while (limit &gt; 0) {
      start()
      limit -= 1
    }

    function start() {
      const url = urls.shift() // 从数组中拿取第一个任务
      if (url) {
        axios.post(url).then(res =&gt; {
          // todo
        }).catch(err =&gt; {
          // todo
        }).finally(() =&gt; {
          if (count == len - 1) {
            // 最后一个任务完成
            resolve()
          } else {
            // 完成之后，启动下一个任务
            count++
            start()
          }
        })
      }
    }

  })
}

// 测试
limitRequest([&#39;http://xxa&#39;, &#39;http://xxb&#39;, &#39;http://xxc&#39;, &#39;http://xxd&#39;, &#39;http://xxe&#39;])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),v=[d];function t(r,c){return n(),e("div",null,v)}const u=i(l,[["render",t],["__file","S029-异步控制并发数.html.vue"]]);export{u as default};
