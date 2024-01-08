import{_ as e,o as t,c as s,d as i}from"./app-C59QzqDT.js";const n={},a=i(`<p>监听state状态变化 订阅state的值：你可以通过store的$subscribe()方法去观察state的改变，类似于subscribe方法。与常规watch()相比，使用$subscribe()的优势在于，在补丁发布后，订阅只会触发一次。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>numerStore.$subscribe((mutation,state)=&gt;{
  mutation.counter
  mutation.name
  mutation.isAdmin
  localStorage.setItem(&quot;numer&quot;,JSON.stringify(state))
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认情况下，状态订阅被绑定到添加它们的组件上(如果存储在组件的setup()中)。这就以为着当组件被卸载的时候，将自动移除。如果你想再组件被移除后继续保持它们，可以通过设置{detached:true}作为第二个参数来从当前组件中分离状态订阅。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const someStore = useSomeStore()
someStore.$subscribe(callback, { detached: true })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,4),r=[a];function c(d,l){return t(),s("div",null,r)}const o=e(n,[["render",c],["__file","subscribe的使用.html.vue"]]);export{o as default};
