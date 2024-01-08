import{_ as t,o as e,c as n,d as r}from"./app-xrgnhFxe.js";const a={},s=r(`<h1 id="为什么要搭建私有仓库" tabindex="-1"><a class="header-anchor" href="#为什么要搭建私有仓库" aria-hidden="true">#</a> 为什么要搭建私有仓库？</h1><p>日常开发中我们肯定会封装一些通用组件，大部分情况下都会存在于 components 目录下；试想一下如果我们有两个系统 A 和 B，此时这两个系统都要用到的组件我们该如何封装呢？</p><p>这种情况下我们还是开发一个包托管到 npm 比较靠谱，随用随下载。但是这些组件有一定的隐私性，我们又不想让别人看到。</p><p>我们库里的组件，我们要怎么用呢</p><p>很简单 切换npm 下载源为本地服务器地址 -- 查看当前地址： npm config get registry https://registry.npmjs.org/</p><p>npm config set registry http://vuereact.top:4873</p><p>然后正常的的去install 即可</p><p>npm i test</p><p>结束</p><h2 id="常用的镜像地址" tabindex="-1"><a class="header-anchor" href="#常用的镜像地址" aria-hidden="true">#</a> 常用的镜像地址</h2><p>-- 设置当前地址（设置为淘宝镜像） npm config set registry http://registry.npm.taobao.org/</p><p>-- 设置当前地址（设置为默认地址） npm config set registry https://registry.npmjs.org/</p><h2 id="nrm-管理-npm-源" tabindex="-1"><a class="header-anchor" href="#nrm-管理-npm-源" aria-hidden="true">#</a> nrm 管理 npm 源</h2><p>nrm 可以很简单的切换多个 npm 原地址。npm, cnpm ... ... 下面简单罗列 nrm 中常用的一些指令。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> nrm

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>参数</th><th style="text-align:center;">默认值</th><th style="text-align:center;">示例描述</th></tr></thead><tbody><tr><td>ls</td><td style="text-align:center;">nrm ls</td><td style="text-align:center;">列出所有的源地址</td></tr><tr><td>use [source]</td><td style="text-align:center;">nrm use cnpm</td><td style="text-align:center;">切换到指定的源</td></tr><tr><td>add [resigtry] [url]</td><td style="text-align:center;">nrm add test http://localhost:8080</td><td style="text-align:center;">添加源</td></tr><tr><td>del [resigtry]</td><td style="text-align:center;">nrm del test</td><td style="text-align:center;">删除源</td></tr></tbody></table>`,16),d=[s];function i(p,l){return e(),n("div",null,d)}const o=t(a,[["render",i],["__file","如何使用内网npm.html.vue"]]);export{o as default};
