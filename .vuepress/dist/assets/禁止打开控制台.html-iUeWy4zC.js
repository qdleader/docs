import{_ as e,o as n,c as i,d as s}from"./app-qTEUp92E.js";const d={},l=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//禁止F12键盘事件
   document.addEventListener(&#39;keydown&#39;, function (event) {
     return 123 != event.keyCode || (event.returnValue = false)
   });
   //禁止右键、选择、复制
   document.addEventListener(&#39;contextmenu&#39;, function (event) {
     return event.returnValue = false
   })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    function consoleOpenCallback2 () {
      document.body.innerHTML = &#39;年轻人，不要太好奇&#39;;
      window.close();
      window.location = &quot;about:blank&quot;;
    }

    setInterval(function () {
      const before = new Date();
      (function () { }).constructor(&quot;debugger&quot;)();
      // debugger;
      const after = new Date();
      const cost = after.getTime() - before.getTime();
      if (cost &gt; 100) {
        consoleOpenCallback2();
      }
    }, 1000);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[l];function a(c,r){return n(),i("div",null,t)}const u=e(d,[["render",a],["__file","禁止打开控制台.html.vue"]]);export{u as default};
