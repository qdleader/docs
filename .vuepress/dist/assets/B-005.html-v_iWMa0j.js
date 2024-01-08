import{_ as e,o as n,c as i,d}from"./app-xrgnhFxe.js";const s={},l=d(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for(var index=0;index&lt;5;index++){
  (function(){
    setTimeout(function(){
      console.log(index)
    },index*1000)
  })(index)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出 //5个5 //for循环没有块级作用域 循环结束index为5 setTimeout为异步操作等循环结束后再执行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for(var index=0;index&lt;5;index++){
  (function(index){
    setTimeout(function(){
      console.log(index)
    },index*1000)
  })(index)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出 0 1 2 3 4</p>`,4),t=[l];function a(c,r){return n(),i("div",null,t)}const o=e(s,[["render",a],["__file","B-005.html.vue"]]);export{o as default};
