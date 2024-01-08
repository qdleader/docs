import{_ as e,o as i,c as n,d as s}from"./app-tSvYcIf0.js";const d={},l=s(`<p>vue3里面没有了全局的时间过滤器了，我给大家提供两种解决方案。</p><h1 id="_1-挂载到全局属性globalproperties上面" tabindex="-1"><a class="header-anchor" href="#_1-挂载到全局属性globalproperties上面" aria-hidden="true">#</a> 1. 挂载到全局属性globalProperties上面</h1><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e5fe9a4d586242ddb7f4a1df9e92ae06~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"> 在utils，新建filters文件。 里面内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export default {
    formatTime(date?:any, type = &#39;yyyy-MM-dd hh:mm&#39;) {
        if (!date) return
        let time = new Date(date)
        let res;
        if (type === &#39;yyyy-MM-dd hh:mm&#39;) {
            res = \`\${time.getFullYear()}-\${time.getMonth()+ 1}-\${time.getDate()} \${addZero(time.getHours())}:\${addZero(time.getMinutes())}\`
        } else if(type === &#39;yyyy-MM-dd&#39;) {
            res = \`\${time.getFullYear()}-\${time.getMonth()+ 1}-\${time.getDate()}\`
        }
        return res
    },
}
function addZero (num:number) {
    if (num &lt; 10) { return &#39;0&#39; + num }
    return num
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在main.ts 里面引入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import filters from &#39;./utils/filters&#39;
const app = createApp(App)
app.config.globalProperties.$filters = filters
app.mount(&#39;#app&#39;)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在页面中用时候,直接用就好，还是比较方便的。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{{$filters.formatTime(lastEditTime)}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第一种就over了</p><p>下面呢，我来看另一种</p><h1 id="_2-结合-hooks来实现" tabindex="-1"><a class="header-anchor" href="#_2-结合-hooks来实现" aria-hidden="true">#</a> 2. 结合 hooks来实现</h1><p>新建 一个</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/96416649f3d844ffbaed140e5429dc93~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// useTime.ts
import { ref, watch } from &quot;vue&quot;;
export function useTime(date?:any, type = &#39;yyyy-MM-dd hh:mm&#39;, isWrap?:Boolean) {
    const formatTime = (date:any, type = &#39;yyyy-MM-dd hh:mm&#39;, isWrap:Boolean) =&gt; {
    /*
            date: 传入的时间戳
            type: 传入的时间格式
            isWrap: 时间结尾处是否换行
        */
    if (!date) return
    let time = new Date(date)
        let res;
        if (type === &#39;yyyy-MM-dd hh:mm&#39;) {
            res = \`\${time.getFullYear()}-\${time.getMonth()+ 1}-\${time.getDate()} \${addZero(time.getHours())}:\${addZero(time.getMinutes())}\`
        } else if(type === &#39;yyyy-MM-dd&#39;) {
            res = \`\${time.getFullYear()}-\${time.getMonth()+ 1}-\${time.getDate()}\`
        }
        return res
    }
    function addZero (num:number) {
        if (num &lt; 10) { return &#39;0&#39; + num }
        return num
    }
    return {
        formatTime,
    };
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 .vue 中的使用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;div&gt;
     {{formatTime(lastEditTime)}}
  &lt;/div&gt;
&lt;/template&gt;



&lt;script lang=&quot;ts&quot;&gt;
import { defineComponent,onMounted,reactive,ref,toRefs} from &quot;vue&quot;;
import {useTime} from &#39;@/hooks/useTime&#39; 
export default defineComponent({
  name: &quot;User&quot;,
  setup() {
    const data = reactive({
      nameList:[],// 商品名称列表
      currentPage:1,
      pageSize:10,
      lastEditTime:1652362534412,
      formatTime:useTime().formatTime,
    })
    const refData = toRefs(data);
    return {
        ...refData
    }
  }
});
&lt;/script&gt;
&lt;style lang=&quot;scss&quot; scoped&gt;

&lt;/style&gt;


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),t=[l];function a(r,v){return i(),n("div",null,t)}const u=e(d,[["render",a],["__file","vue3封装全局过滤器.html.vue"]]);export{u as default};
