import{_ as e,o as n,c as i,d as l}from"./app-1IAv0yAY.js";const s={},d=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
    // const aFunc = () =&gt; {
    //   return new Promise((resolve) =&gt; {
    //     setTimeout(() =&gt; {
    //       resolve(&#39;a&#39;)
    //     }, 1000)
    //   })
    // }
    // const bFunc = () =&gt; {
    //   return new Promise((resolve) =&gt; {
    //     setTimeout(() =&gt; {
    //       resolve(&#39;b&#39;)
    //     }, 1000)
    //   })
    // }

function* generator() {
    let result = yield aFunc();
    console.log(result);
    let other = yield bFunc();
    console.log(other);
}
myAwait(generator);

function myAwait(genner, ...args) {
    let iter = genner(...args); //得到生成器的迭代器
    return new Promise((resolve, reject) =&gt; {
        let result; //iter每次暂停时的结果
        //! inner就是在手动迭代iter
        let inner = function (yield) {
            result = iter.next(yield); //开始迭代 将这里的yield当作yield传入生成器
            if (result.done) {
                //迭代结束：
                resolve(result.value); //Promise结束
            } else {
                //如果没有结束 等到promise的结束继续递归
                return Promise.resolve(result.value).then((fulfilled) =&gt; {
                    inner(fulfilled);
                });
            }
        };
        inner(); //迭代器第一次不应该传入参数
    });
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>手写一个async/await的实现</p>`,3),r=[d];function v(a,c){return n(),i("div",null,r)}const u=e(s,[["render",v],["__file","S038-手写async，await的实现.html.vue"]]);export{u as default};
