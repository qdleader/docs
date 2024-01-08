import{_ as e,o as n,c as i,d as s}from"./app-pokGQ7aS.js";const d={},l=s(`<p>微信小程序 获取手机号授权</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;button open-type=&quot;getPhoneNumber&quot; bindgetphonenumber=&quot;getPhoneNumber&quot; class=&quot;btnPhone {{mobile !=&#39;&#39;?&#39;btnPhoneActive&#39;:&#39;&#39;}}&quot;&gt;获取手机号&lt;/button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 获取手机号开始
　　getPhoneNumber: function (e) {
        console.log(e)
        var ivObj = e.detail.iv
        var telObj = e.detail.encryptedData
        var codeObj = &quot;&quot;;
        var that = this;
        //------执行Login---------
        wx.login({
        success: res =&gt; {
        console.log(&#39;code转换&#39;, res.code);
　　　　　　//用code传给服务器调换session_key
        // userGetMobile
      requestApi.userGetMobile({
        vcode: res.code,
        encryptedData: telObj,
        iv: ivObj
      }).then(res =&gt; {
        console.log(&quot;获取手机号成功&quot;,res)
        console.log(&quot;res.data.data.phoneNumber&quot;,res.data.data.phoneNumber)

            that.setData({
                mobile:res.data.data.phoneNumber,
                openid:res.data.data.openid,
                unionid:res.data.data.unionid,
            })
            // console.log(&quot;手机号=&quot;, res.data.data.phoneNumber)

            // post请求
            that.postInfo()
            wx.showToast({
              title: &#39;获取手机号成功!&#39;, // 标题
              icon: &#39;success&#39;,  // 图标类型，默认success
              duration: 1500  // 提示窗停留时间，默认1500ms
            })
        })

        //-----------------是否授权，授权通过进入主页面，授权拒绝则停留在登陆界面
            if (e.detail.errMsg == &#39;getPhoneNumber:user deny&#39;) { //用户点击拒绝
                // wx.navigateTo({
                //     url: &#39;../index/index&#39;,
                // })
            } else { //允许授权执行跳转
                // wx.navigateTo({
                //     url: &#39;../test/test&#39;,
                // })
            }
        }
        });
      },
      // 获取手机号 结束
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),a=[l];function v(t,r){return n(),i("div",null,a)}const c=e(d,[["render",v],["__file","获取手机号授权.html.vue"]]);export{c as default};
