import{_ as n,o as e,c as t,d as i}from"./app-otDwoQZb.js";const u={},o=i(`<p>我们在.vue文件中输入自定义指令，快速生成vue3模板</p><ol><li></li></ol><p>首先在vscode编辑器中</p><p>文件--&gt;首选项--&gt;用户代码片段--&gt;点击新建代码片段--取名vue.json 确定</p><p>2.把代码放进去。。。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;Print to console&quot;: {
      &quot;prefix&quot;: &quot;vue3&quot;,
      &quot;body&quot;: [
        &quot;&lt;!-- $0 --&gt;&quot;,
        &quot;&lt;template&gt;&quot;,
        &quot;  &lt;div&gt;&lt;/div&gt;&quot;,
        &quot;&lt;/template&gt;&quot;,
        &quot;&quot;,
        &quot;&lt;script lang=&#39;ts&#39;&gt;&quot;,
        &quot;import { reactive,toRefs,onBeforeMount,onMounted} from &#39;vue&#39;&quot;,
        &quot;interface DataProps {}&quot;,

        &quot;export default {&quot;,
        &quot;    name: &#39;&#39;,&quot;,
        &quot;      setup() {&quot;,
        &quot;          console.log(&#39;1-开始创建组件-setup&#39;)&quot;,
        &quot;          const data: DataProps = reactive({&quot;,
        &quot;&quot;            ,
        &quot;          })&quot;,
        &quot;          onBeforeMount(() =&gt; {&quot;,
        &quot;              console.log(&#39;2.组件挂载页面之前执行----onBeforeMount&#39;)&quot;,
        &quot;          })&quot;,
        &quot;          onMounted(() =&gt; {&quot;,
        &quot;              console.log(&#39;3.-组件挂载到页面之后执行-------onMounted&#39;)&quot;,
        &quot;          })&quot;,
        &quot;          const refData = toRefs(data);&quot;,
        &quot;          return {&quot;,
        &quot;              ...refData,&quot;,
        &quot;          }&quot;,
        &quot;&quot;  ,
        &quot;      }&quot;,
        &quot;  };&quot;,
        &quot;&lt;/script&gt;&quot;,
        &quot;&lt;style scoped&gt;&quot;,
        &quot;&lt;/style&gt;&quot;,
    ],
      &quot;description&quot;: &quot;Log output to console&quot;
    }
  }



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.成功啦。新建.vue结尾的文件试试.</p><p>输入vue3 按键盘的tab就行</p>`,8),s=[o];function l(d,v){return e(),t("div",null,s)}const r=n(u,[["render",l],["__file","输入自定义命令快速生成vue模板.html.vue"]]);export{r as default};
