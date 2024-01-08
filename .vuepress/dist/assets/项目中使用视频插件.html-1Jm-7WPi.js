import{_ as e,o as i,c as n,d as s}from"./app-FRQgbCNf.js";const d={},l=s(`<p>以vue 中使用视频插件为例：</p><h1 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install vue-video-player --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="引入" tabindex="-1"><a class="header-anchor" href="#引入" aria-hidden="true">#</a> 引入</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>

import VueVideoPlayer from &#39;vue-video-player&#39;

// require videojs style
import &#39;video.js/dist/video-js.css&#39;


// import &#39;vue-video-player/src/custom-theme.css&#39;
Vue.use(VueVideoPlayer, /* {
    options: global default options,
    events: global videojs events
  } */)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="组件中使用" tabindex="-1"><a class="header-anchor" href="#组件中使用" aria-hidden="true">#</a> 组件中使用</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;!--在视频外面加一个容器--&gt;
    &lt;div class=&quot;input_video&quot;&gt;
    &lt;video-player  class=&quot;video-player vjs-custom-skin&quot;
                   ref=&quot;videoPlayer&quot;
                   :playsinline=&quot;true&quot;
                   :options=&quot;playerOptions&quot;
    &gt;&lt;/video-player&gt;
    &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
    export default {
        name : &#39;BusImg&#39;,
        data () {
            return {
                // 视频播放
                playerOptions : {
                    playbackRates : [ 0.5, 1.0, 1.5, 2.0 ], //可选择的播放速度
                    autoplay : false, //如果true,浏览器准备好时开始回放。
                    muted : false, // 默认情况下将会消除任何音频。
                    loop : false, // 视频一结束就重新开始。
                    preload : &#39;auto&#39;, // 建议浏览器在&lt;video&gt;加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    language : &#39;zh-CN&#39;,
                    aspectRatio : &#39;16:9&#39;, // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如&quot;16:9&quot;或&quot;4:3&quot;）
                    fluid : true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources : [ {
                        type : &quot;&quot;,
                        src : &#39;http://www.html5videoplayer.net/videos/madagascar3.mp4&#39;//url地址
                    } ],
                    poster : &quot;&quot;, //你的封面地址
                    // width: document.documentElement.clientWidth,
                    notSupportedMessage : &#39;此视频暂无法播放，请稍后再试&#39;, //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    controlBar : {
                        timeDivider : true,//当前时间和持续时间的分隔符
                        durationDisplay : true,//显示持续时间
                        remainingTimeDisplay : false,//是否显示剩余时间功能
                        fullscreenToggle : true  //全屏按钮
                    }
                }
            }
        }
    }
&lt;/script&gt;
&lt;style&gt;
    .input_video{
        width: 400px;
        height: 400px;
        margin: 0 auto;

    }
&lt;/style&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="闭坑小技巧" tabindex="-1"><a class="header-anchor" href="#闭坑小技巧" aria-hidden="true">#</a> 闭坑小技巧</h1><h2 id="tip1" tabindex="-1"><a class="header-anchor" href="#tip1" aria-hidden="true">#</a> tip1:</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>当我们要控制播放进度时候要设置currentTime，你会发现this.$refs.videoPlayer.duration在一些浏览器上会打印（至少现在是ios的微信浏览器是这样）undefined或NAN，你可以用下面这个方法：

  let stop = setInterval(() =&gt; {
		_this.duration = document.getElementsByClassName(&quot;vjs-tech&quot;)[0].duration;
		if (_this.duration) {
			console.log(&quot;打印时长&quot;,document.getElementsByClassName(&quot;vjs-tech&quot;)[0].duration)
			document.getElementsByClassName(&quot;vjs-tech&quot;)[0].currentTime = currentTime
			clearInterval(stop);
		}
	}, 150);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),a=[l];function t(v,r){return i(),n("div",null,a)}const c=e(d,[["render",t],["__file","项目中使用视频插件.html.vue"]]);export{c as default};
