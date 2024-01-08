import{_ as e,o as n,c as i,d as t}from"./app-otDwoQZb.js";const s={},l=t(`<p>##S009-随机生成指定长度的字符串</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function randomString(n) {
	let str = &#39;abcdefghijklmnopqrstuvwxyz9876543210&#39;
	let tmp = &#39;&#39;,
	i = 0,
	l = str.length;
	for(i = 0; i &lt; n; i ++) {
		tmp += str.charAt(Math.floor(Math.random()* l));
	}
	return tmp;
}

module.exports = randomString;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d=[l];function r(a,c){return n(),i("div",null,d)}const m=e(s,[["render",r],["__file","S009-随机生成指定长度的字符串.html.vue"]]);export{m as default};
