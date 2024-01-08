import{_ as i,o as e,c as n,d as s}from"./app-tSvYcIf0.js";const l={},d=s(`<p>直接上代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;van-list  :finished=&quot;finished&quot; finished-text=&quot;到底啦,只有这么多了&quot; @load=&quot;onLoadDown&quot; v-if=&quot;commentList.length != 0&quot; v-model=&quot;loading&quot;&gt;
         &lt;ul class=&quot;comment_ul&quot;&gt;
             &lt;li class=&quot;comment_li clearfix&quot; v-for=&quot;(item,index) in commentList&quot; :key=&quot;index&quot;&gt;
                 &lt;img :src=&quot;item.comm_user_portrait&quot; alt=&quot;&quot;&gt;
                 &lt;div class=&quot;comment_ri&quot;&gt;
                     &lt;div class=&quot;comment_ribox clearfix&quot;&gt;
                         &lt;div class=&quot;comment_ri_left clearfix&quot;&gt;
                             &lt;h5 @click=&quot;readBack(item)&quot;&gt;{{item.comm_username}}&lt;/h5&gt;
                             &lt;span&gt;{{item.create_time | formatDate(&#39;yyyy.MM.dd hh:mm&#39;, false)}}&lt;/span&gt;
                         &lt;/div&gt;
                         &lt;div :class=&quot;{&#39;comment_ri_right&#39;:true,&#39;comment_ri_rightred&#39;:item.liked_status == 1}&quot; @click=&quot;doLike(item,index)&quot;&gt;
                             &lt;i class=&quot;iconfont yk-dianzanbeifen2&quot;&gt;&lt;/i&gt;
                             &lt;i class=&quot;iconfont yk-yidianzan&quot;&gt;&lt;/i&gt;
                             &lt;cite&gt;{{item.liked_num}}&lt;/cite&gt;
                         &lt;/div&gt;
                     &lt;/div&gt;
                     &lt;div class=&quot;comment_ri_con&quot; @click=&quot;readBack(item)&quot;&gt;
                         {{item.comm_content}}
                     &lt;/div&gt;

                     &lt;div class=&quot;comment_ri_back&quot; v-show=&quot;item.son_comment_count != 0&quot; @click=&quot;lookSonCom(item)&quot;&gt;
                         {{item.son_comment_count}}次回复 &gt;
                     &lt;/div&gt;


                 &lt;/div&gt;
             &lt;/li&gt;
         &lt;/ul&gt;
 &lt;/van-list&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>onLoad() {
    // 异步更新数据
    const _self = this
    this.loading = true;
    let uidPub = JSON.parse(decodeURI(sessionStorage.getItem(UserInfoSave))).uid
    let courseNum = 1

    if(typeof(this.courseType) == &#39;undefined&#39;) {

    } else {
        console.log(&quot;this.course_type11111111111&quot;,this.courseType)
        courseNum = this.courseType
    }
    commentList({
        page: this.currentPage + &quot;&quot;,
        uid:uidPub + &quot;&quot;,
        pageSize: this.pageSize + &quot;&quot;,
         course_id:this.act_id_new + &quot;&quot;,
         file_type:this.fileType + &quot;&quot;,
         course_type:courseNum + &quot;&quot;,
    }).then(res =&gt; {
        console.log(&quot;评论列表&quot;, res);
        // this.loading = false;
        // this.list = res.data.data;
        // this.finished = true;
        this.isLoading = false
        if(res.ret == 0) {
            const rows = res.data.data
            if(res.data.length == 0) {
                   _self.finished = true
                // _self.commentList = []
                return
            }
            //第一页如果没有，才显示空状态
            if (rows.length === 0 &amp;&amp; res.data.currentPage == 1) {
                // 加载结束
                _self.finished = true
                _self.commentList = []
                return
            }
            if (rows == null || rows.length === 0) {
                // 加载结束
                _self.finished = true
                // _self.commentList = []
                return
            }
            if (rows.length &lt; this.pageSize) {
                // 最后一页不足10条的情况
                _self.finished = true
            }
            // 处理数据
            if (_self.currentPage === 1) {
                _self.list = rows
            } else {
                _self.list = _self.list.concat(rows)
            }
            // _self.commentList = this.sort_pro(_self.list,[&#39;play_date&#39;])
            _self.commentList = _self.list
        }

    }).catch(error =&gt; {
        _self.finished = true
        // this.$message({
        //     showClose: true,
        //     message: &#39;获取资源列表异常{&#39; + error + &#39;}&#39;,
        //     type: &#39;error&#39;
        // })
    }).finally(() =&gt; {
        _self.loading = false
        this.isLoading = false
        // _self.isUpLoading = false
    })
},
// 上拉加载请求方法
onLoadDown() {
    this.loading = true;
    this.currentPage ++;
    this.onLoad();
},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你这么写就会发现，到页面底部时候，不再多请求数据了。</p><p>关键其实就是</p><p>在onLoadDown方法里面的在this.onLoad方法前面加，this.loading = true即可。</p>`,6),t=[d];function v(u,a){return e(),n("div",null,t)}const c=i(l,[["render",v],["__file","tab下拉加载会请求多次问题.html.vue"]]);export{c as default};
