import{_ as e,o as n,c as i,d as s}from"./app-otDwoQZb.js";const r={},a=s(`<h2 id="写版本号排序的方法" tabindex="-1"><a class="header-anchor" href="#写版本号排序的方法" aria-hidden="true">#</a> 写版本号排序的方法</h2><p>有一组版本号如下[&#39;0.1.1&#39;, &#39;2.3.3&#39;, &#39;0.302.1&#39;, &#39;4.2&#39;, &#39;4.3.5&#39;, &#39;4.3.4.5&#39;]。现在需要对其进行排序，排序的结果为 [&#39;4.3.5&#39;,&#39;4.3.4.5&#39;,&#39;2.3.3&#39;,&#39;0.302.1&#39;,&#39;0.1.1&#39;]</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>arr.sort((a,b)=&gt;a&gt;b?-1:1);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这种比较是存在问题的：如果修改题目中的arr如下:</p><p>const arr=[ &#39;0.5.1&#39;, &#39;0.1.1&#39;, &#39;2.3.3&#39;, &#39;0.302.1&#39;, &#39;4.2&#39;, &#39;4.3.5&#39;, &#39;4.3.4.5&#39; ]; 那字符串比较法会出错：期望中版本号&#39;0.302.1&#39;应该大于&#39;0.5.1&#39;，但实际比较的结果则是相反的，原因就在于逐位比较。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>arr.sort((a,b) =&gt; {
    let i = 0;
    const arr1 = a.split(&#39;.&#39;);
    const arr2 = b.split(&#39;.&#39;);

    while(true) {
        const  s1 = arr1[i];
        const s2 = arr2[i ++];
        if(s1 === undefined || s2 === undefined) {
            return arr2.length - arr1.length;
        }
        if(s1 === s2) continue;
        return s2 - s1;
    }
})
console.log(arr);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),d=[a];function l(t,c){return n(),i("div",null,d)}const u=e(r,[["render",l],["__file","cold-001版本号排序的方法.html.vue"]]);export{u as default};
