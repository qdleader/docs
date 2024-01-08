import{_ as e,o as a,c as d,d as i}from"./app-FRQgbCNf.js";const n={},s=i(`<h2 id="首先介绍一下yapi是干什么的。" tabindex="-1"><a class="header-anchor" href="#首先介绍一下yapi是干什么的。" aria-hidden="true">#</a> 首先介绍一下YaPi是干什么的。</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>帮助开发者轻松创建、发布、维护 API，YApi 还为用户提供了优秀的交互体验，开发人员只需利用平台提供的接口数据写入工具以及简单的点击操作就可以实现接口的管理。免费开源，内网部署，信息再也不怕泄露了！支持 postman, har, swagger 数据导入
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>比起easy mock 来 它写的文档更加清晰，部署也更简单一些</p><h2 id="需求环境" tabindex="-1"><a class="header-anchor" href="#需求环境" aria-hidden="true">#</a> 需求环境</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>安装nodejs （7.6+）
安装mongodb （2.6+）
我电脑的mongodb 启动命令是

启动mongod: sudo mongod
如果没有mongo 就按照上面那篇，在mac上面如何安装mongo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装yapi" tabindex="-1"><a class="header-anchor" href="#安装yapi" aria-hidden="true">#</a> 安装YaPi</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  sudo npm install -g yapi-cli --registry https://registry.npm.taobao.org

  sudo yapi server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>部署YaPi 注意yapi依赖于mongodb数据库,需要先启动mongodb数据库。并且最小化即可，不要关闭。</p><pre><code>yapi server
</code></pre><p>部署成功，请切换到部署目录，输入： &quot;node vendors/server/app.js&quot; 指令启动服务器,</p><p>然后在浏览器打开 http://127.0.0.1:3000 访问</p><p>我的部署路径：/Users/用户名/my-yapi</p><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h2><p>当我们关闭电脑，第二天底启动mogob时候启动不了 如果报没有mongob 命令 ，那就重新</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>source .bash_profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后链接一下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mongod --dbpath /usr/local/var/mongodb --logpath /usr/local/var/log/mongodb/mongo.log --fork
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时，再进行mongo 就可以启动mongo啦</p>`,18),r=[s];function o(t,l){return a(),d("div",null,r)}const m=e(n,[["render",o],["__file","yAPi 在mac 上面的搭建.html.vue"]]);export{m as default};
