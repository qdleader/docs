import{_ as e,o as n,c as i,d as s}from"./app-Ni1_oyYA.js";const d={},l=s(`<h2 id="vue-模板编译原理" tabindex="-1"><a class="header-anchor" href="#vue-模板编译原理" aria-hidden="true">#</a> Vue 模板编译原理</h2><p>Vue 的编译过程就是将 template 转化为 render 函数的过程 分为以下三步</p><blockquote><p>第一步是将 模板字符串 转换成 element ASTs（解析器） 第二步是对 AST 进行静态节点标记，主要用来做虚拟DOM的渲染优化（优化器） 第三步是 使用 element ASTs 生成 render 函数代码字符串（代码生成器）</p></blockquote><p>相关代码如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export function compileToFunctions(template) {
  // 我们需要把html字符串变成render函数
  // 1.把html代码转成ast语法树  ast用来描述代码本身形成树结构 不仅可以描述html 也能描述css以及js语法
  // 很多库都运用到了ast 比如 webpack babel eslint等等
  let ast = parse(template);
  // 2.优化静态节点
  // 这个有兴趣的可以去看源码  不影响核心功能就不实现了
  //   if (options.optimize !== false) {
  //     optimize(ast, options);
  //   }

  // 3.通过ast 重新生成代码
  // 我们最后生成的代码需要和render函数一样
  // 类似_c(&#39;div&#39;,{id:&quot;app&quot;},_c(&#39;div&#39;,undefined,_v(&quot;hello&quot;+_s(name)),_c(&#39;span&#39;,undefined,_v(&quot;world&quot;))))
  // _c代表创建元素 _v代表创建文本 _s代表文Json.stringify--把对象解析成文本
  let code = generate(ast);
  //   使用with语法改变作用域为this  之后调用render函数可以使用call改变this 方便code里面的变量取值
  let renderFn = new Function(\`with(this){return \${code}}\`);
  return renderFn;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),t=[l];function a(r,c){return n(),i("div",null,t)}const u=e(d,[["render",a],["__file","V017-vue模版的编译原理.html.vue"]]);export{u as default};
