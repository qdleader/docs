import{_ as e,o as i,c as n,d as a}from"./app-tSvYcIf0.js";const r={},s=a(`<h1 id="v-for与v-if谁的优先级更高★" tabindex="-1"><a class="header-anchor" href="#v-for与v-if谁的优先级更高★" aria-hidden="true">#</a> v-for与v-if谁的优先级更高★</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. v-for 优先于 v-if被解析的
2.如果同时出现，每次渲染都会先执行循环再判断条件，无论如何循环都不可避免，浪费了性能。

3.要避免这种情况要在外面，先进行条件判断，再循环
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有同学说 判断的条件再数组里面的属性</p><p>那就先对数组进行处理，过滤出满足条件的数组即可。</p>`,4),d=[s];function t(c,o){return i(),n("div",null,d)}const v=e(r,[["render",t],["__file","V009-v-for与v-if谁的优先级更高★.html.vue"]]);export{v as default};
