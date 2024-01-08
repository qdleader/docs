import{_ as e,o as n,c as i,d as s}from"./app-otDwoQZb.js";const a={},d=s(`<h1 id="两个大数相加" tabindex="-1"><a class="header-anchor" href="#两个大数相加" aria-hidden="true">#</a> 两个大数相加</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let a = &quot;9007199254740991&quot;;
let b = &quot;1234567899999999999&quot;;


function add(a,b) {
  let maxNum = Math.max(a.length,b.length);
  a = a.padStart(maxNum,0)
  b = b.padStart(maxNum,0)

  let g = 0, s = 0, sum = &#39;&#39;;
  for(let i = maxNum -1; i &gt;= 0; i --) {
    g = parseInt(a[i]) + parseInt(b[i]) + s
    s = Math.floor(g/10)
    sum = g%10 + sum
  }
  if(s == 1) {
    sum = &#39;1&#39; + sum
  }
  return sum
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[d];function t(r,u){return n(),i("div",null,l)}const c=e(a,[["render",t],["__file","Y005-两大数相加★.html.vue"]]);export{c as default};
