import{_ as e,o as n,c as i,d}from"./app-pokGQ7aS.js";const s={},l=d(`<h1 id="_8-vue中父组件能监听到子组件的生命周期吗" tabindex="-1"><a class="header-anchor" href="#_8-vue中父组件能监听到子组件的生命周期吗" aria-hidden="true">#</a> 8.vue中父组件能监听到子组件的生命周期吗</h1><p>比如有父组件 Parent 和子组件 Child， 如果父组件监听到子组件挂载 mounted 就做一些逻辑处理，可以通过以下写法实现：</p><h1 id="方法1-通过-emit-触发父组件的事件" tabindex="-1"><a class="header-anchor" href="#方法1-通过-emit-触发父组件的事件" aria-hidden="true">#</a> 方法1 通过 $emit 触发父组件的事件，</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// Parent.vue
&lt;Child @mounted=&quot;doSomething&quot;/&gt;

// Child.vue
mounted() {
  this.$emit(&quot;mounted&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="方法2-可以在父组件引用子组件时通过-hook-来监听即可-如下所示" tabindex="-1"><a class="header-anchor" href="#方法2-可以在父组件引用子组件时通过-hook-来监听即可-如下所示" aria-hidden="true">#</a> 方法2 可以在父组件引用子组件时通过 @hook 来监听即可，如下所示：</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//  Parent.vue
&lt;Child @hook:mounted=&quot;doSomething&quot; &gt;&lt;/Child&gt;

doSomething() {
   console.log(&#39;父组件监听到 mounted 钩子函数 ...&#39;);
},

//  Child.vue
mounted(){
   console.log(&#39;子组件触发 mounted 钩子函数 ...&#39;);
},    

// 以上输出顺序为：
// 子组件触发 mounted 钩子函数 ...
// 父组件监听到 mounted 钩子函数 ...
1父组件能够监听到子组件的生命周期，通过@hook:进行监听代码如下：

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）callHook函数源码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export function callHook (vm: Component, hook: string) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget()
  const handlers = vm.$options[hook] // 选项当中的生命周期函数
  const info = \`\${hook} hook\`
  if (handlers) {
    for (let i = 0, j = handlers.length; i &lt; j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info)
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit(&#39;hook:&#39; + hook)
  }
  popTarget()
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>即每个生命周期钩子函数执行函数为：vm.$emit(&#39;hook:&#39; + hook)，前提条件是_hasHookEvent值为true。</p><p>（3）_hasHookEvent标志位源码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const hookRE = /^hook:/ // 以hook:开头
Vue.prototype.$on = function (event: string | Array&lt;string&gt;, fn: Function): Component {
  const vm: Component = this
  if (Array.isArray(event)) {
    for (let i = 0, l = event.length; i &lt; l; i++) {
      vm.$on(event[i], fn)
    }
  } else {
    (vm._events[event] || (vm._events[event] = [])).push(fn)
    // optimize hook:event cost by using a boolean flag marked at registration
    // instead of a hash lookup
    if (hookRE.test(event)) {
      vm._hasHookEvent = true
    }
  }
  return vm
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原码解析：</p><p>eventsMixin方法是检查v-on监听的事件名是否以hook:开头，如果是则将对应生命同期的<code>_hasHookEvent</code>值设置为true；</p><p>如果_hasHookEvent为true，则会触发$emit(&#39;hook:&#39; + 对应的生命周期钩子)</p><p>由此可见，方法二的原理跟方法一其实是一样的.</p>`,15),v=[l];function a(o,t){return n(),i("div",null,v)}const u=e(s,[["render",a],["__file","V009-vue中父组件监听到子组件的生命周期.html.vue"]]);export{u as default};
