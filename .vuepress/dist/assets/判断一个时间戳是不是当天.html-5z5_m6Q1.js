import{_ as e,o as t,c as n,e as i,d as a}from"./app-pokGQ7aS.js";const s={},l=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if (new Date(Number(ctime)* 1000).toDateString() === new Date().toDateString()) {
  alert(&#39;当天&#39;);
} else if (new Date(Number(ctime)* 1000) &lt; new Date()){
  alert(&#39;之前时间&#39;);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function c(r,d){return t(),n("div",null,[i(" ctime 是我们要比较的时间戳 "),l])}const m=e(s,[["render",c],["__file","判断一个时间戳是不是当天.html.vue"]]);export{m as default};
