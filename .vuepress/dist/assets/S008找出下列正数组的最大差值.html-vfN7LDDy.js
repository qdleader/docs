import{_ as i,o as e,c as n,d as r}from"./app-pokGQ7aS.js";const t={},a=r(`<p>#s008 正数组的最大差值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function getMaxProfit(arr) {
	var minPrice = arr[0];
	var maxProfit = 0;
	for(var i = 0; i &lt; arr.length; i ++) {
		var currentPrice = arr[i];
		minPrice= Math.min(minPrice, currentPrice);
		var potentialProfit = currentPrice - minPrice;
		
		maxprofit = Math.max(maxProfit,potentialProfit);
	}
	return maxProfit
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),s=[a];function c(l,d){return e(),n("div",null,s)}const m=i(t,[["render",c],["__file","S008找出下列正数组的最大差值.html.vue"]]);export{m as default};
