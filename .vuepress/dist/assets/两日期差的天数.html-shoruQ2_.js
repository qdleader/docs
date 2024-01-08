import{_ as e,o as t,c as a,d as n}from"./app-G0TSq-iO.js";const i={},d=n(`<h2 id="两日期之间相差的天数" tabindex="-1"><a class="header-anchor" href="#两日期之间相差的天数" aria-hidden="true">#</a> 两日期之间相差的天数</h2><p>日常开发中经常遇到需要显示剩余天数， 一般我们就需要计算两日期之间相差天数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const dayDiff = (date1, date2) =&gt; Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);

dayDiff(new Date(&quot;2021-10-21&quot;), new Date(&quot;2022-02-12&quot;))
// Result: 114

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),s=[d];function c(l,r){return t(),a("div",null,s)}const _=e(i,[["render",c],["__file","两日期差的天数.html.vue"]]);export{_ as default};
