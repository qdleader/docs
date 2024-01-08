import{_ as e,o as n,c as i,d as s}from"./app-C59QzqDT.js";const a={},d=s(`<h1 id="为什么使用vconsole呢" tabindex="-1"><a class="header-anchor" href="#为什么使用vconsole呢" aria-hidden="true">#</a> 为什么使用vconsole呢？</h1><blockquote><p>因为手机或者平板之类的客户端软件并没有控制台，前端开发想看log日志比较麻烦，如果一直弹窗alert方法实在太挫了。所以腾讯开发了这个 js 插件。</p></blockquote><p>#使用方法</p><h2 id="方法1" tabindex="-1"><a class="header-anchor" href="#方法1" aria-hidden="true">#</a> 方法1：</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script src=&quot;https://qdleader.github.io/qdleader/h5/vconsole.js&quot;&gt;&lt;/script&gt;
//或使用cdn链接 &lt;script src=&quot;https://cdn.bootcss.com/vConsole/3.3.4/vconsole.min.js&quot;&gt;&lt;/script&gt;
&lt;script&gt;
    // init vConsole
    var vConsole = new VConsole();
    console.log(&#39;Hello world&#39;);
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法2" tabindex="-1"><a class="header-anchor" href="#方法2" aria-hidden="true">#</a> 方法2：</h2><h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install vconsole

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="引入" tabindex="-1"><a class="header-anchor" href="#引入" aria-hidden="true">#</a> 引入</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import VConsole from &#39;vconsole&#39;;

const isDebug = true;
// 本地开发调试注入vConsole
if (isDebug) {
    new VConsole();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其他类似工具Eruda</p>`,11),l=[d];function t(r,c){return n(),i("div",null,l)}const v=e(a,[["render",t],["__file","手机端调试vconsole.html.vue"]]);export{v as default};
