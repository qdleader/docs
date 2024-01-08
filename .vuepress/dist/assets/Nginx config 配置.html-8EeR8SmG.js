import{_ as n,o as s,c as a,d as e}from"./app-otDwoQZb.js";const t={},p=e(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>server <span class="token punctuation">{</span>
  listen <span class="token number">82</span><span class="token punctuation">;</span>
  server_name localhost<span class="token punctuation">;</span>
  location <span class="token operator">/</span> <span class="token punctuation">{</span>
    proxy_pass http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">192.168</span><span class="token number">.138</span><span class="token number">.101</span><span class="token operator">:</span><span class="token number">8080</span><span class="token punctuation">;</span> # 反向代理配置 将请求转发到指定服务
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="负载均衡" tabindex="-1"><a class="header-anchor" href="#负载均衡" aria-hidden="true">#</a> 负载均衡</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>upstream targetserver <span class="token punctuation">{</span>  # upstream 可以定义一组服务器
  server <span class="token number">192.168</span><span class="token number">.138</span><span class="token number">.100</span><span class="token operator">:</span><span class="token number">8080</span><span class="token punctuation">;</span>
  server <span class="token number">192.168</span><span class="token number">.138</span><span class="token number">.100</span><span class="token operator">:</span><span class="token number">8081</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
server <span class="token punctuation">{</span>
  listen <span class="token number">8080</span><span class="token punctuation">;</span>
  server_name localhost<span class="token punctuation">;</span>
  location <span class="token operator">/</span> <span class="token punctuation">{</span>
    proxy_pass http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>targetserver<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="负载均衡策略" tabindex="-1"><a class="header-anchor" href="#负载均衡策略" aria-hidden="true">#</a> 负载均衡策略</h2><p>｜名称｜ 说明｜ ｜--｜--｜ ｜轮询｜ 默认是｜ ｜weight ｜权重方式｜ ｜ip_hash｜ 依据ip分配方式｜ ｜least_conn｜ 依据最少链接方式｜ ｜url_hash｜ 依据url分配方式｜ ｜fair｜ 依据响应时间方式｜</p>`,5),c=[p];function i(o,r){return s(),a("div",null,c)}const u=n(t,[["render",i],["__file","Nginx config 配置.html.vue"]]);export{u as default};
