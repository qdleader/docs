import{_ as i,o as e,c as n,d as s}from"./app-1IAv0yAY.js";const t={},d=s(`<p>12.固定定位布局键盘挡住输入框内容？</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;submit&quot;&gt;
     &lt;button type=&quot;button&quot; class=&quot;btn&quot;&gt;提交信息&lt;/button&gt;
&lt;/div&gt;


.submit {
    display: flex;
    width: 100%;
    justify-content: center;
    position: fixed;
    bottom: 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过resize函数监听窗口变化，然后把fixed属性改为static即可解决</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var windheight = $(window).height();  /*未唤起键盘时当前窗口高度*/

$(window).resize(function(){
   var docheight = $(window).height();  /*唤起键盘时当前窗口高度*/        
   if(docheight &lt; windheight){            /*当唤起键盘高度小于未唤起键盘高度时执行*/
      $(&quot;.submit&quot;).css(&quot;position&quot;,&quot;static&quot;);
   }else{
      $(&quot;.submit&quot;).css(&quot;position&quot;,&quot;fixed&quot;);
   }           
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[d];function u(a,c){return e(),n("div",null,l)}const o=i(t,[["render",u],["__file","固定定位键盘弹起挡住输入框内容.html.vue"]]);export{o as default};
