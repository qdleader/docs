import{_ as n,o as s,c as a,d as e}from"./app-C59QzqDT.js";const i={},l=e(`<h2 id="什么是nginx" tabindex="-1"><a class="header-anchor" href="#什么是nginx" aria-hidden="true">#</a> 什么是Nginx</h2><p>Nginx是一个开源的高性能HTTP和反向代理服务器。它可以用于处理静态资源、负载均衡、反向代理和缓存等任务。Nginx被广泛用于构建高可用性、高性能的Web应用程序和网站。它具有低内存消耗、高并发能力和良好的稳定性，因此在互联网领域非常受欢迎。</p><h3 id="为什么使用nginx" tabindex="-1"><a class="header-anchor" href="#为什么使用nginx" aria-hidden="true">#</a> 为什么使用Nginx</h3><p>高性能：Nginx采用事件驱动的异步架构，能够处理大量并发连接而不会消耗过多的系统资源。它的处理能力比传统的Web服务器更高，在高并发负载下表现出色。 高可靠性：Nginx具有强大的容错能力和稳定性，能够在面对高流量和DDoS攻击等异常情况下保持可靠运行。它能通过健康检查和自动故障转移来保证服务的可用性。 负载均衡：Nginx可以作为反向代理服务器，实现负载均衡，将请求均匀分发给多个后端服务器。这样可以提高系统的整体性能和可用性。 静态文件服务：Nginx对静态资源（如HTML、CSS、JavaScript、图片等）的处理非常高效。它可以直接缓存静态文件，减轻后端服务器的负载。 扩展性：Nginx支持丰富的模块化扩展，可以通过添加第三方模块来提供额外的功能，如gzip压缩、SSL/TLS加密、缓存控制等。</p><h2 id="如何处理请求" tabindex="-1"><a class="header-anchor" href="#如何处理请求" aria-hidden="true">#</a> 如何处理请求</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Nginx处理请求的基本流程如下：

接收请求：Nginx作为服务器软件监听指定的端口，接收客户端发来的请求。

解析请求：Nginx解析请求的内容，包括请求方法（<span class="token constant">GET</span>、<span class="token constant">POST</span>等）、<span class="token constant">URL</span>、头部信息等。


配置匹配：Nginx根据配置文件中的规则和匹配条件，决定如何处理该请求。配置文件定义了虚拟主机、反向代理、负载均衡、缓存等特定的处理方式。


处理请求：Nginx根据配置的处理方式，可能会进行以下操作：

静态文件服务：如果请求的是静态资源文件，如<span class="token constant">HTML</span>、<span class="token constant">CSS</span>、JavaScript、图片等，Nginx可以直接返回文件内容，不必经过后端应用程序。


反向代理：如果配置了反向代理，Nginx将请求转发给后端的应用服务器，然后将其响应返回给客户端。这样可以提供负载均衡、高可用性和缓存等功能。
缓存：如果启用了缓存，Nginx可以缓存一些静态或动态内容的响应，在后续相同的请求中直接返回缓存的响应，减少后端负载并提高响应速度。
<span class="token constant">URL</span>重写：Nginx可以根据配置的规则对<span class="token constant">URL</span>进行重写，将请求从一个<span class="token constant">URL</span>重定向到另一个<span class="token constant">URL</span>或进行转换。
<span class="token constant">SSL</span><span class="token operator">/</span><span class="token constant">TLS</span>加密：如果启用了<span class="token constant">SSL</span><span class="token operator">/</span><span class="token constant">TLS</span>，Nginx可以负责加密和解密<span class="token constant">HTTPS</span>请求和响应。
访问控制：Nginx可以根据配置的规则对请求进行访问控制，例如限制<span class="token constant">IP</span>访问、进行身份认证等。



响应结果：Nginx根据处理结果生成响应报文，包括状态码、头部信息和响应内容。然后将响应发送给客户端。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="什么是正向代理和反向代理" tabindex="-1"><a class="header-anchor" href="#什么是正向代理和反向代理" aria-hidden="true">#</a> 什么是正向代理和反向代理</h2><h4 id="正向代理" tabindex="-1"><a class="header-anchor" href="#正向代理" aria-hidden="true">#</a> 正向代理</h4><p>是指客户端通过代理服务器发送请求到目标服务器。客户端向代理服务器发送请求，代理服务器再将请求转发给目标服务器，并将服务器的响应返回给客户端。正向代理可以隐藏客户端的真实IP地址，提供匿名访问和访问控制等功能。它常用于跨越防火墙访问互联网、访问被封禁的网站等情况。</p><h4 id="反向代理" tabindex="-1"><a class="header-anchor" href="#反向代理" aria-hidden="true">#</a> 反向代理</h4><p>是指客户端发送请求到代理服务器，代理服务器再将请求转发给后端的多个服务器中的一个或多个，并将后端服务器的响应返回给客户端。客户端并不直接访问后端服务器，而是通过反向代理服务器来获取服务。反向代理可以实现负载均衡、高可用性和安全性等功能。它常用于网站的高并发访问、保护后端服务器、提供缓存和SSL终止等功能。</p><h4 id="nginx-启动和关闭" tabindex="-1"><a class="header-anchor" href="#nginx-启动和关闭" aria-hidden="true">#</a> nginx 启动和关闭</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>bash复制代码进入目录：<span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>nginx<span class="token operator">/</span>sbin
启动命令：<span class="token punctuation">.</span><span class="token operator">/</span>nginx
重启命令：nginx <span class="token operator">-</span>s reload
快速关闭命令：<span class="token punctuation">.</span><span class="token operator">/</span>nginx <span class="token operator">-</span>s stop
有序地停止，需要进程完成当前工作后再停止：<span class="token punctuation">.</span><span class="token operator">/</span>nginx <span class="token operator">-</span>s quit
直接杀死nginx进程：killall nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>目录结构</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">[</span>root@localhost <span class="token operator">~</span><span class="token punctuation">]</span># tree <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>nginx
<span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>nginx

├── client_body_temp                 # <span class="token constant">POST</span> 大文件暂存目录
├── conf                             # Nginx所有配置文件的目录
│   ├── fastcgi<span class="token punctuation">.</span>conf                 # fastcgi相关参数的配置文件
│   ├── fastcgi<span class="token punctuation">.</span>conf<span class="token punctuation">.</span>default         # fastcgi<span class="token punctuation">.</span>conf的原始备份文件
│   ├── fastcgi_params               # fastcgi的参数文件
│   ├── fastcgi_params<span class="token punctuation">.</span>default      
│   ├── koi<span class="token operator">-</span>utf
│   ├── koi<span class="token operator">-</span>win
│   ├── mime<span class="token punctuation">.</span>types                   # 媒体类型
│   ├── mime<span class="token punctuation">.</span>types<span class="token punctuation">.</span>default
│   ├── nginx<span class="token punctuation">.</span>conf                   #这是Nginx默认的主配置文件，日常使用和修改的文件
│   ├── nginx<span class="token punctuation">.</span>conf<span class="token punctuation">.</span>default
│   ├── scgi_params                 # scgi相关参数文件
│   ├── scgi_params<span class="token punctuation">.</span>default  
│   ├── uwsgi_params                 # uwsgi相关参数文件
│   ├── uwsgi_params<span class="token punctuation">.</span>default
│   └── win<span class="token operator">-</span>utf
├── fastcgi_temp                     # fastcgi临时数据目录
├── html                             # Nginx默认站点目录
│   ├── 50x<span class="token punctuation">.</span>html                     # 错误页面优雅替代显示文件，例如出现<span class="token number">502</span>错误时会调用此页面
│   └── index<span class="token punctuation">.</span>html                   # 默认的首页文件
├── logs                             # Nginx日志目录
│   ├── access<span class="token punctuation">.</span>log                   # 访问日志文件
│   ├── error<span class="token punctuation">.</span>log                   # 错误日志文件
│   └── nginx<span class="token punctuation">.</span>pid                   # pid文件，Nginx进程启动后，会把所有进程的<span class="token constant">ID</span>号写到此文件
├── proxy_temp                       # 临时目录
├── sbin                             # Nginx 可执行文件目录
│   └── nginx                       # Nginx 二进制可执行程序
├── scgi_temp                       # 临时目录
└── uwsgi_temp                       # 临时目录

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置文件nginx.conf</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code># 启动进程<span class="token punctuation">,</span>通常设置成和cpu的数量相等
worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>

# 全局错误日志定义类型，<span class="token punctuation">[</span>debug <span class="token operator">|</span> info <span class="token operator">|</span> notice <span class="token operator">|</span> warn <span class="token operator">|</span> error <span class="token operator">|</span> crit<span class="token punctuation">]</span>
error_log  logs<span class="token operator">/</span>error<span class="token punctuation">.</span>log<span class="token punctuation">;</span>
error_log  logs<span class="token operator">/</span>error<span class="token punctuation">.</span>log  notice<span class="token punctuation">;</span>
error_log  logs<span class="token operator">/</span>error<span class="token punctuation">.</span>log  info<span class="token punctuation">;</span>

# 进程pid文件
pid        <span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>run<span class="token operator">/</span>nginx<span class="token punctuation">.</span>pid<span class="token punctuation">;</span>

# 工作模式及连接数上限
events <span class="token punctuation">{</span>
    # 仅用于linux2<span class="token punctuation">.</span><span class="token number">6</span>以上内核<span class="token punctuation">,</span>可以大大提高nginx的性能
    use   epoll<span class="token punctuation">;</span>

    # 单个后台worker process进程的最大并发链接数
    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>

    # 客户端请求头部的缓冲区大小
    client_header_buffer_size 4k<span class="token punctuation">;</span>

    # keepalive 超时时间
    keepalive_timeout <span class="token number">60</span><span class="token punctuation">;</span>

    # 告诉nginx收到一个新连接通知后接受尽可能多的连接
    # multi_accept on<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

# 设定http服务器，利用它的反向代理功能提供负载均衡支持
http <span class="token punctuation">{</span>
    # 文件扩展名与文件类型映射表义
    include       <span class="token operator">/</span>etc<span class="token operator">/</span>nginx<span class="token operator">/</span>mime<span class="token punctuation">.</span>types<span class="token punctuation">;</span>

    # 默认文件类型
    default_type  application<span class="token operator">/</span>octet<span class="token operator">-</span>stream<span class="token punctuation">;</span>

    # 默认编码
    charset utf<span class="token operator">-</span><span class="token number">8</span><span class="token punctuation">;</span>

    # 服务器名字的hash表大小
    server_names_hash_bucket_size <span class="token number">128</span><span class="token punctuation">;</span>

    # 客户端请求头部的缓冲区大小
    client_header_buffer_size 32k<span class="token punctuation">;</span>

    # 客户请求头缓冲大小
    large_client_header_buffers <span class="token number">4</span> 64k<span class="token punctuation">;</span>

    # 设定通过nginx上传文件的大小
    client_max_body_size 8m<span class="token punctuation">;</span>

    # 开启目录列表访问，合适下载服务器，默认关闭。
    autoindex on<span class="token punctuation">;</span>

    # sendfile 指令指定 nginx 是否调用 sendfile 函数（zero copy 方式）来输出文件，对于普通应用，
    # 必须设为 on<span class="token punctuation">,</span>如果用来进行下载等应用磁盘<span class="token constant">IO</span>重负载应用，可设置为 off，以平衡磁盘与网络<span class="token constant">I</span><span class="token operator">/</span><span class="token constant">O</span>处理速度
    sendfile        on<span class="token punctuation">;</span>

    # 此选项允许或禁止使用socke的<span class="token constant">TCP_CORK</span>的选项，此选项仅在使用sendfile的时候使用
    #tcp_nopush     on<span class="token punctuation">;</span>

    # 连接超时时间（单秒为秒）
    keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>


    # gzip模块设置
    gzip on<span class="token punctuation">;</span>               #开启gzip压缩输出
    gzip_min_length 1k<span class="token punctuation">;</span>    #最小压缩文件大小
    gzip_buffers <span class="token number">4</span> 16k<span class="token punctuation">;</span>    #压缩缓冲区
    gzip_http_version <span class="token number">1.0</span><span class="token punctuation">;</span> #压缩版本（默认<span class="token number">1.1</span>，前端如果是squid2<span class="token punctuation">.</span><span class="token number">5</span>请使用<span class="token number">1.0</span>）
    gzip_comp_level <span class="token number">2</span><span class="token punctuation">;</span>     #压缩等级
    gzip_types text<span class="token operator">/</span>plain application<span class="token operator">/</span>x<span class="token operator">-</span>javascript text<span class="token operator">/</span>css application<span class="token operator">/</span>xml<span class="token punctuation">;</span>
    gzip_vary on<span class="token punctuation">;</span>

    # 开启限制<span class="token constant">IP</span>连接数的时候需要使用
    #limit_zone crawler $binary_remote_addr 10m<span class="token punctuation">;</span>

    # 指定虚拟主机的配置文件，方便管理
    include <span class="token operator">/</span>etc<span class="token operator">/</span>nginx<span class="token operator">/</span>conf<span class="token punctuation">.</span>d<span class="token comment">/*.conf;


    # 负载均衡配置
    upstream aaa {
        # 请见上文中的五种配置
    }


   # 虚拟主机的配置
    server {

        # 监听端口
        listen 80;

        # 域名可以有多个，用空格隔开
        server_name www.aaa.com aaa.com;

        # 默认入口文件名称
        index index.html index.htm index.php;
        root /data/www/sk;

        # 图片缓存时间设置
        location ~ .*.(gif|jpg|jpeg|png|bmp|swf)\${
            expires 10d;
        }

        #JS和CSS缓存时间设置
        location ~ .*.(js|css)?\${
            expires 1h;
        }

        # 日志格式设定
        #$remote_addr与 $http_x_forwarded_for用以记录客户端的ip地址；
        #$remote_user：用来记录客户端用户名称；
        #$time_local：用来记录访问时间与时区；
        #$request：用来记录请求的url与http协议；
        #$status：用来记录请求状态；成功是200，
        #$body_bytes_sent ：记录发送给客户端文件主体内容大小；
        #$http_referer：用来记录从那个页面链接访问过来的；
        log_format access &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
        &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
        &#39;&quot;$http_user_agent&quot; $http_x_forwarded_for&#39;;

        # 定义本虚拟主机的访问日志
        access_log  /usr/local/nginx/logs/host.access.log  main;
        access_log  /usr/local/nginx/logs/host.access.404.log  log404;

        # 对具体路由进行反向代理
        location /connect-controller {

            proxy_pass http://127.0.0.1:88;
            proxy_redirect off;
            proxy_set_header X-Real-IP $remote_addr;

            # 后端的Web服务器可以通过X-Forwarded-For获取用户真实IP
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header Host $host;

            # 允许客户端请求的最大单文件字节数
            client_max_body_size 10m;

            # 缓冲区代理缓冲用户端请求的最大字节数，
            client_body_buffer_size 128k;

            # 表示使nginx阻止HTTP应答代码为400或者更高的应答。
            proxy_intercept_errors on;

            # nginx跟后端服务器连接超时时间(代理连接超时)
            proxy_connect_timeout 90;

            # 后端服务器数据回传时间_就是在规定时间之内后端服务器必须传完所有的数据
            proxy_send_timeout 90;

            # 连接成功后，后端服务器响应的超时时间
            proxy_read_timeout 90;

            # 设置代理服务器（nginx）保存用户头信息的缓冲区大小
            proxy_buffer_size 4k;

            # 设置用于读取应答的缓冲区数目和大小，默认情况也为分页大小，根据操作系统的不同可能是4k或者8k
            proxy_buffers 4 32k;

            # 高负荷下缓冲大小（proxy_buffers*2）
            proxy_busy_buffers_size 64k;

            # 设置在写入proxy_temp_path时数据的大小，预防一个工作进程在传递文件时阻塞太长
            # 设定缓存文件夹大小，大于这个值，将从upstream服务器传
            proxy_temp_file_write_size 64k;
        }

        # 动静分离反向代理配置（多路由指向不同的服务端或界面）
        location ~ .(jsp|jspx|do)?$ {
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_pass http://127.0.0.1:8080;
        }
    }
}
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>location location指令的作用就是根据用户请求的URI来执行不同的应用 语法</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>location <span class="token punctuation">[</span> <span class="token operator">=</span> <span class="token operator">|</span> <span class="token operator">~</span> <span class="token operator">|</span> <span class="token operator">~</span><span class="token operator">*</span> <span class="token operator">|</span> <span class="token operator">^</span><span class="token operator">~</span> <span class="token punctuation">]</span> uri <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>[ = | ~ | ~* | ^~ ]：匹配的标识</p><p>~与~*的区别是：~区分大小写，~*不区分大小写 ^~：进行常规字符串匹配后，不做正则表达式的检查</p><p>uri：匹配的网站地址</p><p>{...}：匹配uri后要执行的配置段</p><p>举例</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>location <span class="token operator">=</span> <span class="token operator">/</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span> configuration <span class="token constant">A</span> <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
location <span class="token operator">/</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span> configuration <span class="token constant">B</span> <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
location <span class="token operator">/</span>sk<span class="token operator">/</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span> configuration <span class="token constant">C</span> <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
location <span class="token operator">^</span><span class="token operator">~</span> <span class="token operator">/</span>img<span class="token operator">/</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span> configuration <span class="token constant">D</span> <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
location <span class="token operator">~</span><span class="token operator">*</span> <span class="token punctuation">.</span><span class="token punctuation">(</span>gif<span class="token operator">|</span>jpg<span class="token operator">|</span>jpeg<span class="token punctuation">)</span>$ <span class="token punctuation">{</span>
    <span class="token punctuation">[</span> configuration <span class="token constant">E</span> <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>= / 请求 / 精准匹配A，不再往下查找 / 请求/index.html匹配B。首先查找匹配的前缀字符，找到最长匹配是配置B，接着又按照顺序查找匹配的正则。结果没有找到，因此使用先前标记的最长匹配，即配置B。</p><p>/sk/ 请求/sk/abc 匹配C。首先找到最长匹配C，由于后面没有匹配的正则，所以使用最长匹配C。</p><p>~* .(gif|jpg|jpeg)$ 请求/sk/logo.gif 匹配E。首先进行前缀字符的查找，找到最长匹配项C，继续进行正则查找，找到匹配项E。因此使用E。</p><p>^~ 请求/img/logo.gif匹配D。首先进行前缀字符查找，找到最长匹配D。但是它使用了^~修饰符，不再进行下面的正则的匹配查找，因此使用D。</p><h2 id="单页面应用刷新404问题" tabindex="-1"><a class="header-anchor" href="#单页面应用刷新404问题" aria-hidden="true">#</a> 单页面应用刷新404问题</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    location <span class="token operator">/</span> <span class="token punctuation">{</span>
        try_files $uri $uri<span class="token operator">/</span> <span class="token operator">/</span>index<span class="token punctuation">.</span>html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置跨域请求" tabindex="-1"><a class="header-anchor" href="#配置跨域请求" aria-hidden="true">#</a> 配置跨域请求</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>server <span class="token punctuation">{</span>
    listen   <span class="token number">80</span><span class="token punctuation">;</span>
    location <span class="token operator">/</span> <span class="token punctuation">{</span>
        # 服务器默认是不被允许跨域的。
        # 配置<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">*</span><span class="token template-punctuation string">\`</span></span>后，表示服务器可以接受所有的请求源（Origin）<span class="token punctuation">,</span>即接受所有跨域的请求
        add_header Access<span class="token operator">-</span>Control<span class="token operator">-</span>Allow<span class="token operator">-</span>Origin <span class="token operator">*</span><span class="token punctuation">;</span>
        
        add_header Access<span class="token operator">-</span>Control<span class="token operator">-</span>Allow<span class="token operator">-</span>Methods <span class="token string">&#39;GET, POST, OPTIONS&#39;</span><span class="token punctuation">;</span>
        add_header Access<span class="token operator">-</span>Control<span class="token operator">-</span>Allow<span class="token operator">-</span>Headers <span class="token string">&#39;DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization&#39;</span><span class="token punctuation">;</span>
        
        # 发送<span class="token string">&quot;预检请求&quot;</span>时，需要用到方法 <span class="token constant">OPTIONS</span> <span class="token punctuation">,</span>所以服务器需要允许该方法
        # 给<span class="token constant">OPTIONS</span> 添加 <span class="token number">204</span>的返回，是为了处理在发送<span class="token constant">POST</span>请求时Nginx依然拒绝访问的错误
        <span class="token keyword">if</span> <span class="token punctuation">(</span>$request_method <span class="token operator">=</span> <span class="token string">&#39;OPTIONS&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">204</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="开启gzip压缩" tabindex="-1"><a class="header-anchor" href="#开启gzip压缩" aria-hidden="true">#</a> 开启gzip压缩</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    # gzip模块设置
    gzip on<span class="token punctuation">;</span>               #开启gzip压缩输出
    gzip_min_length 1k<span class="token punctuation">;</span>    #最小压缩文件大小
    gzip_buffers <span class="token number">4</span> 16k<span class="token punctuation">;</span>    #压缩缓冲区
    gzip_http_version <span class="token number">1.0</span><span class="token punctuation">;</span> #压缩版本（默认<span class="token number">1.1</span>，前端如果是squid2<span class="token punctuation">.</span><span class="token number">5</span>请使用<span class="token number">1.0</span>）
    gzip_comp_level <span class="token number">2</span><span class="token punctuation">;</span>     #压缩等级
    
    # 设置什么类型的文件需要压缩
    gzip_types text<span class="token operator">/</span>plain application<span class="token operator">/</span>x<span class="token operator">-</span>javascript text<span class="token operator">/</span>css application<span class="token operator">/</span>xml<span class="token punctuation">;</span>
    
    # 用于设置使用Gzip进行压缩发送是否携带“Vary<span class="token operator">:</span>Accept<span class="token operator">-</span>Encoding”头域的响应头部
    # 主要是告诉接收方，所发送的数据经过了Gzip压缩处理
    gzip_vary on<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总体而言，Nginx是一款轻量级、高性能、可靠性强且扩展性好的服务器软件，适用于搭建高可用性、高性能的Web应用程序和网站。</p>`,36),t=[l];function p(c,o){return s(),a("div",null,t)}const d=n(i,[["render",p],["__file","Nginx 汇总篇.html.vue"]]);export{d as default};
