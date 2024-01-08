import{_ as e,o as n,c as i,d as s}from"./app-gxPsN6Nl.js";const l={},d=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function getData(url) {
  return new Promise((resolve, reject) =&gt; {
    $.ajax({
      url,
      success(data) {
        resolve(data)
      },
      error(err) {
        reject(err)
      }
    })
  })
}
const url1 = &#39;./data1.json&#39;
const url2 = &#39;./data2.json&#39;
const url3 = &#39;./data3.json&#39;
getData(url1).then(data1 =&gt; {
  console.log(data1)
  return getData(url2)
}).then(data2 =&gt; {
  console.log(data2)
  return getData(url3)
}).then(data3 =&gt;
  console.log(data3)
).catch(err =&gt;
  console.error(err)
)


 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),a=[d];function r(v,c){return n(),i("div",null,a)}const u=e(l,[["render",r],["__file","S032-手写Promise加载图片.html.vue"]]);export{u as default};
