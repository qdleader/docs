import{_ as e,o as i,c as n,d}from"./app-qTEUp92E.js";const s={},a=d(`<h1 id="打印输出" tabindex="-1"><a class="header-anchor" href="#打印输出" aria-hidden="true">#</a> 打印输出</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console.log(typeof NULL == typeof undefined)


console.log(typeof null)
console.log(typeof undefined)
console.log(typeof NUll)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>true

object

undefined

undefined
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="打印输出-1" tabindex="-1"><a class="header-anchor" href="#打印输出-1" aria-hidden="true">#</a> 打印输出</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for (var i = 0; i &lt; 3; i++) {
    setTimeout(() =&gt; console.log(i), 1)
}

for (let i = 0; i &lt; 3; i++) {
    setTimeout(() =&gt; console.log(i), 1)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>3
3
3

0
1
2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="打印输出-2" tabindex="-1"><a class="header-anchor" href="#打印输出-2" aria-hidden="true">#</a> 打印输出</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2
  },
  perimeter: () =&gt; 2 * Math.PI * this.radius
}

shape.diameter()
shape.perimeter()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>20
NaN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>输出是20和NaN，因为diameter中的this指的是shape中的radius，但是perimeter由于是箭头函数所以，当我们调用 perimeter 时，this 不是指向 shape 对象，而是它的周围作用域（在例子中是 window）。</p></blockquote>`,13),l=[a];function r(t,v){return i(),n("div",null,l)}const u=e(s,[["render",r],["__file","打印输出.html.vue"]]);export{u as default};
