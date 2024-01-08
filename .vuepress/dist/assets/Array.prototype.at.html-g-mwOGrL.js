import{_ as n,o as e,c as i,d as r}from"./app-1IAv0yAY.js";const a={},l=r(`<h2 id="使用array-prototype-at-简化arr-length" tabindex="-1"><a class="header-anchor" href="#使用array-prototype-at-简化arr-length" aria-hidden="true">#</a> 使用Array.prototype.at()简化arr.length</h2><p>Array.prototype.at()接收一个正整数或者负整数作为参数，表示获取指定位置的成员</p><p>参数正数就表示顺数第几个，负数表示倒数第几个，这可以很方便的某个数组末尾的元素</p><p>不存在-0，-0 = 0</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr = [1, 2, 3, 4, 5]
// 以前获取最后一位
console.log(arr[arr.length-1]) //5
// 简化后
console.log(arr.at(-1)) // 5



ar arr = [1, 2, 5, 9, 78]

// 第0个
console.log(arr.at(0)) // 1

// 正数第一个
console.log(arr.at(1)) // 2

// 倒数第一个
console.log(arr.at(-1)) // 78

// 倒数第二个
console.log(arr.at(-2)) // 9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么让你实现下呢？</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function at(n) {
  n = Math.trunc(n) || 0; // 去掉小数点
  if (n &lt; 0) n += this.length;
  if (n &lt; 0 || n &gt;= this.length) return undefined;
  return this[n];
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),s=[l];function d(t,v){return e(),i("div",null,s)}const o=n(a,[["render",d],["__file","Array.prototype.at.html.vue"]]);export{o as default};
