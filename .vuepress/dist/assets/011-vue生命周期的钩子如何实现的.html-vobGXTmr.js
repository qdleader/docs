import{_ as n,o as e,c as i,d as s}from"./app-C59QzqDT.js";const l={},d=s(`<h2 id="生命周期钩子是如何实现的" tabindex="-1"><a class="header-anchor" href="#生命周期钩子是如何实现的" aria-hidden="true">#</a> 生命周期钩子是如何实现的</h2><p>Vue 的生命周期钩子核心实现是利用发布订阅模式先把用户传入的的生命周期钩子订阅好（内部采用数组的方式存储）然后在创建组件实例的过程中会一次执行对应的钩子方法（发布） 相关代码如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export function callHook(vm, hook) {
  // 依次执行生命周期对应的方法
  const handlers = vm.$options[hook];
  if (handlers) {
    for (let i = 0; i &lt; handlers.length; i++) {
      handlers[i].call(vm); //生命周期里面的this指向当前实例
    }
  }
}

// 调用的时候
Vue.prototype._init = function (options) {
  const vm = this;
  vm.$options = mergeOptions(vm.constructor.options, options);
  callHook(vm, &quot;beforeCreate&quot;); //初始化数据之前
  // 初始化状态
  initState(vm);
  callHook(vm, &quot;created&quot;); //初始化数据之后
  if (vm.$options.el) {
    vm.$mount(vm.$options.el);
  }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),t=[d];function a(v,o){return e(),i("div",null,t)}const c=n(l,[["render",a],["__file","011-vue生命周期的钩子如何实现的.html.vue"]]);export{c as default};
