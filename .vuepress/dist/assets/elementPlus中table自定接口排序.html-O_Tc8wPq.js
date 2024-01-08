import{_ as e,o as n,c as i,d as l}from"./app-FRQgbCNf.js";const s={},t=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> &lt;el-table :data=&quot;tableData&quot; @sort-change=&quot;sortTime&quot;  class=&quot;header-bg&quot;  style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column label=&quot;提交兑换申请时间&quot; width=&quot;150&quot; prop=&quot;applyTime&quot;   sortable=&quot;custom&quot; &gt;
       &lt;template #default=&quot;scope&quot;&gt;
         {{formatTime(scope.row.applyTime)}}
       &lt;/template&gt;
    &lt;/el-table-column&gt;
    &lt;/el-table&gt;






&lt;script lang=&quot;ts&quot;&gt;
export default defineComponent({
  name: &quot;User&quot;,
  components:{
    deliveryOrder,
    receiptInfomation
  },
  setup() {
    const data = reactive({

      sortTime:(prop: string, order: string) =&gt; {
        console.log(prop,order);
      },
     
    })
    const refData = toRefs(data);
    return {
        ...refData,
    }
  }
});
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),d=[t];function a(r,v){return n(),i("div",null,d)}const c=e(s,[["render",a],["__file","elementPlus中table自定接口排序.html.vue"]]);export{c as default};
