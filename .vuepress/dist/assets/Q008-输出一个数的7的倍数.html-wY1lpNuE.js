import{_ as e,o as n,c as i,d as a}from"./app-G0TSq-iO.js";const d={},r=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
function getValue(number) {
    return &#39;&#39;.padEnd(number, 0).replace(/0/g,&#39;&#39;.padEnd(7)).length
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function getValue(number) {
    return &#39;&#39;.padEnd(number, 0).repeat(7).length;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-数组" tabindex="-1"><a class="header-anchor" href="#_3-数组" aria-hidden="true">#</a> 3.数组</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function getvalue(number) {
    return new Array(number).fill().map(() =&gt; {
        return new Array(7).fill();
    }).flat().length;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-位移运算处理" tabindex="-1"><a class="header-anchor" href="#_4-位移运算处理" aria-hidden="true">#</a> 4.位移运算处理</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function getValue(number) {
    return parseInt([(number).toString(7),0].join(&#39;&#39;),7)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),l=[r];function s(t,u){return n(),i("div",null,l)}const v=e(d,[["render",s],["__file","Q008-输出一个数的7的倍数.html.vue"]]);export{v as default};
