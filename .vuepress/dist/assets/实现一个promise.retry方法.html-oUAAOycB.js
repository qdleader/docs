import{_ as e,o as n,c as i,d as s}from"./app-otDwoQZb.js";const r={},l=s(`<h2 id="实现一个promise-retry-方法" tabindex="-1"><a class="header-anchor" href="#实现一个promise-retry-方法" aria-hidden="true">#</a> 实现一个promise.retry 方法</h2><p>在规定的次数内，没成功就重复调用异步方法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>

function fn() {
    let n = Math.random();
   return new Promise((resolve,reject) =&gt; {
       setTimeout(() =&gt; {
          if (n &gt; 0.7) {
               resolve(n)
           } else {
               reject(n)
           }
       },1000)
    })
}

Promise.retry = (fn,wait) =&gt; {
        new Promise(async (resolve, reject) =&gt; {
            while (wait--) {
                try {
                    let res = await fn()
                    console.log(&#39;执行成功&#39;,res);
                    resolve(res)
                    break;
                } catch (err) {
                    console.log(&#39;失败一次&#39;,err)
                    if(!wait) {
                        reject(&#39;全部失败&#39;)
                    }
                }
            }
        }).catch(err =&gt; {
            console.log(&#39;全部失败&#39;)
        })
}
Promise.retry(fn, 10)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),d=[l];function v(a,c){return n(),i("div",null,d)}const m=e(r,[["render",v],["__file","实现一个promise.retry方法.html.vue"]]);export{m as default};
