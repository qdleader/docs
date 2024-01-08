import{_ as e,o as i,c as n,d as s}from"./app-tgHnmF2J.js";const d={},a=s(`<p>ES6 Module 静态的，不能放在块级作用域内，代码发生在编译时。 ES6 Module 的值是动态绑定的，可以通过导出方法修改，可以直接访问修改结果。 ES6 Module 可以导出多个属性和方法，可以单个导入导出，混合导入导出。 ES6 模块提前加载并执行模块文件，</p><h2 id="静态语法" tabindex="-1"><a class="header-anchor" href="#静态语法" aria-hidden="true">#</a> 静态语法</h2><p>ES6 module 的引入和导出是静态的，import 会自动提升到代码的顶层 ，import , export 不能放在块级作用域或条件语句中。</p><h2 id="执行特性" tabindex="-1"><a class="header-anchor" href="#执行特性" aria-hidden="true">#</a> 执行特性</h2><p>ES6 module 和 Common.js 一样，对于相同的 js 文件，会保存静态属性。 但是与 Common.js 不同的是 ，CommonJS 模块同步加载并执行模块文件，ES6 模块提前加载并执行模块文件，ES6 模块在预处理阶段分析模块依赖，在执行阶段执行模块，两个阶段都采用深度优先遍历，执行顺序是子 -&gt; 父。 如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>main.js
console.log(&#39;main.js开始执行&#39;)
import say from &#39;./a&#39;
import say1 from &#39;./b&#39;
console.log(&#39;main.js执行完毕&#39;)




a.js
import b from &#39;./b&#39;
console.log(&#39;a模块加载&#39;)
export default  function say (){
    console.log(&#39;hello , world&#39;)
}



b.js
console.log(&#39;b模块加载&#39;)
export default function sayhello(){
    console.log(&#39;hello,world&#39;)
}

main.js 和 a.js 都引用了 b.js 模块，但是 b 模块也只加载了一次。
执行顺序是子 -&gt; 父


b模块加载
a模块加载
main.js开始执行
main.js执行完毕

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="导出绑定" tabindex="-1"><a class="header-anchor" href="#导出绑定" aria-hidden="true">#</a> 导出绑定</h2><p>不能修改import导入的属性 使用 import 被导入的变量是只读的，可以理解默认为 const 装饰，无法被赋值 使用 import 被导入的变量是与原变量绑定/引用的，可以理解为 import 导入的变量无论是否为基本类型都是引用传递。</p><h2 id="import-动态引入" tabindex="-1"><a class="header-anchor" href="#import-动态引入" aria-hidden="true">#</a> import() 动态引入</h2><p>import() 返回一个 Promise 对象， 返回的 Promise 的 then 成功回调中，可以获取模块的加载成功信息</p><h4 id="动态加载可以放在块级作用域" tabindex="-1"><a class="header-anchor" href="#动态加载可以放在块级作用域" aria-hidden="true">#</a> 动态加载可以放在块级作用域</h4><p>首先 import() 动态加载一些内容，可以放在条件语句或者函数执行上下文中</p><h4 id="懒加载-也可实现代码分割" tabindex="-1"><a class="header-anchor" href="#懒加载-也可实现代码分割" aria-hidden="true">#</a> 懒加载 也可实现代码分割</h4><p>import() 这种加载效果，可以很轻松的实现代码分割。避免一次性加载大量 js 文件</p><p>ES6导入 Tree Shaking 在 Webpack 中的实现，是用来尽可能的删除没有被使用过的代码，一些被 import 了但其实没有被使用的代码，就不会被打包</p>`,15),l=[a];function r(o,m){return i(),n("div",null,l)}const v=e(d,[["render",r],["__file","es module的特点.html.vue"]]);export{v as default};
