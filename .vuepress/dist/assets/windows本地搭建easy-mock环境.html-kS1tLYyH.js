import{_ as s,r as t,o as c,c as a,a as e,b as n,f as r,d}from"./app-G0TSq-iO.js";const p="/docs/assets/1-SmJBn_g1.jpg",i="/docs/assets/2-X7u-F7n9.jpg",_={},l=e("h4",{id:"windows本地搭建easy-mock环境",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#windows本地搭建easy-mock环境","aria-hidden":"true"},"#"),n(" windows本地搭建easy-mock环境")],-1),m=e("p",null,"起因：由于easy-mock官网很不稳定，所以想搭建自己本地的mock环境",-1),h=e("pre",null,[e("code",null,`   1、首先安装node.js 环境 (提供地址：https://nodejs.org/en/)

   2、下载mongoDB 

		
		
		下载时候选择图形化工具，挺好用的，下载完后打开界面如图
		![](windows本地搭建easy-mock环境_files/1.jpg)
		
		进来后因为没有设置密码直接点击，connect就可以
		
		然后你就连上啦。
`)],-1),k=e("p",null,"3、Redis安装",-1),u={href:"https://www.xp.cn/download.html",target:"_blank",rel:"noopener noreferrer"},w=d('<p><img src="'+p+'" alt=""> a 找到redis直接安装就可以。</p><p><img src="'+i+`" alt=""> 然后在首页点击启动就可以。</p><p>4、安装下载easy mock</p><pre><code>     使用git工具

    　   git clone https://github.com/easy-mock/easy-mock.git
</code></pre><p>cd easy-mock 　　　　npm install<br> 　　　　npm run build</p><pre><code>  安装完成后打开easy-mock文件夹下的config/default.json 
  检查：
   
    确定一致后，下载npm i -g cross-env pm2

   下载完成后运行环境变量  cross-env NODE_ENV=production pm2 start app.js

  ![](windows本地搭建easy-mock环境_files/3.jpg)
</code></pre><p>从http://localhost:7300/打开easymock 的页面 ，开始使用</p>`,7);function g(f,y){const o=t("ExternalLinkIcon");return c(),a("div",null,[l,m,h,k,e("p",null,[n("我推荐一个傻瓜式安装redis的方法。 首先下载phpstudy，"),e("a",u,[n("地址"),r(o)]),n("然后里面后好多你用的工具可以统一下载和管理。特别方便。 这里直接点立即下载就可以。")]),w])}const x=s(_,[["render",g],["__file","windows本地搭建easy-mock环境.html.vue"]]);export{x as default};
