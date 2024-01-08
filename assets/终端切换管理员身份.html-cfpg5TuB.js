import{_ as s,o,c as u,d}from"./app-tSvYcIf0.js";const e={},a=d('<h2 id="方法二-sudo-su" tabindex="-1"><a class="header-anchor" href="#方法二-sudo-su" aria-hidden="true">#</a> 方法二：sudo su</h2><blockquote><p>1、打开终端，直接输入命令：sudo su ，回车； 2、输入电脑开机密码，回车，就进入了管理员模式了； 3、如果想退出管理员模式，直接输入命令：exit 或者输入命令：logout，回车，即可回到普通用户模式。</p></blockquote><h2 id="方法二-sudo-i" tabindex="-1"><a class="header-anchor" href="#方法二-sudo-i" aria-hidden="true">#</a> 方法二：sudo -i</h2><blockquote><p>1、打开终端，直接输入命令：sudo -i ，回车； 2、输入电脑开机密码，回车，直接进入管理员模式了； 3、若想退出管理员模式，直接输入命令：exit 或者输入命令：logout，回车，即可回到普通用户模式。</p></blockquote><h3 id="接下来分享一下sudo-su和sudo-i的区别" tabindex="-1"><a class="header-anchor" href="#接下来分享一下sudo-su和sudo-i的区别" aria-hidden="true">#</a> 接下来分享一下sudo su和sudo -i的区别：</h3><p>sudo su：运行sudo命令给su命令提供权限，然后运行su命令；sudo su运行的结果进入的是/root目录下。 sudo -i：直接运行sudo命令直接加-i参数；sudo -i运行的结果进入的是当前用户的主目录下。</p><h3 id="再来分享一下su、sudo和sudo-i的区别" tabindex="-1"><a class="header-anchor" href="#再来分享一下su、sudo和sudo-i的区别" aria-hidden="true">#</a> 再来分享一下su、sudo和sudo -i的区别：</h3><p>su：切换到XX用户模式，提示输入的密码为切换后账户的账户密码，使用的命令行为：“su XX用户名称”(如果不加XX用户名称，系统默认为root账户)，无时间限制。</p><p>sudo：把普通用户暂时切换到超级用户(管理员用户)，并且执行超级用户权限，提示输入的密码是电脑的开机密码，但是有时间限制，一般默认时长是15分钟。</p><p>sudo -i：该命令是为了满足频繁执行只有超级用户(管理员用户)才能执行的权限，而且不用每次输入密码，提示输入的密码为电脑的开机密码，无时间限制。</p>',10),i=[a];function t(r,c){return o(),u("div",null,i)}const n=s(e,[["render",t],["__file","终端切换管理员身份.html.vue"]]);export{n as default};
