import{_ as e,o as t,c as a,d}from"./app-FRQgbCNf.js";const n={},o=d(`<p>尝试推测它的输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const name = &#39;qdleader&#39;
console.log(name.padStart(14))
console.log(name.padStart(2))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出： &quot; qdleader&quot; &quot;qdleader&quot;</p><p>解析：padStart 方法可以在字符串的开头填充空格。参数是新字符串的总长度，如果这个长度比原来的字符串长度短，那么不会填充。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&#39;abc&#39;.padStart(10);         // &quot;       abc&quot;
&#39;abc&#39;.padStart(10, &quot;foo&quot;);  // &quot;foofoofabc&quot;
&#39;abc&#39;.padStart(6,&quot;123465&quot;); // &quot;123abc&quot;
&#39;abc&#39;.padStart(8, &quot;0&quot;);     // &quot;00000abc&quot;
&#39;abc&#39;.padStart(1);          // &quot;abc&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>padStart() 方法用另一个字符串填充当前字符串 (如果需要的话，会重复多次)，以便产生的字符串达到给定的长度。从当前字符串的左侧开始填充。</p>`,6),s=[o];function c(i,l){return t(),a("div",null,s)}const u=e(n,[["render",c],["__file","padStart.html.vue"]]);export{u as default};
