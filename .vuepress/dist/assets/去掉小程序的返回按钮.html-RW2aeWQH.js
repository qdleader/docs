import{_ as e,o as n,c as i,d}from"./app-qTEUp92E.js";const s={},l=d(`<p>之前页面调过来用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wx.redirectTo({
   url: &#39;/pages/waveComplete/waveComplete&#39;,
 })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当前页面 json</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  &quot;navigationStyle&quot;:&quot;custom&quot;,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>导航bar就没了</p><p>然后就自定义</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;view class=&#39;conch_top {{isIos?&quot;conch_top_ios&quot;:&quot;conch_top_andriod&quot;}}&#39;&gt;
    顶部标题
&lt;/view&gt;


.conch_top {
  width: 100%;
  height: 40rpx;
  line-height: 40rpx;
  text-align: center;
  font-size: 32rpx;
  font-weight: bold;
  background: #FFF7F0;
  padding-top: 50rpx;
}
.conch_top_ios {

}
.conch_top_andriod {
  text-align: left;
  text-indent: 40rpx;
  padding-top: 80rpx;
  font-weight: normal;
  font-size: 32rpx;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),t=[l];function a(c,v){return n(),i("div",null,t)}const o=e(s,[["render",a],["__file","去掉小程序的返回按钮.html.vue"]]);export{o as default};
