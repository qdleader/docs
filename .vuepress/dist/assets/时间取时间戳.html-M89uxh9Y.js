import{_ as e,o as i,c as n,d as t}from"./app-C59QzqDT.js";const l={},d=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   &lt;el-date-picker
      v-model=&quot;value1&quot;
      type=&quot;datetimerange&quot;
      start-placeholder=&quot;开始日期&quot;
      end-placeholder=&quot;结束日期&quot;
      @change=&quot;changeDate&quot;
      value-format=&quot;timestamp&quot;
      :default-time=&quot;[&#39;12:00:00&#39;]&quot;
    &gt;
    &lt;/el-date-picker&gt;



    用 value-format=&quot;timestamp&quot; 就可以获取到时间戳格式的
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>时间组件制定某一默认时间</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;el-date-picker
   v-model=&quot;ruleForm.endValidTime&quot;
   type=&quot;datetime&quot;
   :default-time=&quot;new Date(2000, 1, 1, 23, 59, 59)&quot;
   placeholder=&quot;请选择结束时间&quot;
   style=&quot;width: 100%&quot;
/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),a=[d];function s(u,r){return i(),n("div",null,a)}const c=e(l,[["render",s],["__file","时间取时间戳.html.vue"]]);export{c as default};
