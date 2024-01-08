import{_ as e,o as n,c as i,d}from"./app-C59QzqDT.js";const r={},s=d(`<h1 id="将数字12345678转化成rmb形式-12-345-678" tabindex="-1"><a class="header-anchor" href="#将数字12345678转化成rmb形式-12-345-678" aria-hidden="true">#</a> 将数字12345678转化成RMB形式：12,345,678</h1><p>思路：将字符串切割成数组再反转，遍历数组，加入辅助数组，当数组长度为3的倍数，再向辅助数组加入 &quot;,&quot;。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
let str = &#39;131243512361&#39;;
function num(str) {
  let arr = str.split(&#39;&#39;).reverse();
  let newArr = [];
  for(let i = 0;i &lt; arr.length; i ++) {
    newArr.push(arr[i])
    if((i + 1) % 3 == 0) {
      newArr.push(&#39;,&#39;)
    }
  }
  if(arr.length % 3 == 0) {
    let con = newArr.reverse().join(&#39;&#39;)
    return con.slice(1,con.length)
  } else {
    return newArr.reverse().join(&#39;&#39;)
  }

}
console.log(num(str))


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-正则版" tabindex="-1"><a class="header-anchor" href="#_2-正则版" aria-hidden="true">#</a> 2 正则版</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function formatNumber(str) {
  return str.replace(/\\B(?=(\\d{3})+(?!\\d))/g, &#39;,&#39;)
}

console.log(formatNumber(&quot;1234567890&quot;)) // 1,234,567,890
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面简单分析下正则/\\B(?=(\\d{3})+(?!\\d))/g：</p><p>/\\B(?=(\\d{3})+(?!\\d))/g：正则匹配边界\\B，边界后面必须跟着(\\d{3})+(?!\\d); (\\d{3})+：必须是1个或多个的3个连续数字; (?!\\d)：第2步中的3个数字不允许后面跟着数字; (\\d{3})+(?!\\d)：所以匹配的边界后面必须跟着3*n（n&gt;=1）的数字。 最终把匹配到的所有边界换成,即可达成目标。</p><h2 id="_3-tolocalestring" tabindex="-1"><a class="header-anchor" href="#_3-tolocalestring" aria-hidden="true">#</a> 3 toLocaleString</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(123456789).toLocaleString(&#39;en-US&#39;)  // 1,234,567,890

(123456789).toLocaleString()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),l=[s];function a(t,c){return n(),i("div",null,l)}const u=e(r,[["render",a],["__file","S002-数字转化为逗号金钱格式★.html.vue"]]);export{u as default};
