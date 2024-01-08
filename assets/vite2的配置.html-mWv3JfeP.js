import{_ as e,o as i,c as n,d as s}from"./app-tSvYcIf0.js";const d={},l=s(`<p>创建项目</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 如果需要交互式命令创建
yarn create @vitejs/app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vite-config-js" tabindex="-1"><a class="header-anchor" href="#vite-config-js" aria-hidden="true">#</a> vite.config.js</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export default {
  alias: {
    &quot;@&quot;: resolve(&quot;src&quot;),
    &quot;comps&quot;: resolve(&quot;src/components&quot;),
    &quot;apis&quot;: resolve(&quot;src/apis&quot;),
    &quot;views&quot;: resolve(&quot;src/views&quot;),
    &quot;utils&quot;: resolve(&quot;src/utils&quot;),
    &quot;routes&quot;: resolve(&quot;src/routes&quot;),
    &quot;styles&quot;: resolve(&quot;src/styles&quot;),
  },
  plugins: [vue()]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="载入不同模式下全局变量" tabindex="-1"><a class="header-anchor" href="#载入不同模式下全局变量" aria-hidden="true">#</a> 载入不同模式下全局变量</h2><p>此外，我们也可以通过使用.env文件来载入不同环境下的全局变量，Vite中也使用了 dotenv来加载额外的环境变量，设置的全局变量必须以VITE_为前缀才可以正常被加载，使用方式如下：</p><p>.env.development</p><h3 id="以下变量在development被载入" tabindex="-1"><a class="header-anchor" href="#以下变量在development被载入" aria-hidden="true">#</a> 以下变量在<code>development</code>被载入</h3><p>.env.production</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>VITE_APP_BASE_API = &#39;/api/v1&#39;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="以下变量在production被载入" tabindex="-1"><a class="header-anchor" href="#以下变量在production被载入" aria-hidden="true">#</a> 以下变量在<code>production</code>被载入</h3><p>.env.production</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>VITE_APP_BASE_API = &#39;http://192.168.9.212:8888/api/v1&#39;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>全局变量使用方式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import.meta.env.VITE_APP_BASE_API
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后基于resolve写个小方法，方便以后新增别名使用(非必要)</p><p>function pathResolve(dir) { return resolve(__dirname, &quot;.&quot;, dir); } 接下来进入重要环节</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export default defineConfig({
      plugins:[vue()], // 配置需要使用的插件列表，这里将vue添加进去

      // 这里是将src目录配置别名为 /@ 方便在项目中导入src目录下的文件
      resolve: {
          alias: {
            &quot;/@&quot;: pathResolve(&quot;src&quot;),
          }
      },
      // 强制预构建插件包
      optimizeDeps: {
          include: [&#39;axios&#39;],
      },
      // 打包配置
      build: {
          target: &#39;modules&#39;,
          outDir: &#39;dist&#39;, //指定输出路径
          assetsDir: &#39;assets&#39;, // 指定生成静态资源的存放路径
          minify: &#39;terser&#39; // 混淆器，terser构建后文件体积更小
      },
      // 本地运行配置，及反向代理配置
      server: {
          cors: true, // 默认启用并允许任何源
          open: true, // 在服务器启动时自动在浏览器中打开应用程序
          //反向代理配置，注意rewrite写法，开始没看文档在这里踩了坑
          proxy: {
              &#39;/api&#39;: {
                  target: &#39;http://192.168.9.212:3000&#39;,   //代理接口
                  changeOrigin: true,
                  rewrite: (path) =&gt; path.replace(/^\\/api/, &#39;&#39;)
            }
          }
      }
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上就是vue.config.js文件的基本配置，需要更多配置的可以参考文档进行配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { defineConfig } from &quot;vite&quot;;
import { resolve } from &quot;path&quot;;
import vue from &#39;@vitejs/plugin-vue&#39;;
function pathResolve(dir) {
  return resolve(__dirname, &quot;.&quot;, dir);
}

export default defineConfig({
    base: &quot;&quot;,
    plugins:[vue()],
    resolve: {
        alias: {
          &quot;/@&quot;: pathResolve(&quot;src&quot;),
        }
    },
    optimizeDeps: {
        include: [&#39;axios&#39;],
    },
    build: {
      target: &#39;modules&#39;,
      outDir: &#39;dist&#39;,
      assetsDir: &#39;assets&#39;,
      minify: &#39;terser&#39; // 混淆器
    },
    server: {
        cors: true,
        open: true,
        proxy: {
          &#39;/api&#39;: {
              target: &#39;http://192.168.9.212:3000&#39;,   //代理接口
              changeOrigin: true,
              rewrite: (path) =&gt; path.replace(/^\\/api/, &#39;&#39;)
          }
        }
    }
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { defineConfig } from &#39;vite&#39;
import vue from &#39;@vitejs/plugin-vue&#39;
const path = require(&#39;path&#39;)

// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    // 配置路径别名
    &#39;@&#39;: path.resolve(__dirname, &#39;src&#39;),
    &#39;view&#39;: path.resolve(__dirname, &#39;src/view&#39;),
    &#39;com&#39;: path.resolve(__dirname, &#39;src/components&#39;),
  },
  // 引入第三方的配置
  // optimizeDeps: {
  //   include: [&quot;echarts&quot;, &quot;axios&quot;, ]
  // },
  plugins: [vue()],
  // hostname: &#39;0.0.0.0&#39;,
  // port: 8090,
  // 是否自动在浏览器打开
  // open: true,
  // 是否开启 https
  https: false,
  // 服务端渲染
  ssr: false,
  /**
   * 在生产中服务时的基本公共路径。
   * @default &#39;/&#39;
   */
   base: &#39;./&#39;,
   /**
   * 与“根”相关的目录，构建输出将放在其中。如果目录存在，它将在构建之前被删除。
   * @default &#39;dist&#39;
   */
  outDir: &#39;dist&#39;,
  server: {
    proxy: {
      &#39;/api&#39;: {
        target: &#39;http://127.0.0.1:3000/&#39;,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          &quot;^/api&quot;: &quot;&quot;
        }
      },
    },
  }
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),v=[l];function a(r,u){return i(),n("div",null,v)}const c=e(d,[["render",a],["__file","vite2的配置.html.vue"]]);export{c as default};
