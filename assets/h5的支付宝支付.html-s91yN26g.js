import{_ as e,o as n,c as i,d}from"./app-tSvYcIf0.js";const s={},a=d(`<p>h5吊起支付宝app支付 （前端实现）</p><p>后端按照支付宝官网会返回一个form表单</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 支付宝H5支付
   async malipaynewPay() {

      // 这个接口是你们自己写的接口，成功后会返回一个form表单
       const wechatPay = await http.post(\`\${orderPay}\`, {
         order_group:&#39;order&#39;,
         pay_type: 2,
         user_price:this.user_price,
         trade_type: &#39;wap&#39;,
         order_id: this.orderInfo.order_id,

     })
     console.log(wechatPay)


      var el = document.createElement( &#39;div&#39; );
      //wechatPay.data  就是后台返回的form表单
      console.log(&quot;wechatPay.data&quot;,wechatPay.data)

      el.innerHTML = wechatPay.data
      document.body.appendChild(el)
      document.forms[0].submit()

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就调起了。</p><p>前面这种是大多数情况，还有一些情况，后台返回的并不是form表单，是个链接。。不讲武德。</p><p>你直接用这个链接拼也可以调起</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>malipaynewPay() {
  // 里面的参数根据你们自己的数据填写即可
  // wechatPay.data 返回的链接

      let pay_url =
           wechatPay.data +
          &quot;order_sn=&quot; +
          this.orderInfo.order_id +
          &quot;&amp;body=&quot; +
           this.goods_name +
          &quot;&amp;money=&quot; +
          this.user_price +
          &quot;&amp;quit_url=&quot; +
          window.location.href;
        console.log(pay_url);

       location.href = pay_url;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),l=[a];function r(v,c){return n(),i("div",null,l)}const u=e(s,[["render",r],["__file","h5的支付宝支付.html.vue"]]);export{u as default};
