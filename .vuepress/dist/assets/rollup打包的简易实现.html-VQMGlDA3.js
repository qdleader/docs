import{_ as n,o as s,c as a,d as t}from"./app-C59QzqDT.js";const p={},e=t(`<h1 id="简易实现" tabindex="-1"><a class="header-anchor" href="#简易实现" aria-hidden="true">#</a> 简易实现</h1><h2 id="_1-入口" tabindex="-1"><a class="header-anchor" href="#_1-入口" aria-hidden="true">#</a> 1. 入口</h2><p>对于rollup来讲, 最核心的参数则是entry和output, 一个控制了入口, 一个控制了输出 假设我们对rollup是这样调用的</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> rollup <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../../src/rollup&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> entry <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src/index.js&#39;</span><span class="token punctuation">)</span>
<span class="token function">rollup</span><span class="token punctuation">(</span>entry<span class="token punctuation">,</span> <span class="token string">&#39;dest/bundle.js&#39;</span><span class="token punctuation">)</span>
TypeScript
在入口中<span class="token punctuation">,</span> 我们如要从入口开始进行分析 摇树和打包操作<span class="token punctuation">,</span> 并输出到出口

<span class="token keyword">const</span> Bundle <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./bundle&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">rollup</span><span class="token punctuation">(</span><span class="token parameter">entry<span class="token punctuation">,</span> filename</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> bundle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bundle</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    entry<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  bundle<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> rollup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-bundle" tabindex="-1"><a class="header-anchor" href="#_1-bundle" aria-hidden="true">#</a> 1. Bundle</h2><p>bundle是整个构建中的下一阶段, rollup处理完毕入参, 插件等信息后会通过bundle来启动整个的构建流程</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">Bundle</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>entryPath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>entry<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;.js&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>modules <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">build</span><span class="token punctuation">(</span><span class="token parameter">filename</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>entryPath<span class="token punctuation">,</span> filename<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> Bundle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>bundle的核心能力是:
  获取入口文件内容, 包装成module, 生成抽象语法树
  对入口文件抽象语法树进行依赖解析
  生成目标代码
  写入目标文件
  在bundle对象中, 他们被实现在build函数中
</code></pre><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> readFileSync<span class="token punctuation">,</span> writeFileSync <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> Module <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./module&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> MagicString <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;magic-string&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">Bundle</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>entryPath <span class="token operator">=</span> <span class="token function">resolve</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>entry<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;.js&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>modules <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>statements <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token function">build</span><span class="token punctuation">(</span><span class="token parameter">filename</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1. 获取入口文件的内容，包装成\`module\`，生成抽象语法树</span>
    <span class="token keyword">const</span> entryModule <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">fetchModule</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>entryPath<span class="token punctuation">)</span>
    <span class="token comment">// 2. 对入口文件抽象语法树进行依赖解析</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>statements <span class="token operator">=</span> entryModule<span class="token punctuation">.</span><span class="token function">expandAllStatements</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 3. 生成最终代码</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> code <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">generate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 4. 写入目标文件</span>
    <span class="token function">writeFileSync</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> code<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">fetchModule</span><span class="token punctuation">(</span><span class="token parameter">importee</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> route <span class="token operator">=</span> importee
    <span class="token keyword">if</span> <span class="token punctuation">(</span>route<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> code <span class="token operator">=</span> <span class="token function">readFileSync</span><span class="token punctuation">(</span>route<span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> module <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Module</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        code<span class="token punctuation">,</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> importee<span class="token punctuation">,</span>
        <span class="token literal-property property">bundle</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> module
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">generate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> ms <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MagicString<span class="token punctuation">.</span>Bundle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>statements<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">statement</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> source <span class="token operator">=</span> statement<span class="token punctuation">.</span>_source<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      ms<span class="token punctuation">.</span><span class="token function">addSource</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">content</span><span class="token operator">:</span> source<span class="token punctuation">,</span>
        <span class="token literal-property property">separator</span><span class="token operator">:</span> <span class="token string">&#39;\\n&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">code</span><span class="token operator">:</span> ms<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> Bundle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于bundle来讲, 每个文件都是一个Module, rollup会将模块使用module类来进行包装处理</p><h2 id="_3-module" tabindex="-1"><a class="header-anchor" href="#_3-module" aria-hidden="true">#</a> 3. Module</h2><p>module会将源代码解析成为抽象语法树, 然后将源代码挂载到节点上, 并提供展开修改方法</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> parse <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;acorn&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> MagicString <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;magic-string&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> analyse <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./ast/analyse&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">Module</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>
    code<span class="token punctuation">,</span>
    path<span class="token punctuation">,</span>
    bundle<span class="token punctuation">,</span>
  <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>code <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MagicString</span><span class="token punctuation">(</span>code<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> path<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>path <span class="token operator">=</span> path
    <span class="token keyword">this</span><span class="token punctuation">.</span>bundle <span class="token operator">=</span> bundle
    <span class="token keyword">this</span><span class="token punctuation">.</span>ast <span class="token operator">=</span> <span class="token function">parse</span><span class="token punctuation">(</span>code<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">ecmaVersion</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
      <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">&#39;module&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">analyse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">analyse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">analyse</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>ast<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>code<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">expandAllStatements</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> allStatements <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>ast<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">statement</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> statements <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">expandStatement</span><span class="token punctuation">(</span>statement<span class="token punctuation">)</span>
      allStatements<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span>statements<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> allStatements
  <span class="token punctuation">}</span>
  <span class="token function">expandStatement</span><span class="token punctuation">(</span><span class="token parameter">statement</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    statement<span class="token punctuation">.</span>_included <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>statement<span class="token punctuation">)</span>
    <span class="token keyword">return</span> result
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> Module
TypeScript
module中调用了ast<span class="token operator">/</span>analyse来对模块的内容进行解析和挂载

<span class="token comment">// ./src/ast/analyse.js</span>
<span class="token keyword">function</span> <span class="token function">analyse</span><span class="token punctuation">(</span><span class="token parameter">ast<span class="token punctuation">,</span> ms</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  ast<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">statement</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    Object<span class="token punctuation">.</span><span class="token function">defineProperties</span><span class="token punctuation">(</span>statement<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">_source</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> ms<span class="token punctuation">.</span><span class="token function">snip</span><span class="token punctuation">(</span>statement<span class="token punctuation">.</span>start<span class="token punctuation">,</span> statement<span class="token punctuation">.</span>end<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> analyse
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就能够实现整个模块的解析处理, 并最终生成代码了</p><h1 id="打包阶段总结" tabindex="-1"><a class="header-anchor" href="#打包阶段总结" aria-hidden="true">#</a> 打包阶段总结</h1><p>其实从以上的流程我们可以总结出rollup的打包阶段的运行流了</p><ol><li>rollup处理好入参出参等参数后, 通过bundle的build函数启动了整个的构建流程</li><li>build函数中, 会获取到入口的文件代码, 将入口文件代码内容new了一个Module对象</li><li>module对象中, 会首先使用acorn来将源代码转化成为ast, 然后使用ast/analyse来将ast中的源码与ast结构进行对应起来, 将对应位置的源码文本塞入到_source中, 这样就形成了ast与源码之前的对应关系</li><li>使用module对象中expandAllStatements, 遍历所有的声明语句, 并将声明语句的数组进行返回</li><li>调用bundle的generate方法, 通过MagicString, 将_source中的代码内容进行拼接, 最终实现打包能力 其实本质上来讲, 核心就是 参数分析 &gt; 通过依赖寻找模块 &gt; 模块转AST &gt; 进行依赖分析 &gt; 拼接输出</li></ol>`,17),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","rollup打包的简易实现.html.vue"]]);export{r as default};
