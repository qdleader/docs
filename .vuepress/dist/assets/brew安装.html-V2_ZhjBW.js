import{_ as e,o as a,c as t,d as i}from"./app-C59QzqDT.js";const n={},s=i(`<h1 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/bin/bash -c &quot;$(curl -fsSL https://gitee.com/ineo6/homebrew-install/raw/master/install.sh)&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="加入到path" tabindex="-1"><a class="header-anchor" href="#加入到path" aria-hidden="true">#</a> 加入到path</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    echo &#39;eval &quot;$(/opt/homebrew/bin/brew shellenv)&quot;&#39; &gt;&gt; /Users/icourt/.zprofile

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
    eval &quot;$(/opt/homebrew/bin/brew shellenv)&quot;


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>brew -v 就下载好了</p><p>此时，比如我们要下载git</p><p>就可以直接</p><p>brew install git</p>`,9),d=[s];function r(l,c){return a(),t("div",null,d)}const u=e(n,[["render",r],["__file","brew安装.html.vue"]]);export{u as default};
