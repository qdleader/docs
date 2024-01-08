import{_ as e,o as l,c as t,d as s}from"./app-tgHnmF2J.js";const n={},i=s(`<h2 id="字面量类型" tabindex="-1"><a class="header-anchor" href="#字面量类型" aria-hidden="true">#</a> 字面量类型</h2><p>例如</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let str1 = &#39;helloACN&#39;
const str2 = &#39;helloACN&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>大家可以猜一下，str1 是什么类型的，str2 是什么类型？</p><p>这里是正确答案： str1 的类型为 string 类型，str2 的类型为 helloACN类型</p><p>这是为啥呢？</p><p>str1 是一个变量(let)，它的值可以是任意字符串，所以类型为:string str2 是一个常量(const)，它的值不能变化只能是 &#39;helloACN&#39;，所以，它的类型为:&#39;helloACN&#39;</p><p>注意：此处的 &#39;helloACN&#39;，就是一个字面量类型，也就是说某个特定的字符串也可以作为 TS 中的类型 这时候就有人好奇了，那字面量类型有啥作用呢？ 字面量类型一般是配合联合类型一起使用的， 用来表示一组明确的可选值列表。 例如下面的例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type ProjectType = &#39;ACN&#39; | &#39;Alpha&#39;
// 声明一个类型，他的值 是 &#39;ACN&#39; 或者是 &#39;Alpha&#39;
let g1: ProjectType = &#39;ACN&#39; // 正确
let g2: ProjectType = &#39;Alpha&#39; // 正确
let g3: ProjectType = &#39;llll&#39; // 错误

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),a=[i];function r(d,c){return l(),t("div",null,a)}const p=e(n,[["render",r],["__file","字面量类型.html.vue"]]);export{p as default};
