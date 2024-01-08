import{_ as i,o as e,c as n,d}from"./app-FRQgbCNf.js";const s={},l=d(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
import html2canvas from &quot;html2canvas&quot;;

           let num = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop

            var device = navigator.userAgent;
            var isAndroid = device.indexOf(&#39;Android&#39;) &gt; -1 || device.indexOf(&#39;Adr&#39;) &gt; -1; //android终端
            var isiOS = !!device.match(/\\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
            if(isiOS) {
                num = num +50;
            } else if(isAndroid) {
                num = num -300;
                
            } else {
            }
       
            this.$nextTick(() =&gt; {
                     let ref = this.$refs.faultTree; // 截图区域
                      const targetDom = document.querySelector(&quot;#imageToFile&quot;)
                     html2canvas(targetDom, {
                        width: window.screen.availWidth,
                        height: window.screen.availHeight -100,
                        windowWidth: document.body.scrollWidth,
                        windowHeight: document.body.scrollHeight - 500,
                        x:0,
                        y:num,
                           useCORS: true
                    }).then(canvas =&gt; {
                        let dataURL = canvas.toDataURL(&quot;image/png&quot;);
                                //获取海报地址
                        this.dataURL = dataURL
                            // // 打开保存海报的子组件的
                        this.$refs.savePic.openShow()
                    });
            }, 200);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>截图工具，我们会用到，但会发现一些异步数据图片啥的我么拿不到，截取不完整。</p><p>加上这个属性就可以啦 useCORS: true</p>`,3),a=[l];function v(t,c){return e(),n("div",null,a)}const u=i(s,[["render",v],["__file","截图不完整问题.html.vue"]]);export{u as default};
