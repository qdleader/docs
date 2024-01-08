import{_ as e,o as n,c as i,d as s}from"./app-FRQgbCNf.js";const l={},d=s(`<ol><li></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>setTimeout(fn,wait)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const sleep = {
    sleepInPromise: function (time) {
        return new Promise((resolve, reject) =&gt; {
            setTimeout(resolve, time)
        })
    }
}

const targetFn = function() {
    console.log(&#39;一秒后执行)
}

sleep.sleepInPromise(1000).then(targetFn)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  const sleep = {
        sleepInGenerator: function*(time) {
            yield new Promise((resolve, reject) =&gt; {
                setTimeout(resolve, time)
            })
        }
    }
    const targetFn = function () {
        console.log(&#39;一秒后执行&#39;)
    }
    sleep.sleepInGenerator(1000).next().value.then(targetFn)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const sleep = {
    sleepInPromise: function (time) {
        return new Promise((resolve, reject) =&gt; {
            setTimeout(resolve, time)
        })
    }
}

const targetFn = function() {
    console.log(&#39;一秒后执行)
}

async function testAsync(time) {
    await sleep.sleepInPromise(time);
    targetFn()
}
testAsync(1000)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),t=[d];function a(r,v){return n(),i("div",null,t)}const u=e(l,[["render",a],["__file","实现sleep一秒的几种方式.html.vue"]]);export{u as default};
