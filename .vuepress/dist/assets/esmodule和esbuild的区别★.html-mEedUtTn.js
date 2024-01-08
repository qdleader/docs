import{_ as s,o as n,c as e,d as a}from"./app-C59QzqDT.js";const i={},c=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>CommonJS：模块同步，如Browserify会对代码进行解析，整理出代码中的所有模块依赖关系，然后把nodejs的模块编译成浏览器可用的模块，相关的模块代码都打包在一起，形成一个完整的<span class="token constant">JS</span>文件，这个文件中不会存在 require 这类的模块化语法，变成可以在浏览器中运行的普通<span class="token constant">JS</span>，运行时加载




<span class="token constant">ESM</span>的对外接口只是一种静态定义，为编译时加载，遇到模块加载命令<span class="token keyword">import</span>，就会生成一个只读引用。等脚本真正执行时，再根据这个只读引用，到被加载的那个模块内取值。由于<span class="token constant">ESM</span>编译时就能确定模块的依赖关系，因此能够只包含要运行的代码，可以显著减少文件体积，降低浏览器压力。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),l=[c];function t(d,o){return n(),e("div",null,l)}const u=s(i,[["render",t],["__file","esmodule和esbuild的区别★.html.vue"]]);export{u as default};
