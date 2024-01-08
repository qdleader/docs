import{_ as e,o as i,c as n,d as s}from"./app-C59QzqDT.js";const l={},a=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let list = [1,2,3];

const square = num =&gt; {
    return new Promise((resolve,reject) =&gt; {
        setTimeout(() =&gt; {
            resolve(num * num)
        }, 1000)
    })
}
function test() {
    list.forEach(async x =&gt; {
        const res = await square(x);
        console.log(res)
    })
}
test()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一秒时候，同时输出 1 4 9</p><p>为什么会这样呢？</p><p>因为 forEach 中的函数 相当在while 循环里执行多个匿名函数</p><p>(async (x) =&gt; { const res = await = square(x); console.log(res) })(1)</p><p>(async (x) =&gt; { const res = await = square(x); console.log(res) })(2)</p><p>(async (x) =&gt; { const res = await = square(x); console.log(res) })(3)</p><p>他们之间是相互不影响的，所以会同时输出1，4，9</p><p>那么如何让改写呢？</p><p>方1</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>async function test() {
    for(let i = 0; i &lt; list.length; i ++){
        const res = await square(list[i])
        console.log(res)
    }
}
await test()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法 2</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>async function test() {
    for(let i in list){
        const res = await square(i)
        console.log(res)
    }
}
await test()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法3</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let promise = Promise.resolve();
function test(i) {
    if(i === list.length) return;
    promise = promise.then(async() =&gt; {
        const res = await square(list[i]);
        console.log(res)
    })
    test(i + 1)
}
test(0)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),d=[a];function t(r,c){return i(),n("div",null,d)}const u=e(l,[["render",t],["__file","循环中的setTimeout按顺序执行.html.vue"]]);export{u as default};
