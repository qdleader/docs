import{_ as e,o as i,c as n,d as s}from"./app-C59QzqDT.js";const l={},d=s(`<p>我们写一个自定义指令 v-lazy</p><p>首先 在directives文件夹下建一个lazy.js文件</p><p>然后在 main.js 中引入一下，</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { createApp } from &#39;vue&#39;
import App from &#39;./App.vue&#39;
import lazy from &#39;./directives/lazy&#39;;

const app = createApp(App);
app.directive(&#39;lazy&#39;,lazy);
app.mount(#app)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>lazy.js</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export default {
    mounted(el) {
        const imgSrc = el.src;
        el.src = &#39;&#39;

        const observer = new IntersectionObserver(([{isIntersecting}]) =&gt; {
            // 图片出现在可视区时候再加载
            if(isIntersecting) {
                el.src = imgSrc;
                observer.unobserve(el)
            }
        })
        observer.observe(el)
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),r=[d];function a(v,c){return i(),n("div",null,r)}const m=e(l,[["render",a],["__file","V011-vue自定义指令图片懒加载.html.vue"]]);export{m as default};
