import{_ as s,o as n,c as a,d as e}from"./app-tSvYcIf0.js";const l={},i=e(`<h1 id="_1如何使用" tabindex="-1"><a class="header-anchor" href="#_1如何使用" aria-hidden="true">#</a> 1如何使用</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&gt;</span>安装
<span class="token operator">&gt;</span> npm install <span class="token operator">-</span>g less


#在项目中使用
<span class="token operator">&gt;</span>npm install less less<span class="token operator">-</span>loader <span class="token operator">--</span>save

修改webpack<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js文件，配置loader加载依赖，让其支持外部的less<span class="token punctuation">,</span>在原来的代码上添加



<span class="token comment">// 此种方法在控制台中标签样式显示的是style标签样式</span>
<span class="token punctuation">{</span>

<span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>

<span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;style-loader!css-loader!less-loader&quot;</span><span class="token punctuation">,</span>

<span class="token punctuation">}</span><span class="token punctuation">,</span>




    

<span class="token comment">// 可以在控制台中看到当前标签样式来自于哪个less文件,调试的时候可以设为true，上线后设为false。优化打包体积可以。</span>
<span class="token punctuation">{</span> 
    <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>

    <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;style-loader!css-loader!less-loader&quot;</span><span class="token punctuation">,</span>
　　
　　 options<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">sourceMap</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>

<span class="token punctuation">}</span>




<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">&quot;less&quot;</span> scoped<span class="token operator">&gt;</span>
	@<span class="token keyword">import</span> <span class="token string">&quot;@/static/hello.less&quot;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[i];function p(o,r){return n(),a("div",null,t)}const d=s(l,[["render",p],["__file","L001-less你快收了神通吧.html.vue"]]);export{d as default};
