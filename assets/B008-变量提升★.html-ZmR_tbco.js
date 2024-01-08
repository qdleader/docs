import{_ as e,o as n,c as i,d}from"./app-tSvYcIf0.js";const a={},s=d(`<h2 id="_1" tabindex="-1"><a class="header-anchor" href="#_1" aria-hidden="true">#</a> 1</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function a() {

}
var a;
console.log(typeof a);  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2><p>function a() {}</p><h2 id="_2" tabindex="-1"><a class="header-anchor" href="#_2" aria-hidden="true">#</a> 2</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var c = 1;
function c(c) {
    console.log(c);
}
c(2)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="答案-1" tabindex="-1"><a class="header-anchor" href="#答案-1" aria-hidden="true">#</a> 答案</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>报错 c is not a function
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> function fn(a,c) {
     console.log(a)
     var a= 123;
     console.log(a)
     console.log(c)

 }
fn(1,2)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="答案-2" tabindex="-1"><a class="header-anchor" href="#答案-2" aria-hidden="true">#</a> 答案：</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1
123
2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>初始化时候a 为undefined，传入参数a为1，a就为1了</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
   function fn(a,c) {
    console.log(a)
    var a= 123;
    console.log(a)
    console.log(c)

    function a() {}

    if(false) {
        var d = 678
    }

    console.log(d)
    console.log(b)

    var b = function() {};

    console.log(b)

    function c() {}
    console.log(c)

}
fn(1,2)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输出：
function a() {}
123
function c() {}
undefined
undefined
function () {}
function c() {}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>传入参数a为1，但是下面有个函数a,函数会把之前的覆盖因此，打印a时候就是 function a() {</p><p>}</p>`,16),l=[s];function c(v,r){return n(),i("div",null,l)}const t=e(a,[["render",c],["__file","B008-变量提升★.html.vue"]]);export{t as default};
