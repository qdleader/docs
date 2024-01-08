import{_ as e,o as n,c as s,d as t}from"./app-1IAv0yAY.js";const a={},i=t(`<h2 id="手写-new-操作符" tabindex="-1"><a class="header-anchor" href="#手写-new-操作符" aria-hidden="true">#</a> 手写-new 操作符</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function myNew(fn, ...args) {
  let obj = Object.create(fn.prototype);
  let res = fn.call(obj, ...args);
  if (res &amp;&amp; (typeof res === &quot;object&quot; || typeof res === &quot;function&quot;)) {
    return res;
  }
  return obj;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用法如下：</p><p>// // function Person(name, age) { // // this.name = name; // // this.age = age; // // } // // Person.prototype.say = function() { // // console.log(this.age); // // }; // // let p1 = myNew(Person, &quot;yyy&quot;, 18); // // console.log(p1.name); // // console.log(p1); // // p1.say();</p>`,4),o=[i];function r(l,c){return n(),s("div",null,o)}const u=e(a,[["render",r],["__file","S022-手写new.html.vue"]]);export{u as default};
