import{_ as e,o as i,c as n,d as s}from"./app-FRQgbCNf.js";const l={},r=s(`<h2 id="手写-promiseall" tabindex="-1"><a class="header-anchor" href="#手写-promiseall" aria-hidden="true">#</a> 手写 promiseAll</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function promiseAll(arr) {
  return new Promise((resolve,reject) =&gt;{
      if(!Array.isArray(arr)) {
        return reject(new Error(&#39;请传入数组&#39;))
      }

      let data = [],count = 0,arrNum = arr.length;
      for(let i = 0; i &lt; arrNum; i ++) {
        Promise.resolve(arr[i]).then(res =&gt; {
          data[i] = res
          count ++
          if(count == arrNum) {
            resolve(data)
          }
        })
        .catch(e =&gt; reject(e))
      }
  })
}


// 测试

let pro1 = new Promise((resolve,reject) =&gt; {
    setTimeout(()=&gt;{
        resolve(1)
    },1000)
})
let pro2 = new Promise((resolve,reject) =&gt; {
    setTimeout(()=&gt;{
        resolve(2)
    },2000)
})
let pro3 = new Promise((resolve,reject) =&gt; {
    setTimeout(()=&gt;{
        resolve(3)
    },3000)
})
let data1 = [pro1,pro2,pro3]
promiseAll(data1).then(res =&gt; {
    console.log(res)
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d=[r];function v(a,c){return i(),n("div",null,d)}const m=e(l,[["render",v],["__file","s012-手写promiseAll.html.vue"]]);export{m as default};
