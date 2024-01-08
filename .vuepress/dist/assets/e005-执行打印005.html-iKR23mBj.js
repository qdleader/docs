import{_ as n,o as e,c as i,d as s}from"./app-Ni1_oyYA.js";const l={},d=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>async function async1() {
  console.log(&#39;A&#39;)
  await async2()
  console.log(&#39;B&#39;)
}
async function async2() {
  console.log(&#39;C&#39;)
}
console.log(&#39;D&#39;)

setTimeout(function() {
  console.log(&#39;E&#39;)
})

async1()

new Promise(function(resolve) {
  console.log(&#39;F&#39;)
}).then(function() {
  console.log(&#39;G&#39;)
}).catch(() =&gt; {
    console.log(&#39;G2&#39;)
})

console.log(&#39;H&#39;)


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 同步代码
D
A
C
F
H
//微任务执行
B
undefined
// 宏任务执行
E
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>async function async1() {
  console.log(&#39;A&#39;)
  await async2()
  console.log(&#39;B&#39;)
}
async function async2() {
  console.log(&#39;C&#39;)
}
console.log(&#39;D&#39;)

setTimeout(function() {
  console.log(&#39;E&#39;)
})

async1()

new Promise(function(resolve) {
  console.log(&#39;F&#39;)
  resolve(1)
}).then(function() {
  console.log(&#39;G&#39;)
}).catch(() =&gt; {
    console.log(&#39;G2&#39;)
})

console.log(&#39;H&#39;)




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="答案-1" tabindex="-1"><a class="header-anchor" href="#答案-1" aria-hidden="true">#</a> 答案</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 同步代码
D
A
C
F
H
//微任务执行
B
G
undefined
// 宏任务执行
E
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3" tabindex="-1"><a class="header-anchor" href="#_3" aria-hidden="true">#</a> 3</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>setTimeout(function () {
  console.log(&quot;1&quot;);
}, 0);
async function async1() {
  console.log(&quot;2&quot;);
  const data = await async2();
  console.log(&quot;3&quot;);
  return data;
}
async function async2() {
  return new Promise((resolve) =&gt; {
    console.log(&quot;4&quot;);
    resolve(&quot;async2的结果&quot;);
  }).then((data) =&gt; {
    console.log(&quot;5&quot;);
    return data;
  });
}
async1().then((data) =&gt; {
  console.log(&quot;6&quot;);
  console.log(data);
});
new Promise(function (resolve) {
  console.log(&quot;7&quot;);
  // resolve()
}).then(function () {
  console.log(&quot;8&quot;);
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意8那的 // resolve() 注掉了</p><p>输出</p><p>247536 async2 的结果 1</p><h2 id="_4" tabindex="-1"><a class="header-anchor" href="#_4" aria-hidden="true">#</a> 4.</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>setTimeout(function () {
  console.log(&quot;1&quot;);
}, 0);
async function async1() {
  console.log(&quot;2&quot;);
  const data = await async2();
  console.log(&quot;3&quot;);
  return data;
}
async function async2() {
  return new Promise((resolve) =&gt; {
    console.log(&quot;4&quot;);
    resolve(&quot;async2的结果&quot;);
  }).then((data) =&gt; {
    console.log(&quot;5&quot;);
    return data;
  });
}
async1().then((data) =&gt; {
  console.log(&quot;6&quot;);
  console.log(data);
});
new Promise(function (resolve) {
  console.log(&quot;7&quot;);
   resolve()
}).then(function () {
  console.log(&quot;8&quot;);
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><p>2475836 async2 的结果 1</p>`,15),v=[d];function a(c,u){return e(),i("div",null,v)}const o=n(l,[["render",a],["__file","e005-执行打印005.html.vue"]]);export{o as default};
