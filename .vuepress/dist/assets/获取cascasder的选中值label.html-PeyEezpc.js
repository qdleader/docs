import{_ as e,o as n,c as s,d as a}from"./app-1IAv0yAY.js";const i={},l=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;el-cascader
  ref=&quot;refSubCat&quot;
  v-model=&quot;areas&quot;
  placeholder=&quot;选择地区筛选&quot;
  :options=&quot;areaOpts&quot;
  popper-class=&quot;select-pop&quot;
  :props=&quot;{label: &#39;name&#39;, value: &#39;id&#39;}&quot;
  change-on-select
  @change=&quot;areaChange&quot;
/&gt;



areaChange(data) {
  console.log(&quot;地区&quot;, data);
  console.log(this.$refs[&quot;refSubCat&quot;].getCheckedNodes()[0].label);
},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>// this.$refs[&quot;refSubCat&quot;].getCheckedNodes() 里面可以找你需要的一切</p>`,2),d=[l];function t(c,o){return n(),s("div",null,d)}const u=e(i,[["render",t],["__file","获取cascasder的选中值label.html.vue"]]);export{u as default};
