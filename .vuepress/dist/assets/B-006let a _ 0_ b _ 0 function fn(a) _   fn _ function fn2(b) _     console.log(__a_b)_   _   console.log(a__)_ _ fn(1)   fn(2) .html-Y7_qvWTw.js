import{_ as e,o as n,c as a,d as _}from"./app-Ni1_oyYA.js";const i={},l=_(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let a = 0, b = 0
function fn(a) {
  fn = function fn2(b) {
    console.log(++a+b);
  }
  console.log(a++);
}
fn(1)  
fn(2) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2><p>fn(1) //1 fn(2) // 5</p><h2 id="解析" tabindex="-1"><a class="header-anchor" href="#解析" aria-hidden="true">#</a> 解析</h2><p>第一次调用A时，执行到console.log(a++)时，a已经完成自加，此时a的值为2，a++的值为1。</p><p>fn(1)=1</p><p>第二次调用A时，fn已经被重新赋值，指向了一个新的函数引用；</p><p>由于标识符A是在全局作用域定义的，所以在函数内部被重新赋值，在全局作用域也可以访问到重新赋值后的函数。</p><p>此时，也创建了一个闭包，该闭包保存了创建环境的活动对象。</p><p>此时活动对象：{ a: 2 }，同时， 根据传入的数值2,++a值为3，确定 b = 2。 执行到 console.log(++a + b)，故而输出5 fn(2)=5</p><h2 id="思考" tabindex="-1"><a class="header-anchor" href="#思考" aria-hidden="true">#</a> 思考</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//此处说明 ++操作符的特性。
var i = 0;
var eg = i++;
var eg1 = ++i;
console.log(i, eg, eg1) // 2 0 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>&#39;+&#39; 在后面 后加</p><p>&#39;+&#39; 在前面 先加</p></blockquote>`,13),s=[l];function d(c,o){return n(),a("div",null,s)}const t=e(i,[["render",d],["__file","B-006let a _ 0_ b _ 0 function fn(a) _   fn _ function fn2(b) _     console.log(__a_b)_   _   console.log(a__)_ _ fn(1)   fn(2) .html.vue"]]);export{t as default};
