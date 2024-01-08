import{_ as n,o as e,c as i,d as s}from"./app-tSvYcIf0.js";const d={},l=s(`<p>父组件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div&gt;

  &lt;editPage ref=&quot;sonRef&quot;/&gt;
&lt;/div&gt;


&lt;/template&gt;

&lt;script lang=&quot;ts&quot;&gt;

import { onMounted ,reactive,toRefs,defineComponent,ref} from &#39;vue&#39;
import editPage from &#39;./edit.vue&#39;

import {displayList} from &#39;./../../http/httpUrl&#39;;
interface DataProps {
  formInline1: string;
  formInline2: string;
  dataList: [];
  current: number;
  pageSize: number;
  total: number;
  handleSubmit: () =&gt; void;
  getData: () =&gt; void;
  tableData:[]
}

interface ResProps {
  data: [];
  currentPage: number;
  totalCount: number;
}

export default defineComponent({
name:&#39;about&#39;,
 components: {
     editPage
},
setup() {

  const sonRef = ref()
  const sendValue = () =&gt; {
     // 可以拿到son组件实例，并调用其setup返回的所有信息
     console.log(sonRef.value)

     // 通过调用son组件实例的方法，向其传递数据
     sonRef.value.acceptValue(&#39;123456&#39;)
   }



   return {
           sonRef
      }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子组件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>

export default defineComponent({
    name:&#39;editPage&#39;,
     components: {
    },
    setup() {
    const data: DataProps = reactive({
          //正常写即可
          acceptValue:(value: string) =&gt; {
              console.log(&quot;子组件方法被调用啦&quot;,value)
          }

        })
        onMounted(() =&gt; {
            data.getData()
        })
        const refData = toRefs(data);
        return {
            ...refData
        }
    }
})
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),v=[l];function a(r,t){return e(),i("div",null,v)}const c=n(d,[["render",a],["__file","vue3_ts父组件调用子组件方法.html.vue"]]);export{c as default};
