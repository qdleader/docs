import{_ as e,o as n,c as i,d as s}from"./app-C59QzqDT.js";const d={},l=s(`<h1 id="vue3中如何封装组件" tabindex="-1"><a class="header-anchor" href="#vue3中如何封装组件" aria-hidden="true">#</a> vue3中如何封装组件</h1><blockquote><p>比如封装一个时间组件</p></blockquote><h2 id="新建一个nowtime-ts的文件" tabindex="-1"><a class="header-anchor" href="#新建一个nowtime-ts的文件" aria-hidden="true">#</a> 新建一个nowTime.ts的文件</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { ref } from &#39;vue&#39;

const nowTime = ref(&quot;00:00:00&quot;)

const getNowTime = () =&gt; {
  const now = new Date();
  const h = now.getHours() &lt; 10 ? &#39;0&#39; + now.getHours():now.getHours()
  const m = now.getMinutes() &lt; 10? &#39;0&#39; + now.getMinutes():now.getMinutes()
  const s = now.getSeconds() &lt; 10? &#39;0&#39; + now.getSeconds():now.getSeconds()
  nowTime.value = h + &quot;:&quot; + m +&quot;:&quot; + s
  setTimeout(getNowTime,1000)
}

export {
  nowTime,
  getNowTime
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="在组件中引用" tabindex="-1"><a class="header-anchor" href="#在组件中引用" aria-hidden="true">#</a> 在组件中引用</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;div class=&quot;about&quot;&gt;
    &lt;div&gt;
        {{nowTime}}
    &lt;/div&gt;
      &lt;div @click=&quot;getNowTime&quot;&gt;
            显示当前时间
        &lt;/div&gt;
  &lt;/div&gt;

&lt;/template&gt;

&lt;script lang=&quot;ts&quot;&gt;
import { ref } from &#39;vue&#39;
import {nowTime,getNowTime} from &#39;../hocks/useNowTime&#39;

import useUrlAxios from &#39;../hocks/http&#39;
export default {
    name:&#39;about&#39;,
    setup() {
        return {
            nowTime,
            getNowTime,
        }
    }
}
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),t=[l];function v(a,r){return n(),i("div",null,t)}const c=e(d,[["render",v],["__file","vue3中如何封装组件.html.vue"]]);export{c as default};
