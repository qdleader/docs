import{_ as e,o as n,c as i,d as s}from"./app-G0TSq-iO.js";const r={},t=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function processString (s) {
    let arr = s.split(&#39;&#39;);
    let arr1 = arr.map((item) =&gt; {
    return item == item.toUpperCase() ? item.toLowerCase() : item.toUpperCase()
    })
    return arr1.join(&#39;&#39;)
}
console.log(11, processString(&#39;AbC&#39;));

    \`\`\`</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),a=[t];function l(d,c){return n(),i("div",null,a)}const _=e(r,[["render",l],["__file","字符串中大小字母转换.html.vue"]]);export{_ as default};
