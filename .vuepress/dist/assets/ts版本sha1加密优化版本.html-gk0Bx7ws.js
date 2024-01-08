import{_ as e,o as n,c as i,d as s}from"./app-C59QzqDT.js";const a={},d=s(`<h3 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install jssha -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> import jsSHA from &quot;jssha&quot;      //module



 // 大写的sha1 加密串
 function getsignUpper (sign: any) {
     let shaObj = new jsSHA(&quot;SHA-1&quot;,&quot;TEXT&quot;,{encoding:&quot;UTF8&quot;})
     shaObj.update(sign);
     return shaObj.getHash(&quot;HEX&quot;).toUpperCase() ;
 }

 // 小写的sha1 加密串
 function getsign (sign: any) {
     let shaObj = new jsSHA(&quot;SHA-1&quot;,&quot;TEXT&quot;,{encoding:&quot;UTF8&quot;})
     shaObj.update(sign);
     return shaObj.getHash(&quot;HEX&quot;) ;
 }


 console.log(&quot;加密好的内容&quot;:getsign(&quot;qdleader&quot;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),t=[d];function l(u,r){return n(),i("div",null,t)}const o=e(a,[["render",l],["__file","ts版本sha1加密优化版本.html.vue"]]);export{o as default};
