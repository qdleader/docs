import{_ as n,o as e,c as i,d as s}from"./app-1IAv0yAY.js";const l={},d=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>      &lt;el-pagination
        background
        layout=&quot;prev, pager, next&quot;
        @current-change=&quot;changePage&quot;
        :current-page.sync=&quot;currentPage&quot;
        :page-size=&quot;pageSize&quot;
        :total=&quot;total&quot;
        v-if=&quot;total != 0&quot;
        &gt;
    &lt;/el-pagination&gt;


    data() {
        return {
              total: 10, //总页数
              currentPage: 1, //当前页
              pageSize: 20,
        }
    }



    methods:{
        //选择页数
        changePage(str) {
              console.log(&quot;选择的页数&quot;, str);
              this.currentPage = str;
              this.getData();
        },
        getData() {
          let obj = {
            exchange_name: this.exchange_name,
            page: this.currentPage,
            pageSize: this.pageSize,
          };
      fetchCodeList(obj)
        .then((res) =&gt; {
          console.log(&quot;兑换码管理列表&quot;, res);
          this.tableData = res.data.data;



                this.total = res.data.totalCount;
 
        })
        .catch((err) =&gt; {
          console.log(err);
        });
    },
    }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),a=[d];function v(t,r){return e(),i("div",null,a)}const u=n(l,[["render",v],["__file","分页.html.vue"]]);export{u as default};
