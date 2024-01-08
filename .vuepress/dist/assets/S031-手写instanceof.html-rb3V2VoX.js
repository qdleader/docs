import{_ as e,o as n,c as i,d as s}from"./app-gxPsN6Nl.js";const l={},t=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function myInstanceof(left, right) {
  while (true) {
    if (left === null) {
      return false;
    }
    if (left.__proto__ === right.prototype) {
      return true;
    }
    left = left.__proto__;
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),d=[t];function r(a,c){return n(),i("div",null,d)}const o=e(l,[["render",r],["__file","S031-手写instanceof.html.vue"]]);export{o as default};
