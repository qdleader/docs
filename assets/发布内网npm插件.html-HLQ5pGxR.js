import{_ as a,o as n,c as e,d as s}from"./app-tSvYcIf0.js";const i={},d=s(`<h1 id="发布内网npm插件" tabindex="-1"><a class="header-anchor" href="#发布内网npm插件" aria-hidden="true">#</a> 发布内网npm插件</h1><h3 id="_1-切换公司的源地址" tabindex="-1"><a class="header-anchor" href="#_1-切换公司的源地址" aria-hidden="true">#</a> 1. 切换公司的源地址</h3><h3 id="_2-创建本地npm用户" tabindex="-1"><a class="header-anchor" href="#_2-创建本地npm用户" aria-hidden="true">#</a> 2. 创建本地npm用户</h3><p>使用npm adduser创建用户，输入用户名、密码、邮箱。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> adduser
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>名字尽量用自己的真名哈（后续使用者，有问题可以向您请教）</p><h3 id="_3-发布包" tabindex="-1"><a class="header-anchor" href="#_3-发布包" aria-hidden="true">#</a> 3. 发布包</h3><p>发布内网npm 插件跟 正常的npm 包发布流程一致</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">npm</span> login

<span class="token function">npm</span> publish

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>刷新本地链接，可以看到npm包已经发布成功。</p><p>发布包常用命令</p><h2 id="登录-npm" tabindex="-1"><a class="header-anchor" href="#登录-npm" aria-hidden="true">#</a> 登录 npm：</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> login // 然后根据提示一步步的操作。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="发布包" tabindex="-1"><a class="header-anchor" href="#发布包" aria-hidden="true">#</a> 发布包：</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> publish // 项目的根目录下 <span class="token function">npm</span> publish 即可，根据公司私有库的配置，可能会需要登录。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="登出-npm" tabindex="-1"><a class="header-anchor" href="#登出-npm" aria-hidden="true">#</a> 登出 npm：</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token builtin class-name">logout</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="删除发布的包" tabindex="-1"><a class="header-anchor" href="#删除发布的包" aria-hidden="true">#</a> 删除发布的包：</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> unpublish <span class="token punctuation">[</span>packageName<span class="token punctuation">]</span> // 如果不可以加上参数 <span class="token parameter variable">--force</span> 。注意：此指令仅适用于 <span class="token number">24</span>小时内发布的包
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="如果不维护此包可以使用" tabindex="-1"><a class="header-anchor" href="#如果不维护此包可以使用" aria-hidden="true">#</a> 如果不维护此包可以使用</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> deprecate <span class="token operator">&lt;</span>pkg<span class="token operator">&gt;</span><span class="token punctuation">[</span>@<span class="token operator">&lt;</span>version<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span>message<span class="token operator">&gt;</span> // 此后如果下载此包会包含一些警告信息。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,21),r=[d];function l(c,p){return n(),e("div",null,r)}const o=a(i,[["render",l],["__file","发布内网npm插件.html.vue"]]);export{o as default};
