import{_ as i,o as n,c as s,d as e}from"./app-xrgnhFxe.js";const l={},d=e(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/* 开始 */
body {
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  height: 100vh;
  overflow: hidden;
  display: flex;
  font-family: &#39;Anton&#39;, sans-serif;
  justify-content: center;
  align-items: center;
}

.night {
  position: fixed;
  left:0;
  top: 0;
  width: 100vw;
  height: 100vh;
  -webkit-transform: rotateZ(45deg);
          transform: rotateZ(45deg);
  -webkit-animation: sky 200000ms linear infinite;
          animation: sky 200000ms linear infinite;
}

.shooting_star {
  position: absolute;
  left: 10%;
  top: 50%;
  height: 2px;
  background: linear-gradient(-45deg, #5f91ff, rgba(0, 0, 255, 0));
  border-radius: 999px;
  -webkit-filter: drop-shadow(0 0 6px #699bff);
          filter: drop-shadow(0 0 6px #699bff);
  -webkit-animation: tail 3000ms ease-in-out infinite, shooting 3000ms ease-in-out infinite;
          animation: tail 3000ms ease-in-out infinite, shooting 3000ms ease-in-out infinite;
}
.shooting_star::before, .shooting_star::after {
  content: &#39;&#39;;
  position: absolute;
  top: calc(50% - 1px);
  right: 0;
  height: 2px;
  background: linear-gradient(-45deg, rgba(0, 0, 255, 0), #5f91ff, rgba(0, 0, 255, 0));
  -webkit-transform: translateX(50%) rotateZ(45deg);
          transform: translateX(50%) rotateZ(45deg);
  border-radius: 100%;
  -webkit-animation: shining 3000ms ease-in-out infinite;
          animation: shining 3000ms ease-in-out infinite;
}
.shooting_star::after {
  -webkit-transform: translateX(50%) rotateZ(-45deg);
          transform: translateX(50%) rotateZ(-45deg);
}
.shooting_star:nth-child(1) {
  top: calc(10% - 185px);
  left: calc(10% - 150px);
  -webkit-animation-delay: 8971ms;
          animation-delay: 8971ms;
}
.shooting_star:nth-child(1)::before, .shooting_star:nth-child(1)::after, .shooting_star:nth-child(1)::after {
  -webkit-animation-delay: 8971ms;
          animation-delay: 8971ms;
}
.shooting_star:nth-child(2) {
  top: calc(15% - 50px);
  left: calc(15% - 179px);
  -webkit-animation-delay: 9256ms;
          animation-delay: 9256ms;
}
.shooting_star:nth-child(2)::before, .shooting_star:nth-child(2)::after, .shooting_star:nth-child(2)::after {
  -webkit-animation-delay: 9256ms;
          animation-delay: 9256ms;
}
.shooting_star:nth-child(3) {
  top: calc(20% - -146px);
  left: calc(20% - 135px);
  -webkit-animation-delay: 8700ms;
          animation-delay: 8700ms;
}
.shooting_star:nth-child(3)::before, .shooting_star:nth-child(3)::after, .shooting_star:nth-child(3)::after {
  -webkit-animation-delay: 8700ms;
          animation-delay: 8700ms;
}
.shooting_star:nth-child(4) {
  top: calc(30% - -77px);
  left: calc(30% - 157px);
  -webkit-animation-delay: 3147ms;
          animation-delay: 3147ms;
}
.shooting_star:nth-child(4)::before, .shooting_star:nth-child(4)::after, .shooting_star:nth-child(4)::after {
  -webkit-animation-delay: 3147ms;
          animation-delay: 3147ms;
}
.shooting_star:nth-child(5) {
  top: calc(40% - -183px);
  left: calc(40% - 8px);
  -webkit-animation-delay: 6588ms;
          animation-delay: 6588ms;
}
.shooting_star:nth-child(5)::before, .shooting_star:nth-child(5)::after, .shooting_star:nth-child(5)::after {
  -webkit-animation-delay: 6588ms;
          animation-delay: 6588ms;
}
.shooting_star:nth-child(6) {
  top: calc(50% - -29px);
  left: calc(50% - 195px);
  -webkit-animation-delay: 8009ms;
          animation-delay: 8009ms;
}
.shooting_star:nth-child(6)::before, .shooting_star:nth-child(6)::after, .shooting_star:nth-child(6)::after {
  -webkit-animation-delay: 8009ms;
          animation-delay: 8009ms;
}
.shooting_star:nth-child(7) {
  top: calc(60% - 95px);
  left: calc(60% - 69px);
  -webkit-animation-delay: 5420ms;
          animation-delay: 5420ms;
}
.shooting_star:nth-child(7)::before, .shooting_star:nth-child(7)::after, .shooting_star:nth-child(7)::after {
  -webkit-animation-delay: 5420ms;
          animation-delay: 5420ms;
}
.shooting_star:nth-child(8) {
  top: calc(70% - -59px);
  left: calc(70% - 70px);
  -webkit-animation-delay: 9378ms;
          animation-delay: 9378ms;
}
.shooting_star:nth-child(8)::before, .shooting_star:nth-child(8)::after, .shooting_star:nth-child(8)::after {
  -webkit-animation-delay: 9378ms;
          animation-delay: 9378ms;
}
.shooting_star:nth-child(9) {
  top: calc(80% - 76px);
  left: calc(80% - 238px);
  -webkit-animation-delay: 2845ms;
          animation-delay: 2845ms;
}
.shooting_star:nth-child(9)::before, .shooting_star:nth-child(9)::after, .shooting_star:nth-child(9)::after {
  -webkit-animation-delay: 2845ms;
          animation-delay: 2845ms;
}
.shooting_star:nth-child(10) {
  top: calc(90% - 83px);
  left: calc(90% - 6px);
  -webkit-animation-delay: 5205ms;
          animation-delay: 5205ms;
}
.shooting_star:nth-child(10)::before, .shooting_star:nth-child(10)::after, .shooting_star:nth-child(10)::after {
  -webkit-animation-delay: 5205ms;
          animation-delay: 5205ms;
}
.shooting_star:nth-child(11) {
  top: calc(100% - -137px);
  left: calc(100% - 267px);
  -webkit-animation-delay: 808ms;
          animation-delay: 808ms;
}
.shooting_star:nth-child(11)::before, .shooting_star:nth-child(11)::after, .shooting_star:nth-child(11)::after {
  -webkit-animation-delay: 808ms;
          animation-delay: 808ms;
}
.shooting_star:nth-child(12) {
  top: calc(50% - 12px);
  left: calc(50% - 8px);
  -webkit-animation-delay: 2406ms;
          animation-delay: 2406ms;
}
.shooting_star:nth-child(12)::before, .shooting_star:nth-child(12)::after, .shooting_star:nth-child(12)::after {
  -webkit-animation-delay: 2406ms;
          animation-delay: 2406ms;
}
.shooting_star:nth-child(13) {
  top: calc(50% - 148px);
  left: calc(50% - 47px);
  -webkit-animation-delay: 7566ms;
          animation-delay: 7566ms;
}
.shooting_star:nth-child(13)::before, .shooting_star:nth-child(13)::after, .shooting_star:nth-child(13)::after {
  -webkit-animation-delay: 7566ms;
          animation-delay: 7566ms;
}
.shooting_star:nth-child(14) {
  top: calc(50% - -28px);
  left: calc(50% - 75px);
  -webkit-animation-delay: 7634ms;
          animation-delay: 7634ms;
}
.shooting_star:nth-child(14)::before, .shooting_star:nth-child(14)::after, .shooting_star:nth-child(14)::after {
  -webkit-animation-delay: 7634ms;
          animation-delay: 7634ms;
}
.shooting_star:nth-child(15) {
  top: calc(50% - -37px);
  left: calc(50% - 203px);
  -webkit-animation-delay: 7743ms;
          animation-delay: 7743ms;
}
.shooting_star:nth-child(15)::before, .shooting_star:nth-child(15)::after, .shooting_star:nth-child(15)::after {
  -webkit-animation-delay: 7743ms;
          animation-delay: 7743ms;
}
.shooting_star:nth-child(16) {
  top: calc(50% - 41px);
  left: calc(50% - 256px);
  -webkit-animation-delay: 2888ms;
          animation-delay: 2888ms;
}
.shooting_star:nth-child(16)::before, .shooting_star:nth-child(16)::after, .shooting_star:nth-child(16)::after {
  -webkit-animation-delay: 2888ms;
          animation-delay: 2888ms;
}
.shooting_star:nth-child(17) {
  top: calc(50% - -35px);
  left: calc(50% - 121px);
  -webkit-animation-delay: 5864ms;
          animation-delay: 5864ms;
}
.shooting_star:nth-child(17)::before, .shooting_star:nth-child(17)::after, .shooting_star:nth-child(17)::after {
  -webkit-animation-delay: 5864ms;
          animation-delay: 5864ms;
}
.shooting_star:nth-child(18) {
  top: calc(50% - 73px);
  left: calc(50% - 225px);
  -webkit-animation-delay: 7883ms;
          animation-delay: 7883ms;
}
.shooting_star:nth-child(18)::before, .shooting_star:nth-child(18)::after, .shooting_star:nth-child(18)::after {
  -webkit-animation-delay: 7883ms;
          animation-delay: 7883ms;
}
.shooting_star:nth-child(19) {
  top: calc(50% - -69px);
  left: calc(50% - 47px);
  -webkit-animation-delay: 3339ms;
          animation-delay: 3339ms;
}
.shooting_star:nth-child(19)::before, .shooting_star:nth-child(19)::after, .shooting_star:nth-child(19)::after {
  -webkit-animation-delay: 3339ms;
          animation-delay: 3339ms;
}
.shooting_star:nth-child(20) {
  top: calc(50% - 162px);
  left: calc(50% - 129px);
  -webkit-animation-delay: 7963ms;
          animation-delay: 7963ms;
}
.shooting_star:nth-child(20)::before, .shooting_star:nth-child(20)::after, .shooting_star:nth-child(20)::after {
  -webkit-animation-delay: 7963ms;
          animation-delay: 7963ms;
}

@-webkit-keyframes tail {
  0% {
    width: 0;
  }
  30% {
    width: 100px;
  }
  100% {
    width: 0;
  }
}

@keyframes tail {
  0% {
    width: 0;
  }
  30% {
    width: 100px;
  }
  100% {
    width: 0;
  }
}
@-webkit-keyframes shining {
  0% {
    width: 0;
  }
  50% {
    width: 30px;
  }
  100% {
    width: 0;
  }
}
@keyframes shining {
  0% {
    width: 0;
  }
  50% {
    width: 30px;
  }
  100% {
    width: 0;
  }
}
@-webkit-keyframes shooting {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(300px);
            transform: translateX(300px);
  }
}
@keyframes shooting {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(300px);
            transform: translateX(300px);
  }
}
@-webkit-keyframes sky {
  0% {
    -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
  }
  100% {
    -webkit-transform: rotate(405deg);
            transform: rotate(405deg);
  }
}
@keyframes sky {
  0% {
    -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
  }
  100% {
    -webkit-transform: rotate(405deg);
            transform: rotate(405deg);
  }
}

/* 结束 */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- 开始 --&gt;
       &lt;div class=&quot;night&quot;&gt;
           &lt;div class=&quot;shooting_star&quot;&gt;&lt;/div&gt;
           &lt;div class=&quot;shooting_star&quot;&gt;&lt;/div&gt;
           &lt;div class=&quot;shooting_star&quot;&gt;&lt;/div&gt;
           &lt;div class=&quot;shooting_star&quot;&gt;&lt;/div&gt;
           &lt;div class=&quot;shooting_star&quot;&gt;&lt;/div&gt;
           &lt;div class=&quot;shooting_star&quot;&gt;&lt;/div&gt;
           &lt;div class=&quot;shooting_star&quot;&gt;&lt;/div&gt;
           &lt;div class=&quot;shooting_star&quot;&gt;&lt;/div&gt;
           &lt;div class=&quot;shooting_star&quot;&gt;&lt;/div&gt;
           &lt;div class=&quot;shooting_star&quot;&gt;&lt;/div&gt;
           &lt;div class=&quot;shooting_star&quot;&gt;&lt;/div&gt;
           &lt;div class=&quot;shooting_star&quot;&gt;&lt;/div&gt;
           &lt;div class=&quot;shooting_star&quot;&gt;&lt;/div&gt;
           &lt;div class=&quot;shooting_star&quot;&gt;&lt;/div&gt;
           &lt;div class=&quot;shooting_star&quot;&gt;&lt;/div&gt;
           &lt;div class=&quot;shooting_star&quot;&gt;&lt;/div&gt;
           &lt;div class=&quot;shooting_star&quot;&gt;&lt;/div&gt;
           &lt;div class=&quot;shooting_star&quot;&gt;&lt;/div&gt;
           &lt;div class=&quot;shooting_star&quot;&gt;&lt;/div&gt;
           &lt;div class=&quot;shooting_star&quot;&gt;&lt;/div&gt;
       &lt;/div&gt;
       &lt;!-- 结束 --&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),a=[d];function t(v,r){return n(),s("div",null,a)}const c=i(l,[["render",t],["__file","流行划过效果.html.vue"]]);export{c as default};
