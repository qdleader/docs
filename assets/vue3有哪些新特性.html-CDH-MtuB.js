import{_ as a,o as s,c as n,d as e}from"./app-tSvYcIf0.js";const o={},t=e(`<h2 id="说一下vue3的新特性" tabindex="-1"><a class="header-anchor" href="#说一下vue3的新特性" aria-hidden="true">#</a> 说一下Vue3的新特性？</h2><h2 id="_1-组合式api-composition-api" tabindex="-1"><a class="header-anchor" href="#_1-组合式api-composition-api" aria-hidden="true">#</a> 1.组合式API（composition API）</h2><p>为什么使用composition API</p><blockquote><p>options API的组件，比如在A组件中定义了B/C组件的data，methods，生命周期方法，computed，各个逻辑分散在组件的不同区域，代码难以复用，使用composition API解决了这个问题，可以做到高内聚、低耦合，代码可复用性和可维护性更好</p></blockquote><blockquote><p>更好的类型推断，对Typescript更友好 composition API看不到this的使用，解决了this指向不明的问题</p></blockquote><h2 id="_2、生命周期变化" tabindex="-1"><a class="header-anchor" href="#_2、生命周期变化" aria-hidden="true">#</a> 2、生命周期变化</h2><p>创建：beforeCreate和created被setup替代了</p><p>挂载：onBeforeMount onMounted</p><p>更新：onBeforeUpdate onUpdated</p><p>销毁：onBeforeUnmount onUnmounted</p><h2 id="_2-teleport" tabindex="-1"><a class="header-anchor" href="#_2-teleport" aria-hidden="true">#</a> 2.teleport</h2><p>Teleport类似于React的Portal，可以将组件挂载在任何DOM节点上</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;openToast&quot;</span><span class="token operator">&gt;</span>打开toast<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
<span class="token comment">// &lt;!--挂载在id为dialog的节点上--&gt;</span>
<span class="token operator">&lt;</span>teleport to<span class="token operator">=</span><span class="token string">&quot;#dialog&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;visible&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;toast-container&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;toast-msg&quot;</span><span class="token operator">&gt;</span>我是一个toast<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>teleport<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-fragment" tabindex="-1"><a class="header-anchor" href="#_3-fragment" aria-hidden="true">#</a> 3.Fragment</h2><p>Fragment组件支持多个根节点，作用：减少标签层级，减少内存占用</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>header<span class="token operator">&gt;</span><span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>header<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>main v<span class="token operator">-</span>bind<span class="token operator">=</span><span class="token string">&quot;$attrs&quot;</span><span class="token operator">&gt;</span><span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>footer<span class="token operator">&gt;</span><span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>footer<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>diff算法优化</p><p>createRenderer</p><p>3、响应式原理变化</p><p>用Proxy代理配合Reflect反射代替了v2中的Object.defineProperty()实现数据的响应式</p><p>4、更好的支持TS</p><p>因为源码用TS写的</p><p>5、新增内置组件</p><p>Fragment(片段)、Teleport(瞬移)、Suspense(不确定)</p><p>6、新的脚手架工具vite</p><p>7、可以设置多个根节点</p><p>8、重写虚拟DOM的实现和Tree-Shaking，渲染速度更快、打包体积更小</p><p>9、移除了一些东西</p><pre><code>移除v-on的键盘修饰符
移除过滤器filter
</code></pre>`,29),p=[t];function r(l,c){return s(),n("div",null,p)}const d=a(o,[["render",r],["__file","vue3有哪些新特性.html.vue"]]);export{d as default};
