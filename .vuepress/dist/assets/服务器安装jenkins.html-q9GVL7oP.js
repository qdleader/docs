import{_ as e,o as n,c as s,d as i}from"./app-otDwoQZb.js";const a={},r=i(`<p>我们先进入到jenkins官网(https://www.jenkins.io/download/)选择对应的版本进行下载</p><h2 id="下载-jenkins" tabindex="-1"><a class="header-anchor" href="#下载-jenkins" aria-hidden="true">#</a> 下载 jenkins</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> sudo wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io-2023.key</p><p>2、安装完成后，使用我们yum工具分别输入以下命令进行安装jenkins（其中需要输入Y继续安装）</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>yum install fontconfig java<span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span>openjdk
yum install jenkins

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、查看是否安装成功</p><p>通过输入命令： rpm -qa | grep jenkins 查看是否输入命令</p><p>[root@anjing ~]# rpm -qa | grep jenkins jenkins-2.318-1.1.noarch</p><h2 id="_4、启动jenkins" tabindex="-1"><a class="header-anchor" href="#_4、启动jenkins" aria-hidden="true">#</a> 4、启动jenkins</h2><p>输入命令启动jenkins： sudo service jenkins start</p><p>[root@anjing ~]# sudo service jenkins start</p><p>此时，输入你的ip：8080 就可以访问了</p><h2 id="jenkins常用命令" tabindex="-1"><a class="header-anchor" href="#jenkins常用命令" aria-hidden="true">#</a> Jenkins常用命令</h2><p>a、启动Jenkins命令</p><h1 id="重启-jenkins" tabindex="-1"><a class="header-anchor" href="#重启-jenkins" aria-hidden="true">#</a> 重启 Jenkins</h1><p>service jenkins restart</p><h1 id="停止-jenkins" tabindex="-1"><a class="header-anchor" href="#停止-jenkins" aria-hidden="true">#</a> 停止 Jenkins</h1><p>service jenkins stop</p><p>b、修改jenkins端口号</p><p>通过vi命令读取jenkins的配置文件： vi /etc/sysconfig/jenkins</p><p>找到“JENKINS_PORT”的文字，将后面的端口号进行修改。修改完成后进行保存，端口号修改后，也需要到云端服务器管理开放对应的端口。</p><h2 id="_4、根据界面提示信息去查看密码" tabindex="-1"><a class="header-anchor" href="#_4、根据界面提示信息去查看密码" aria-hidden="true">#</a> 4、根据界面提示信息去查看密码</h2><p>$ cat /var/lib/jenkins/secrets/initialAdminPassword</p>`,24),t=[r];function d(p,o){return n(),s("div",null,t)}const h=e(a,[["render",d],["__file","服务器安装jenkins.html.vue"]]);export{h as default};
