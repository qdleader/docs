import{_ as i,o as e,c as n,d as a}from"./app-xrgnhFxe.js";const d={},s=a(`<h2 id="一、什么是tag" tabindex="-1"><a class="header-anchor" href="#一、什么是tag" aria-hidden="true">#</a> 一、什么是tag</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tag是git版本库的一个标记，指向某个commit的指针。

tag主要用于发布版本的管理，一个版本发布之后，我们可以为git打上 v.1.0.1 v.1.0.2 ...这样的标签。

tag感觉跟branch有点相似，但是本质上和分工上是不同的：

tag 对应某次commit, 是一个点，是不可移动的。
branch 对应一系列commit，是很多点连成的一根线，有一个HEAD 指针，是可以依靠 HEAD 指针移动的。
所以，两者的区别决定了使用方式，改动代码用 branch ,不改动只查看用 tag。
tag 和 branch 的相互配合使用，有时候起到非常方便的效果，例如：已经发布了 v1.0 v2.0 v3.0 三个版本，这个时候，我突然想不改现有代码的前提下，在 v2.0 的基础上加个新功能，作为 v4.0 发布。就可以检出 v2.0 的代码作为一个 branch ，然后作为开发分支。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、tag的简单使用" tabindex="-1"><a class="header-anchor" href="#二、tag的简单使用" aria-hidden="true">#</a> 二、tag的简单使用</h2><h3 id="_1-创建tag" tabindex="-1"><a class="header-anchor" href="#_1-创建tag" aria-hidden="true">#</a> 1.创建tag：</h3><p>创建 tag 是基于本地分支的 commit，而且与分支的推送是两回事，就是说分支已经推送到远程了，但是你的 tag 并没有，如果把 tag 推送到远程分支上，需要另外执行 tag 的推送命令。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git tag &lt;tagName&gt; //创建本地tag

git push origin &lt;tagName&gt; //推送到远程仓库

若存在很多未推送的本地标签，你想一次全部推送的话：

git push origin --tags


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上是基于本地当前分支的最后的一个commit 创建的 tag ，但是如果不想以最后一个，只想以某一个特定的提交为tag ，也是可以的，只要你知道commit 的id。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git log --pretty=oneline //查看当前分支的提交历史 里面包含 commit id

git tag -a &lt;tagName&gt; &lt;commitId&gt;


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-查看标签" tabindex="-1"><a class="header-anchor" href="#_2-查看标签" aria-hidden="true">#</a> 2.查看标签</h3><p>查看本地某个 tag 的详细信息：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git show &lt;tagName&gt;


查看本地所有 tag：

git tag 或者 git tag -l

查看远程所有 tag：

git ls-remote --tags origin

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-删除标签" tabindex="-1"><a class="header-anchor" href="#_3-删除标签" aria-hidden="true">#</a> 3.删除标签</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>本地 tag 的删除：

git tag -d &lt;tagName&gt;

远程 tag 的删除：

git push origin :&lt;tagName&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-检出标签" tabindex="-1"><a class="header-anchor" href="#_4-检出标签" aria-hidden="true">#</a> 4.检出标签</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
git checkout -b &lt;branchName&gt; &lt;tagName&gt;

因为 tag 本身指向的就是一个 commit，所以和根据commit id 检出分支是一个道理。

但是需要特别说明的是，如果我们想要修改 tag检出代码分支，那么虽然分支中的代码改变了，但是 tag标记的 commit还是同一个，标记的代码是不会变的，这个要格外的注意。

其它

命令git tag -a &lt;tagname&gt; -m &quot;XXX...&quot; 可以指定标签信息。

命令git tag -a v0.1.0 -m &quot;release 0.1.0 version&quot; 创建附注标签。

命令git checkout [tagname] 切换标签。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),t=[s];function l(v,r){return e(),n("div",null,t)}const m=i(d,[["render",l],["__file","git打版本标签.html.vue"]]);export{m as default};
