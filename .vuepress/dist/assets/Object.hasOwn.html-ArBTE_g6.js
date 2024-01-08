import{_ as e,o as t,c as o,d as a}from"./app-xrgnhFxe.js";const c={},n=a(`<h3 id="object-hasown-obj-propkey" tabindex="-1"><a class="header-anchor" href="#object-hasown-obj-propkey" aria-hidden="true">#</a> Object.hasOwn(obj, propKey)</h3><p>Object.hasOwn() 方法是比 Object.prototype.hasOwnProperty() 方法更加 便捷 和 安全 的策略。 例如 Object.create(null) 创建一个不继承自 Object.prototype 的对象，使 hasOwnProperty 方法无法访问。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Object.create(null).hasOwnProperty(&quot;foo&quot;)
// Uncaught TypeError: Object.create(...).hasOwnProperty is not a function
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Object.hasOwn(obj, propKey) 使用案例。 let object = { foo: false } Object.hasOwn(object, &quot;foo&quot;) // true</p><p>let object2 = Object.create({ foo: true }) Object.hasOwn(object2, &quot;foo&quot;) // false</p><p>let object3 = Object.create(null) Object.hasOwn(object3, &quot;foo&quot;) // false</p>`,6),r=[n];function s(l,b){return t(),o("div",null,r)}const i=e(c,[["render",s],["__file","Object.hasOwn.html.vue"]]);export{i as default};
