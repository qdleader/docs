import{_ as a,o as r,c as t,e as i,a as e,b as s,d as n}from"./app-C59QzqDT.js";const d={},l=e("p",null,"##V003-beforeDestory里面一般进行什么操作",-1),c=e("p",null,[s("beforedestoryed是组件销毁之前执行的一个生命周期，在这个生命周期里，我们可以进行回调函数或定时器的清 "),e("br"),s(" ①解绑自定义事件 event.$off ②消除定时器 ③解绑自定义的DOM事件 如window.scroll等")],-1),m=e("p",null,"日期在我点击查询的时候要存储,刷新就读内存,但是我点击其他页面再进来的时候,这个内存要清空",-1),o=n(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>search(){
      let time = { 
        start: this.formSearch.beginSearchTime,
        end: this.formSearch.endSearchTime,
        timeRange: this.formSearch.timeRange,
        page: this.formSearch.page
      }
      localStorage.setItem(&#39;initTime&#39;,JSON.stringify(time))
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),v=n(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> created () {  
    let searchCarTime = JSON.parse(localStorage.getItem(&#39;initTime&#39;))
    if (searchCarTime) {
      this.formSearch.beginSearchTime = searchCarTime.start
      this.formSearch.endSearchTime = searchCarTime.end,
      this.formSearch.timeRange = searchCarTime.timeRange 
      this.formSearch.page = searchCarTime.page 
    }
  },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),u=n(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> beforeDestroy(){
    localStorage.removeItem(&#39;initTime&#39;)
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function h(b,_){return r(),t("div",null,[l,c,m,i(" 搜索时候存储 "),o,i(" 刷新时候判断有没有搜索过，有的话直接在缓存中取 "),v,i(" 离开页面时候销毁 "),u])}const f=a(d,[["render",h],["__file","V003-beforeDestory里面一般进行什么操作.html.vue"]]);export{f as default};
