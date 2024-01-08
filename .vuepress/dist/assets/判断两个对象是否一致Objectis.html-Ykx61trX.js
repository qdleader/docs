import{_ as e,o as s,c as i,d as n}from"./app-xrgnhFxe.js";const t={},l=n(`<p>console.log(Object.is(&#39;1&#39;, 1)); // Expected output: false</p><p>console.log(Object.is(NaN, NaN)); // Expected output: true</p><p>console.log(Object.is(-0, 0)); // Expected output: false</p><p>const obj = {}; console.log(Object.is(obj, {})); // Expected output: false</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// Case 1: Evaluation result is the same as using ===
Object.is(25, 25); // true
Object.is(&quot;foo&quot;, &quot;foo&quot;); // true
Object.is(&quot;foo&quot;, &quot;bar&quot;); // false
Object.is(null, null); // true
Object.is(undefined, undefined); // true
Object.is(window, window); // true
Object.is([], []); // false
const foo = { a: 1 };
const bar = { a: 1 };
const sameFoo = foo;
Object.is(foo, foo); // true
Object.is(foo, bar); // false
Object.is(foo, sameFoo); // true

// Case 2: Signed zero
Object.is(0, -0); // false
Object.is(+0, -0); // false
Object.is(-0, -0); // true

// Case 3: NaN
Object.is(NaN, 0 / 0); // true
Object.is(NaN, Number.NaN); // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[l];function d(o,a){return s(),i("div",null,c)}const r=e(t,[["render",d],["__file","判断两个对象是否一致Objectis.html.vue"]]);export{r as default};
