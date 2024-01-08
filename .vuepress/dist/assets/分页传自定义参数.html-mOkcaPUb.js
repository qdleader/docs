import{_ as e,o as n,c as i,d as s}from"./app-1IAv0yAY.js";const t={},l=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;block&quot; &gt;
    &lt;el-pagination background layout=&quot;prev, pager, next&quot; :total=&quot;item.total&quot; :current-page=&quot;item.page&quot; :page-size=&quot;10&quot;  @current-change=&quot;(val) =&gt; changePage(val,&#39;qdleader&#39;)&quot;&gt;
    &lt;/el-pagination&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//新增前端分页
changePage(page,name) {
    // alert(12)
    console.log(page,name)
    // this.page = page

    this.newArr[index].page = page
//   this.changeParams({ page: page })

    // let oIndex = page - 1;
    // this.newList = this.form.goodids.splice(oIndex*20,20)

    // console.log(&quot;this.newList&quot;,this.newList)
    // this.total = this.form.goodids.length
    let newArr = this.newArr[index].goodids.concat([]);
    // console.log(&quot;page&quot;,this.page)
    let oIndex = page - 1;
    this.newArr[index].newList = newArr.splice(oIndex*10,oIndex*10+10)

    console.log(&quot;this.newList&quot;,this.newList)
    console.log(&quot;this.newList&quot;,this.newArr[index].goodids)
    this.newArr[index].total = this.newArr[index].goodids.length

},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d=[l];function a(o,r){return n(),i("div",null,d)}const v=e(t,[["render",a],["__file","分页传自定义参数.html.vue"]]);export{v as default};
