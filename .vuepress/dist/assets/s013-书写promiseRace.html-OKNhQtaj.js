import{_ as e,o as i,c as n,d as s}from"./app-qTEUp92E.js";const r={},l=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>static PromiseRace(arr) {
  return new Promise((resolve,reject) =&gt; {
      if(!Array.isArray(arr)) {
        reject(throw new Error(&#39;请输入数组&#39;))
      }
      for(let i = 0;i &lt; arr.length; i ++) {
        Promise.resolve(arr[i]).then(res =&gt; {
            resolve(res)
        },err =&gt; {
            reject(err)
        })
      }
  })
}




let p1 = new Promise((resolve,reject) =&gt; {
  setTimeout(() =&gt; {
    resolve(1)
  },1000)
})

let p2 = new Promise((resolve,reject) =&gt; {
  setTimeout(() =&gt; {
    reject(2)
  },200)
})



PromiseRace([p1,p2]).then(res =&gt; {
  console.log(res)
}).catch(err =&gt; {
  console.log(err)
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>二、Promise.race的使用 顾名思义，Promse.race就是赛跑的意思，意思就是说，Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。</p><p>返回只返回最快的那个（无论对错），但是也都执行一遍的</p>`,3),d=[l];function v(c,a){return i(),n("div",null,d)}const t=e(r,[["render",v],["__file","s013-书写promiseRace.html.vue"]]);export{t as default};
