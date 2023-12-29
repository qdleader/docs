import{_ as e,o as n,c as i,a as s}from"./app-4jNy44S_.js";const d={},l=s(`<p>微信内支付用sdk，这在微信公众开发的文章已详细提到。 我们在这说一下，微信外浏览器微信支付。</p><p>我们在这先判断是微信内浏览器还是微信外浏览器。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 判断是否公众号（微信H5）
  isWechat() {
      // #ifdef H5
      const ua = window.navigator.userAgent.toLowerCase();
      if (ua.match(/micromessenger/i) == &#39;micromessenger&#39;) {
          return true;
      } else {
          return false;
      }
      // #endif
  },
  //支付

doPay() {
  if(this.isWechat()) {
      //微信浏览器
  } else {
    //微信外浏览器
    window.location.href = dataUrl
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>微信外的只需要，这一步打开后台返回的链接即可。</p><p>另外跳转回来会发现，h5成白页面了，另可参考我们文章，h5微信外浏览器微信支付跳转白页面的优化</p>`,5),a=[l];function r(c,v){return n(),i("div",null,a)}const u=e(d,[["render",r],["__file","h5微信支付.html.vue"]]);export{u as default};
