import{_ as s,o as n,c as a,d as e}from"./app-tgHnmF2J.js";const p={},l=e(`<p>使用终端命令设置定时关机、重启、睡眠</p><p>举例说明：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>设定<span class="token number">2012</span>年<span class="token number">9</span>月<span class="token number">3</span>日<span class="token number">23</span><span class="token operator">:</span><span class="token number">15</span>分关机：

sudo shutdown <span class="token operator">-</span>h <span class="token number">1209032315</span>

设定<span class="token number">2012</span>年<span class="token number">9</span>月<span class="token number">3</span>日<span class="token number">23</span><span class="token operator">:</span><span class="token number">15</span>分重启：

sudo shutdown <span class="token operator">-</span>r <span class="token number">1209032315</span>

设定<span class="token number">2012</span>年<span class="token number">9</span>月<span class="token number">3</span>日<span class="token number">23</span><span class="token operator">:</span><span class="token number">15</span>分睡眠：

sudo shutdown <span class="token operator">-</span>s <span class="token number">1209032315</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相信大家都看懂了，命令的主体主要是 Shutdown，h/r/s 分别代表关机/重启/睡眠，然后在后面加上执行时间(yymmddhhmm)即可。</p><p>有些果迷可能还有问题：如果我想临时取消定时关机/睡眠/重启怎么办呢？其实也很简单，还是通过实例来说明。</p><p>比如，我们在终端中执行了2021年9月3日23:15分关机的命令，终端中会显示如下：</p><p>注意上面的 pid 57698，这是指当前运行的这个 shutdown 命令的进程号，如果要取消关机，只需要停止这个进程的运行就可以了。</p><p>命令为：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>sudo kill <span class="token number">57698</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9),r=[l];function c(o,i){return n(),a("div",null,r)}const d=s(p,[["render",c],["__file","命令行定时开关机.html.vue"]]);export{d as default};
