import{_ as n,o as e,c as i,d as s}from"./app-xrgnhFxe.js";const d={},l=s(`<h1 id="手写bind函数" tabindex="-1"><a class="header-anchor" href="#手写bind函数" aria-hidden="true">#</a> 手写bind函数</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Function.prototype.bind1 = function() {
  let args = Array.prototype.slice.call(arguments)
  let t = args.shift()
  let self = this;
  return function() {
    self.apply(t,arguments)
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Function.prototype.bind1 = function () { // 这块不可以使用箭头函数，因为 this 的指向不同
  // arguments 可以获取一个函数的所有参数，arguments 是一个伪数组
  // 使用 Array.from() 方法将 arguments 伪数组转化成数组
  const args = Array.from(arguments)
  // 获取 this 指向取出数组第一项，数组剩余的就是传递的参数
  const t = args.shift()
  const self = this // 当前函数 fn1.bind(...) 中的 fn1
  return () =&gt; {
    return self.apply(t, args)
  }
}

function fn1(a, b, c) {
  console.log(&#39;this&#39;, this)
  console.log(a, b, c)
}

const fn2 = fn1.bind1({x: 100}, 10, 20, 30)
const res = fn2()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),a=[l];function r(t,c){return e(),i("div",null,a)}const u=n(d,[["render",r],["__file","S005-手写bind.html.vue"]]);export{u as default};
