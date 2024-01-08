import{_ as e,o as s,c as n,d as t}from"./app-tgHnmF2J.js";const r={},i=t(`<p>import astore from &#39;./store&#39;</p><p>new Vue({ router, astore, render: h =&gt; h(App) }).$mount(&#39;#app&#39;)</p><p>此时在vue中你会发现 this.$store 没有</p><p>解决</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import store from &#39;./store&#39;

new Vue({
 router,
 store,
 render: h =&gt; h(App)
}).$mount(&#39;#app&#39;)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vue 中只认 store</p>`,6),o=[i];function d(a,l){return s(),n("div",null,o)}const p=e(r,[["render",d],["__file","this._store获取不到.html.vue"]]);export{p as default};
