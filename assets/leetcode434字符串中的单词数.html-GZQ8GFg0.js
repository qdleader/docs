import{_ as e,o as n,c as i,d as l}from"./app-tSvYcIf0.js";const s={},t=l(`<p>统计字符串中的单词个数，这里的单词指的是连续的不是空格的字符。</p><p>请注意，你可以假定字符串里不包括任何不可打印的字符。</p><p>示例:</p><p>输入: &quot;Hello, my name is John&quot; 输出: 5 解释: 这里的单词是指连续的不是空格的字符，所以 &quot;Hello,&quot; 算作 1 个单词。</p><p>思路：</p><p>1.首先排除&#39;&#39; 2.排除连续空串情况&#39; &#39; (因为 &#39; &#39;这种你被split(&#39; &#39;)分割成数组时候,会成为[&#39;&#39;,&#39;&#39;,&#39;&#39;]所以把数组中的&#39;&#39;数量去掉就是单词数了)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var countSegments = function(s) {
  if(s == &#39;&#39;) {
    return 0
  }
  let num = 0,arr = s.split(&#39; &#39;)
  for(let i = 0; i &lt; arr.length; i ++) {
    if(arr[i] == &#39;&#39;) {
      num ++;
    }
  }
  return arr.length -num
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),d=[t];function r(a,c){return n(),i("div",null,d)}const o=e(s,[["render",r],["__file","leetcode434字符串中的单词数.html.vue"]]);export{o as default};
