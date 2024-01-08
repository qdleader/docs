import{_ as e,o as n,c as s,d as i}from"./app-tSvYcIf0.js";const l={},d=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//查看是否授权
         wx.getSetting({
           success: function(res) {
             if (res.authSetting[&#39;scope.userInfo&#39;]) {
               console.log(&quot;用户授权了&quot;);
               console.log(res);
                     wx.getUserInfo({
                         success: res =&gt; {
                             console.log(&quot;用户授权信息&quot;,res)
                         app.globalData.userInfo = res.userInfo
                         //业务代码
                         }
                     })
             } else {
               //用户没有授权
               console.log(&quot;用户没有授权&quot;);
             }
             console.log(&quot;res.authSetting&quot;,res.authSetting)
             if (res.authSetting[&#39;scope.userLocation&#39;]) {
                 console.log(&quot;用户已经授权地理位置&quot;);
               } else {
                 console.log(&quot;用户没有授权地理位置&quot;);
             }
         }
      });
 // 授权结束
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[d];function o(t,u){return n(),s("div",null,c)}const v=e(l,[["render",o],["__file","判断用户是否已经授权.html.vue"]]);export{v as default};
