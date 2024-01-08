import{_ as e,o as n,c as l,d as i}from"./app-Ni1_oyYA.js";const s={},d=i(`<p>题目描述：给你一个对象，统计一下它的层数</p><p>const obj = { a: { b: [1] }, c: { d: { e: { f: 1 } } } }</p><p>console.log(loopGetLevel(obj)) // 4</p><p>实现如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function loopGetLevel(obj) {
    var res = 1;

    function computedLevel(obj, level) {
        var level = level ? level : 0;
        if (typeof obj === &#39;object&#39;) {
            for (var key in obj) {
                if (typeof obj[key] === &#39;object&#39;) {
                    computedLevel(obj[key], level + 1);
                } else {
                    res = level + 1 &gt; res ? level + 1 : res;
                }
            }
        } else {
            res = level &gt; res ? level : res;
        }
    }
    computedLevel(obj)

    return res
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),v=[d];function c(r,a){return n(),l("div",null,v)}const t=e(s,[["render",c],["__file","cold-004判断一个对象的层数.html.vue"]]);export{t as default};
