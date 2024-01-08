import{_ as e,o as n,c as i,d as s}from"./app-Ni1_oyYA.js";const d={},l=s(`<p>包含用户昵称，头像等</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;button  bindtap=&quot;bindGetUserInfo&quot; class=&quot;btnPhone {{wechat_name !=&#39;&#39;?&#39;btnPhoneActive&#39;:&#39;&#39;}}&quot;&gt;授权登录&lt;/button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 弹出授权 开始
    bindGetUserInfo: function(res) {
      var that = this
      // getUserProfile
      wx.getUserProfile({
              desc: &#39;展示用户信息&#39;,    //不能为空
                success(res){
                  console.log(&quot;xinban获取用户信息&quot;,res)
                  that.setData({
                    wechat_name:res.userInfo.nickName,
                    headimgurl:res.userInfo.avatarUrl,
                    province:res.userInfo.province,
                    country:res.userInfo.country,
                    gender:res.userInfo.gender,
                    city:res.userInfo.city,
                })
                that.postInfo()
                wx.showToast({
                  title: &#39;授权成功!&#39;, // 标题
                  icon: &#39;success&#39;,  // 图标类型，默认success
                  duration: 1500  // 提示窗停留时间，默认1500ms
                })
              }      
      })
        console.log(res);
     },
  // 弹出授权 结束
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),r=[l];function t(a,c){return n(),i("div",null,r)}const u=e(d,[["render",t],["__file","新版的获取用户信息授权.html.vue"]]);export{u as default};
