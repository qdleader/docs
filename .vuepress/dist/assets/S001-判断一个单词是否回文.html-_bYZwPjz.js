import{_ as e,o as n,c as i,d as s}from"./app-FRQgbCNf.js";const d={},l=s(`<p>#S001-判断一个单词是否是回文？ 回文是指把相同的词汇或句子，在上下文中调换位置或颠倒过来，产生首尾回环的情趣，叫做回文，也叫回环。比如redivider</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function checkPalindrom(str) {
	return str == str.split(&#39;&#39;).reverse().join(&#39;&#39;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 去掉代码中空格
function checkPalindrom(str) {
  str = str.replace(/\\W/g, &#39;&#39;).toLowerCase();
  return (str == str.split(&#39;&#39;).reverse().join(&#39;&#39;));
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#方法2：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>思路：将单词换成字符串A，从后往前循环字符串A，将循环出来的字符拼接成新的字符串B，比较字符串A和B，得出结论。


function isPalindrome(x) {
	let str = x + &#39;&#39;;
	let newStr = &#39;&#39;;
	for(let i = str.length - 1; i &gt;= 0; i --) {
		newStr += str[i]
	}
	return newStr === str;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#方法3：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
/**
 * 以中间数为节点，判断左右两边首尾是否相等
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
  x = &#39;&#39; + x
  for(let i = 0 ; i &lt; x.length/2; i++) {
    if (x[i] !== x[x.length - i - 1]) {
      return false
    }
  }
  return true
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),r=[l];function t(a,v){return n(),i("div",null,r)}const u=e(d,[["render",t],["__file","S001-判断一个单词是否回文.html.vue"]]);export{u as default};
