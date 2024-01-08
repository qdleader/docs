import{_ as e,o as n,c as i,d as s}from"./app-C59QzqDT.js";const l={},d=s(`<p>##方法1</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>如果你用的是vscode
全局替换console.log为//console.log

这种方法有点emmmmmm。。。。不太优雅
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>###方法二</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>替换window的console方法为{}，
在main.js里面

// window[&#39;console&#39;][&#39;log&#39;] =  console.log() //打开默认设置
window[&#39;console&#39;][&#39;log&#39;] = function() {}; //关闭默认设置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>###方法3</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在util写一个控制console.log的函数

let env = &#39;pro&#39;;  //this is a switch
function selfLog(x) {
	if(env === &#39;dev&#39;) {
		console.log(x)
	}
}
export default selfLog;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在mainjs里面应用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import selfLog from &#39;./utils/selfLog&#39;

Vue.prototype.selfLog = selfLog;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用时候</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>this.selfLog()就等效于console.log()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="方法四" tabindex="-1"><a class="header-anchor" href="#方法四" aria-hidden="true">#</a> 方法四</h3><blockquote><p>在vue webpack打包时候去掉 在 webpack.pro.conf.js中(35行左右)将设置改为：</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>new UglifyJsPlugin({
  uglifyOptions: {
    compress: {
      warnings: false,
      drop_debugger: true,
      drop_console: true
    }
  },
  sourceMap: config.build.productionSourceMap,
  parallel: true
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),a=[d];function c(r,o){return n(),i("div",null,a)}const v=e(l,[["render",c],["__file","V002-去掉console打印.html.vue"]]);export{v as default};
