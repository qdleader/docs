import{_ as n,o as s,c as a,d as t}from"./app-xrgnhFxe.js";const p={},e=t(`<h1 id="h5吊起支付宝app支付-前端实现" tabindex="-1"><a class="header-anchor" href="#h5吊起支付宝app支付-前端实现" aria-hidden="true">#</a> h5吊起支付宝app支付 （前端实现）</h1><p>后端按照支付宝官网会返回一个form表单</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 支付宝H5支付</span>
   <span class="token keyword">async</span> <span class="token function">malipaynewPay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

      <span class="token comment">// 这个接口是你们自己写的接口，成功后会返回一个form表单</span>
       <span class="token keyword">const</span> wechatPay <span class="token operator">=</span> <span class="token keyword">await</span> http<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>orderPay<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
         <span class="token literal-property property">order_group</span><span class="token operator">:</span><span class="token string">&#39;order&#39;</span><span class="token punctuation">,</span>
         <span class="token literal-property property">pay_type</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
         <span class="token literal-property property">user_price</span><span class="token operator">:</span><span class="token keyword">this</span><span class="token punctuation">.</span>user_price<span class="token punctuation">,</span>
         <span class="token literal-property property">trade_type</span><span class="token operator">:</span> <span class="token string">&#39;wap&#39;</span><span class="token punctuation">,</span>
         <span class="token literal-property property">order_id</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>orderInfo<span class="token punctuation">.</span>order_id<span class="token punctuation">,</span>

     <span class="token punctuation">}</span><span class="token punctuation">)</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>wechatPay<span class="token punctuation">)</span>


      <span class="token keyword">var</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span> <span class="token string">&#39;div&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">//wechatPay.data  就是后台返回的form表单</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;wechatPay.data&quot;</span><span class="token punctuation">,</span>wechatPay<span class="token punctuation">.</span>data<span class="token punctuation">)</span>

      el<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> wechatPay<span class="token punctuation">.</span>data
      document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span>
      document<span class="token punctuation">.</span>forms<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就调起了。</p><p>前面这种是大多数情况，还有一些情况，后台返回的并不是form表单，是个链接。。不讲武德。</p><p>你直接用这个链接拼也可以调起</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">malipaynewPay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 里面的参数根据你们自己的数据填写即可</span>
  <span class="token comment">// wechatPay.data 返回的链接</span>

      <span class="token keyword">let</span> pay_url <span class="token operator">=</span>
           wechatPay<span class="token punctuation">.</span>data <span class="token operator">+</span>
          <span class="token string">&quot;order_sn=&quot;</span> <span class="token operator">+</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>orderInfo<span class="token punctuation">.</span>order_id <span class="token operator">+</span>
          <span class="token string">&quot;&amp;body=&quot;</span> <span class="token operator">+</span>
           <span class="token keyword">this</span><span class="token punctuation">.</span>goods_name <span class="token operator">+</span>
          <span class="token string">&quot;&amp;money=&quot;</span> <span class="token operator">+</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>user_price <span class="token operator">+</span>
          <span class="token string">&quot;&amp;quit_url=&quot;</span> <span class="token operator">+</span>
          window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href<span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>pay_url<span class="token punctuation">)</span><span class="token punctuation">;</span>

       location<span class="token punctuation">.</span>href <span class="token operator">=</span> pay_url<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","h5的支付宝支付.html.vue"]]);export{r as default};
