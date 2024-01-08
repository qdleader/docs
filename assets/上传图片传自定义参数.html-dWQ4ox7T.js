import{_ as e,o as i,c as l,d as n}from"./app-tSvYcIf0.js";const s={},t=n(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
&lt;el-form-item label=&quot;上传促销页顶图&quot;&gt;
    &lt;el-upload
        class=&quot;avatar-uploader&quot;
        v-loading=&quot;loading&quot;
        :action=&quot;uploadUrl&quot;
        :show-file-list=&quot;false&quot;
        :on-success=&quot;handleAvatarSuccess1.bind(this,index)&quot;
        :before-upload=&quot;beforeAvatarUpload&quot;
        &gt;
        &lt;img v-if=&quot;item.shelves_img&quot; :src=&quot;item.shelves_img&quot; class=&quot;pic&quot; /&gt;
        &lt;i v-else class=&quot;el-icon-plus avatar-uploader-icon&quot;&gt;&lt;/i&gt;
    &lt;/el-upload&gt;
    &lt;el-dialog :visible.sync=&quot;dialogImageVisible&quot;&gt;
        &lt;img width=&quot;100%&quot; :src=&quot;dialogImageUrl&quot; alt /&gt;
    &lt;/el-dialog&gt;
&lt;/el-form-item&gt;




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>handleAvatarSuccess1(index,res, file) {
     console.log(&quot;成功&quot;,index,res, file)
   this.loading = false;
   this.newArr[index].shelves_img = res.data.picurl
 //   this.$set(this.form, &quot;pic&quot;, res.data.picurl);
 },
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d=[t];function a(u,o){return i(),l("div",null,d)}const r=e(s,[["render",a],["__file","上传图片传自定义参数.html.vue"]]);export{r as default};
