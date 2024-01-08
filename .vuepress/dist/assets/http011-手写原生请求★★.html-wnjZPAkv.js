import{_ as e,o as n,c as i,d as s}from"./app-FRQgbCNf.js";const d={},l=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const xhr = new XMLHttpRequest();
xhr.open(&quot;POST&quot;,&#39;/login&#39;, true);  //true代表异步，false代表同步
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4) {
    if(xhr.status === 200) {
      console.log(xhr.responseText)
    }
  }
}

const data = {
  userName:&#39;qdleader&#39;
}

xhr.send(JSON.stringify(data))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>稍微完善版</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
var xhr=null;
if(window.XMLHttpRequest){
    xhr=new xmlHttpRequest();
}
else if(window.ActiveXObject){
    xhr=new ActiveXObject(&quot;Micosoft.XMLHTTP&quot;);
}
else{
    xhr=null:
}
if(xhr){
    xhr.open(&quot;GET&quot;,url);
    xhr.onreadyStatechange=function(){
    if(xhr.readystate==4&amp;&amp;xhr.status==200){
        console.log(xhr.data):
        }
        xhr=null;
    };
    xhr.send();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="延伸" tabindex="-1"><a class="header-anchor" href="#延伸" aria-hidden="true">#</a> 延伸</h1><p>xhr.status 的一些典型的错误</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2xx -- 请求成功
3xx -- 需要重定向，浏览器跳转301， 302 ， 304
4xx -- 客户端错误 404 403
5xx -- 服务端错误
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>xhr.readyState （了解即可）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0 -- (未初始化) 还没有调用send()方法

1 -- (载入) 已调用send()方法，正在发送请求

2 -- （载入完成） send方法执行完成，已接收到全部响应内容

3 -- （交互）正在解析响应内容。

4 -- （完成）响应内容解析完成，可以在客户端调用

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),a=[l];function r(v,t){return n(),i("div",null,a)}const u=e(d,[["render",r],["__file","http011-手写原生请求★★.html.vue"]]);export{u as default};
