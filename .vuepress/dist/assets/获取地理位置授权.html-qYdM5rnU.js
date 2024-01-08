import{_ as n,o as e,c as i,d as s}from"./app-tgHnmF2J.js";const l={},d=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;button  bindtap=&quot;getLocation&quot; class=&quot;btnPhone {{lng !=&#39;&#39;?&#39;btnPhoneActive&#39;:&#39;&#39;}}&quot;&gt;获取地理位置&lt;/button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 获取地理位置开始
getLocation() {
var that = this
 wx.getLocation({
     success: function(res) {
         console.log(&quot;位置信息&quot;,res)
         app.globalData.lat = res.latitude;
         app.globalData.lon = res.longitude;
         that.setData({
           lng:res.longitude,
           lat:res.latitude
         })
         // post请求
         that.postInfo()
         wx.showToast({
           title: &#39;获取位置成功!&#39;, // 标题
           icon: &#39;success&#39;,  // 图标类型，默认success
           duration: 1500  // 提示窗停留时间，默认1500ms
         })

     },
     fail() {
     wx.showModal({
         title: &#39;提醒&#39;,
         content: &#39;您拒绝了位置授权，将无法使用大部分功能，点击确定重新获取授权&#39;,
      success(res) {
      //如果点击确定
         if (res.confirm) {
             wx.openSetting({
               success(res) {
                 //如果同意了位置授权则userLocation=true
                 if (res.authSetting[&quot;scope.userLocation&quot;]) {
               //    that.onLoad()
                 }
               }
             })
         }
      }
     })
     }
    })
},
// 获取地理位置结束
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),a=[d];function t(v,c){return e(),i("div",null,a)}const u=n(l,[["render",t],["__file","获取地理位置授权.html.vue"]]);export{u as default};
