import{_ as e,o as a,c as i,d as r}from"./app-tSvYcIf0.js";const s={},d=r(`<h1 id="restful-api" tabindex="-1"><a class="header-anchor" href="#restful-api" aria-hidden="true">#</a> restful api</h1><p>REST：英文representational state transfer直译为表现层状态转移，或者表述性状态转移；Rest是web服务的一种架构风格，一种设计风格，是一种思想；同时Rest不是针对某一种编程语言的。</p><h2 id="传统的api设计-把每一个url当做一个功能" tabindex="-1"><a class="header-anchor" href="#传统的api设计-把每一个url当做一个功能" aria-hidden="true">#</a> 传统的API设计： 把每一个url当做一个功能</h2><h2 id="restful-api设计-把每一个url-当做一个唯一的资源。" tabindex="-1"><a class="header-anchor" href="#restful-api设计-把每一个url-当做一个唯一的资源。" aria-hidden="true">#</a> restful API设计：把每一个url 当做一个唯一的资源。</h2><h2 id="restful-特点" tabindex="-1"><a class="header-anchor" href="#restful-特点" aria-hidden="true">#</a> restful 特点：</h2><h2 id="_1-不使用url参数" tabindex="-1"><a class="header-anchor" href="#_1-不使用url参数" aria-hidden="true">#</a> 1.不使用url参数</h2><h3 id="传统的api设计-api-list-pageindex-2" tabindex="-1"><a class="header-anchor" href="#传统的api设计-api-list-pageindex-2" aria-hidden="true">#</a> 传统的API设计：/api/list?pageIndex=2</h3><h3 id="restful-api设计-api-list-2" tabindex="-1"><a class="header-anchor" href="#restful-api设计-api-list-2" aria-hidden="true">#</a> Restful API设计: /api/list/2</h3><h2 id="_2-用method-表示操作类型" tabindex="-1"><a class="header-anchor" href="#_2-用method-表示操作类型" aria-hidden="true">#</a> 2.用method 表示操作类型</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>post /api/blog   （新建）

put/patch /api/blog/100（更新数据，用put多一些）

get  /api/blog/100 （获取数据）

delete api/blog/100 （删除数据）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-版本号" tabindex="-1"><a class="header-anchor" href="#_3-版本号" aria-hidden="true">#</a> 3.版本号</h2><p>我们会在url中保留版本号，并兼容多个版本</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/v1/users/{user_id}

/v2/users/{user_id}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-资源路径" tabindex="-1"><a class="header-anchor" href="#_4-资源路径" aria-hidden="true">#</a> 4. 资源路径</h2><p>URI 不能包含动词，只能是名词（命名名词时候用小写，数字，下划线区分多个单词）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>资源的路径应该从根到子依次如下:

/{resources}/{resource_id}/{sub_resources}/{sub_resource_id}/{sub_resource_property}

【POST】 /v1/users/{user_id}/roles/{role_id} // 添加用户的角色

有的时候，当一个资源变化难以使用标准的 RESTful API 来命名，可以考虑使用一些特殊的 actions 命名。

/{resources}/{resource_id}/actions/{action}

【PUT】 /v1/users/{user_id}/password/actions/modify // 密码修改


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-响应的参数" tabindex="-1"><a class="header-anchor" href="#_5-响应的参数" aria-hidden="true">#</a> 5.响应的参数</h2><p>json格式（code， data ，msg）</p><h2 id="_6-状态码" tabindex="-1"><a class="header-anchor" href="#_6-状态码" aria-hidden="true">#</a> 6.状态码</h2><p>使用适合的状态码很重要，而不应该全部都返回状态码 200</p><p>状态码，可根据以下标准按照项目扩展自身状态码：</p><p>200~299段 表示操作成功：</p><p>200 操作成功，正常返回</p><p>201 操作成功，已经正在处理该请求</p><p>300~399段 表示参数方面的异常</p><p>300 参数类型错误</p><p>301 参数格式错误</p><p>302 参数超出正常取值范围</p><p>303 token过期</p><p>304 token无效</p><p>400~499段 表示请求地址方面的异常：</p><p>400 找不到地址</p><p>500~599段 表示内部代码异常：</p><p>500 服务器代码异常</p>`,34),n=[d];function l(t,u){return a(),i("div",null,n)}const h=e(s,[["render",l],["__file","restful-api.html.vue"]]);export{h as default};
