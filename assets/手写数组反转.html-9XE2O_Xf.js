import{_ as e,o as n,c as i,d as r}from"./app-tSvYcIf0.js";const a={},s=r(`<h1 id="_1-手写数组反转非reverse方法" tabindex="-1"><a class="header-anchor" href="#_1-手写数组反转非reverse方法" aria-hidden="true">#</a> 1.手写数组反转非reverse方法</h1><h2 id="偏基础类" tabindex="-1"><a class="header-anchor" href="#偏基础类" aria-hidden="true">#</a> 偏基础类</h2><p>法1</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let arr = [1,2,3,4];
let arr2 = []

while(arr.length) {
  let num = arr.pop()
  arr2.push(num)
}
console.log(arr2)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>法2</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let arr = [1,2,3,4]
let arr2 = []
while(arr.length) {
  let num = arr.shift()
  arr2.unshit(num)
}
console.log(arr2)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),l=[s];function d(t,c){return n(),i("div",null,l)}const u=e(a,[["render",d],["__file","手写数组反转.html.vue"]]);export{u as default};
