import{_ as e,o as n,c as i,d as s}from"./app-1IAv0yAY.js";const l={},d=s(`<p>好多情况下我们在小程序中的写的计时器清除不掉，很多时候在方法内部定义的计时器，在外面清除怎么也清不掉（虽然有变量提升</p><p>这时候在小程序最外面 定义</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var timerLeft = null;




countTimeDownNew: function (manager, cancel) {
  let that = this;
    timerLeft =  setInterval(()=&gt; {
         let num = this.data.num3 + 1
         this.setData({
           num3:num
         })
     },1000)
},


playOrpause: function () {
  clearInterval(timerLeft)
},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>即可手动开启，关闭计时器，挺好用的</p>`,4),a=[d];function t(c,v){return n(),i("div",null,a)}const u=e(l,[["render",t],["__file","定时器清不掉问题.html.vue"]]);export{u as default};
