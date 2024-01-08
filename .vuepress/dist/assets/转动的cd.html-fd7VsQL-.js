import{_ as i,o as n,c as e,d}from"./app-C59QzqDT.js";const s={},l=d(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> &lt;div class=&quot;middle-box&quot;&gt;
	&lt;img class=&#39;player-needle&#39; src=&quot;./player-needle.png&quot; alt=&quot;&quot;&gt;
	&lt;div :class=&quot;{&#39;pic-box&#39;:true,&#39;pic-box-move&#39;:isPlay}&quot;&gt;
		&lt;img src=&quot;./img-test.jpg&quot; alt=&quot;&quot; class=&quot;album-pic&quot;&gt;
		&lt;div&gt;&lt;/div&gt;
	&lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 音频播放开始
.middle-box {
        // overflow: hidden;
        position: relative;
        transform: scale(0.7);
        margin-top: -1rem;
}

.player-needle {
    width: 18%;
    position: absolute;
    top: -1rem;
    left: 45%;
    z-index: 20;
}

.pic-box {
    position: relative;
    width: 70%;
    height: 0;
    left: 0;
    top:0;
    z-index: 9;
    padding-bottom: 70%;
    border-radius: 50%;
    border: 10px solid rgba(255,255,255,0.2);
    margin: 0 auto;
    margin-top: 9%;
    text-align: center;
    // transition:5s linear 1s normal none infinite rotate;
        // animation: circling 20s linear infinite;
}
.pic-box-move {
    position: relative;
    width: 70%;
    height: 0;
    left: 0;
    top:0;
    z-index: 9;
    padding-bottom: 70%;
    border-radius: 50%;
    border: 10px solid rgba(255,255,255,0.2);
    margin: 0 auto;
    margin-top: 9%;
    text-align: center;
    // transition:5s linear 1s normal none infinite rotate;
    animation: circling 20s linear infinite;
}
.pic-box .album-pic {
    width: 75%;
    height: auto;
    max-height: 250px;
    border-radius: 50%;
    margin-top: 15%;
}

.pic-box div {
    position: absolute;
    width: 105%;
    height: 105%;
    border-radius: 50%;
    overflow: hidden;
    top: -3px;
    left: -3px;
    background: url(./coverall.png) no-repeat;
    background-position: -5px -7px;
    background-size: 102%;
    z-index: 10;
}
@keyframes rotate {
    from {transform:rotate(0deg)}
    to{transform:rotate(360deg)}
}
@-webkit-keyframes rotate{
    from { -webkit-transform:rotate(0deg) }
    to { -webkit-transform:rotate(360deg) }
}

@keyframes circling {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg)
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[l];function r(a,t){return n(),e("div",null,v)}const m=i(s,[["render",r],["__file","转动的cd.html.vue"]]);export{m as default};
