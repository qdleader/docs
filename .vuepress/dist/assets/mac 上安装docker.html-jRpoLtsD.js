import{_ as a,o as s,c as e,d as n}from"./app-otDwoQZb.js";const o={},r=n(`<h3 id="用-brew-安装" tabindex="-1"><a class="header-anchor" href="#用-brew-安装" aria-hidden="true">#</a> 用 brew 安装</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>brew install docker <span class="token operator">--</span>cask
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装 成功后会提示 🍺 docker was successfully installed!</p><p>如果此时报</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> Here&#39;s the output<span class="token operator">:</span> ln<span class="token operator">:</span> <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>bin<span class="token operator">/</span>docker<span class="token operator">:</span> Permission denied
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>sudo chown <span class="token operator">-</span><span class="token constant">R</span> <span class="token function">$</span><span class="token punctuation">(</span>whoami<span class="token punctuation">)</span> <span class="token operator">/</span>usr<span class="token operator">/</span>local
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后再执行一下安装命令即可</p>`,8),c=[r];function t(p,l){return s(),e("div",null,c)}const d=a(o,[["render",t],["__file","mac 上安装docker.html.vue"]]);export{d as default};
