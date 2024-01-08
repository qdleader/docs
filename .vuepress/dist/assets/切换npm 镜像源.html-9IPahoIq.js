import{_ as s,o as n,c as e,d as a}from"./app-tgHnmF2J.js";const r={},i=a(`<h1 id="切换npm-镜像源" tabindex="-1"><a class="header-anchor" href="#切换npm-镜像源" aria-hidden="true">#</a> 切换npm 镜像源</h1><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">--</span> 查看当前地址：
npm config <span class="token keyword">get</span> registry
https<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">registry.npmjs.org</span><span class="token regex-delimiter">/</span></span>
 
npm config <span class="token keyword">get</span> disturl
<span class="token keyword">undefined</span>
 
 
<span class="token operator">--</span> 设置当前地址（设置为淘宝镜像）
npm config <span class="token keyword">set</span> registry http<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">registry.npm.taobao.org</span><span class="token regex-delimiter">/</span></span>
 
<span class="token operator">--</span> 设置当前地址（设置为默认地址）
npm config <span class="token keyword">set</span> registry https<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">registry.npmjs.org</span><span class="token regex-delimiter">/</span></span>
 
<span class="token operator">--</span> 每次执行命令前加入–registry指定仓库路径
npm <span class="token operator">--</span>registry https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>registry<span class="token punctuation">.</span>npm<span class="token punctuation">.</span>taobao<span class="token punctuation">.</span>org install
 
## 使用nrm工具切换淘宝源
npx nrm use taobao
 
## 如果之后需要切换回官方源可使用
npx nrm use npm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>淘宝镜像每15分钟更新一次</p>`,3),p=[i];function t(l,o){return n(),e("div",null,p)}const d=s(r,[["render",t],["__file","切换npm 镜像源.html.vue"]]);export{d as default};
