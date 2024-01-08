import{_ as e,o as n,c as i,d as s}from"./app-tgHnmF2J.js";const l={},d=s(`<h3 id="判断一个对象有环引用" tabindex="-1"><a class="header-anchor" href="#判断一个对象有环引用" aria-hidden="true">#</a> 判断一个对象有环引用</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var obj = {
    a: {
        c: [
            1, 2
        ]
    },
    b: 1
}
obj.a.c.d = obj
console.log(cycleDetector(obj)) // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function cycleDetector(obj) {
    const arr = [obj]
    let flag = false

    function cycle(o) {
        const keys = Object.keys(o)
        for (const key of keys) {
            const temp = o[key]
            if (typeof temp === &#39;object&#39; &amp;&amp; temp !== null) {
                if (arr.indexOf(temp) &gt;= 0) {
                    flag = true
                    return
                }
                arr.push(temp)
                cycle(temp)
            }
        }
    }

    cycle(obj)

    return flag
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[d];function a(r,v){return n(),i("div",null,c)}const u=e(l,[["render",a],["__file","cold-003判断一个对象有环引用.html.vue"]]);export{u as default};
