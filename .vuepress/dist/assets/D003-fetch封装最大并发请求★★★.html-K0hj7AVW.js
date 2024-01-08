import{_ as n,o as e,c as i,d as s}from"./app-gxPsN6Nl.js";const l={},d=s(`<h1 id="d003-fetch封装最大并发请求" tabindex="-1"><a class="header-anchor" href="#d003-fetch封装最大并发请求" aria-hidden="true">#</a> D003-fetch封装最大并发请求</h1><h1 id="★★★" tabindex="-1"><a class="header-anchor" href="#★★★" aria-hidden="true">#</a> ★★★</h1><h2 id="方法1" tabindex="-1"><a class="header-anchor" href="#方法1" aria-hidden="true">#</a> 方法1</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function sendResquest(urls, max, callback) {
    let urlsCopy = [... urls];//防止影响外部urls变量
    function request() {
        function Handle () {
            count--;
            console.log(&#39;end 当前并发数为: &#39;+count);
            if(urlsCopy.length) {//还有未请求的则递归
                request();
            } else if (count === 0) {//并发数为0则表示全部请求完成
                callback()
            }
        }
        count++;
        console.log(&#39;start 当前并发数为: &#39;+count);
        //请求
        fetch(urlsCopy.shift()).then(Handle).catch(Handle);
        //并发数不足时递归
        count &lt; max &amp;&amp; request();
    }
    let count = 0;//几率并发数
    request();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法2" tabindex="-1"><a class="header-anchor" href="#方法2" aria-hidden="true">#</a> 方法2</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
function handleFetchQueue(urls, max, callback) {
  const urlCount = urls.length;
  const requestsQueue = [];
  const results = [];
  let i = 0;
  const handleRequest = (url) =&gt; {
    const req = fetch(url).then(res =&gt; {
      console.log(&#39;当前并发： &#39;+requestsQueue);
      const len = results.push(res);
      if (len &lt; urlCount &amp;&amp; i + 1 &lt; urlCount) {
        requestsQueue.shift();
        handleRequest(urls[++i])
      } else if (len === urlCount) {
        &#39;function&#39; === typeof callback &amp;&amp; callback(results)
      }
    }).catch(e =&gt; {
      results.push(e)
    });
    if (requestsQueue.push(req) &lt; max) {
      handleRequest(urls[++i])
    }
  };
  handleRequest(urls[i])
}
 
 
const urls = Array.from({length: 10}, (v, k) =&gt; k);
 
const fetch = function (idx) {
  return new Promise(resolve =&gt; {
    console.log(\`start request \${idx}\`);
    const timeout = parseInt(Math.random() * 1e4);
    setTimeout(() =&gt; {
      console.log(\`end request \${idx}\`);
      resolve(idx)
    }, timeout)
  })
};
 
const max = 4;
 
const callback = () =&gt; {
  console.log(&#39;run callback&#39;);
};
 
 
handleFetchQueue(urls, max, callback);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="拓展用-promise-的方式封装呢" tabindex="-1"><a class="header-anchor" href="#拓展用-promise-的方式封装呢" aria-hidden="true">#</a> 拓展用 promise 的方式封装呢</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
//Promise方式
function sendResquest(urls, max, callback) { 
    let pending_count = 0, //并发数
    idx = 0;//当前请求的位置
 
    while (pending_count &lt; max) { 
        _fetch(urls[idx++])
    } 
 
    async function _fetch(url) { 
        if (!url) return; 
        pending_count++; 
        console.log(url + &#39;:start&#39;,&#39;并发数: &#39;+pending_count); 
        await fetch(url) 
        pending_count--; 
        console.log(url + &#39;:done&#39;,&#39;并发数: &#39;+pending_count); 
        _fetch(urls[idx++]); 
        pending_count || callback &amp;&amp; callback()
    } 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),a=[d];function c(r,u){return e(),i("div",null,a)}const t=n(l,[["render",c],["__file","D003-fetch封装最大并发请求★★★.html.vue"]]);export{t as default};
