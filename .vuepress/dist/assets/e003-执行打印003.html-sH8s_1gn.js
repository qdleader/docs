import{_ as e,o as n,c as i,d as s}from"./app-G0TSq-iO.js";const l={},d=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
console.log(&#39;start&#39;)

setTimeout(()=&gt; {
    console.log(1)
    Promise.resolve().then(() =&gt; {
        console.log(2)
    })
},0)

new Promise(function(resolve,reject) {
    console.log(3)
    setTimeout(() =&gt; {
      console.log(4)
      resolve(5)
    },0)
}).then((res) =&gt; {
    console.log(7)
    setTimeout(() =&gt; {
      console.log(res)
    },0)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案：</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>start
3
1
2
4
7
5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="重点解析" tabindex="-1"><a class="header-anchor" href="#重点解析" aria-hidden="true">#</a> 重点解析</h2><p>打印完1之后打印2，一个seTimeout 算是一个宏任务，执行第一个setTimeout 时候会打印里面的同步代码1，执行完了后，在执行下一个宏任务setTimeout之后会执行，微任务 Promise.resolve().then(() =&gt; { console.log(2) })所以会打印2</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
console.log(&#39;start&#39;)

setTimeout(()=&gt; {
    console.log(1)
    Promise.resolve().then(() =&gt; {
        console.log(2)
    })
    setTimeout(()=&gt; {
      console.log(8)
    },0)
},0)

new Promise(function(resolve,reject) {
    console.log(3)
    setTimeout(() =&gt; {
      console.log(4)
      resolve(5)
    },0)
}).then((res) =&gt; {
    console.log(7)
    setTimeout(() =&gt; {
      console.log(res)
    },0)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="答案-1" tabindex="-1"><a class="header-anchor" href="#答案-1" aria-hidden="true">#</a> 答案：</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>start
3
1
2
4
7
8
5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),v=[d];function a(r,c){return n(),i("div",null,v)}const o=e(l,[["render",a],["__file","e003-执行打印003.html.vue"]]);export{o as default};
