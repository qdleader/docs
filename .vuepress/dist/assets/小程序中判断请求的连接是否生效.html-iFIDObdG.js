import{_ as e,o as n,c as i,d as s}from"./app-1IAv0yAY.js";const l={},d=s(`<p>判断一个地址是否可以访问，是否有效？</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>urlIsOk(urlData) {
    // let urlData = &#39;https://baidu.com/1622691283267/8e86e5de23f31b8b27323e3093300e5b/mp3/320kbps/NAC/8.572548/RG8312_001_full_wm_320.mp3&#39;
    // let urlData = this.data.currentUrl
  let that  = this;

    wx.request({
      url: urlData,
      success: function( res ) {
        console.log(&quot;链接成功1&quot;,res)
        if(res.statusCode == 200) {
          console.log(&quot;链接成功1&quot;)
          return urlok = true
        } else {
          console.log(&quot;链接失效1&quot;)
              urlok = false
              console.log(&quot;链接可用不可用name&quot;,urlok)
              if(!urlok) {
                that.playMusicNew()
                that.setData({
                  isReload:false
                })
              }
        }
      },
    })

},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),a=[d];function r(u,t){return n(),i("div",null,a)}const c=e(l,[["render",r],["__file","小程序中判断请求的连接是否生效.html.vue"]]);export{c as default};
