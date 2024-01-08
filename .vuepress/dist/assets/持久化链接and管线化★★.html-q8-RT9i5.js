import{_ as e,o as a,c as d,d as i}from"./app-xrgnhFxe.js";const n={},t=i(`<h1 id="持久化连接and管线化★★" tabindex="-1"><a class="header-anchor" href="#持久化连接and管线化★★" aria-hidden="true">#</a> 持久化连接and管线化★★</h1><h2 id="前端宽度拓展类" tabindex="-1"><a class="header-anchor" href="#前端宽度拓展类" aria-hidden="true">#</a> 前端宽度拓展类</h2><h2 id="持久连接" tabindex="-1"><a class="header-anchor" href="#持久连接" aria-hidden="true">#</a> 持久连接</h2><p>当使用keep-alive模式时候（又称持久连接），keep-alive模式使得客户端与服务器端连接持续有效。当对服务器的后继请求时， keep-alive模式避免了建立连接或重新建立连接。（持久连接在http1.1协议支持，1.0不支持）</p><h2 id="持久连接与非持久链接的区别" tabindex="-1"><a class="header-anchor" href="#持久连接与非持久链接的区别" aria-hidden="true">#</a> 持久连接与非持久链接的区别</h2><blockquote><p>1、持久连接，使得客户端到服务器端连接持续有效，避免了重新建立连接。</p></blockquote><blockquote><p>2.大大减少了连接的建立，以及关闭的时延，http 连接需要建立在tcp协议之上的，建立一条tcp连接需要三次握手，tcp连接的断开需要四次挥手，这都是时间。</p></blockquote><h2 id="什么是管线化" tabindex="-1"><a class="header-anchor" href="#什么是管线化" aria-hidden="true">#</a> 什么是管线化？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>管线化机制必须通过持久连接完成，http1.1支持，http1.0 不支持。

在持久连接时，某个消息的传递类似于，

请求1 -》 响应1 -》 请求2 -》 响应2

管线化机制，某个消息的传递

请求1 -》 请求2 -》 请求3 -》 响应1 -》 响应2 -》 响应3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="那么持久链接和管线化的区别" tabindex="-1"><a class="header-anchor" href="#那么持久链接和管线化的区别" aria-hidden="true">#</a> 那么持久链接和管线化的区别？</h2><blockquote><p>1.持久连接的一个缺点是请求和响应式是顺序执行的，只有在请求1的响应收到之后才会发送请求2. 而管线化不需要等待上一次请求的响应就可以发送下一次请求。实现并行发送请求。</p></blockquote><blockquote><p>2.只有get和head请求可以进行管线化，而post有所限制。</p></blockquote><blockquote><p>3.初次建立连时候也不应启用管线机制，因为对方服务器不一定支持http1.1协议</p></blockquote><blockquote><p>4.http1.1要求服务器端支持管线化，但并不要求服务器端也对响应进行管线化处理， 只是要求对于管线化的请求不失败，并且很多服务器端对管线化支持也不是很好，chrome，firefox 默认并未开启管线化支持。</p></blockquote>`,14),c=[t];function r(l,s){return a(),d("div",null,c)}const h=e(n,[["render",r],["__file","持久化链接and管线化★★.html.vue"]]);export{h as default};
