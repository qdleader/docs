import{_ as e,o as n,c as l,d as s}from"./app-Ni1_oyYA.js";const o={},i=s(`<h1 id="定义一个log方法-可以取代console" tabindex="-1"><a class="header-anchor" href="#定义一个log方法-可以取代console" aria-hidden="true">#</a> 定义一个log方法，可以取代console</h1><p>1.乞丐版</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function log(msg) {
  console.log(msg)
}

log(&quot;hello qdleader&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.真香版 版本1虽然实现，但是实现不了传多个参数。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function log() {
  console.log.apply(console, arguments)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),a=[i];function d(c,t){return n(),l("div",null,a)}const u=e(o,[["render",d],["__file","定义一个log方法，可以取代console.log.html.vue"]]);export{u as default};
