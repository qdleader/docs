import{_ as e,o as i,c as d,d as n}from"./app-1IAv0yAY.js";const l={},s=n(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;el-popover
     v-model=&quot;visible&quot;
     placement=&quot;top&quot;
     width=&quot;208&quot;
     :popper-class=&quot;isEmbedded?&#39;checkVisibled dbrc-popover dbrc-popoverupper&#39;:&#39;checkVisibled-white dbrc-popover dbrc-popoverupper&#39;&quot;
   &gt;
     &lt;div
       slot=&quot;reference&quot;
       :ref=&quot;\`popoverBtn\`&quot;
       class=&quot;dialogAdd-box-right-add dbra-top&quot;
       @click.stop=&quot;addPop(item,index)&quot;
     &gt;
       &lt;i class=&quot;iconfont icon-bim-add dialogAdd-box-right-add icon-bim-add-top ibat&quot; /&gt;
     &lt;/div&gt;
   &lt;/el-popover&gt;



   // 自定义一个 box
  &lt;div @click.stop=&quot;doShowPopover&quot;&gt;
    控制显隐
  &lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>doShowPopover(item, index) {
   this.$refs[\`popoverBtn\`].click();
 },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关键点就是 你在自定义事件那加一个阻止默认事件。防止你已经触发popover 已经打开，但事件传递到document 上又被关闭了</p>`,3),o=[s];function t(v,r){return i(),d("div",null,o)}const a=e(l,[["render",t],["__file","添加自定义控制popover显隐事件.html.vue"]]);export{a as default};
