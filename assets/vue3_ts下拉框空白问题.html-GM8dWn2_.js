import{_ as e,o as n,c as i,d as l}from"./app-tSvYcIf0.js";const d={},s=l(`<p>vue3 + ts + elementplus 项目 下拉框空白问题</p><p>直接渲染下拉框内容</p><p>本地可以，线上下拉为空白</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;el-select v-model=&quot;form.display_type&quot; placeholder=&quot;请选择展演类别&quot;&gt;
    &lt;el-option v-for=&quot;item in catData&quot; :label=&quot;item.label&quot; :value=&quot;item.value&quot; :key=&quot;item.value&quot;&gt;&lt;/el-option&gt;
 &lt;/el-select&gt;



catData:[],




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解决方式" tabindex="-1"><a class="header-anchor" href="#解决方式" aria-hidden="true">#</a> 解决方式</h2><p>在onMounted 重新赋下值即可</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>initData:() =&gt; {
    data.feeList = [
        {
            value:&quot;1&quot;,
            label:&#39;已缴费&#39;
        },
        {
            value:&quot;0&quot;,
            label:&#39;未交费&#39;
        }
    ]
    data.examine = [
        {
            value:&quot;0&quot;,
            label:&#39;未审核&#39;
        },
        {
            value:&quot;1&quot;,
            label:&#39;审核通过&#39;
        },
        {
            value:&quot;2&quot;,
            label:&#39;审核未通过&#39;
        },
    ]
}
})

onMounted(() =&gt; {
    data.initData();
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在子组件中 有时候onmounted 里面也不生效，在异步中 重新赋下值即可</p>`,8),a=[s];function v(t,u){return n(),i("div",null,a)}const r=e(d,[["render",v],["__file","vue3_ts下拉框空白问题.html.vue"]]);export{r as default};
