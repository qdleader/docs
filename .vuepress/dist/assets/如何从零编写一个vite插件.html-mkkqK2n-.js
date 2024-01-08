import{_ as n,o as s,c as a,d as p}from"./app-FRQgbCNf.js";const t={},e=p(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>## 创建  vite 插件通用模板

#### <span class="token number">1.</span> 初始化

mkdir vite<span class="token operator">-</span>progress <span class="token operator">&amp;&amp;</span> cd vite<span class="token operator">-</span>progress <span class="token operator">&amp;&amp;</span> pnpm init

#### <span class="token number">1.2</span> 安装 typescript

pnpm i typescript @types<span class="token operator">/</span>node <span class="token operator">-</span><span class="token constant">D</span>



#### <span class="token number">1.3</span> 配置 tsconfig<span class="token punctuation">.</span>json

<span class="token punctuation">{</span>
  <span class="token string-property property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ESNext&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esnext&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;moduleResolution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;declaration&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;noUnusedLocals&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;esModuleInterop&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;lib&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;ESNext&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;sourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;noEmitOnError&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;noImplicitAny&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;src/*&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;*.d.ts&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;node_modules&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;examples&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;dist&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

#### <span class="token number">1.4</span> 安装 vite


pnpm intsall vite <span class="token operator">--</span>save<span class="token operator">-</span>dev


#### <span class="token number">1.</span> 配置 eslint 和 prettier（可选）

安装 eslint

pnpm i eslint @typescript<span class="token operator">-</span>eslint <span class="token operator">/</span> parser @typescript<span class="token operator">-</span>eslint <span class="token operator">/</span> eslint <span class="token operator">-</span> plugin<span class="token operator">--</span>save <span class="token operator">-</span> dev



配置<span class="token punctuation">.</span>eslintrc：


<span class="token punctuation">{</span>
  <span class="token string-property property">&quot;root&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;env&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;browser&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;es2021&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;es6&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;node&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;eslint:recommended&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;plugin:@typescript-eslint/recommended&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;parser&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@typescript-eslint/parser&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;parserOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;ecmaVersion&quot;</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;sourceType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;module&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@typescript-eslint&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;no-console&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;@typescript-eslint/no-non-null-assertion&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;@typescript-eslint/ban-ts-comment&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;@typescript-eslint/no-explicit-any&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


## 配置格式化文件

#### 安装 prettier （可选）

pnpm i prettier eslint <span class="token operator">-</span> config <span class="token operator">-</span> prettier eslint <span class="token operator">-</span> plugin <span class="token operator">-</span> prettier<span class="token operator">--</span>save <span class="token operator">-</span> dev



#### 配置<span class="token punctuation">.</span>prettierrc ：

<span class="token punctuation">{</span>
  <span class="token string-property property">&quot;printWidth&quot;</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;tabWidth&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;useTabs&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;semi&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;singleQuote&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;quoteProps&quot;</span><span class="token operator">:</span> <span class="token string">&quot;as-needed&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;trailingComma&quot;</span><span class="token operator">:</span> <span class="token string">&quot;all&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;bracketSpacing&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;arrowParens&quot;</span><span class="token operator">:</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;requirePragma&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;insertPragma&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;proseWrap&quot;</span><span class="token operator">:</span> <span class="token string">&quot;preserve&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;endOfLine&quot;</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span>
<span class="token punctuation">}</span>

## <span class="token number">3.</span> 新增 src <span class="token operator">/</span> index<span class="token punctuation">.</span>ts 入口

<span class="token keyword">import</span> type <span class="token punctuation">{</span> PluginOption <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">vitePluginTemplate</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> PluginOption <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token comment">// 插件名称</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;vite-plugin&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// pre 会较于 post 先执行</span>
        <span class="token literal-property property">enforce</span><span class="token operator">:</span> <span class="token string">&#39;pre&#39;</span><span class="token punctuation">,</span> <span class="token comment">// post</span>
        <span class="token comment">// 指明它们仅在 &#39;build&#39; 或 &#39;serve&#39; 模式时调用</span>
        <span class="token literal-property property">apply</span><span class="token operator">:</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">,</span> <span class="token comment">// apply 亦可以是一个函数</span>
        <span class="token function">config</span> <span class="token punctuation">(</span><span class="token parameter">config<span class="token punctuation">,</span> <span class="token punctuation">{</span> command <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;这里是config钩子&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token function">configResolved</span> <span class="token punctuation">(</span><span class="token parameter">resolvedConfig</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;这里是configResolved钩子&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token function">configureServer</span> <span class="token punctuation">(</span><span class="token parameter">server</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;这里是configureServer钩子&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token function">transformIndexHtml</span> <span class="token punctuation">(</span><span class="token parameter">html</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;这里是transformIndexHtml钩子&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

到这里，那么我们的基本模版就建好了，怎么运行呢？

在当前目录下执行

pnpm create vite my<span class="token operator">-</span>vue<span class="token operator">-</span>app <span class="token operator">--</span>template vue

 cd my<span class="token operator">-</span>vue<span class="token operator">-</span>app

 pnpm i

修改 my<span class="token operator">-</span>vue<span class="token operator">-</span>app<span class="token operator">/</span><span class="token keyword">package</span><span class="token punctuation">.</span>json


<span class="token punctuation">{</span>
  <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-vue-app&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;private&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;module&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite build&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;preview&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite preview&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.2.37&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;@vitejs/plugin-vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.1.0&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;vite&quot;</span><span class="token operator">:</span> <span class="token string">&quot;link:../node_modules/vite&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>



主要是加入
 <span class="token string-property property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;vite&quot;</span><span class="token operator">:</span> <span class="token string">&quot;link:../node_modules/vite&quot;</span>
  <span class="token punctuation">}</span>

这里是让 里面和外面的 vite一个版本

然后修改 my<span class="token operator">-</span>vue<span class="token operator">-</span>app<span class="token operator">/</span>vite<span class="token punctuation">.</span>config<span class="token punctuation">.</span>ts 文件


<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span>

<span class="token keyword">import</span> acnBuildPlugin <span class="token keyword">from</span> <span class="token string">&#39;../dist/index.mjs&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">acnBuildPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>





好了，在外面（vite<span class="token operator">-</span>progress 目录下）我们再下载个tsup ，tsup 是一个轻小且无需配置的，由 esbuild 支持的构建工具；



修改一下 vite<span class="token operator">-</span>progress<span class="token operator">/</span><span class="token keyword">package</span><span class="token punctuation">.</span>json 的打包命令，及路径

  <span class="token string-property property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./dist/index.mjs&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pnpm run build -- --watch --ignore-watch my-vue-app&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tsup src/index.ts --dts --format cjs,esm&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;build:vite&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pnpm run build &amp;&amp; cd my-vue-app &amp;&amp; pnpm run build&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;prepublish&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pnpm run build&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;release&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npx bumpp --push --tag --commit &amp;&amp; pnpm publish&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token number">7.</span> 开发环境运行


开发环境运行：实时监听文件修改后重新打包（热更新）
pnpm run build<span class="token operator">:</span>vite

到这里你就可以 边开发边运行了 😄


# vite 的插件钩子
## <span class="token number">1.</span> vite 独有的钩子

<span class="token operator">&gt;</span> enforce ：值可以是pre 或 post ， pre 会较于 post 先执行；
<span class="token operator">&gt;</span> apply ：值可以是 build 或 serve  亦可以是一个函数，指明它们仅在 build 或 serve 模式时调用；
<span class="token operator">&gt;</span> <span class="token function">config</span><span class="token punctuation">(</span>config<span class="token punctuation">,</span> env<span class="token punctuation">)</span> ：可以在 vite 被解析之前修改 vite 的相关配置。钩子接收原始用户配置 config 和一个描述配置环境的变量env；
<span class="token operator">&gt;</span> <span class="token function">configResolved</span><span class="token punctuation">(</span>resolvedConfig<span class="token punctuation">)</span> ：在解析 vite 配置后调用。使用这个钩子读取和存储最终解析的配置。当插件需要根据运行的命令做一些不同的事情时，它很有用。
<span class="token operator">&gt;</span> <span class="token function">configureServer</span><span class="token punctuation">(</span>server<span class="token punctuation">)</span> ：主要用来配置开发服务器，为 dev<span class="token operator">-</span><span class="token function">server</span> <span class="token punctuation">(</span>connect 应用程序<span class="token punctuation">)</span> 添加自定义的中间件；
<span class="token operator">&gt;</span> <span class="token function">transformIndexHtml</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span> ：转换 index<span class="token punctuation">.</span>html 的专用钩子。钩子接收当前的 <span class="token constant">HTML</span> 字符串和转换上下文；
<span class="token operator">&gt;</span> <span class="token function">handleHotUpdate</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>：执行自定义<span class="token constant">HMR</span>更新，可以通过ws往客户端发送自定义的事件；

## <span class="token number">2.</span> vite 与 rollup 的通用钩子之构建阶段

<span class="token operator">&gt;</span> <span class="token function">options</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span> ：在服务器启动时被调用：获取、操纵Rollup选项，严格意义上来讲，它执行于属于构建阶段之前；
<span class="token operator">&gt;</span> <span class="token function">buildStart</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>：在每次开始构建时调用；
<span class="token operator">&gt;</span> <span class="token function">resolveId</span><span class="token punctuation">(</span>source<span class="token punctuation">,</span> importer<span class="token punctuation">,</span> options<span class="token punctuation">)</span>：在每个传入模块请求时被调用，创建自定义确认函数，可以用来定位第三方依赖；
<span class="token operator">&gt;</span> <span class="token function">load</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>：在每个传入模块请求时被调用，可以自定义加载器，可用来返回自定义的内容；
<span class="token operator">&gt;</span> <span class="token function">transform</span><span class="token punctuation">(</span>code<span class="token punctuation">,</span> id<span class="token punctuation">)</span>：在每个传入模块请求时被调用，主要是用来转换单个模块；
<span class="token operator">&gt;</span> <span class="token function">buildEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span>：在构建阶段结束后被调用，此处构建结束只是代表所有模块转义完成；

## <span class="token number">3.</span> vite 与 rollup 的通用钩子之输出阶段

<span class="token operator">&gt;</span> <span class="token function">outputOptions</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>：接受输出参数；
<span class="token operator">&gt;</span> <span class="token function">renderStart</span><span class="token punctuation">(</span>outputOptions<span class="token punctuation">,</span> inputOptions<span class="token punctuation">)</span>：每次 bundle<span class="token punctuation">.</span>generate 和 bundle<span class="token punctuation">.</span>write 调用时都会被触发；
<span class="token operator">&gt;</span> <span class="token function">augmentChunkHash</span><span class="token punctuation">(</span>chunkInfo<span class="token punctuation">)</span>：用来给 chunk 增加 hash；
<span class="token operator">&gt;</span> <span class="token function">renderChunk</span><span class="token punctuation">(</span>code<span class="token punctuation">,</span> chunk<span class="token punctuation">,</span> options<span class="token punctuation">)</span>：转译单个的chunk时触发。rollup 输出每一个chunk文件的时候都会调用；
<span class="token operator">&gt;</span> <span class="token function">generateBundle</span><span class="token punctuation">(</span>options<span class="token punctuation">,</span> bundle<span class="token punctuation">,</span> isWrite<span class="token punctuation">)</span>：在调用 bundle<span class="token punctuation">.</span>write 之前立即触发这个 hook；
<span class="token operator">&gt;</span> <span class="token function">writeBundle</span><span class="token punctuation">(</span>options<span class="token punctuation">,</span> bundle<span class="token punctuation">)</span>：在调用 bundle<span class="token punctuation">.</span>write后，所有的chunk都写入文件后，最后会调用一次 writeBundle；
<span class="token operator">&gt;</span> <span class="token function">closeBundle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>：在服务器关闭时被调用



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[e];function i(l,c){return s(),a("div",null,o)}const u=n(t,[["render",i],["__file","如何从零编写一个vite插件.html.vue"]]);export{u as default};
