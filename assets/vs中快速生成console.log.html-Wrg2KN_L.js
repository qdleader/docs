import{_ as e,o as n,c as i,d as s}from"./app-tSvYcIf0.js";const o={},l=s(`<h1 id="vscode-中快速生成console-log" tabindex="-1"><a class="header-anchor" href="#vscode-中快速生成console-log" aria-hidden="true">#</a> vscode 中快速生成console.log()</h1><blockquote><p>文件 - 首选项 - 用户代码片段</p></blockquote><blockquote><p>选择javascript</p></blockquote><blockquote><p>可以看到有一段被注释的代码,我们将代码解除注释</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  // Place your snippets for javascript here. Each snippet is defined under a snippet name and has a prefix, body and
  // description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
  // $1, $2 for tab stops, $0 for the final cursor position, and \${1:label}, \${2:another} for placeholders. Placeholders with the
  // same ids are connected.
  // Example:
  &quot;Print to console&quot;: {
    &quot;prefix&quot;: &quot;c&quot;,
    &quot;body&quot;: [
      &quot;console.log($1, &#39;打印&#39;);&quot;,
      &quot;$2&quot;
    ],
    &quot;description&quot;: &quot;Log output to console&quot;
  }
}
&lt;!-- prefix:代码快捷键入口,这里设置cl,当我们在开发中输入cl后就会进入到这里的设置,配合tab健就可以生成console.log( , &#39;打印&#39;)

body表示代码的主体,需要设置的代码放在这里

$1表示生成代码后光标首次所在位置

$2写在这个位置,表示在生成console.log()后,代码后面会空出一行,并且表再次按tab键时,光标会转到$2的位置 --&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你在你打编辑器中，打个c然后tab就出来啦，一天怎么也能省个好多分钟。</p>`,6),d=[l];function t(a,c){return n(),i("div",null,d)}const u=e(o,[["render",t],["__file","vs中快速生成console.log.html.vue"]]);export{u as default};
