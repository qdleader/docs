import{_ as e,o as n,c as i,d as s}from"./app-qTEUp92E.js";const l={},d=s(`<p>通过webpackChain配置解决开发环境下小程序包体积过大无法进行预览上传的问题(不影响devtools的使用)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// config/dev.sj
module.exports = {
 mini: {
    webpackChain: (chain, webpack) =&gt; {
      chain.merge({
        plugin: {
          install: {
            plugin: require(&#39;terser-webpack-plugin&#39;),
            args: [{
              terserOptions: {
                compress: true, // 默认使用terser压缩
                // mangle: false,
                keep_classnames: true, // 不改变class名称
                keep_fnames: true // 不改变函数名称
              }
            }]
          }
        }
      })
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>引入此插件即可，亲测，可以由2m多优化为1m</p>`,3),a=[d];function r(c,v){return n(),i("div",null,a)}const m=e(l,[["render",r],["__file","taro体积太大无法进行预览上传问题修复.html.vue"]]);export{m as default};
