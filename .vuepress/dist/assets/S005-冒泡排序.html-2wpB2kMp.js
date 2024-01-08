import{_ as e,o as t,c as i,d as n}from"./app-pokGQ7aS.js";const r={},l=n(`<p>S005-冒泡排序</p><p>冒泡排序就是依次比较大小，小的大的进行位置上的交换。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function bubbleSort(arr) {
	for(let i = 0; i &lt; arr.length - 1; i ++) {
		for(let j = i + 1; j &lt; arr.length; j ++) {
			if(arr[i] &gt; arr[j]) {
				let tem = arr[i];
				arr[i] = arr[j];
				arr[j] = tem;
			}
		}
	}
	return arr;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>module.exports = bubbleSort;</p>`,4),s=[l];function a(d,c){return t(),i("div",null,s)}const u=e(r,[["render",a],["__file","S005-冒泡排序.html.vue"]]);export{u as default};
