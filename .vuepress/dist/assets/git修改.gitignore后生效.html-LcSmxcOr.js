import{_ as e,o as i,c as t,d as n}from"./app-qTEUp92E.js";const r={},a=n(`<p>在使用git的时候我们有时候需要忽略一些文件或者文件夹。我们一般在仓库的根目录创建.gitignore文件</p><p>在提交之前，修改.gitignore文件，添加需要忽略的文件。然后再做add  commit push 等</p><p>但是有时在使用过称中，需要对.gitignore文件进行再次的修改。这次我们需要清除一下缓存cache，才能是.gitignore 生效。</p><p>具体做法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git rm -r --cached .  #清除缓存
git add . #重新trace file
git commit -m &quot;update .gitignore&quot; #提交和注释
git push origin master #可选，如果需要同步到remote上的话
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就能够使修改后的.gitignore生效。</p>`,6),c=[a];function o(s,d){return i(),t("div",null,c)}const l=e(r,[["render",o],["__file","git修改.gitignore后生效.html.vue"]]);export{l as default};
