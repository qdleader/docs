import{_ as e,o as t,c as i,d as a}from"./app-C59QzqDT.js";const n={},l=a(`<h2 id="单个作用域插槽的简写" tabindex="-1"><a class="header-anchor" href="#单个作用域插槽的简写" aria-hidden="true">#</a> 单个作用域插槽的简写</h2><p>限定范围的插槽非常有趣，但为了使用它们，您还必须使用许多模板标记。幸运的是，有一个简写可以让我们摆脱它，但只有在我们使用单个作用域槽的情况下。</p><p>你或许这样使用过</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;TableList&gt;
  &lt;template #header=&quot;attrList&quot;&gt;
    &lt;TableHeader v-bind=&quot;attrList&quot; /&gt;
  &lt;/template&gt;
&lt;/TableList&gt;
 // 不使用 template

&lt;TableList #header=&quot;attrList&quot;&gt;
  &lt;TableHeader v-bind=&quot;attrList&quot; /&gt;
&lt;/TableList&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),s=[l];function d(r,c){return t(),i("div",null,s)}const v=e(n,[["render",d],["__file","012-vue单个作用域插槽简写.html.vue"]]);export{v as default};
