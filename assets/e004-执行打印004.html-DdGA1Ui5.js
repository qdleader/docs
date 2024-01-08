import{_ as e,o as n,c as i,d as s}from"./app-tSvYcIf0.js";const l={},d=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const p = function () {
  return new Promise((resolve, reject) =&gt; {
        const p1 = new Promise((resolve, reject) =&gt; {
              setTimeout(() =&gt; {
                resolve(1)
              },0)
              resolve(2)
        })
        p1.then((res) =&gt; {
            console.log(res)
        })
        console.log(3)
        resolve(4)
    })
}

p().then((res) =&gt; {
    console.log(res);
})
console.log(5)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案：</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>5
3
2
4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),r=[d];function a(v,c){return n(),i("div",null,r)}const o=e(l,[["render",a],["__file","e004-执行打印004.html.vue"]]);export{o as default};
