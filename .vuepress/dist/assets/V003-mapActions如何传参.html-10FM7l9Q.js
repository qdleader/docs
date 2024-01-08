import{_ as e,o as n,c as i,d as s}from"./app-C59QzqDT.js";const d={},l=s(`<p>mapActions如何传参</p><p>调用页面</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>methods:{
  ...mapActions([
        &#39;programPop&#39;
    ]),
    doSomething() {
      this.programPop(true)
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vuex中</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>actions.js

// 展示节目单(...mapAction 传参写方法, str即为传入的参数)
  programPop:({
      commit
  },str) =&gt; {
      commit(types.PROGRAMPOP,str)
  },



mutations.js

//展示节目列表
    [PROGRAMPOP](state,str) {
        console.log(123,state,str)
        state.programPopShow = str
    },

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其他均无变化，参照V001即可</p>`,6),a=[l];function r(t,v){return n(),i("div",null,a)}const m=e(d,[["render",r],["__file","V003-mapActions如何传参.html.vue"]]);export{m as default};
