import{_ as e,o as n,c as d,d as i}from"./app-xrgnhFxe.js";const a={},o=i(`<h2 id="window-onload和domcontentloaded区别" tabindex="-1"><a class="header-anchor" href="#window-onload和domcontentloaded区别" aria-hidden="true">#</a> window.onload和DOMContentLoaded区别？</h2><h2 id="解析" tabindex="-1"><a class="header-anchor" href="#解析" aria-hidden="true">#</a> 解析</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>window.addEventListener(&#39;load&#39;, function () {
    // 页面的全部资源加载完才会执行，包括图片视频等
})



document.addEventListener(&#39;DOMContentLoaded&#39;, function () {
    //DOM 渲染完即可执行，此时的图片视频可能还没有加载完
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="补充" tabindex="-1"><a class="header-anchor" href="#补充" aria-hidden="true">#</a> 补充</h3><p>当页面加载script时候会等到script里面内容加载完，再执行之后的dom的，</p><p>而页面加载到img时候，会直接执行后面的dom，不会等img里面资源加载完了再执行的。</p>`,6),t=[o];function s(l,r){return n(),d("div",null,t)}const v=e(a,[["render",s],["__file","window.onload和DOMContentLoaded区别.html.vue"]]);export{v as default};
