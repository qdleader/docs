import{_ as e,o as n,c as d,d as i}from"./app-1IAv0yAY.js";const l={},s=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const name = &#39;qdleader&#39;
age = 18

console.log(delete name)
console.log(delete age)
console.log(typeof age)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>false
true
&quot;undefined&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解析：第一个 false 是因为 delete 只能删除对象上的属性，name 不是属性，所以删除失败。第二个 true 是因为我们不使用任何声明创建变量，它会被视作全局变量，挂载到 window 对象上面，等价于 delete window.age，所以删除成功。第三个 undefined 是因为 age 被删除了。</p>`,4),a=[s];function t(c,o){return n(),d("div",null,a)}const u=e(l,[["render",t],["__file","B013-变量输出类.html.vue"]]);export{u as default};
