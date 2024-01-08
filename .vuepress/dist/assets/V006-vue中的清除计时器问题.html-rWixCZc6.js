import{_ as e,o as i,c as n,d}from"./app-tgHnmF2J.js";const s={},t=d(`<h1 id="v006-vue中的清除计时器问题★" tabindex="-1"><a class="header-anchor" href="#v006-vue中的清除计时器问题★" aria-hidden="true">#</a> V006-vue中的清除计时器问题★</h1><p>1.有同学说我页面切来切去为什么就是没有触发destroyed呢，那我的定时器岂不是都清不了了，emm。。。。。。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>destroyed() {
	if(timer) {
		clearInterval(timer);
	}
},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不触发是正常的呀。</p><p>因为beforeDestory和destoryed是在节点销毁时候才会触发的，如果你切换路由时候没有用v-if控制显隐不触发也是正常的，一般那就不会触发。等你离开页面时候，才会触发。那他要不离开切了下路由还一直请求。。。 不！。，这不是我想要的。</p><p>那我写了个计时器还请不了了？</p><p>来来来，少年，我看你骨骼惊奇，传授你此法。。</p><p>判断当路由离开时候清除计时器。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    beforeRouteLeave(to, from, next){
         if(timer) {
            clearInterval(timer);
        }
        next();
    },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此法不好使你来砍我。。。</p>`,10),a=[t];function r(l,c){return i(),n("div",null,a)}const u=e(s,[["render",r],["__file","V006-vue中的清除计时器问题.html.vue"]]);export{u as default};
