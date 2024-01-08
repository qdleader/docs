import{_ as e,o as a,c as s,d as n}from"./app-xrgnhFxe.js";const r={},c=n(`<h2 id="配置华为euler仓库源" tabindex="-1"><a class="header-anchor" href="#配置华为euler仓库源" aria-hidden="true">#</a> 配置华为euler仓库源</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>$ cd <span class="token operator">/</span>etc<span class="token operator">/</span>yum<span class="token punctuation">.</span>repos<span class="token punctuation">.</span>d
$ wget https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>repo<span class="token punctuation">.</span>huaweicloud<span class="token punctuation">.</span>com<span class="token operator">/</span>repository<span class="token operator">/</span>conf<span class="token operator">/</span>openeuler_x86_64<span class="token punctuation">.</span>repo
$ yum clean all
$ yum makecache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装docker" tabindex="-1"><a class="header-anchor" href="#安装docker" aria-hidden="true">#</a> 安装docker</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>$ yum <span class="token operator">-</span>y install docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="启动docker" tabindex="-1"><a class="header-anchor" href="#启动docker" aria-hidden="true">#</a> 启动docker</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>$ sudo service docker start
$ docker <span class="token operator">--</span>version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Docker version 18.09.0, build c0d3c43</p><h2 id="开机自启动" tabindex="-1"><a class="header-anchor" href="#开机自启动" aria-hidden="true">#</a> 开机自启动</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>sudo systemctl enable docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9),d=[c];function i(o,t){return a(),s("div",null,d)}const p=e(r,[["render",i],["__file","华为云HECS服务器安装docker.html.vue"]]);export{p as default};
