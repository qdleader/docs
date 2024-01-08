import{_ as e,o as n,c as i,d}from"./app-C59QzqDT.js";const s={},l=d(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>setUp() {
  console.log(&quot;1-开始创建组件&quot;)

  onBeforeMount(() =&gt; {
    console.log(&quot;2.组件挂载页面之前执行------onBeforeMount&quot;)
  })

  onMounted(() =&gt; {
    console.log(&quot;3.组件挂载到页面之后执行----onMounted&quot;)
  })

  onBeforeUpdate(() =&gt; {
    console.log(&quot;4.组件更新之前------onBeforeUpdate&quot;)
  })

  onUpdated(() =&gt; {
    console.log(&quot;5.组件更新之后 --------onUpdated&quot;)
  })

  onBeforeUunmount(() =&gt; {
    console.log(&quot;组件卸载之前执行&quot;)
  })

  onUnmounted(() =&gt; {
    console.log(&quot;组件卸载之后执行&quot;)
  })

  onActivated(() =&gt; {
      console.log(&quot;活跃组件onActivated在keep-alive中使用&quot;)
  })

  onDeactivated(() =&gt; {
      console.log(&quot;离开活跃页面onDeactivated 在keep-alive组件中使用&quot;)
  })

  onErrorCaptured(() =&gt; {
      console.log(&quot;当捕获一个来自子孙组件异常时候激活的钩子函数&quot;)
  })
}








</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue2与vue3生命周期对比" tabindex="-1"><a class="header-anchor" href="#vue2与vue3生命周期对比" aria-hidden="true">#</a> vue2与vue3生命周期对比</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// beforeCreate -&gt; use setup()
 // created -&gt; use setup()
 // beforeMount -&gt; onBeforeMount
 // mounted -&gt; onMounted
 // beforeUpdate -&gt; onBeforeUpdate
 // updated -&gt; onUpdated
 // beforeDestroy -&gt; onBeforeUnmount
 // destroyed -&gt; onUnmounted
 // errorCaptured -&gt; onErrorCaptured
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue3新增的两个函数" tabindex="-1"><a class="header-anchor" href="#vue3新增的两个函数" aria-hidden="true">#</a> vue3新增的两个函数</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>onRenderTracked((event) =&gt; {
    console.log(&quot;状态跟踪&quot;,onRenderTracked)
})

onRenderTriggered((event) =&gt; {
  console.log(&quot;状态跟踪钩子函数&quot;,onRenderTriggered)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),v=[l];function a(o,r){return n(),i("div",null,v)}const t=e(s,[["render",a],["__file","vue3中的生命周期.html.vue"]]);export{t as default};
