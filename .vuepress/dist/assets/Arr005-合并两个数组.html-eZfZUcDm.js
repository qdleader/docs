import{_ as e,o as n,c as i,d as l}from"./app-C59QzqDT.js";const r={},s=l(`<p>有规律的合并两个数组</p><p>[&#39;A1&#39;,&#39;A2&#39;,&#39;A3&#39;,&#39;B1&#39;,&#39;C1&#39;,&#39;D1&#39;] [&quot;A&quot;,&quot;B&quot;,&quot;C&quot;,&quot;D&quot;] 合并为 [&#39;A1&#39;, &#39;A2&#39;, &#39;A3&#39;, &#39;A&#39;, &#39;B1&#39;, &#39;B&#39;, &#39;C1&#39;, &#39;C&#39;, &#39;D1&#39;, &#39;D&#39;]</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let arr1= [&#39;A1&#39;,&#39;A2&#39;,&#39;A3&#39;,&#39;B1&#39;,&#39;C1&#39;,&#39;D1&#39;]
let arr2 = [&quot;A&quot;,&quot;B&quot;,&quot;C&quot;,&quot;D&quot;]
function combile(arr1,arr2) {
    let result = arr1;
    let currentIndex = 0;
    for (let i = 0; i &lt; arr2.length; i++) {
        const reg = new RegExp(arr2[i]);
        while (currentIndex &lt; result.length) {
            currentIndex++;
            if(!reg.test(arr1[currentIndex])) {
                result.splice(currentIndex,0,arr2[i])
                break;
            }
        }
    }
    return result;
}
console.log(combile(arr1,arr2));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法二：</p><p>遍历数组一</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function combile(arr1,arr2) {
    let result = [];
    let j = 0;
    let ele = arr2[j];
    for(let i = 0; i &lt; arr1.length; i ++) {
        if(ele === arr1[i].charAt(0)) {
            result.push(arr1[i])
        } else {
            result.push(ele);
            result.push(arr1[i])
            ++ j;
            ele = arr2[j]
        }
        if(i === arr1.length - 1) {
            result.push(ele)
        }
    }
    return result
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),d=[s];function t(a,u){return n(),i("div",null,d)}const c=e(r,[["render",t],["__file","Arr005-合并两个数组.html.vue"]]);export{c as default};
