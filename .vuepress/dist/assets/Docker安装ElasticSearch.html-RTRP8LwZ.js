import{_ as s,o as a,c as n,d as e}from"./app-C59QzqDT.js";const r={},p=e(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>docker network create qdnet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>sudo su
cd <span class="token operator">/</span>Users
mkdir data
mkdir plugins

chmod <span class="token number">777</span> data
chmod <span class="token number">777</span> plugins
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>docker run <span class="token operator">-</span>d \\
	<span class="token operator">--</span>name es \\
    <span class="token operator">-</span>e <span class="token string">&quot;ES_JAVA_OPTS=-Xms512m -Xmx512m&quot;</span> \\
    <span class="token operator">-</span>e <span class="token string">&quot;discovery.type=single-node&quot;</span> \\
    <span class="token operator">-</span>v <span class="token operator">/</span>Users<span class="token operator">/</span>data<span class="token operator">:</span><span class="token operator">/</span>usr<span class="token operator">/</span>share<span class="token operator">/</span>elasticsearch<span class="token operator">/</span>data \\
    <span class="token operator">-</span>v <span class="token operator">/</span>Users<span class="token operator">/</span>plugins<span class="token operator">:</span><span class="token operator">/</span>usr<span class="token operator">/</span>share<span class="token operator">/</span>elasticsearch<span class="token operator">/</span>plugins \\
    <span class="token operator">--</span>privileged \\
    <span class="token operator">--</span>network qdnet \\
    <span class="token operator">-</span>p <span class="token number">9200</span><span class="token operator">:</span><span class="token number">9200</span> \\
    <span class="token operator">-</span>p <span class="token number">9300</span><span class="token operator">:</span><span class="token number">9300</span> \\
<span class="token literal-property property">elasticsearch</span><span class="token operator">:</span><span class="token number">7.12</span><span class="token number">.1</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令说明：</p><p>-e &quot;cluster.name=es-docker-cluster&quot;：设置集群名称 -e &quot;http.host=0.0.0.0&quot;：监听的地址，可以外网访问 -e &quot;ES_JAVA_OPTS=-Xms512m -Xmx512m&quot;：内存大小 -e &quot;discovery.type=single-node&quot;：非集群模式 -v es-data:/usr/share/elasticsearch/data：挂载逻辑卷，绑定elasticsearch的数据目录 -v es-logs:/usr/share/elasticsearch/logs：挂载逻辑卷，绑定elasticsearch的日志目录 -v es-plugins:/usr/share/elasticsearch/plugins：挂载逻辑卷，绑定elasticsearch的插件目录 --privileged：授予逻辑卷访问权 --network qd-net ：加入一个名为qd-net的网络中 -p 9200:9200：端口映射配置</p><h2 id="安装-kibana" tabindex="-1"><a class="header-anchor" href="#安装-kibana" aria-hidden="true">#</a> 安装 kibana</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
docker run <span class="token operator">-</span>d \\
<span class="token operator">--</span>name kibana \\
<span class="token operator">-</span>e <span class="token constant">ELASTICSEARCH_HOSTS</span><span class="token operator">=</span>http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">172.26</span><span class="token number">.5</span><span class="token number">.163</span><span class="token operator">:</span><span class="token number">9200</span> \\
<span class="token operator">--</span>network qdnet \\
<span class="token operator">-</span>p <span class="token number">5601</span><span class="token operator">:</span><span class="token number">5601</span>  \\
<span class="token literal-property property">kibana</span><span class="token operator">:</span><span class="token number">7.12</span><span class="token number">.1</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里等待个10秒钟不要着急</p><p>如果是m1电脑，下载失败 加上 --platform linux/amd64 \\</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>docker run <span class="token operator">-</span>d \\
<span class="token operator">--</span>name kibana \\
<span class="token operator">-</span>e <span class="token constant">ELASTICSEARCH_HOSTS</span><span class="token operator">=</span>http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">172.26</span><span class="token number">.5</span><span class="token number">.163</span><span class="token operator">:</span><span class="token number">9200</span> \\
<span class="token operator">--</span>network qdnet \\
<span class="token operator">-</span>p <span class="token number">5601</span><span class="token operator">:</span><span class="token number">5601</span>  \\
<span class="token operator">--</span>platform linux<span class="token operator">/</span>amd64 \\
<span class="token literal-property property">kibana</span><span class="token operator">:</span><span class="token number">7.12</span><span class="token number">.1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Kibana中文配置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>#进入容器
docker exec <span class="token operator">-</span>it kibana <span class="token operator">/</span>bin<span class="token operator">/</span>bash

#进入配置文件目录
cd <span class="token operator">/</span>usr<span class="token operator">/</span>share<span class="token operator">/</span>kibana<span class="token operator">/</span>config

#编辑文件kibana<span class="token punctuation">.</span>yml
vi kibana<span class="token punctuation">.</span>yml

#在最后一行添加如下配置
i18n<span class="token punctuation">.</span>locale<span class="token operator">:</span> zh<span class="token operator">-</span><span class="token constant">CN</span>

#保存退出
exit

#并重启容器
docker restart kibana


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ik分词器安装" tabindex="-1"><a class="header-anchor" href="#ik分词器安装" aria-hidden="true">#</a> IK分词器安装</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">GET</span> <span class="token operator">/</span>_analyze
<span class="token punctuation">{</span>
  <span class="token string-property property">&quot;analyzer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;standard&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;qdleader，带你打开通往梦想的门！&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>IK分词器集成ElasticSearch下载地址[https://github.com/medcl/elasticsearch-analysis-ik/releases/tag/v7.12.1]</p><p>我们只需要将上面elasticsearch-analysis-ik-7.12.1拷贝到ElasticSearch的plugins目录中即可，但由于当前服务采用的是docker安装，所以需要将文件拷贝到docker容器的plugins目录才行。</p><p>操作如下： properties复制代码#为了方便配置，我们将elasticsearch-analysis-ik-7.12.1改成ik文件夹</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>mv elasticsearch<span class="token operator">-</span>analysis<span class="token operator">-</span>ik<span class="token operator">-</span><span class="token number">7.12</span><span class="token number">.1</span> ik

#将ik文件夹拷贝到esdata容器中

docker cp ik es<span class="token operator">:</span><span class="token operator">/</span>usr<span class="token operator">/</span>share<span class="token operator">/</span>elasticsearch<span class="token operator">/</span>plugins

#重启容器
docker restart es
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有时候 docker restart es 在浏览器里面当闻不到了，那就试试</p><p>docker start -a es 看看报错输出</p><h2 id="分词测试" tabindex="-1"><a class="header-anchor" href="#分词测试" aria-hidden="true">#</a> 分词测试</h2><p>IK分词器包含两种模式：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>ik_smart：最少切分


ik_max_word：最细切分
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前面使用默认的standard分词器，对中文分词非常难用，安装IK分词器后，我们可以使用IK分词器测试，测试代码如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">GET</span> <span class="token operator">/</span>_analyze
<span class="token punctuation">{</span>
  <span class="token string-property property">&quot;analyzer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ik_smart&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;qdleader，带你打开通往梦想的门！&quot;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),i=[p];function t(l,o){return a(),n("div",null,i)}const d=s(r,[["render",t],["__file","Docker安装ElasticSearch.html.vue"]]);export{d as default};
