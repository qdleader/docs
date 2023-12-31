import{_ as n,o as s,c as e,d as a}from"./app-C59QzqDT.js";const i={},l=a(`<h1 id="搭建内网npm" tabindex="-1"><a class="header-anchor" href="#搭建内网npm" aria-hidden="true">#</a> 搭建内网npm</h1><h2 id="verdaccio-搭建-npm-私有仓库" tabindex="-1"><a class="header-anchor" href="#verdaccio-搭建-npm-私有仓库" aria-hidden="true">#</a> Verdaccio 搭建 npm 私有仓库</h2><p>为什么要搭建私有仓库？</p><p>日常开发中我们肯定会封装一些通用组件，大部分情况下都会存在于 components 目录下；试想一下如果我们有两个系统 A 和 B，此时这两个系统都要用到的组件我们该如何封装呢？</p><p>这种情况下我们还是开发一个包托管到 npm 比较靠谱，随用随下载。但是这些组件有一定的隐私性，我们又不想让别人看到。此时 Verdaccio 的好处就体现出来了。</p><p>Verdaccio 是一个 Node.js 创建的轻量级 npm 仓库（就是一个应用支持独立部署安装）。可以快速帮助我们搭建一个类似于 npm 的网页应用程序用于托管我们的包</p><p>前置条件 本文介绍 Verdaccio 为 5.x 版本；示例演示系统为 阿里云 CentOS。由于此软件是基于 Node.js 开发，需要现在服务器安装 Node.js 并确保版本为 12.x。</p><p>提示：推荐使用 nvm 管理 node 版本；安装 nvm</p><p>安装 Verdaccio</p><h2 id="必须要加-g-全局安装" tabindex="-1"><a class="header-anchor" href="#必须要加-g-全局安装" aria-hidden="true">#</a> 必须要加 -g 全局安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> verdaccio <span class="token parameter variable">-g</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装成功之后随即在命令行输入 verdaccio</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@hecs-3429401 ~<span class="token punctuation">]</span><span class="token comment"># verdaccio</span>

 info --- config <span class="token function">file</span>  - /root/.config/verdaccio/config.yaml
 info --- using htpasswd file: /root/.config/verdaccio/htpasswd
 info --- plugin successfully loaded: verdaccio-htpasswd
 info --- plugin successfully loaded: verdaccio-audit
 warn --- http address - http://0.0.0.0:4873/ - verdaccio/5.28.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据服务启动后信息不难得到两个重要信息</p><p>verdaccio 配置文件：/root/.config/verdaccio/config.yaml</p><p>verdaccio 默认启动：默认占用 4873 端口（使用云服务器的小伙伴记得开启安全组）。</p><p>注意： 可能有些小伙伴的启用端口前面显示的是 localhost:4873，如果出现这种情况打开安全组也是不生效的，以下附上解决方案。</p><p>使用 vim 打开配置文件。在最后一行新增 listen 0.0.0.0:4873，端口可以任意指定。0.0.0.0 就是表示当前主机的 IPV4 地址；之后再重启服务就，在浏览器输入服务器 IP 加端口就可以访问了。</p><h2 id="使用-pm2-管理-verdaccio" tabindex="-1"><a class="header-anchor" href="#使用-pm2-管理-verdaccio" aria-hidden="true">#</a> 使用 pm2 管理 verdaccio</h2><h4 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载：</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> pm2 <span class="token parameter variable">-g</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pm2 start verdaccio
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="内存使用超过上限自动重启" tabindex="-1"><a class="header-anchor" href="#内存使用超过上限自动重启" aria-hidden="true">#</a> 内存使用超过上限自动重启</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pm2 start verdaccio <span class="token parameter variable">--name</span> verdaccio <span class="token parameter variable">--watch</span> --max-memory-restart 16G  <span class="token parameter variable">-i</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时在浏览器访问 http://你服务器ip:4873 就可以看到欢迎页面了</p><h2 id="配置文件解析" tabindex="-1"><a class="header-anchor" href="#配置文件解析" aria-hidden="true">#</a> 配置文件解析</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># This is the default config file. It allows all users to do anything,</span>
<span class="token comment"># so don&#39;t use it on production systems.</span>
<span class="token comment">#</span>
<span class="token comment"># Look here for more config file examples: 这个 examples 404了。</span>
<span class="token comment"># https://github.com/verdaccio/verdaccio/tree/master/conf</span>
<span class="token comment">#</span>

<span class="token comment"># 仓库的包默认存储的位置，默认是不存在的，当发布私有包之后会在 /root/.config/verdaccio 中存在</span>
<span class="token comment"># path to a directory with all packages</span>
storage: ./storage
<span class="token comment"># path to a directory with plugins to include</span>
plugins: ./plugins

web:
  <span class="token comment"># 网页 title</span>
  title: Verdaccio
  <span class="token comment"># comment out to disable gravatar support</span>
  <span class="token comment"># gravatar: false</span>
  <span class="token comment"># 包的排序 asc 降序 desc 升序</span>
  <span class="token comment"># by default packages are ordercer ascendant (asc|desc)</span>
  <span class="token comment"># sort_packages: asc</span>
  <span class="token comment"># 是否开启暗黑模式</span>
  <span class="token comment"># convert your UI to the dark side</span>
  <span class="token comment"># darkMode: true</span>
  <span class="token comment"># 网页 logo</span>
  <span class="token comment"># logo: http://somedomain/somelogo.png</span>
  <span class="token comment"># 网页 favicon</span>
  <span class="token comment"># favicon: http://somedomain/favicon.ico | /path/favicon.ico</span>
  <span class="token comment"># 网页最大连接数</span>
  <span class="token comment"># rateLimit:</span>
  <span class="token comment">#   windowMs: 1000</span>
  <span class="token comment">#   max: 10000</span>

<span class="token comment"># translate your registry, api i18n not available yet</span>
<span class="token comment"># i18n:</span>
<span class="token comment"># 国际化相关，同样404了。</span>
<span class="token comment"># list of the available translations https://github.com/verdaccio/ui/tree/master/i18n/translations</span>
  <span class="token comment"># 支持 zh_CN</span>
  <span class="token comment">#   web: en-US</span>

auth:
  <span class="token comment"># 注册用户的信息存放位置</span>
  htpasswd:
    file: ./htpasswd
    <span class="token comment"># Maximum amount of users allowed to register, defaults to &quot;+inf&quot;.</span>
    <span class="token comment"># You can set this to -1 to disable registration.</span>
    <span class="token comment"># 默认可注册的用户是无限的，如果修改为 -1 则是不允许注册；限定用户方法如下</span>
    <span class="token comment"># 1，先注册 n 个用户，然后修改配置文件为 -1，后续不允许注册</span>
    <span class="token comment"># 2，开个 n 个用户注册接口</span>
    <span class="token comment"># max_users: 1000</span>

<span class="token comment"># a list of other known repositories we can talk to</span>
<span class="token comment"># 如果私有库没有的话，去查找以下库。</span>
uplinks:
  npmjs:
    url: https://registry.npmjs.org/

packages:
  <span class="token comment"># @*/ 是包的作用域 例如 @vue/cli 那么 @vue 则是这个包的作用域，前缀一般都是某个组织或者说某个公司，证明这是个内部包</span>
  <span class="token string">&#39;@*/*&#39;</span><span class="token builtin class-name">:</span>
    <span class="token comment"># scoped packages</span>
    access: <span class="token variable">$all</span>
    publish: <span class="token variable">$authenticated</span>
    unpublish: <span class="token variable">$authenticated</span>
    <span class="token comment"># 如果私有库没有的话，去 npm 查找查找库。</span>
    proxy: npmjs
  <span class="token comment"># 普通的 npm 包</span>
  <span class="token string">&#39;**&#39;</span><span class="token builtin class-name">:</span>
    <span class="token comment"># 允许所有用户发布和访问包</span>
    <span class="token comment"># allow all users (including non-authenticated users) to read and</span>
    <span class="token comment"># publish all packages</span>
    <span class="token comment">#</span>
    <span class="token comment"># 也可以指定指定 @xxx/xxx 类似的作用域</span>
    <span class="token comment"># you can specify usernames/groupnames (depending on your auth plugin)</span>
    <span class="token comment"># $all 所有人 $anonymous 只有匿名者可以操作（基本没用） $authenticated 认证用户（通过npm adduser 添加的用户。</span>
    <span class="token comment"># and three keywords: &quot;$all&quot;, &quot;$anonymous&quot;, &quot;$authenticated&quot;</span>
    access: <span class="token variable">$all</span>

    <span class="token comment"># allow all known users to publish/publish packages</span>
    <span class="token comment"># (anyone can register by default, remember?)</span>
    publish: <span class="token variable">$authenticated</span>
    unpublish: <span class="token variable">$authenticated</span>

     <span class="token comment"># if package is not available locally, proxy requests to &#39;npmjs&#39; registry</span>
    proxy: npmjs

<span class="token comment"># You can specify HTTP/1.1 server keep alive timeout in seconds for incoming connections.</span>
<span class="token comment"># A value of 0 makes the http server behave similarly to Node.js versions prior to 8.0.0, which did not have a keep-alive timeout.</span>
<span class="token comment"># WORKAROUND: Through given configuration you can workaround following issue https://github.com/verdaccio/verdaccio/issues/301. Set to 0 in case 60 is not enough.</span>
server:
  keepAliveTimeout: <span class="token number">60</span>

middlewares:
  audit:
    enabled: <span class="token boolean">true</span>

<span class="token comment"># log settings</span>
logs: <span class="token punctuation">{</span> type: stdout, format: pretty, level: http <span class="token punctuation">}</span>
<span class="token comment">#experiments:</span>
<span class="token comment">#  # support for npm token command</span>
<span class="token comment">#  token: false</span>
<span class="token comment">#  # disable writing body size to logs, read more on ticket 1912</span>
<span class="token comment">#  bytesin_off: false</span>
<span class="token comment">#  # enable tarball URL redirect for hosting tarball with a different server, the tarball_url_redirect can be a template string</span>
<span class="token comment">#  tarball_url_redirect: &#39;https://mycdn.com/verdaccio/\${packageName}/\${filename}&#39;</span>
<span class="token comment">#  # the tarball_url_redirect can be a function, takes packageName and filename and returns the url, when working with a js configuration file</span>
<span class="token comment">#  tarball_url_redirect(packageName, filename) {</span>
<span class="token comment">#    const signedUrl = // generate a signed url</span>
<span class="token comment">#    return signedUrl;</span>
<span class="token comment">#  }</span>

<span class="token comment"># This affect the web and api (not developed yet)</span>
<span class="token comment">#i18n:</span>
<span class="token comment">#web: en-US</span>

listen: <span class="token number">0.0</span>.0.0:4873


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据上面的配置内容我们举个</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>packages:
 <span class="token comment"># 可以自定义包名的规则。代表 local- 开头的包，只有登录后才可以进行操作。</span>
  <span class="token string">&#39;local-*&#39;</span><span class="token builtin class-name">:</span>
    access: <span class="token variable">$authenticated</span>
    publish: <span class="token variable">$authenticated</span>
    unpublish: <span class="token variable">$authenticated</span>
    proxy: npmjs
  <span class="token comment"># 表示私有库的所有人都可以发布，访问，撤销包。</span>
  <span class="token string">&#39;**&#39;</span><span class="token builtin class-name">:</span>
    access: <span class="token variable">$all</span>
    publish: <span class="token variable">$all</span>
    unpublish: <span class="token variable">$all</span>
    proxy: npmjs

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29),c=[l];function d(t,o){return s(),e("div",null,c)}const m=n(i,[["render",d],["__file","搭建内网npm.html.vue"]]);export{m as default};
