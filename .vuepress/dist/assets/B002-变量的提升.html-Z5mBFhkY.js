import{_ as e,o as n,c as t,d as s}from"./app-otDwoQZb.js";const a={},c=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>myVar;  // =&gt; ???
myConst; // =&gt; ???

var myVar = &#39;value&#39;;
const myConst = 3.14;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#答案：</p><blockquote><p>undefined ReferenceError</p></blockquote><p>#解析： 在var变量声明之前,myVar的结果都是undefined； 而let 和 const 声明之前，进行的变量的访问都会报错，因为let 和const都不存在变量的提升， 声明之前的区域成为TDZ，或称暂时性死区，或称时间死区</p>`,4),i=[c];function d(r,l){return n(),t("div",null,i)}const _=e(a,[["render",d],["__file","B002-变量的提升.html.vue"]]);export{_ as default};
