import{_ as e,o as i,c as n,d as t}from"./app-xrgnhFxe.js";const s={},l=t(`<p>#s004-字符串中出现最多的字母？</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function findMax(str) {
	if(str.length == 1) {
		return str;
	}
	let charObj = {};
	for(let i = 0; i &lt; str.length; i ++) {
		if(!charObj[str.charAt(i)]) {
			charObj[str.charAt(i)] = 1;
		} else {
			charObj[str.charAt(i)] += 1;
		}
	}
	let maxChar = &#39;&#39;;
	maxValue = 1;
	for(var k in charObj) {
		if(charObj[k] &gt;= maxValue) {
			maxChar = k;
			maxValue = charObj[k];
		}
	}
	return maxChar;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>module.exports = findMax</p>`,3),a=[l];function r(d,c){return i(),n("div",null,a)}const u=e(s,[["render",r],["__file","S004统计一个字符串出现最多的字母.html.vue"]]);export{u as default};
