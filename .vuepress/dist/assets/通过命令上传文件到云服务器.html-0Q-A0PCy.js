import{_ as a,o as e,c as s,d as n}from"./app-C59QzqDT.js";const i={},r=n(`<h2 id="将本地文件上传至服务器" tabindex="-1"><a class="header-anchor" href="#将本地文件上传至服务器" aria-hidden="true">#</a> 将本地文件上传至服务器</h2><h2 id="压缩文件-tar-zcvf-文件名-tar-gz-目标文件夹" tabindex="-1"><a class="header-anchor" href="#压缩文件-tar-zcvf-文件名-tar-gz-目标文件夹" aria-hidden="true">#</a> 压缩文件：tar zcvf [文件名.tar.gz] [目标文件夹]</h2><pre><code>          例如 tar zcvf QQ.tar.gz  QQ/  可以将当前目录下的QQ文件夹中的文件压缩成  QQ.tar.gz
</code></pre><h2 id="解压文件-tar-zxvf-文件名-tar-gz" tabindex="-1"><a class="header-anchor" href="#解压文件-tar-zxvf-文件名-tar-gz" aria-hidden="true">#</a> 解压文件：tar zxvf [文件名.tar.gz]</h2><h1 id="二-文件上传下载命令" tabindex="-1"><a class="header-anchor" href="#二-文件上传下载命令" aria-hidden="true">#</a> 二：文件上传下载命令</h1><h3 id="_1-下载命令" tabindex="-1"><a class="header-anchor" href="#_1-下载命令" aria-hidden="true">#</a> 1.下载命令：</h3><pre><code>     scp username@serverIp:/path/filename   ~/local_dir（本地目录）

    例如：scp  root@47.100.63.15:~/upload/weiyi.tar.gz ~/local_dir 可以将47.100.63.15服务器上root用户中~/upload/weiyi.tar.gz下载至本地~/local_dir目录中
</code></pre><h3 id="_2-上传命令" tabindex="-1"><a class="header-anchor" href="#_2-上传命令" aria-hidden="true">#</a> 2.上传命令</h3><pre><code>    scp  /path/filename  username@serverIp:/path

 例如 ：scp weiyi.tar.gz root@47.100.63.15:~/upload  可以将当前路径下的weiyi.tar.gz 上传至服务器47.100.63.15中root用户中~/upload文件夹中。

 在root/upload的文件夹下就可获得上传的文件了
</code></pre><p>scp /Users/icourt/github/reactAdminPro/dist/1.zip root@121.36.47.43:/Users/docker/nginx/html</p><p>scp /Users/yk/gitHub/reactAdminPro/dist/1.zip root@121.36.47.43:/Users/docker/nginx/html</p><p>scp /Users/yk/javaP/test20220603/adminApi/target/adminApi-0.0.1-SNAPSHOT.jar root@121.36.47.43:~/upload1</p><h1 id="zip" tabindex="-1"><a class="header-anchor" href="#zip" aria-hidden="true">#</a> Zip</h1><p>最通俗的用法</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>zip <span class="token operator">-</span>q <span class="token operator">-</span>r <span class="token operator">-</span>e <span class="token operator">-</span>m <span class="token operator">-</span>o myfile<span class="token punctuation">.</span>zip someThing

<span class="token operator">-</span>q	表示不显示压缩进度状态
<span class="token operator">-</span>r	表示子目录子文件全部压缩为zip；这部分比较重要，不然的话只有something这个文件夹被压缩，里面的没有被压缩进去
<span class="token operator">-</span>e	表示你的压缩文件需要加密，终端会提示你输入密码的；还有种加密方法，这种是直接在命令行里做的，比如zip <span class="token operator">-</span>r <span class="token operator">-</span><span class="token constant">P</span> Password01<span class="token operator">!</span> modudu<span class="token punctuation">.</span>zip SomeDir<span class="token punctuation">,</span> 就直接用Password01<span class="token operator">!</span>来加密modudu<span class="token punctuation">.</span>zip了
<span class="token operator">-</span>m	表示压缩完删除原文件
<span class="token operator">-</span>o	表示设置所有被压缩文件的最后修改时间为当前压缩时间
       当跨目录的时候是这么操作的

zip <span class="token operator">-</span>q <span class="token operator">-</span>r <span class="token operator">-</span>e <span class="token operator">-</span>m <span class="token operator">-</span>o <span class="token string">&#39;\\user\\someone\\someDir\\someFile.zip&#39;</span> <span class="token string">&#39;\\users\\someDir&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="unzip命令" tabindex="-1"><a class="header-anchor" href="#unzip命令" aria-hidden="true">#</a> unzip命令</h3><pre><code>   语法：unzip [选项] 压缩文件名.zip
   各选项的含义分别为：
</code></pre><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">-</span>x 文件列表 解压缩文件，但不包括指定的file文件。 

<span class="token operator">-</span>v 查看压缩文件目录，但不解压。 

<span class="token operator">-</span>t 测试文件有无损坏，但不解压。 

<span class="token operator">-</span>d 目录 把压缩文件解到指定目录下。 

<span class="token operator">-</span>z 只显示压缩文件的注解。 

<span class="token operator">-</span>n 不覆盖已经存在的文件。 

<span class="token operator">-</span>o 覆盖已存在的文件且不要求用户确认。 

<span class="token operator">-</span>j 不重建文档的目录结构，把所有文件解压到同一目录下。 

    

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1、将压缩文件text-zip在当前目录下解压缩。" tabindex="-1"><a class="header-anchor" href="#_1、将压缩文件text-zip在当前目录下解压缩。" aria-hidden="true">#</a> 1、将压缩文件text.zip在当前目录下解压缩。</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>unzip text<span class="token punctuation">.</span>zip 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2、将压缩文件text-zip在指定目录-tmp下解压缩-如果已有相同的文件存在-要求unzip命令不覆盖原先的文件。" tabindex="-1"><a class="header-anchor" href="#_2、将压缩文件text-zip在指定目录-tmp下解压缩-如果已有相同的文件存在-要求unzip命令不覆盖原先的文件。" aria-hidden="true">#</a> 2、将压缩文件text.zip在指定目录/tmp下解压缩，如果已有相同的文件存在，要求unzip命令不覆盖原先的文件。</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>unzip <span class="token operator">-</span>n text<span class="token punctuation">.</span>zip <span class="token operator">-</span>d <span class="token operator">/</span>tmp 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3、查看压缩文件目录-但不解压。" tabindex="-1"><a class="header-anchor" href="#_3、查看压缩文件目录-但不解压。" aria-hidden="true">#</a> 3、查看压缩文件目录，但不解压。</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>unzip <span class="token operator">-</span>v text<span class="token punctuation">.</span>zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>unzip -n dist.zip -d ./</p>`,25),t=[r];function p(d,o){return e(),s("div",null,t)}const l=a(i,[["render",p],["__file","通过命令上传文件到云服务器.html.vue"]]);export{l as default};
