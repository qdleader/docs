import{_ as e,o as n,c as i,d as s}from"./app-C59QzqDT.js";const t={},l=s(`<p>很简单其实， 比如我们来封装一个empty 空状态的组件</p><p>先写个 empty.vue</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;div class=&quot;empty&quot;&gt;
    &lt;img src=&quot;../../assets/img/empty.png&quot; /&gt;
    &lt;div class=&quot;text&quot;&gt;{{ text }}&lt;/div&gt;
    &lt;slot /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot;&gt;
export default {
  props: {
    text: {
      type: String
    }
  }
}
&lt;/script&gt;

&lt;style lang=&quot;scss&quot; scoped&gt;
.empty {
  padding: 210px 0;
  text-align: center;
}
.text{
    color: #9e9e9e;
}
&lt;/style&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在 main.ts 中 引入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import empty from &#39;@/components/common/empty.vue&#39;

const app = createApp(App)
app.component(&#39;iEmpty&#39;,empty)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在用的组件直接用 即可</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;iEmpty /&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,7),d=[l];function a(v,c){return n(),i("div",null,d)}const m=e(t,[["render",a],["__file","vue3封装全局共用组件.html.vue"]]);export{m as default};
