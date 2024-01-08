import{_ as n,o as e,c as a,d as i}from"./app-qTEUp92E.js";const s={},r=i(`<h2 id="查找安装路径" tabindex="-1"><a class="header-anchor" href="#查找安装路径" aria-hidden="true">#</a> 查找安装路径</h2><h2 id="查看nginx-目录及状态" tabindex="-1"><a class="header-anchor" href="#查看nginx-目录及状态" aria-hidden="true">#</a> 查看nginx 目录及状态</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>nginx <span class="token operator">-</span>t
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="nginx-重启" tabindex="-1"><a class="header-anchor" href="#nginx-重启" aria-hidden="true">#</a> nginx 重启</h2><p>nginx -s reload</p><h4 id="停止nginx" tabindex="-1"><a class="header-anchor" href="#停止nginx" aria-hidden="true">#</a> 停止nginx</h4><p>nginx -s stop</p><h4 id="启动nginx" tabindex="-1"><a class="header-anchor" href="#启动nginx" aria-hidden="true">#</a> 启动nginx</h4><p>nginx</p><h4 id="查看当前nginx进程" tabindex="-1"><a class="header-anchor" href="#查看当前nginx进程" aria-hidden="true">#</a> 查看当前nginx进程</h4><p>ps -ef | grep nginx</p><p>找到你的nginx的 nginx.conf文件 vim 去查看和修改这文件</p><p>vim /www/server/nginx/conf/nginx.conf</p><p>输入vim进入到文件之后，按i键进入INSERT模式，</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>server <span class="token punctuation">{</span>
        listen <span class="token number">80</span><span class="token punctuation">;</span>  # 端口号
        server_name localhost<span class="token punctuation">;</span> # 有域名就填域名，没有就填ip地址或者本机

        include <span class="token operator">/</span>etc<span class="token operator">/</span>nginx<span class="token operator">/</span><span class="token keyword">default</span><span class="token punctuation">.</span>d<span class="token comment">/*.conf;

        location / {
        root /www/项目目录/build;   # 打包后的文件目录
        index index.html index.htm;
        try_files $uri $uri/ @router;  # 开启了browserRouter模式就写这个
        }

        error_page 404 /404.html;
        location = /404.html {
        }

        error_page 500 502 503 504 /50x.html;
        location = /50x.html {
        }
    }

</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>按esc键退出输入模式，然后输入:wq保存退出之后再在命令行输入下面指令重启nginx服务</p><p>重启nginx</p><p>nginx -s reload</p><p>或者（可以看到我的安装路径是在 /www/server/nginx，默认在这个目录下，有一个sbin目录，它下面有个nginx文件，这个nginx是个可执行文件， 执行启动命令：</p><p>/www/server/nginx/sbin/nginx）</p><h1 id="端口、防火墙" tabindex="-1"><a class="header-anchor" href="#端口、防火墙" aria-hidden="true">#</a> 端口、防火墙</h1><p>CentOS7默认安装了firewalld防火墙，如果系统开启了防火墙，那我们就要手动去开放端口号</p><p>查看防火墙是否开启</p><p>systemctl status firewalld</p><p>开启防火墙</p><p>systemctl start firewalld 关闭防火墙</p><p>systemctl stop firewalld 防火墙开机自启</p><p>systemctl enable firewalld 停止并且禁用防火墙</p><p>sytemctl disable firewalld</p><p>查看目前已开放端口</p><p>netstat -anp 查看指定端口是否已经开启-前提是要先开启防火墙</p><p>firewall-cmd --query-port=9090/tcp 对外开放端口号</p><p>firewall-cmd --add-port=123/tcp --permanent # permanent表示永久开放，没有此参数重启后失效</p><h2 id="重新加载添加的端口" tabindex="-1"><a class="header-anchor" href="#重新加载添加的端口" aria-hidden="true">#</a> 重新加载添加的端口</h2><p>firewall-cmd --reload 关闭开放端口号</p><p>firewall-cmd --permanent --remove-port=9090/tcp</p>`,36),d=[r];function l(t,p){return e(),a("div",null,d)}const o=n(s,[["render",l],["__file","Nginx常用命令.html.vue"]]);export{o as default};
