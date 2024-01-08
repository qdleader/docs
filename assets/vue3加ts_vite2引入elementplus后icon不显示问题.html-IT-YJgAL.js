import{_ as e,o as i,c as n,d as s}from"./app-tSvYcIf0.js";const l={},d=s(`<p>直接 vite2创建vue3项目</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn create @vitejs/app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>选择vue-ts 直接引入elementplus 会发现icon 不显示</p><h2 id="方法1" tabindex="-1"><a class="header-anchor" href="#方法1" aria-hidden="true">#</a> 方法1</h2><p>在index.html中</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;link rel=&quot;stylesheet&quot; href=&quot;https://unpkg.com/element-plus/lib/theme-chalk/index.css&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="方法2" tabindex="-1"><a class="header-anchor" href="#方法2" aria-hidden="true">#</a> 方法2</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>do this:
  yarn add sass -D
  yarn add vite-plugin-style-import -D

vite：
import { defineConfig } from &#39;vite&#39;
import vue from &#39;@vitejs/plugin-vue&#39;

import path from &#39;path&#39;
import styleImport from &#39;vite-plugin-style-import&#39;

export default defineConfig({
plugins: [
vue(),
styleImport({
libs: [{
libraryName: &#39;element-plus&#39;,
esModule: true,
ensureStyleFile: true,
resolveStyle: (name) =&gt; {
name = name.slice(3)
return element-plus/packages/theme-chalk/src/\${name}.scss;
},
resolveComponent: (name) =&gt; {
return element-plus/lib/\${name};
},
}]
}),
],

})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还不生效就在引入个</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import &#39;element-plus/packages/theme-chalk/src/base.scss&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,10),a=[d];function t(r,v){return i(),n("div",null,a)}const c=e(l,[["render",t],["__file","vue3加ts_vite2引入elementplus后icon不显示问题.html.vue"]]);export{c as default};
