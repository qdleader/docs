import{_ as e,o as s,c as n,d as i}from"./app-qTEUp92E.js";const a={},r=i(`<h2 id="urlsearchparams-方法" tabindex="-1"><a class="header-anchor" href="#urlsearchparams-方法" aria-hidden="true">#</a> URLSearchParams 方法</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 创建一个URLSearchParams实例
const urlSearchParams = new URLSearchParams(window.location.search);
// 把键值对列表转换为一个对象
const params = Object.fromEntries(urlSearchParams.entries());

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>split 方法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function getParams(url) {
  const res = {}
  if (url.includes(&#39;?&#39;)) {
    const str = url.split(&#39;?&#39;)[1]
    const arr = str.split(&#39;&amp;&#39;)
    arr.forEach(item =&gt; {
      const key = item.split(&#39;=&#39;)[0]
      const val = item.split(&#39;=&#39;)[1]
      res[key] = decodeURIComponent(val) // 解码
    })
  }
  return res
}

// 测试
const user = getParams(&#39;https://www.baidu.com/s?ie=UTF-8&amp;wd=%7B%20user%3A%20%27qdleader%27,%20age%3A%20%2718%27%20%7D&#39;)
&lt;!-- const user = getParams(&#39;http://www.baidu.com?user=%E9%98%BF%E9%A12123%9E&amp;age=18&#39;) --&gt;
console.log(user) // { user: &#39;qdleader&#39;, age: &#39;18&#39; }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[r];function d(c,t){return s(),n("div",null,l)}const v=e(a,[["render",d],["__file","S030-获取url参数的方法.html.vue"]]);export{v as default};
