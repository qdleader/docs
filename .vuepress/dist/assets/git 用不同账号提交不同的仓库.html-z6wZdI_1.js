import{_ as i,o as e,c as n,d as s}from"./app-C59QzqDT.js";const l={},d=s(`<p>其实很简单，在每个仓库里面修改成局部的相应的username和email即可</p><p>git config user.name “Your_username”</p><p>git config user.email “Your_email”</p><p>这个是不会影响全局的，这样你就可以在这个仓库用这个账号直接提交，别的仓库用别的账号直接提交，不用来回登录换账号了，很好用</p><p>设置全局</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 1.查看git配置信息
$ git config --list




# 2.查看git用户名、密码、邮箱的配置
$ git config user.name
$ git config user.password
$ git config user.email


# 3.设置git用户名、密码、邮箱的配置
$ git config user.name &quot;freedom&quot;
$ git config user.password &quot;123456&quot;
$ git config user.email &quot;1548429568@qq.com&quot;
# 3.设置git用户名、密码、邮箱的配置（全局配置）
$ git config --global user.name 用户命
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),a=[d];function r(t,c){return e(),n("div",null,a)}const o=i(l,[["render",r],["__file","git 用不同账号提交不同的仓库.html.vue"]]);export{o as default};
