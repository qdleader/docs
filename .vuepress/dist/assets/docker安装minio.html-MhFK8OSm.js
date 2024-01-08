import{_ as s,o as n,c as a,d as e}from"./app-xrgnhFxe.js";const o={},p=e(`<p>1、使用docker拉取minio的镜像 docker pull minio/minio</p><p>注意：如果没声明版本的话，默认拉取最新版本</p><p>2、查看minio镜像是否拉取成功 docker images</p><p>3、启动docker容器</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>docker run <span class="token operator">-</span>d <span class="token operator">--</span>name minio   #<span class="token operator">-</span>d后台运行 <span class="token operator">--</span>name 容器的名称
<span class="token operator">-</span>p <span class="token number">5000</span><span class="token operator">:</span><span class="token number">9000</span> \\ #新版的minio向外暴露了两个端口号 <span class="token number">5000</span>端口 外界上传下载所调用的<span class="token constant">API</span>接口
<span class="token operator">-</span>p <span class="token number">5001</span><span class="token operator">:</span><span class="token number">9001</span> \\ #<span class="token number">9001</span>控制台端口，通过界面操作minio
<span class="token operator">-</span>v <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>docker<span class="token operator">/</span>minio<span class="token operator">/</span>config<span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">root</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span>minio \\ #将minio的配置映射到宿主机上
<span class="token operator">-</span>v <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>docker<span class="token operator">/</span>minio<span class="token operator">/</span>data<span class="token operator">:</span><span class="token operator">/</span>data # 将minio的数据映射到宿主机上
<span class="token operator">-</span>e <span class="token string">&quot;MINIO_ROOT_USER=root&quot;</span> \\ #访问的账号
<span class="token operator">-</span>e <span class="token string">&quot;MINIO_ROOT_PASSWORD=Yang1314&quot;</span>  \\ #访问的密码
minio<span class="token operator">/</span>minio server <span class="token operator">/</span>data \\ # 启动服务
<span class="token operator">--</span><span class="token builtin">console</span><span class="token operator">-</span>address <span class="token string">&quot;:5001&quot;</span> #静态端口号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
docker run <span class="token operator">-</span>d \\
  <span class="token operator">-</span>p <span class="token number">9000</span><span class="token operator">:</span><span class="token number">9000</span> \\
  <span class="token operator">-</span>p <span class="token number">9001</span><span class="token operator">:</span><span class="token number">9001</span> \\
  <span class="token operator">--</span>name minio1 \\
  <span class="token operator">-</span>v <span class="token operator">/</span>Users<span class="token operator">/</span>docker<span class="token operator">/</span>minio<span class="token operator">/</span>data<span class="token operator">:</span><span class="token operator">/</span>data \\
  <span class="token operator">-</span>v <span class="token operator">/</span>Users<span class="token operator">/</span>docker<span class="token operator">/</span>minio<span class="token operator">/</span>config<span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">root</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span>minio \\
  <span class="token operator">-</span>e <span class="token string">&quot;MINIO_ROOT_USER=root&quot;</span> \\
  <span class="token operator">-</span>e <span class="token string">&quot;MINIO_ROOT_PASSWORD=Yang1314&quot;</span> \\
  minio<span class="token operator">/</span>minio server <span class="token operator">/</span>data <span class="token operator">--</span>console<span class="token operator">-</span>address <span class="token string">&quot;:9001&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：启动时与以前的版本有很大的区别，新版本这里暴露了两个端口号，两个端口号分工明确，而且启动时需要指明静态端口号，用来访问控制台</p><p>4、查看容器是否正常启动 docker ps</p><p>5、启动正常后即可通过公网ip+静态端口号访问控制台</p>`,9),r=[p];function t(c,l){return n(),a("div",null,r)}const k=s(o,[["render",t],["__file","docker安装minio.html.vue"]]);export{k as default};
