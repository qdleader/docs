import{_ as n,o as s,c as a,d as e}from"./app-tSvYcIf0.js";const t={},p=e(`<h2 id="turbopack" tabindex="-1"><a class="header-anchor" href="#turbopack" aria-hidden="true">#</a> Turbopack</h2><p>首先是最引入注目的，在 Next13 中加入了全新的打包工具 Turbopack， 它是出自 Webpack 作者 TobiasKoppers 之手，官方描述是：开发时更新速度比 Webpack 快 700 倍、比 Vite 快 10 倍，是不是有点迫不及待，想要熟手体验了呢？我们直接使用官方提供的 cli 创建一个 Next.js 工程。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npx create<span class="token operator">-</span>next<span class="token operator">-</span>app <span class="token operator">--</span>example <span class="token keyword">with</span><span class="token operator">-</span>turbopack
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这是启动后的界面，这个 demo 不是一个简单的页面，而是一个包含了深度嵌套路由的例子。 下图我开发时的截图，Turbopack 直接在命令行中打印出了构建时间，我们看到启动时间只需要 2.3ms</p><p>试着修改代码，程序会自动热更新，绝大多数次数更新时间都很快，但偶尔有几次更新时间却很长，图片中有一处需要 16s（我使用的是 Mac M1)，这其中的原因就不得而知了，尤大也发布了测评，使用 1000 个节点来对比更新速度，数据显示：根组件与 vite 时间几乎相同，叶子节点比 vite 快 68%，与官方称比 vite 快 10 倍相差甚远。当然目前 Turbopack 还处于 alpha 阶段，期待 Turbopack 能够尽快推出正式版。</p><h4 id="turbopack-特点" tabindex="-1"><a class="header-anchor" href="#turbopack-特点" aria-hidden="true">#</a> Turbopack 特点</h4><blockquote><p>开箱即用 TypeScript, JSX, CSS, CSS Modules, WebAssembly 等 增量计算： Turbopack 是建立在 Turbo 之上的，Turbo 是基于 Rust 的开源、增量记忆化框架，除了可以缓存代码，还可以缓存函数运行结果。 懒编译：例如，如果访问 localhost:3000，它将仅打包 pages/index.jsx，以及导入的模块。</p></blockquote><h2 id="数据请求" tabindex="-1"><a class="header-anchor" href="#数据请求" aria-hidden="true">#</a> 数据请求</h2><p>使用 react 的 use 函数加 fetch API 来实现：静态站点生成（SSG）、服务器端渲染（SSR）和增量静态再生（ISR） 在 Page 页面使用 fetch：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> use <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token literal-property property">name</span><span class="token operator">:</span> string <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 支持的全类型的数据格式</span>
  <span class="token comment">// 可以返回不用序列化的格式数据</span>
  <span class="token comment">// 因此可以返回 Date, Map, Set, 等.</span>
  <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token function">use</span><span class="token punctuation">(</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token string">&#39;...&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="fetch-的缓存策略" tabindex="-1"><a class="header-anchor" href="#fetch-的缓存策略" aria-hidden="true">#</a> fetch 的缓存策略</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 请求被缓存</span>
<span class="token comment">// 相当于 \`getStaticProps\`.</span>
<span class="token comment">// \`force-cache\` 是默认值，可以省略</span>
<span class="token function">fetch</span><span class="token punctuation">(</span><span class="token constant">URL</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">cache</span><span class="token operator">:</span> <span class="token string">&#39;force-cache&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 每次刷新都会重新请求.</span>
<span class="token comment">// 相当于 \`getServerSideProps\`.</span>
<span class="token function">fetch</span><span class="token punctuation">(</span><span class="token constant">URL</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">cache</span><span class="token operator">:</span> <span class="token string">&#39;no-store&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 请求被缓存10s，10s 重新生成</span>
<span class="token comment">// 相当于 \`getStaticProps\` 加上 \`revalidate\` 参数.</span>
<span class="token function">fetch</span><span class="token punctuation">(</span><span class="token constant">URL</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">next</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">revalidate</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用这种方式的优点是，当请求数据的增加，打包后前端 JavaScript 的大小不会增加。</p>`,13),c=[p];function o(i,l){return s(),a("div",null,c)}const u=n(t,[["render",o],["__file","Next 13.html.vue"]]);export{u as default};
