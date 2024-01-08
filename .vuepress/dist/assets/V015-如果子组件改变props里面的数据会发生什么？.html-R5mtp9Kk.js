import{_ as e,o as i,c as n,d as s}from"./app-pokGQ7aS.js";const d={},a=s(`<h2 id="改变的props数据是基本类型" tabindex="-1"><a class="header-anchor" href="#改变的props数据是基本类型" aria-hidden="true">#</a> 改变的props数据是基本类型</h2><blockquote><p>如果修改的是基本类型，则会报错</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>props: {
    num: Number,
  }
created() {
    this.num = 999
  }


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="改变的props数据是引用类型" tabindex="-1"><a class="header-anchor" href="#改变的props数据是引用类型" aria-hidden="true">#</a> 改变的props数据是引用类型</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>props: {
    item: {
      default: () =&gt; {},
    }
  }
created() {
    // 不报错，并且父级数据会跟着变
    this.item.name = &#39;qdleader&#39;;

    // 会报错，跟基础类型报错一样
    this.item = &#39;sss&#39;
  },


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=[a];function r(c,t){return i(),n("div",null,l)}const u=e(d,[["render",r],["__file","V015-如果子组件改变props里面的数据会发生什么？.html.vue"]]);export{u as default};
