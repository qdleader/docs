import{_ as e,o as t,c as s,d as i}from"./app-otDwoQZb.js";const o={},a=i('<h2 id="github-生成-personal-access-token" tabindex="-1"><a class="header-anchor" href="#github-生成-personal-access-token" aria-hidden="true">#</a> github 生成 Personal Access Token</h2><p>1、github –&gt; 头像 –&gt; Settings –&gt; Developer settings –&gt; Personal access tokens –&gt; Generate new token</p><h1 id="_2-github-设置-github-webhooks-具体需要持续集成的项目" tabindex="-1"><a class="header-anchor" href="#_2-github-设置-github-webhooks-具体需要持续集成的项目" aria-hidden="true">#</a> 2 github 设置 GitHub webhooks（具体需要持续集成的项目），</h1><p>到要构建的的项目下，settings -&gt; Webhooks</p><p>设置Payload URL IP + 端口 + github-webhook 如： http://118.12.14.42:8080/github-webhook</p><p>服务器 上安装git</p><p>// 监测是否安装了 git $ rpm -qa | grep git</p><p>// 安装 git $ yum install git -y</p>',8),n=[a];function h(_,r){return t(),s("div",null,n)}const g=e(o,[["render",h],["__file","jenkins _ GitHub 实现项目自动化部署.html.vue"]]);export{g as default};
