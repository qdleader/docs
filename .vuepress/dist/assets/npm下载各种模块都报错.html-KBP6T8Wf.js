import{_ as n,o as e,c as i,d as s}from"./app-FRQgbCNf.js";const l={},t=s(`<h1 id="npm安装任何包都报错的解决办法" tabindex="-1"><a class="header-anchor" href="#npm安装任何包都报错的解决办法" aria-hidden="true">#</a> npm安装任何包都报错的解决办法</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>解决办法：

1、执行：

npm config get proxy
npm config get https-proxy
如果返回值不为null，继续执行：
（这一步很重要，一定要保证两个命令的返回值都为null,话说回来，应该出现这个错误这两个返回值有不为null的）
npm config set proxy null
npm config set https-proxy null


2、执行：
npm config set registry http://registry.cnpmjs.org/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后你就可以愉快的安装cnpm了</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install -g cnpm --registry=https://registry.npm.taobao.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后你就可以更加愉快的用cnpm安任何东西了</p><p>现在基本就可以了，若cnpm 现在也任然报错呢，可以再检查一下是否配置了 git的系统变量</p><blockquote><p>系统变量的path中加入git 路径</p></blockquote>`,7),d=[t];function a(r,c){return e(),i("div",null,d)}const p=n(l,[["render",a],["__file","npm下载各种模块都报错.html.vue"]]);export{p as default};
