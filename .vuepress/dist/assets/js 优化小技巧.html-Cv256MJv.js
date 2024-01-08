import{_ as e,o as i,c as n,d as s}from"./app-qTEUp92E.js";const d={},l=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>if(x == &#39;yk&#39; || x == &#39;qdleader&#39; || x == &#39;dbj&#39;) {</p><p>} 优化为 if([&#39;yk&#39;,&#39;qdleader&#39;,&#39;dbj&#39;].includes(x)) {</p><p>}</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
2.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>let test; if(x &gt; 100) { test = true } else { test = false }</p><p>优化为 let test = x &gt; 100;</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>3. Null, Undefined, 空值检查
// 冗余
if (first !== null || first !== undefined || first !== &#39;&#39;) {
    let second = first;
}

// 简洁
let second = first || &#39;&#39;;


4. 函数条件调用
// 冗余
function test1() {
  console.log(&#39;test1&#39;);
};
function test2() {
  console.log(&#39;test2&#39;);
};
var test3 = 1;
if (test3 == 1) {
  test1();
} else {
  test2();
}

// 简单
(test3 === 1? test1:test2)();

5.

switch (data) {
    case 1:
    test1();
    break;

    case 2:
    test2();
    break;

    case 3:
    test3();
    break;

}


// 简洁
let data = {
    1:test1,
    2:test2,
    3:test3,
}

data[anything] &amp;&amp; data[anything]();

6. 幂乘
Math.pow(2,3)

较简单写法
2**3  // 8



9. 重复字符串多次
// 冗余
let test = &#39;&#39;;
for(let i = 0; i &lt; 5; i ++) {
  test += &#39;qdleader &#39;;
}

// 简洁
&#39;qdleader &#39;.repeat(5);


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),v=[l];function a(r,c){return i(),n("div",null,v)}const u=e(d,[["render",a],["__file","js 优化小技巧.html.vue"]]);export{u as default};
