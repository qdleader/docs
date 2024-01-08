import{_ as i,o as n,c as e,d as s}from"./app-G0TSq-iO.js";const d={},l=s(`<p>commit时候报错，Oops! Something went wrong! :(提交不上去</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git commit -m  &#39;修改打包配置&#39;
husky &gt; pre-commit (node v14.15.4)
Stashing changes... [started]
Stashing changes... [skipped]
→ No partially staged files found...
Running linters... [started]
Running tasks for src/**/*.{js,vue} [started]
eslint --fix [started]
eslint --fix [failed]
→
Running tasks for src/**/*.{js,vue} [failed]
→
Running linters... [failed]



× eslint --fix found some errors. Please fix them and try committing again.


Oops! Something went wrong! :(

ESLint: 5.15.3.
ESLint couldn&#39;t find a configuration file. To set up a configuration file for this project, please run:

eslint --init

ESLint looked for configuration files in E:\\20201010project\\common_admin\\src\\utils and its ancestors. If it found none, it then looked in your home directory.

If you think you already have a configuration file or if you need more help, please stop by the ESLint chat room: https://gitter.im/eslint/eslint
husky &gt; pre-commit hook failed (add --no-verify to bypass)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解决" tabindex="-1"><a class="header-anchor" href="#解决" aria-hidden="true">#</a> 解决</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git commit --no-verify -m &quot;添加登录名称配置&quot;  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),t=[l];function a(r,o){return n(),e("div",null,t)}const v=i(d,[["render",a],["__file","commit时候报错.html.vue"]]);export{v as default};
