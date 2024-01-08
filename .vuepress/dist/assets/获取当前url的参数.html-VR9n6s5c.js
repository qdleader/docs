import{_ as e,o as n,c as i,d as a}from"./app-qTEUp92E.js";const s={},r=a(`<h1 id="正则-方式" tabindex="-1"><a class="header-anchor" href="#正则-方式" aria-hidden="true">#</a> 正则 方式</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function query(name) {
  const search = location.search.substr(1)  //类似slice（1）从第一未开始，一直截取到最后
  const reg = new RegExp(\`(^|&amp;)\${name}=([^&amp;]*)(&amp;|$)\`,&#39;i&#39;)
  const res = search.match(reg)

  if(res === null) {
    return null
  }
  return res[2]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="urlsearchparams-方式" tabindex="-1"><a class="header-anchor" href="#urlsearchparams-方式" aria-hidden="true">#</a> URLSearchParams 方式</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function query(name) {
  const search = location.search
  const p = new URLSearchParams(search)
  return p.get(name)
}

console.log( query(&#39;name&#39;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="urlsearchparams-方式2" tabindex="-1"><a class="header-anchor" href="#urlsearchparams-方式2" aria-hidden="true">#</a> URLSearchParams 方式2</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function queryToObj() {
  const res = {}
  const pList = new URLSearchParams(location.search)
  pList.forEach((val, key) =&gt; {
    res[key] = val
  })
  return res
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="传统方式" tabindex="-1"><a class="header-anchor" href="#传统方式" aria-hidden="true">#</a> 传统方式</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function queryToObj() {
  const res = {};
  const search = location.search.substr(1) //去掉前面的？

  search.split(&#39;&amp;&#39;).forEach(item =&gt; {
      const arr = item.split(&#39;=&#39;)
      const key = arr[0]
      const val = arr[1]
      res[key] = val
    })
    return res
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),d=[r];function l(c,t){return n(),i("div",null,d)}const u=e(s,[["render",l],["__file","获取当前url的参数.html.vue"]]);export{u as default};
