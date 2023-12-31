import{_ as a,o as n,c as s,d as e}from"./app-C59QzqDT.js";const r={},o=e(`<h1 id="_1-安装docker" tabindex="-1"><a class="header-anchor" href="#_1-安装docker" aria-hidden="true">#</a> 1.安装docker</h1><h2 id="a-mac安装docker" tabindex="-1"><a class="header-anchor" href="#a-mac安装docker" aria-hidden="true">#</a> a.mac安装docker</h2><h3 id="用-brew-安装" tabindex="-1"><a class="header-anchor" href="#用-brew-安装" aria-hidden="true">#</a> 用 brew 安装</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>brew install docker <span class="token operator">--</span>cask
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装 成功后会提示 🍺 docker was successfully installed!</p><p>如果此时报</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> Here&#39;s the output<span class="token operator">:</span> ln<span class="token operator">:</span> <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>bin<span class="token operator">/</span>docker<span class="token operator">:</span> Permission denied
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>sudo chown <span class="token operator">-</span><span class="token constant">R</span> <span class="token function">$</span><span class="token punctuation">(</span>whoami<span class="token punctuation">)</span> <span class="token operator">/</span>usr<span class="token operator">/</span>local
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后再执行一下安装命令即可</p><h2 id="b-阿里云安装docker" tabindex="-1"><a class="header-anchor" href="#b-阿里云安装docker" aria-hidden="true">#</a> b.阿里云安装docker</h2><p>基于阿里云服务器Linux的CentOS7</p><p>且确保已经安装了gcc相关环境</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>yum <span class="token operator">-</span>y install gcc
yum <span class="token operator">-</span>y install gcc<span class="token operator">-</span>c<span class="token operator">++</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一、查看官方文档官网地址：[!https://www.docker.com/]</p><h3 id="_1、先卸载旧版本" tabindex="-1"><a class="header-anchor" href="#_1、先卸载旧版本" aria-hidden="true">#</a> 1、先卸载旧版本</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>yum remove docker \\
                  docker<span class="token operator">-</span>client \\
                  docker<span class="token operator">-</span>client<span class="token operator">-</span>latest \\
                  docker<span class="token operator">-</span>common \\
                  docker<span class="token operator">-</span>latest \\
                  docker<span class="token operator">-</span>latest<span class="token operator">-</span>logrotate \\
                  docker<span class="token operator">-</span>logrotate \\
                  docker<span class="token operator">-</span>engine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、安装需要的软件包" tabindex="-1"><a class="header-anchor" href="#_2、安装需要的软件包" aria-hidden="true">#</a> 2、安装需要的软件包</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>yum install <span class="token operator">-</span>y yum<span class="token operator">-</span>utils
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3、配置阿里云镜像仓库" tabindex="-1"><a class="header-anchor" href="#_3、配置阿里云镜像仓库" aria-hidden="true">#</a> 3、配置阿里云镜像仓库</h3><h1 id="使用国内阿里云的" tabindex="-1"><a class="header-anchor" href="#使用国内阿里云的" aria-hidden="true">#</a> 使用国内阿里云的</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>yum<span class="token operator">-</span>config<span class="token operator">-</span>manager <span class="token operator">--</span>add<span class="token operator">-</span>repo http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>mirrors<span class="token punctuation">.</span>aliyun<span class="token punctuation">.</span>com<span class="token operator">/</span>docker<span class="token operator">-</span>ce<span class="token operator">/</span>linux<span class="token operator">/</span>centos<span class="token operator">/</span>docker<span class="token operator">-</span>ce<span class="token punctuation">.</span>repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4、更新yum软件包索引" tabindex="-1"><a class="header-anchor" href="#_4、更新yum软件包索引" aria-hidden="true">#</a> 4、更新yum软件包索引</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>yum makecache fast
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5、安装docker-ce" tabindex="-1"><a class="header-anchor" href="#_5、安装docker-ce" aria-hidden="true">#</a> 5、安装Docker CE</h3><h1 id="ce是社区版-ee是企业版" tabindex="-1"><a class="header-anchor" href="#ce是社区版-ee是企业版" aria-hidden="true">#</a> ce是社区版，ee是企业版</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>yum install docker<span class="token operator">-</span>ce docker<span class="token operator">-</span>ce<span class="token operator">-</span>cli containerd<span class="token punctuation">.</span>io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_6、启动docker" tabindex="-1"><a class="header-anchor" href="#_6、启动docker" aria-hidden="true">#</a> 6、启动Docker</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>systemctl start docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_7、测试命令" tabindex="-1"><a class="header-anchor" href="#_7、测试命令" aria-hidden="true">#</a> 7、测试命令</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>docker version #查看版本信息，是否安装成功
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_8、运行hello-world" tabindex="-1"><a class="header-anchor" href="#_8、运行hello-world" aria-hidden="true">#</a> 8、运行hello world</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>docker run hello<span class="token operator">-</span>world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_9、查看下载的镜像" tabindex="-1"><a class="header-anchor" href="#_9、查看下载的镜像" aria-hidden="true">#</a> 9、查看下载的镜像</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>docker images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="其他命令" tabindex="-1"><a class="header-anchor" href="#其他命令" aria-hidden="true">#</a> 其他命令</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
systemctl start docker     #运行Docker守护进程
systemctl stop docker      #停止Docker守护进程
systemctl restart docker   #重启Docker守护进程
systemctl enable docker    #设置Docker开机自启动
systemctl status docker    #查看Docker的运行状态

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="c-华为云安装docker" tabindex="-1"><a class="header-anchor" href="#c-华为云安装docker" aria-hidden="true">#</a> c.华为云安装docker</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>$ cd <span class="token operator">/</span>etc<span class="token operator">/</span>yum<span class="token punctuation">.</span>repos<span class="token punctuation">.</span>d
$ wget https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>repo<span class="token punctuation">.</span>huaweicloud<span class="token punctuation">.</span>com<span class="token operator">/</span>repository<span class="token operator">/</span>conf<span class="token operator">/</span>openeuler_x86_64<span class="token punctuation">.</span>repo
$ yum clean all
$ yum makecache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装docker" tabindex="-1"><a class="header-anchor" href="#安装docker" aria-hidden="true">#</a> 安装docker</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>$ yum <span class="token operator">-</span>y install docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="启动docker" tabindex="-1"><a class="header-anchor" href="#启动docker" aria-hidden="true">#</a> 启动docker</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>$ sudo service docker start
$ docker <span class="token operator">--</span>version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Docker version 18.09.0, build c0d3c43</p><h2 id="开机自启动" tabindex="-1"><a class="header-anchor" href="#开机自启动" aria-hidden="true">#</a> 开机自启动</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>sudo systemctl enable docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_2-docker-安装nginx" tabindex="-1"><a class="header-anchor" href="#_2-docker-安装nginx" aria-hidden="true">#</a> 2.docker 安装nginx</h1><h2 id="docker-安装-nginx" tabindex="-1"><a class="header-anchor" href="#docker-安装-nginx" aria-hidden="true">#</a> Docker 安装 Nginx</h2><p>Nginx 是一个高性能的 HTTP 和反向代理 web 服务器，同时也提供了 IMAP/POP3/SMTP 服务 。</p><p>1、查看可用的 Nginx 版本 访问 Nginx 镜像库地址： https://hub.docker.com/_/nginx?tab=tags。 可以通过 Sort by 查看其他版本的 Nginx，默认是最新版本 nginx:latest。 你也可以在下拉列表中找到其他你想要的版本：</p><p>此外，我们还可以用 docker search nginx 命令来查看可用版本：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker search nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2、取最新版的-nginx-镜像" tabindex="-1"><a class="header-anchor" href="#_2、取最新版的-nginx-镜像" aria-hidden="true">#</a> 2、取最新版的 Nginx 镜像</h3><p>这里我们拉取官方的最新版本的镜像：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>$ docker pull nginx<span class="token operator">:</span>latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3、查看本地镜像 使用以下命令来查看是否已安装了 nginx：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>docker images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3、创建Nginx配置文件 启动前需要先创建Nginx外部挂载的配置文件（ /Users/docker/nginx/conf/nginx.conf） 之所以要先创建 , 是因为Nginx本身容器只存在/etc/nginx 目录 , 本身就不创建 nginx.conf 文件 当服务器和容器都不存在 nginx.conf 文件时, 执行启动命令的时候 docker会将nginx.conf 作为目录创建 , 这并不是我们想要的结果 。</p><h1 id="创建挂载目录" tabindex="-1"><a class="header-anchor" href="#创建挂载目录" aria-hidden="true">#</a> 创建挂载目录</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>sudo mkdir <span class="token operator">-</span>p <span class="token operator">/</span>Users<span class="token operator">/</span>docker1<span class="token operator">/</span>nginx<span class="token operator">/</span>conf
mkdir <span class="token operator">-</span>p <span class="token operator">/</span>Users<span class="token operator">/</span>docker1<span class="token operator">/</span>nginx<span class="token operator">/</span>log
mkdir <span class="token operator">-</span>p <span class="token operator">/</span>Users<span class="token operator">/</span>docker1<span class="token operator">/</span>nginx<span class="token operator">/</span>html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>chmod 777 /Users/docker/</p><h2 id="容器中的nginx-conf文件和conf-d文件夹复制到宿主机" tabindex="-1"><a class="header-anchor" href="#容器中的nginx-conf文件和conf-d文件夹复制到宿主机" aria-hidden="true">#</a> 容器中的nginx.conf文件和conf.d文件夹复制到宿主机</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code># 生成容器
docker run <span class="token operator">--</span>name nginx <span class="token operator">-</span>p <span class="token number">80</span><span class="token operator">:</span><span class="token number">80</span> <span class="token operator">-</span>d nginx
# 将容器nginx<span class="token punctuation">.</span>conf文件复制到宿主机
docker cp nginx<span class="token operator">:</span><span class="token operator">/</span>etc<span class="token operator">/</span>nginx<span class="token operator">/</span>nginx<span class="token punctuation">.</span>conf <span class="token operator">/</span>Users<span class="token operator">/</span>docker1<span class="token operator">/</span>nginx<span class="token operator">/</span>conf<span class="token operator">/</span>nginx<span class="token punctuation">.</span>conf
# 将容器conf<span class="token punctuation">.</span>d文件夹下内容复制到宿主机
docker cp nginx<span class="token operator">:</span><span class="token operator">/</span>etc<span class="token operator">/</span>nginx<span class="token operator">/</span>conf<span class="token punctuation">.</span>d <span class="token operator">/</span>Users<span class="token operator">/</span>docker1<span class="token operator">/</span>nginx<span class="token operator">/</span>conf<span class="token operator">/</span>conf<span class="token punctuation">.</span>d
# 将容器中的html文件夹复制到宿主机
docker cp nginx<span class="token operator">:</span><span class="token operator">/</span>usr<span class="token operator">/</span>share<span class="token operator">/</span>nginx<span class="token operator">/</span>html <span class="token operator">/</span>Users<span class="token operator">/</span>docker1<span class="token operator">/</span>nginx<span class="token operator">/</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除了刚才的容器 docker rm -f nginx</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>docker run \\
<span class="token operator">-</span>p <span class="token number">80</span><span class="token operator">:</span><span class="token number">80</span> \\
<span class="token operator">--</span>name nginx1 \\
<span class="token operator">-</span>v <span class="token operator">/</span>Users<span class="token operator">/</span>docker1<span class="token operator">/</span>nginx<span class="token operator">/</span>conf<span class="token operator">/</span>nginx<span class="token punctuation">.</span>conf<span class="token operator">:</span><span class="token operator">/</span>etc<span class="token operator">/</span>nginx<span class="token operator">/</span>nginx<span class="token punctuation">.</span>conf \\
<span class="token operator">-</span>v <span class="token operator">/</span>Users<span class="token operator">/</span>docker1<span class="token operator">/</span>nginx<span class="token operator">/</span>conf<span class="token operator">/</span>conf<span class="token punctuation">.</span>d<span class="token operator">:</span><span class="token operator">/</span>etc<span class="token operator">/</span>nginx<span class="token operator">/</span>conf<span class="token punctuation">.</span>d \\
<span class="token operator">-</span>v <span class="token operator">/</span>Users<span class="token operator">/</span>docker1<span class="token operator">/</span>nginx<span class="token operator">/</span>log<span class="token operator">:</span><span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>log<span class="token operator">/</span>nginx \\
<span class="token operator">-</span>v <span class="token operator">/</span>Users<span class="token operator">/</span>docker1<span class="token operator">/</span>nginx<span class="token operator">/</span>html<span class="token operator">:</span><span class="token operator">/</span>usr<span class="token operator">/</span>share<span class="token operator">/</span>nginx<span class="token operator">/</span>html \\
<span class="token operator">-</span>d nginx<span class="token operator">:</span>latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令 描述 –name nginx 启动容器的名字 -d 后台运行 -p 80:80 将容器的 80(后面那个) 端口映射到主机的 80(前面那个) 端口 -v /home/nginx/conf/nginx.conf:/etc/nginx/nginx.conf 挂载nginx.conf配置文件 -v /home/nginx/conf/conf.d:/etc/nginx/conf.d 挂载nginx配置文件 -v /home/nginx/log:/var/log/nginx 挂载nginx日志文件 -v /home/nginx/html:/usr/share/nginx/html 挂载nginx内容 nginx:latest 本地运行的版本 \\ shell 命令换行</p><p>测试</p><p>curl 127.0.0.1:9002</p><p>5、安装成功 最后我们可以通过浏览器可以直接访问 9002 端口的 nginx 服务：</p><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><p>我们想要改变配置文件nginx.conf ，也可以进入容器去修改：</p><h3 id="进入容器" tabindex="-1"><a class="header-anchor" href="#进入容器" aria-hidden="true">#</a> 进入容器</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>docker exec <span class="token operator">-</span>it nginx bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>nginx.conf配置文件在 /etc/nginx/ 下面，但是你使用vim nginx.conf 或者vi nginx.conf</p><p>会发现vi或者vim命令没有用，解决办法：apt-get update 完成之后 apt-get install vim</p><p>此时你就可以自己定制nginx.con文件了，改好配置文件之后重启容器，步骤，先把容器停了</p><p>docker stop nginx 然后重启 docker start nginx</p><p>碰到nginx 403 时候，可能是映射文件的权限不够</p><p>chmod -R 755 /Users/docker1/nginx/html</p><p>sudo scp /Users/icourt/github/next-react-ssr/out/1.zip root@121.36.47.43:/Users/docker1/nginx/html</p><p>unzip 1.zip</p>`,81),c=[o];function i(p,t){return n(),s("div",null,c)}const l=a(r,[["render",i],["__file","前端项目部署.html.vue"]]);export{l as default};
