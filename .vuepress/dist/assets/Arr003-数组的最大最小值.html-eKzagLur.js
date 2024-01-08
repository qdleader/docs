import{_ as e,o as i,c as n,d as a}from"./app-gxPsN6Nl.js";const r={},l=a(`<h1 id="求数组的最大最小值。" tabindex="-1"><a class="header-anchor" href="#求数组的最大最小值。" aria-hidden="true">#</a> 求数组的最大最小值。</h1><p>let arr = [12,125,732,102,345,75,23,4,234]</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Math.max.apply(null,arr)
Math.min.apply(null,arr)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-es6-的方法" tabindex="-1"><a class="header-anchor" href="#_2-es6-的方法" aria-hidden="true">#</a> 2.es6 的方法：</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let maxNumber = Math.max(...arr)
let minNumber = Math.min(...arr)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-排序方法" tabindex="-1"><a class="header-anchor" href="#_3-排序方法" aria-hidden="true">#</a> 3.排序方法</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>arr.sort( function(a, b) {
    return a - b;
})

let min = arr[0];
let max = arr[arr.length - 1];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="比较法" tabindex="-1"><a class="header-anchor" href="#比较法" aria-hidden="true">#</a> 比较法</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let max = arr[0];

for(let i = 0; i &lt; arr.length; i ++) {
  let cur = arr[i];
  cur &gt; max ? max = cur : null
}

console.log(max)


let min = arr[0];
for(let i = 0; i &lt; arr.length;  i ++) {
  let cur = arr[i];
  cur &lt; min ? min = cur : null
}

console.log(min)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),d=[l];function s(t,c){return i(),n("div",null,d)}const u=e(r,[["render",s],["__file","Arr003-数组的最大最小值.html.vue"]]);export{u as default};
