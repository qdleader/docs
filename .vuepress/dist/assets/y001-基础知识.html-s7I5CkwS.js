import{_ as e,o as n,c as i,d as a}from"./app-G0TSq-iO.js";const l={},s=a(`<p>原型规则</p><blockquote><p>所有的引用类型（数组，对象， 函数）,都具有对象特性，即可自由扩展属性（除了null 之外）</p></blockquote><h2 id="构造函数扩展" tabindex="-1"><a class="header-anchor" href="#构造函数扩展" aria-hidden="true">#</a> 构造函数扩展</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let a = {}  其实是 let a = new Object() 的语法糖

let a = [] 其实是let a = new Array() 的语法糖

function Foo() {...} 其实是 var Foo = new Function(...)


使用 instanceof 判断一个函数 是否是一个变量的构造函数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),t=[s];function d(c,r){return n(),i("div",null,t)}const u=e(l,[["render",d],["__file","y001-基础知识.html.vue"]]);export{u as default};
