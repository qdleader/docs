import{_ as s,o as n,c as a,d as e}from"./app-pokGQ7aS.js";const i={},t=e(`<p>我们打包时候执行完npm run build 之后 会生成一个dist</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  然后新建一个 分支 git checkout <span class="token operator">-</span>b feature<span class="token operator">-</span>outPage


  在新分支下删除除了dist 外的所有文件

  然后吧dist中的文件都复制出来到根目录下，把dist删除掉即可

  把index文件中的路径 加上<span class="token punctuation">.</span><span class="token operator">/</span>

   <span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;module&quot;</span> crossorigin src<span class="token operator">=</span><span class="token string">&quot;/assets/index.7de06274.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">&quot;stylesheet&quot;</span> href<span class="token operator">=</span><span class="token string">&quot;/assets/index.f3a4dcb2.css&quot;</span><span class="token operator">&gt;</span>

  改为

   <span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;module&quot;</span> crossorigin src<span class="token operator">=</span><span class="token string">&quot;./assets/index.7de06274.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">&quot;stylesheet&quot;</span> href<span class="token operator">=</span><span class="token string">&quot;./assets/index.f3a4dcb2.css&quot;</span><span class="token operator">&gt;</span>


  然后把 assets文件夹复制一份到assets里面

  然后把这个分支 push 上去


  在github 中 找到 settings <span class="token operator">-</span>》 pages


在 GitHub Pages 下面找到


找到 Build and deployment

Source 选择 Deploy from a branch

Branch 选择 我们的 feature<span class="token operator">-</span>outPage   然后保存

等一会就可以看到我们的站点了

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[t];function r(o,p){return n(),a("div",null,l)}const d=s(i,[["render",r],["__file","github上部署单页面应用.html.vue"]]);export{d as default};
