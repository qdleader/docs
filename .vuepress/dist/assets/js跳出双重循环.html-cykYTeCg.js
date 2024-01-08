import{_ as e,o as n,c as i,d as l}from"./app-otDwoQZb.js";const s={},t=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let bool =false
 for (let index = 0; index &lt; config.length; index++) {
        const v = config[index]
 	for (let i = 0; i &lt; cache.length; i++) {
 		const e = cache[i]
 		if(e.prop===i.prop){
 			bool = true
 			break //跳出里面这层
 		}
 	}
 	if (bool) {
 		break//跳出外面这层
	}	
 }

当然你可以直接。return直接终止循环，但是同一个函数里面，如果还有后续操作就行不通了

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),d=[t];function c(a,r){return n(),i("div",null,d)}const o=e(s,[["render",c],["__file","js跳出双重循环.html.vue"]]);export{o as default};
