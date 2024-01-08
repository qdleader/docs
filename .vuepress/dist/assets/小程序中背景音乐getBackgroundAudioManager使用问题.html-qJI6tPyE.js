import{_ as e,o as n,c as a,d as i}from"./app-G0TSq-iO.js";const s={},d=i(`<h2 id="小程序中背景音乐getbackgroundaudiomanager使用问题" tabindex="-1"><a class="header-anchor" href="#小程序中背景音乐getbackgroundaudiomanager使用问题" aria-hidden="true">#</a> 小程序中背景音乐getBackgroundAudioManager使用问题</h2><h3 id="_1-当你在-onplay方法中写入计时器时候-计时器会没两秒或三秒更新一次" tabindex="-1"><a class="header-anchor" href="#_1-当你在-onplay方法中写入计时器时候-计时器会没两秒或三秒更新一次" aria-hidden="true">#</a> 1. 当你在 onPlay方法中写入计时器时候，计时器会没两秒或三秒更新一次</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> var manager = wx.getBackgroundAudioManager();
      manager.title = that.data.audioList[that.data.audioIndex].trackCtitle || &quot;音频标题&quot;;
      manager.epname = that.data.playlistName || &quot;专辑名称&quot;;
      manager.singer = audio.author || &quot;歌手名&quot;;

      // manager.coverImgUrl = audio.poster;
      // 设置了 src 之后会自动播放
      manager.src = audio;
      manager.currentTime = 0;



      manager.onPlay(function () {
        console.log(&quot;======onPlay======&quot;);
        that.setData({
          playStatus: true,
          pausedSwitch:true,
          currentUrl:res.data.data
        })

  });

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决方法是把计时器提出来在别的事件中写</p><p>eg：我在播放按钮时候启动计时器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//播放按钮
playOrpause: function () {
  let manager = wx.getBackgroundAudioManager();
  if (this.data.playStatus) {
    manager.pause();
    this.setData({
      playStatus: false,
    })
    clearInterval(timerLeft)
    // this.setData({
    //     num3:1
    // })
  } else {
    manager.play();
    this.setData({
      playStatus: true,
    })
    this.countTimeDownNew(manager)
  }
},

countTimeDownNew: function (manager, cancel) {
    let that = this;
      timerLeft =  setInterval(()=&gt; {
           let num = this.data.num3 + 1
           this.setData({
             num3:num
           })
          if (that.data.playStatus) {
            console.log(&quot;that.formatTime(Math.ceil(manager.currentTime)&quot;,that.formatTime(Math.ceil(manager.currentTime)))
            that.setData({
              progress: Math.ceil(manager.currentTime),
              progressText: that.formatTime(Math.ceil(manager.currentTime)),
              progressText: that.formatTime(manager.currentTime),
              duration: Math.ceil(manager.duration),
              durationText: that.formatTime(Math.ceil(manager.duration))
            })
          }
       },1000)
  },

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-manager-onpause在暂停时候-会在手机上循环一直调用onpause方法-调试器上没事" tabindex="-1"><a class="header-anchor" href="#_2-manager-onpause在暂停时候-会在手机上循环一直调用onpause方法-调试器上没事" aria-hidden="true">#</a> 2.manager.onpause在暂停时候 会在手机上循环一直调用onpause方法，调试器上没事</h3><p>在苹果11上表现是图标一直会闪</p><p>修复方案是在onPause方法里面加个 pausedSwitch属性开关</p><p>播放时候再打开</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>manager.onPause(function () {
          console.log(&quot;一致获取内容222&quot;)
          if(that.data.pausedSwitch) {
            that.setData({
              pausedSwitch:false,
            })
              console.log(&quot;一致获取内容2&quot;)
              console.log(&quot;that.data.progress1&quot;,that.data.progress)
              manager.seek(that.data.progress);
              that.setData({
                progressText: that.formatTime(that.data.progress),
                progress:Math.ceil(that.data.progress),
                playStatus: false
              })
              that.changeData()
              that.startSetInter2()
              console.log(&quot;开始 that.data.num2&quot;,that.data.num2)
              console.log(&quot;开始 that.data.isReload&quot;,that.data.isReload)
              console.log(&quot;======onPause 基础方法1======&quot;);
          }

        });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),l=[d];function t(r,u){return n(),a("div",null,l)}const c=e(s,[["render",t],["__file","小程序中背景音乐getBackgroundAudioManager使用问题.html.vue"]]);export{c as default};
