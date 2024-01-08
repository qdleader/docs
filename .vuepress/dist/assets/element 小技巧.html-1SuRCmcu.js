import{_ as e,o as n,c as i,d as l}from"./app-FRQgbCNf.js";const t={},d=l(`<h3 id="_1-el-table-表格内容超出省略" tabindex="-1"><a class="header-anchor" href="#_1-el-table-表格内容超出省略" aria-hidden="true">#</a> 1.el-table 表格内容超出省略</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>当表格内容过长时，手动添加样式比较麻烦，偷偷告诉你，只需要添加一个 show-overflow-tooltip 就可以搞定。
&lt;el-table-column
  prop=&quot;address&quot;
  label=&quot;地址&quot;
  width=&quot;180&quot;
  show-overflow-tooltip
&gt;
&lt;/el-table-column&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-el-form-只校验表单其中一个字段" tabindex="-1"><a class="header-anchor" href="#_2-el-form-只校验表单其中一个字段" aria-hidden="true">#</a> 2.el-form 只校验表单其中一个字段</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>有时候我们需要单独校验一些字段，比如发送验证码，单独对手机号进行校验，可以这样做：
this.$refs.form.validateField(&#39;name&#39;, valid =&gt; {
    if (valid) {
        console.log(&#39;send!&#39;);
    } else {
        console.log(&#39;error send!&#39;);
        return false;
    }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-el-input-type-number-输入中文-焦点上移" tabindex="-1"><a class="header-anchor" href="#_3-el-input-type-number-输入中文-焦点上移" aria-hidden="true">#</a> 3.el-input type=number 输入中文，焦点上移</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;style scoped&gt;
::v-deep .el-input__inner {
    line-height: 1px !important;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-el-input-type-number-去除聚焦时的上下箭头" tabindex="-1"><a class="header-anchor" href="#_4-el-input-type-number-去除聚焦时的上下箭头" aria-hidden="true">#</a> 4.el-input type=number 去除聚焦时的上下箭头</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;el-input class=&quot;clear-number-input&quot; type=&quot;number&quot;&gt;&lt;/el-input&gt;

&lt;style scoped&gt;
.clear-number-input ::v-deep input[type=&quot;number&quot;]::-webkit-outer-spin-button,
.clear-number-input ::v-deep input[type=&quot;number&quot;]::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
}
&lt;/style&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),a=[d];function s(r,u){return n(),i("div",null,a)}const c=e(t,[["render",s],["__file","element 小技巧.html.vue"]]);export{c as default};
