import{_ as e,o as a,c as d,d as n}from"./app-Ni1_oyYA.js";const i={},s=n(`<h1 id="简述数据绑定的原理" tabindex="-1"><a class="header-anchor" href="#简述数据绑定的原理" aria-hidden="true">#</a> 简述数据绑定的原理</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Object.defineProperty 可以检测到属性的变化。一旦数据发生访问或修改时候，通过数据劫持，我们就可以检测到，

到底层检测到数据变化的时候，就会通过发布订阅者模式通知更新dom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关键点" tabindex="-1"><a class="header-anchor" href="#关键点" aria-hidden="true">#</a> 关键点</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Object.defineProperty (80分)
数据劫持（10分）
发布订阅者模式（10分）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),t=[s];function r(c,l){return a(),d("div",null,t)}const o=e(i,[["render",r],["__file","V013-说一下数据绑定的原理★★★★.html.vue"]]);export{o as default};
