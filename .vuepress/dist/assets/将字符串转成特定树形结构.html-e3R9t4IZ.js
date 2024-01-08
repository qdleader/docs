import{_ as e,o as n,c as i,d as l}from"./app-xrgnhFxe.js";const s={},r=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
let str = &#39;[abc[bcd[def]]]&#39;;

function normalStr(str) {
   let str1 =  str.replace(/\\]/g,&#39;&#39;)
   let arr = str1.split(&#39;[&#39;)
    arr = arr.filter(item =&gt; item)
   let result = {}
   let obj = result
   while(key = arr.shift()) {
       obj.value = key
       if (!arr.length) break;
       obj.children = {};
       obj = obj.children
   }
   return result
 
}
console.log(normalStr(str));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),d=[r];function t(a,c){return n(),i("div",null,d)}const u=e(s,[["render",t],["__file","将字符串转成特定树形结构.html.vue"]]);export{u as default};
