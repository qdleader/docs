import{_ as e,o as n,c as i,d as l}from"./app-tSvYcIf0.js";const s={},d=l(`<p>//手写函数节流，</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function throttle(fn,delay = 100) {
  let timer = null;

  return function() {
    let ctx = this;
    if(timer) {
      return
    }
      timer = setTimeout(() =&gt; {
          fn.apply(ctx,arguments)
          timer = null;
      },delay)
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数节流使用的挺多场景就是，拖拽</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>div1.addEventListener(&#39;drag&#39;,throttle(function(e) {
    console.log(e.offsetX)
},200))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function throttle(fn,delay) {
  let timer = null;
  let start = Date.now();
  return function() {
    let nowTime = Date.now();
    let left = delay - (nowTime - start);
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    if(left &lt;= 0) {
      fn.apply(context,agrs)
      start = Date.now();
    } else {
      timer = setTimeout(fn,left)
    }
  }
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
function throttle(fn, delay){
    let that = this
    let lastTime = 0
    return function() {
        let nowTime = new Date().getTime()
        if(nowTime - lastTime &lt; delay) return // 两次时间间隔比设定的delay则return
        let arg = arguments // 此处为fn函数的参数
        fn.apply(that, arg)
        lastTime = nowTime // 把当前时间赋值给lastTime
    }
}



function test(a,b) {
    console.log(a,b)
}

let throttleTest = throttle(test, 1000)

window.onscroll = function(e) {
    throttleTest(1,2)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),t=[d];function a(v,r){return n(),i("div",null,t)}const u=e(s,[["render",a],["__file","s008-手写函数节流★★.html.vue"]]);export{u as default};
