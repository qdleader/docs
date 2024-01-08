import{_ as e,o as n,c as i,d as s}from"./app-tgHnmF2J.js";const l={},d=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>            el-table
              :data=&quot;tableData&quot;
              class=&quot;y_table&quot;
              border
              stripe
               @sort-change=&quot;changeTableSort&quot;
               show-summary
               sum-text=&quot;总和&quot;
              style=&quot;width: 100%&quot;&gt;
                  &lt;el-table-column
                      label=&quot;用户数&quot;
                      prop=&quot;user_count&quot;
                      :sortable=&quot;&#39;custom&#39;&quot;
                      &gt;
                      &lt;template slot-scope=&quot;scope&quot;&gt;
                          &lt;span&gt;
                              {{scope.row.user_count}}
                          &lt;/span&gt;
                      &lt;/template&gt;
                  &lt;/el-table-column&gt;
            &lt;/el-table&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//选择指定列进行排序
changeTableSort(column){
  console.log(column);
  if(column.prop == &#39;course_title&#39;) {
     if(column.order == &#39;ascending&#39;) {
         this.order_type = 1
     } else if(column.order == &#39;descending&#39;) {
         this.order_type = 2
     } else {
         this.order_type = 9
     }
  }
  if(column.prop == &#39;total_count&#39;) {
     if(column.order == &#39;ascending&#39;) {
         this.order_type = 3
     } else if(column.order == &#39;descending&#39;) {
         this.order_type = 4
     } else {
         this.order_type = 9
     }
  }
  if(column.prop == &#39;valid_count&#39;) {
     if(column.order == &#39;ascending&#39;) {
         this.order_type = 5
     } else if(column.order == &#39;descending&#39;) {
         this.order_type = 6
     } else {
         this.order_type = 9
     }
  }
  if(column.prop == &#39;user_count&#39;) {
     if(column.order == &#39;ascending&#39;) {
         this.order_type = 7
     } else if(column.order == &#39;descending&#39;) {
         this.order_type = 8
     } else {
         this.order_type = 9
     }
  }
  this.getData()
},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),r=[d];function v(t,c){return n(),i("div",null,r)}const u=e(l,[["render",v],["__file","表格排序.html.vue"]]);export{u as default};
