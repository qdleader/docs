import{_ as e,o as a,c as s,d as n}from"./app-otDwoQZb.js";const r={},c=n(`<p>docker 查看所有容器</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>docker ps <span class="token operator">-</span>a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>停止容器，使用</p><p>docker stop MyContainerName；</p><p>删除容器，使用</p><p>docker rm MyContainerName；</p><p>命令行进入容器</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>docker exec <span class="token operator">-</span>it containername <span class="token operator">/</span>bin<span class="token operator">/</span>bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,8),o=[c];function t(d,i){return a(),s("div",null,o)}const l=e(r,[["render",t],["__file","docker 常用的命令.html.vue"]]);export{l as default};
