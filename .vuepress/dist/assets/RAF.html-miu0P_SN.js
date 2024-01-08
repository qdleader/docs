import{_ as e,o as i,c as n,d as l}from"./app-tgHnmF2J.js";const d={},s=l(`<p>RAF 是 what ？</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>RAF 是 HTML5新增的定时器requestAnimationFrame

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>一些关于动画的知识</p><blockquote><p>要想动画流畅，更新频率要60帧/s,即16.67ms</p></blockquote><blockquote><p>setTimeout 要手动控制频率，而RAF浏览器会自动控制</p></blockquote><blockquote><p>后台标签或隐藏在iframe中，RAF 会暂停， 而setTimeout依然可以执行</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//settimeout 写法
let oDiv = document.getElementById(&#39;oDiv&#39;);

let cWidth = 100;
let maxWidth = 500;

function animate() {
  let cWidth = cWidth + 3;
  oDiv.style.width = cWidth;
  if(cWidth &lt; maxWidth) {
    setTimeout(aminmate,16.7)
  }
}

animate()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>setTimeout 时间需要自己调整，调整不好会有卡顿。。</p><p>RAF会自动匹配浏览器最流畅模式。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// RAF
let oDiv = document.getElementById(&#39;oDiv&#39;);

let cWidth = 100;
let maxWidth = 500;

function animate() {
  let cWidth = cWidth + 3;
  oDiv.style.width = cWidth;
  if(cWidth &lt; maxWidth) {
    window.requestAnimationFrame(animate)
  }
}

animate()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有关RAF的面试题</p><p>用js实现一个无限循环的动画。</p><p>定时器 写法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let e = document.getElementById(&#39;e&#39;);
let flag = true;
let left = 0;

function render() {
  if(flag) {
    if(left &gt;= 100) {
      flag = false
    }
    e.style.left = \`\${left++}px\`
  } else {
    if(left &lt;= 0) {
      flag = true
    }
    e.style.left = \`\${left --}px\`
  }
}

setInterval(function() {
    render()
},1000/6)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>RAF 写法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let e = document.getElementById(&#39;e&#39;);
let flag = true;
let left = 0;

function render() {
  if(flag) {
    if(left &gt;= 100) {
      flag = false
    }
    e.style.left = \`\${left++}px\`
  } else {
    if(left &lt;= 0) {
      flag = true
    }
    e.style.left = \`\${left --}px\`
  }
}

(function loop() {
  render()
  window.requestAnimationFrame(loop)
})()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>##requestAnimationFrame 比起 setTimeout、setInterval的优势</p><blockquote><p>1、requestAnimationFrame 会把每一帧中的所有DOM操作集中起来，在一次重绘或回流中就完成，并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率，一般来说，这个频率为每秒60帧。 2、在隐藏或不可见的元素中，requestAnimationFrame将不会进行重绘或回流，这当然就意味着更少的的cpu，gpu和内存使用量。</p></blockquote><p>1、怎么停止requestAnimationFrame？是否有类似clearInterval这样的类似方法？</p><p>第一个问题：答案是确定的 必须有：cancelAnimationFrame()接收一个参数 requestAnimationFrame默认返回一个id，cancelAnimationFrame只需要传入这个id就可以停止了。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
let e = document.getElementById(&#39;e&#39;);
let flag = true;
let left = 0;

function render() {
  if(flag) {
    if(left &gt;= 100) {
      flag = false
    }
    e.style.left = \`\${left++}px\`
  } else {
    if(left &lt;= 0) {
      flag = true
    }
    e.style.left = \`\${left --}px\`
  }
}

(function animloop() {
     render();
     rafId = window.requestAnimationFrame(animloop);
     //如果left等于50 停止动画
     if(left == 50){
         window.cancelAnimationFrame(rafId)
     }
 })();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="兼容" tabindex="-1"><a class="header-anchor" href="#兼容" aria-hidden="true">#</a> 兼容</h2><blockquote><p>主流浏览器都支持 requestAnimationFrame ，但是有的仍需前缀。写本文的时候，加前缀的情况如下：</p></blockquote><blockquote><p>Opera: Opera 15 以后无前缀 Chrome: Chrome 24+ 无前缀 Safari: 有前缀 Firefox: 有前缀，Firefox 23+ 无前缀 IE: IE 10 以后无前缀</p></blockquote>`,24),a=[s];function v(t,r){return i(),n("div",null,a)}const u=e(d,[["render",v],["__file","RAF.html.vue"]]);export{u as default};
