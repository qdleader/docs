import{_ as e,o as i,c as n,d as l}from"./app-tSvYcIf0.js";const s={},d=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;ul class=&quot;dialogChangeNum-con-ul&quot;&gt;
       &lt;el-form
         ref=&quot;ruleForm&quot;
         :model=&quot;ruleForm&quot;
         :rules=&quot;rules&quot;
       &gt;
         &lt;li
           v-for=&quot;(item,idx) in ruleForm.arr&quot;
           :key=&quot;idx&quot;
         &gt;
             &lt;el-form-item
               label=&quot;材料用量：&quot;
               :rules=&quot;rules.checkedSelectRule(idx)&quot;
               :prop=&quot;\`arr\`&quot;
             &gt;
               &lt;el-input v-model=&quot;item.value&quot; /&gt;
               &amp;nbsp;件
             &lt;/el-form-item&gt;
         &lt;/li&gt;
       &lt;/el-form&gt;
     &lt;/ul&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ruleForm: {
  usage: &quot;&quot;,
   arr:[{value:&#39;&#39;},{value:&#39;&#39;}],// form 列表
},
rules: {
  checkedSelectRule(idx) {
    return [
      {
        validator: (rule, value, callback) =&gt; {
          // console.log(&quot;rule, value, callback&quot;,rule, value, callback)
          console.log(&quot;value&quot;,value,rule)
          console.log(&quot;idx&quot;,idx)
          console.log(&quot;value[idx]&quot;,value[idx])
          let name = value[idx].value
           if (!name) {
              return callback(new Error(&quot;材料用量不能为空&quot;));
            }
           if (isNaN(name)) {
            callback(new Error(&quot;请输入数字值&quot;));
          } else {
            if (name.toString().split(&quot;.&quot;)[1]) {
              let num = name.toString().split(&quot;.&quot;)[1].length;
              if (num &gt; 2) {
                callback(new Error(&quot;小数点后最多两位&quot;));
              }
            }
            if (name &lt; 0) {
              callback(new Error(&quot;请输入大于0的数值&quot;));
            } else {
              callback();
            }
          }
        },
        trigger: [&quot;blur&quot;, &quot;change&quot;]
      }
    ];
  }
},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),u=[d];function v(a,r){return i(),n("div",null,u)}const c=e(s,[["render",v],["__file","遍历出来的form表单如何添加校验规则.html.vue"]]);export{c as default};
