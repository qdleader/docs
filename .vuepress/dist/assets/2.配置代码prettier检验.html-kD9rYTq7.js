import{_ as n,o as s,c as a,d as t}from"./app-C59QzqDT.js";const e={},p=t(`<p>记得我们在git中有个命令是 npm run link吗 走的就是packjson 中的这个</p><p>在packjson 中增加</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>  &quot;scripts<span class="token operator">:</span> <span class="token punctuation">{</span>
    ...
     <span class="token property">&quot;lint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lint-staged&quot;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在项目根目录下新建 lint-staged.config.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;*.{js,jsx,ts,tsx}&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;eslint --fix&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;prettier --write&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;{!(package)*.json,*.code-snippets,.!(browserslist)*rc}&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;prettier --write--parser json&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;package.json&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;prettier --write&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;*.{css,scss,less,styl}&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;stylelint --fix&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;prettier --write&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;*.md&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;prettier --write&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码格式化和质量工具 为了设定一个标准，供项目的所有贡献者使用，以保持代码风格一致并遵循基本的最佳实践，我们将使用两个工具：</p><p>eslint - 代码规范的最佳实践 prettier - 自动格式化代码文件</p><h3 id="eslint" tabindex="-1"><a class="header-anchor" href="#eslint" aria-hidden="true">#</a> ESLint</h3><p>我们从 ESLint 开始，它非常简单因为在我们创建 Next.js 项目的时候已经自动安装好并且有了默认配置。 我们仅需要添加少部分额外的配置就可以让它比默认配置更加严格。如果你不同意其中的任何一条规则配置，不用担心，我们可以非常简单的手动关闭这些规则。我们将所有的 ESLint 配置都写在 .eslintrc.json 文件中，这个文件已经存在于我们项目的根目录。</p><p>.eslintrc.json</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>
<span class="token punctuation">{</span>
  <span class="token property">&quot;globals&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;React&quot;</span><span class="token operator">:</span> <span class="token string">&quot;readonly&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;react&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;detect&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;root&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;env&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;browser&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;node&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;es6&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">/* 指定如何解析语法 */</span>
  <span class="token property">&quot;parser&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@typescript-eslint/parser&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">/* 优先级低于 parse 的语法解析配置 */</span>
  <span class="token property">&quot;parserOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;ecmaVersion&quot;</span><span class="token operator">:</span> <span class="token number">2020</span><span class="token punctuation">,</span>
    <span class="token property">&quot;sourceType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;module&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;jsxPragma&quot;</span><span class="token operator">:</span> <span class="token string">&quot;React&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ecmaFeatures&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;jsx&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;react&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;@typescript-eslint&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;react-hooks&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/*
   * &quot;off&quot; 或 0    ==&gt;  关闭规则
   * &quot;warn&quot; 或 1   ==&gt;  打开的规则作为警告（不影响代码执行）
   * &quot;error&quot; 或 2  ==&gt;  规则作为一个错误（代码不能执行，界面报错）
   */</span>
  <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// eslint (http://eslint.cn/docs/rules)</span>
    <span class="token property">&quot;no-var&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 要求使用 let 或 const 而不是 var</span>
    <span class="token property">&quot;no-multiple-empty-lines&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 不允许多个空行</span>
    <span class="token property">&quot;no-use-before-define&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 禁止在 函数/类/变量 定义之前使用它们</span>
    <span class="token property">&quot;prefer-const&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 此规则旨在标记使用 let 关键字声明但在初始分配后从未重新分配的变量，要求使用 const</span>
    <span class="token property">&quot;no-irregular-whitespace&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 禁止不规则的空白</span>

    <span class="token comment">// typeScript (https://typescript-eslint.io/rules)</span>
    <span class="token property">&quot;@typescript-eslint/no-unused-vars&quot;</span><span class="token operator">:</span> <span class="token string">&quot;warn&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 禁止定义未使用的变量</span>
    <span class="token property">&quot;@typescript-eslint/no-inferrable-types&quot;</span><span class="token operator">:</span> <span class="token string">&quot;warn&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 可以轻松推断的显式类型可能会增加不必要的冗长</span>
    <span class="token property">&quot;@typescript-eslint/no-namespace&quot;</span><span class="token operator">:</span> <span class="token string">&quot;warn&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 禁止使用自定义 TypeScript 模块和命名空间。</span>
    <span class="token property">&quot;@typescript-eslint/no-explicit-any&quot;</span><span class="token operator">:</span> <span class="token string">&quot;warn&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 禁止使用 any 类型</span>
    <span class="token property">&quot;@typescript-eslint/ban-ts-ignore&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 禁止使用 @ts-ignore</span>
    <span class="token property">&quot;@typescript-eslint/ban-types&quot;</span><span class="token operator">:</span> <span class="token string">&quot;warn&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 禁止使用特定类型</span>
    <span class="token property">&quot;@typescript-eslint/explicit-function-return-type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;warn&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 不允许对初始化为数字、字符串或布尔值的变量或参数进行显式类型声明</span>
    <span class="token property">&quot;@typescript-eslint/no-var-requires&quot;</span><span class="token operator">:</span> <span class="token string">&quot;warn&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 不允许在 import 语句中使用 require 语句</span>
    <span class="token property">&quot;@typescript-eslint/no-empty-function&quot;</span><span class="token operator">:</span> <span class="token string">&quot;warn&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 禁止空函数</span>
    <span class="token property">&quot;@typescript-eslint/no-use-before-define&quot;</span><span class="token operator">:</span> <span class="token string">&quot;warn&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 禁止在变量定义之前使用它们</span>
    <span class="token property">&quot;@typescript-eslint/ban-ts-comment&quot;</span><span class="token operator">:</span> <span class="token string">&quot;warn&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 禁止 @ts-&lt;directive&gt; 使用注释或要求在指令后进行描述</span>
    <span class="token property">&quot;@typescript-eslint/no-non-null-assertion&quot;</span><span class="token operator">:</span> <span class="token string">&quot;warn&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 不允许使用后缀运算符的非空断言(!)</span>
    <span class="token property">&quot;@typescript-eslint/explicit-module-boundary-types&quot;</span><span class="token operator">:</span> <span class="token string">&quot;warn&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 要求导出函数和类的公共类方法的显式返回和参数类型</span>
    <span class="token comment">// react (https://github.com/jsx-eslint/eslint-plugin-react)</span>
    <span class="token property">&quot;react-hooks/rules-of-hooks&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;react-hooks/exhaustive-deps&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;no-debugger&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;no-console&quot;</span><span class="token operator">:</span> <span class="token string">&quot;warn&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>npm run lint 你会得到类型的提示 ✔ No ESLint warnings or errors ✨ Done in 3.48s.</p><h2 id="prettier" tabindex="-1"><a class="header-anchor" href="#prettier" aria-hidden="true">#</a> Prettier</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm run   <span class="token operator">-</span><span class="token constant">D</span> prettier
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>同时我也推荐你安装 Prettier VS Code 插件 ，这样你不用依赖命令行工具就可以在 VS Code 中进行文件格式化。在你的项目中安装和配置它意味着 VSCode 将使用你项目的设置，因此仍然有必要在此处添加它。 我们将在根目录添加两个文件：</p><p>.prettierrc.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// @see: https://www.prettier.cn</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token comment">// 超过最大值换行</span>
	<span class="token literal-property property">printWidth</span><span class="token operator">:</span> <span class="token number">130</span><span class="token punctuation">,</span>
	<span class="token comment">// 缩进字节数</span>
	<span class="token literal-property property">tabWidth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
	<span class="token comment">// 使用制表符而不是空格缩进行</span>
	<span class="token literal-property property">useTabs</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token comment">// 结尾不用分号(true有，false没有)</span>
	<span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token comment">// 使用单引号(true单双引号，false双引号)</span>
	<span class="token literal-property property">singleQuote</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
	<span class="token comment">// 更改引用对象属性的时间 可选值&quot;&lt;as-needed|consistent|preserve&gt;&quot;</span>
	<span class="token literal-property property">quoteProps</span><span class="token operator">:</span> <span class="token string">&quot;as-needed&quot;</span><span class="token punctuation">,</span>
	<span class="token comment">// 在对象，数组括号与文字之间加空格 &quot;{ foo: bar }&quot;</span>
	<span class="token literal-property property">bracketSpacing</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token comment">// 多行时尽可能打印尾随逗号。（例如，单行数组永远不会出现逗号结尾。） 可选值&quot;&lt;none|es5|all&gt;&quot;，默认none</span>
	<span class="token literal-property property">trailingComma</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>
	<span class="token comment">// 在JSX中使用单引号而不是双引号</span>
	<span class="token literal-property property">jsxSingleQuote</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
	<span class="token comment">//  (x) =&gt; {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号 ,always：不省略括号</span>
	<span class="token literal-property property">arrowParens</span><span class="token operator">:</span> <span class="token string">&quot;avoid&quot;</span><span class="token punctuation">,</span>
	<span class="token comment">// 如果文件顶部已经有一个 doclock，这个选项将新建一行注释，并打上@format标记。</span>
	<span class="token literal-property property">insertPragma</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
	<span class="token comment">// 指定要使用的解析器，不需要写文件开头的 @prettier</span>
	<span class="token literal-property property">requirePragma</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
	<span class="token comment">// 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行</span>
	<span class="token literal-property property">proseWrap</span><span class="token operator">:</span> <span class="token string">&quot;preserve&quot;</span><span class="token punctuation">,</span>
	<span class="token comment">// 在html中空格是否是敏感的 &quot;css&quot; - 遵守CSS显示属性的默认值， &quot;strict&quot; - 空格被认为是敏感的 ，&quot;ignore&quot; - 空格被认为是不敏感的</span>
	<span class="token literal-property property">htmlWhitespaceSensitivity</span><span class="token operator">:</span> <span class="token string">&quot;css&quot;</span><span class="token punctuation">,</span>
	<span class="token comment">// 换行符使用 lf 结尾是 可选值&quot;&lt;auto|lf|crlf|cr&gt;&quot;</span>
	<span class="token literal-property property">endOfLine</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span>
	<span class="token comment">// 这两个选项可用于格式化以给定字符偏移量（分别包括和不包括）开始和结束的代码</span>
	<span class="token literal-property property">rangeStart</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token literal-property property">rangeEnd</span><span class="token operator">:</span> <span class="token number">Infinity</span><span class="token punctuation">,</span>
	<span class="token comment">// Vue文件脚本和样式标签缩进</span>
	<span class="token literal-property property">vueIndentScriptAndStyle</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>.prettierignore</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.prettierignore
.yarn
.next
dist
node_modules
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个文件中我列了一些目录，我不希望 prettier 在这些目录中浪费任何资源去进行格式化。你也可以使用类似 *.html 这样的方式去忽略你选择的文件类似 现在我们在 package.json 添加新的 script ，然后我们就可以运行 Prettier： package.json</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>
  &quot;scripts<span class="token operator">:</span> <span class="token punctuation">{</span>
    ...
    <span class="token property">&quot;prettier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;prettier --write .&quot;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以运行</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm run   prettier
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>自动格式化、修复和保存项目中你未忽略的所有文件。 默认情况下，我的格式化程序更新了大约 5 个文件。 你可以在 VS Code 左侧的源代码管理选项卡中的已更改文件列表中看到它们。</p>`,24),o=[p];function r(l,i){return s(),a("div",null,o)}const u=n(e,[["render",r],["__file","2.配置代码prettier检验.html.vue"]]);export{u as default};
