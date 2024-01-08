import{_ as e,o as i,c as n,d}from"./app-tSvYcIf0.js";const l={},s=d(`<p>#为 v-for 设置key</p><p>以便维护内部组件及其子树的状态。甚至在元素上维护可预测的行为。</p><p>bad</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;ul&gt;
  &lt;li v-for=&quot;todo in todos&quot;&gt;
    {{ todo.text }}
  &lt;/li&gt;
&lt;/ul&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>good</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;ul&gt;
  &lt;li
    v-for=&quot;todo in todos&quot;
    :key=&quot;todo.id&quot;
  &gt;
    {{ todo.text }}
  &lt;/li&gt;
&lt;/ul&gt;
data: function () {
  return {
    todos: [
      {
        id: 1,
        text: &#39;学习使用 v-for&#39;
      },
      {
        id: 2,
        text: &#39;学习使用 key&#39;
      }
    ]
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>未完待续。。</p>`,7),t=[s];function v(a,r){return i(),n("div",null,t)}const u=e(l,[["render",v],["__file","Vb003-v-for要加key.html.vue"]]);export{u as default};
