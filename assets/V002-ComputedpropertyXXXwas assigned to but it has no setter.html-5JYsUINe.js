import{_ as e,o as t,c as s,d as n}from"./app-tSvYcIf0.js";const i={},d=n(`<p>Computed property &quot;XXX&quot; was assigned to but it has no setter</p><blockquote><p>001 中留了个小坑，有同学问，按照你的方法后，问啥报错了？ -&gt; . -&gt; 虽然不影响使用，报错也不行呀。</p></blockquote><p>#分析原因： 1.组件中v-model=“XXX”，而XXX是vuex state中的某个变量 2.vuex中是单项流，v-model是vue中的双向绑定， 但是在computed中只通过get获取参数值，没有set无法改变参数值</p><p>#解决方法： ##方法1</p><blockquote><p>将v-model 改为 :value</p></blockquote><p>##方法2 在computed里面添加：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>computed:{
    ...mapState({
   	&lt;!-- cpShow:&#39;cpShow&#39; --&gt;
    }),
    &lt;!-- 上面这种获取只有get没有set，修改为下面方式 --&gt;
    cpShow:{
   	 get() {
   		 return this.$store.state.cpShow;
   	 },
   	 set(val) {
   		 this.$store.state.cpShow = val
   	 }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),l=[d];function o(a,c){return t(),s("div",null,l)}const u=e(i,[["render",o],["__file","V002-ComputedpropertyXXXwas assigned to but it has no setter.html.vue"]]);export{u as default};
