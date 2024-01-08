import{_ as e,o as a,c as t,d}from"./app-qTEUp92E.js";const n={},i=d(`<h1 id="手写个正则将html里的标签全部替换为空★" tabindex="-1"><a class="header-anchor" href="#手写个正则将html里的标签全部替换为空★" aria-hidden="true">#</a> 手写个正则将html里的标签全部替换为空★</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>str.replace(/(&lt;(.[^&gt;]*)&gt;)|(&amp;nbsp;)/g,&quot;&quot;) 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="去除富文本格式" tabindex="-1"><a class="header-anchor" href="#去除富文本格式" aria-hidden="true">#</a> 去除富文本格式</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>      // 去除 富文本格式
	let data =document.getElementById(aa).innerHTML;
	data = data.replace(/(\\n)/g, &quot;&quot;);    
	data = data.replace(/(\\t)/g, &quot;&quot;);    
	data = data.replace(/(\\r)/g, &quot;&quot;);    
	data = data.replace(/&lt;\\/?[^&gt;]*&gt;/g, &quot;&quot;);    
	data = data.replace(/\\s*/g, &quot;&quot;);  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[i];function s(r,c){return a(),t("div",null,l)}const o=e(n,[["render",s],["__file","手写个正则将html里的标签全部替换为空★.html.vue"]]);export{o as default};
