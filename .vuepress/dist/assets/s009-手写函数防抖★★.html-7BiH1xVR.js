import{_ as e,o as n,c as i,d as s}from"./app-G0TSq-iO.js";const l={},d=s(`<p>函数防抖，使用最多的场景是，打字搜索时候，在输入最后一次多少秒之后在触发，避免了频繁请求</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function debounce(fn,delay = 500) {
  let timer = null;
  return function() {
    if(timer) {
      clearInterval(timer)
    }
    timer = setTimeout(() =&gt; {
        fn.apply(this,arguments)
        timer = null;
    },delay)
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Input1.addEventListener(&#39;keyup&#39;,debounce(function(e) {
    console.log(e)
},200))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>立即执行版函数防抖</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function debounce(fn,wait) {
  let timer = null
  return function(){
    let context = this,args = arguments
    if(timer) {
      clearTimeout(timer)
    }
    let startNow = !timer
    timer = setTimeout(() =&gt;{
        timer = null
    },wait)
    if(startNow) {
        fn.apply(context,args)
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),t=[d];function a(r,v){return n(),i("div",null,t)}const u=e(l,[["render",a],["__file","s009-手写函数防抖★★.html.vue"]]);export{u as default};
