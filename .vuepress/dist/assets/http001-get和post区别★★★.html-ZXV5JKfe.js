import{_ as e,o as t,c as i,d as l}from"./app-ZRLx3Eaw.js";const n={},a=l(`<h1 id="http001-get和post区别" tabindex="-1"><a class="header-anchor" href="#http001-get和post区别" aria-hidden="true">#</a> http001-get和post区别</h1><blockquote><ol><li>get是从服务器上获取数据，post是向服务器传送数据。</li></ol></blockquote><blockquote><ol start="2"><li>get是把参数数据队列加到提交表单的ACTION属性所指的URL中，值和表单内各个字段一一对应，在URL中可以看到。post是通过HTTP post机制，将表单内各个字段与其内容放置在HTML HEADER内一起传送到ACTION属性所指的URL地址。用户看不到这个过程。</li></ol></blockquote><blockquote><ol start="3"><li>对于get方式，服务器端用Request.QueryString获取变量的值，对于post方式，服务器端用Request.Form获取提交的数据。</li></ol></blockquote><blockquote><ol start="4"><li>get传送的数据量较小，不能大于2KB。</li></ol></blockquote><blockquote><p>post传送的数据量较大，一般被默认为不受限制。但理论上，IIS4中最大量为80KB，IIS5中为100KB。</p></blockquote><blockquote><ol start="5"><li>get安全性非常低，post安全性较高。但是执行效率却比Post方法好。</li></ol></blockquote><h2 id="建议" tabindex="-1"><a class="header-anchor" href="#建议" aria-hidden="true">#</a> 建议：</h2><p>1、get方式的安全性较Post方式要差些，包含机密信息的话，建议用Post数据提交方式；</p><p>2、在做数据查询时，建议用Get方式；而在做数据添加、修改或删除时，建议用Post方式</p><h1 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结：</h1><blockquote><p>GET在浏览器回退时是无害的，而POST会再次提交请求。 GET产生的URL地址可以被Bookmark，而POST不可以。 GET请求会被浏览器主动cache，而POST不会，除非手动设置。 GET请求只能进行url编码，而POST支持多种编码方式。 GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留。 GET请求在URL中传送的参数是有长度限制的，而POST么有。 对参数的数据类型，GET只接受ASCII字符，而POST没有限制。 GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息。 GET参数通过URL传递，POST放在Request body中。</p></blockquote><h1 id="高能预警" tabindex="-1"><a class="header-anchor" href="#高能预警" aria-hidden="true">#</a> 高能预警</h1><blockquote><p>GET和POST还有一个重大区别，简单的说：GET产生一个TCP数据包；POST产生两个TCP数据包。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>长的说：

对于GET方式的请求，浏览器会把http header和data一并发送出去，服务器响应200（返回数据）；

而对于POST，浏览器先发送header，服务器响应100 continue，浏览器再发送data，服务器响应200 ok（返回数据）。



也就是说，GET只需要汽车跑一趟就把货送到了，而POST得跑两趟，第一趟，先去和服务器打个招呼“嗨，我等下要送一批货来，你们打开门迎接我”，然后再回头把货送过去。



因为POST需要两步，时间上消耗的要多一点，看起来GET比POST更有效。因此Yahoo团队有推荐用GET替换POST来优化网站性能。但这是一个坑！跳入需谨慎。为什么？

1. GET与POST都有自己的语义，不能随便混用。

2. 据研究，在网络环境好的情况下，发一次包的时间和发两次包的时间差别基本可以无视。而在网络环境差的情况下，两次包的TCP在验证数据包完整性上，有非常大的优点。

3. 并不是所有浏览器都会在POST中发送两次包，Firefox就只发送一次。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="补充" tabindex="-1"><a class="header-anchor" href="#补充" aria-hidden="true">#</a> 补充</h2><p>说了半天http，http的,http全称小伙子你给我说一下： 当然是：<b>超文本协议传输</b>的啦</p>`,17),s=[a];function o(d,r){return t(),i("div",null,s)}const u=e(n,[["render",o],["__file","http001-get和post区别★★★.html.vue"]]);export{u as default};
