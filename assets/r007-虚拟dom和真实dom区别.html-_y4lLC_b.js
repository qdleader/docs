import{_ as a,o as e,c as d,d as r}from"./app-tSvYcIf0.js";const o={},t=r('<h1 id="r007-虚拟dom-md" tabindex="-1"><a class="header-anchor" href="#r007-虚拟dom-md" aria-hidden="true">#</a> r007-虚拟dom.md</h1><h2 id="_1-虚拟-dom-是什么" tabindex="-1"><a class="header-anchor" href="#_1-虚拟-dom-是什么" aria-hidden="true">#</a> 1.虚拟 DOM 是什么？</h2><blockquote><p>一个能模拟DOM树普通的 JavaScript 对象，包含了 tag、props、children 三个属性。</p></blockquote><p>虚拟DOM不会进行排版与重绘操作，而真实DOM会频繁重排与重绘 <strong>虚拟DOM的总损耗是“虚拟DOM增删改+真实DOM差异增删改+排版与重绘”，真实DOM的总损耗是“真实DOM完全增删改+排版与重绘”</strong></p><p>原生js去操作DOM时，浏览器会从构建DOM树开始从头到尾执行一遍流程</p><p>当你在一次操作时，需要更新10个DOM节点，浏览器没这么智能，收到第一个更新DOM请求后，并不知道后续还有9次更新操作，因此会马上执行流程，最终执行10次流程 而通过VNode，同样更新10个DOM节点，虚拟DOM不会立即操作DOM，而是将这10次更新的diff内容保存到本地的一个js对象中，最终将这个js对象一次性attach到DOM树上，避免大量的无谓计算</p><h2 id="_2、优缺点" tabindex="-1"><a class="header-anchor" href="#_2、优缺点" aria-hidden="true">#</a> 2、优缺点</h2><h4 id="真实dom" tabindex="-1"><a class="header-anchor" href="#真实dom" aria-hidden="true">#</a> 真实DOM</h4><p>优势： 易用 缺点：</p><blockquote><p>效率低，解析速度慢，内存占用量过高 性能差：频繁操作真实DOM，易于导致重绘与回流</p></blockquote><h4 id="使用虚拟dom" tabindex="-1"><a class="header-anchor" href="#使用虚拟dom" aria-hidden="true">#</a> 使用虚拟DOM</h4><p>优势：</p><blockquote><p>保证性能下限: 虚拟 DOM 可以经过 diff 找出最小差异,然后批量进行 patch,这种操作虽然比不上手动优化,但是比起粗暴的 DOM 操作性能要好很多,因此虚拟 DOM 可以保证性能下限 简单方便：如果使用手动操作真实DOM来完成页面，繁琐又容易出错，在大规模应用下维护起来也很困难 性能方面：使用Virtual DOM，能够有效避免真实DOM数频繁更新，减少多次引起重绘与回流，提高性能 跨平台：虚拟 DOM 本质上是 JavaScript 对象,而 DOM 与平台强相关,相比之下虚拟 DOM 可以进行更方便地跨平台操作</p></blockquote><p>缺点： 在一些性能要求极高的应用中虚拟 DOM 无法进行针对性的极致优化 首次渲染大量DOM时，由于多了一层虚拟DOM的计算，速度比正常稍慢</p><h2 id="虚拟-dom-实现原理" tabindex="-1"><a class="header-anchor" href="#虚拟-dom-实现原理" aria-hidden="true">#</a> 虚拟 DOM 实现原理?</h2><p>虚拟 DOM 本质上是 JavaScript 对象,是对真实 DOM 的抽象 状态变更时，记录新树和旧树的差异 最后把差异更新到真正的 dom 中</p>',16),h=[t];function c(i,D){return e(),d("div",null,h)}const O=a(o,[["render",c],["__file","r007-虚拟dom和真实dom区别.html.vue"]]);export{O as default};
