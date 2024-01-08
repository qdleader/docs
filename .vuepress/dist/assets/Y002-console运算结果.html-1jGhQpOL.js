import{_ as e,o as n,c as i,d as l}from"./app-FRQgbCNf.js";const d={},s=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>			console.log(1 + &#39;2&#39;)
			console.log(1 + &#39;2&#39; +&#39;2&#39;)
			console.log(1 + +&#39;2&#39; +&#39;2&#39;)
			console.log(1 - &#39;1&#39;+&#39;2&#39;)
			console.log(+&#39;1&#39; + &#39;1&#39; + &#39;2&#39;)
			console.log(&#39;A&#39; -&#39;B&#39; + &#39;2&#39;)
			console.log(&#39;A&#39; - &#39;B&#39; + 2)
			console.log(&#39;A&#39; - &#39;B&#39; + 2 +&#39;C&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答案：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>12
122
32
02
112
NAN2
NAN
NANC
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console.log(&#39;12&#39;+1);           
console.log(&#39;abc&#39;+&#39;def&#39;);       
console.log(&#39;1&#39;+true);          
console.log(&#39;1&#39;+undefined);    
console.log(&#39;1&#39;+null);         



console.log(true+true);             
console.log(true+null);             
console.log(true+undefined);        
console.log(undefined+null);       
console.log(undefined+undefined);   
console.log(null+null);            

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答案：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>121
abcdef
1true
1undefined
1null


2
1
undefined
undefined
undefined
0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console.log(+[]);    
console.log(+{});     
console.log(+null);    
console.log(+true);    
console.log(+undefined);     




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答案:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0
NAN
0
1
NAN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console.log([] + [])
console.log([] + {})
console.log({} + {})
console.log({} + [])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答案：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&#39;&#39;
&quot;[object object]&quot;
&quot;[object object][object object]&quot;
0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console.log(1 &lt; 2 &lt; 3);
console.log(3 &gt; 2 &gt; 1);
console.log(Number(true))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答案:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>true

false

1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),a=[s];function v(c,u){return n(),i("div",null,a)}const r=e(d,[["render",v],["__file","Y002-console运算结果.html.vue"]]);export{r as default};
