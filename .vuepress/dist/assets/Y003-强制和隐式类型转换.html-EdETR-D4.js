import{_ as e,o as n,c as i,d as l}from"./app-qTEUp92E.js";const s={},a=l(`<h2 id="强制" tabindex="-1"><a class="header-anchor" href="#强制" aria-hidden="true">#</a> 强制:</h2><p>parseInt(), parseFloat(),toString(), Number(), Boolean(), String(),Math.round() Math.round():严格转换，不允许出现任何非数字的字符，否则NaN；取最接近的整数。 Number():严格转换，不允许出现任何非数字的字符，否则NaN；直接转换</p><h2 id="隐式" tabindex="-1"><a class="header-anchor" href="#隐式" aria-hidden="true">#</a> 隐式:</h2><p>if, 逻辑运算, == ,|| &amp;&amp;, + - !</p><h2 id="常见解析" tabindex="-1"><a class="header-anchor" href="#常见解析" aria-hidden="true">#</a> 常见解析</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 1.parseInt() 把值转换成整数
parseInt(&quot;1234blue&quot;); // 1234
parseInt(&quot;0xA&quot;); // 10
parseInt(&quot;22.5&quot;); // 22
parseInt(&quot;blue&quot;); // NaN
// parseInt()方法还有基模式，可以把二进制、八进制、十六进制或其他任何进制的字符串转换成整数。基是由parseInt()方法的第二个参数指定的，示例如下：
parseInt(&quot;AF&quot;, 16); // 175
parseInt(&quot;10&quot;, 2); // 2
parseInt(&quot;10&quot;, 8); // 8
parseInt(&quot;10&quot;, 10); // 10
// 如果十进制数包含前导0，那么最好采用基数10，这样才不会意外地得到八进制的值。例如：
parseInt(&quot;010&quot;); // 8
parseInt(&quot;010&quot;, 8); // 8
parseInt(&quot;010&quot;, 10); // 10

// 2.parseFloat() 把值转换成浮点数,没有基模式
parseFloat(&quot;1234blue&quot;); // 1234.0
parseFloat(&quot;0xA&quot;); // NaN
parseFloat(&quot;22.5&quot;); // 22.5
parseFloat(&quot;22.34.5&quot;); // 22.34
parseFloat(&quot;0908&quot;); // 908
parseFloat(&quot;blue&quot;); // NaN

// 3.Number() 把给定的值转换成数字（可以是整数或浮点数）,Number()的强制类型转换与parseInt()和parseFloat()方法的处理方式相似，只是它转换的是整个值，而不是部分值。示例如下：
Number(false) // 0
Number(true) // 1
Number(undefined) // NaN
Number(null) // 0
Number(&quot;5.5&quot;) // 5.5
Number(&quot;56&quot;) // 56
Number(&quot;5.6.7&quot;) // NaN
Number(new Object()) // NaN
Number(100) // 100

// 4.Boolean() 把给定的值转换成Boolean型
Boolean(&quot;&quot;); // false
Boolean(&quot;hi&quot;); // true
Boolean(100); // true
Boolean(null); // false
Boolean(0); // false
Boolean(new Object()); // true

// 5.String() 把给定的值转换成字符串
String(123) // &quot;123&quot;

// 6. + -
console.log(0 + &#39;1&#39;) // &quot;01&quot;
console.log(2 - &#39;1&#39;) // 1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>if()语句中的条件判断表达式 for(..; ..; ..)语句中的条件判断表达式 while()和do .. while() ? : 中的条件判断表达式 逻辑运算符||和&amp;&amp;左边的操作数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>undefined
null
false
+0、-0和NaN
&quot;&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假值列表以外的都应该是真值</p><h2 id="抽象相等" tabindex="-1"><a class="header-anchor" href="#抽象相等" aria-hidden="true">#</a> 抽象相等</h2><blockquote><p>ES5规范11.9.3节的“抽象相等比较算法”定义了==运算符的行为。该算法简单而又全面，涵盖了所有可能出现的类型组合，以及它们进行强制类型转换的方式。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>比较运算x==y, 其中x和 y是值，产生true或者false。这样的比较按如下方式进行：
	1. 若Type(x)与Type(y)相同， 则
		a. 若Type(x)为Undefined， 返回true。
		b. 若Type(x)为Null， 返回true。
		c. 若Type(x)为Number， 则
			i. 若x为NaN， 返回false。
			ii. 若y为NaN， 返回false。
			iii. 若x与y为相等数值， 返回true。
			iv. 若x 为 +0 且 y为−0， 返回true。
			v. 若x 为 −0 且 y为+0， 返回true。
			vi. 返回false。
		d. 若Type(x)为String, 则当x和y为完全相同的字符序列（长度相等且相同字符在相同位置）时返回true。 否则， 返回false。
		e. 若Type(x)为Boolean, 当x和y为同为true或者同为false时返回true。 否则， 返回false。
		f. 当x和y为引用同一对象时返回true。否则，返回false。
	2. 若x为null且y为undefined， 返回true。
	3. 若x为undefined且y为null， 返回true。
	4. 若Type(x) 为 Number 且 Type(y)为String， 返回comparison x == ToNumber(y)的结果。
	5. 若Type(x) 为 String 且 Type(y)为Number，返回比较ToNumber(x) == y的结果。
	6. 若Type(x)为Boolean， 返回比较ToNumber(x) == y的结果。
	7. 若Type(y)为Boolean， 返回比较x == ToNumber(y)的结果。
	8. 若Type(x)为String或Number，且Type(y)为Object，返回比较x == ToPrimitive(y)的结果。
	9. 若Type(x)为Object且Type(y)为String或Number， 返回比较ToPrimitive(x) == y的结果。
  10. 返回false。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常见易错题" tabindex="-1"><a class="header-anchor" href="#常见易错题" aria-hidden="true">#</a> 常见易错题</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>null == undefined   //true

[]==![]   // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0 == &#39;\\n&#39;   //true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>==最容易出错的一个地方是true和false与其他类型之间的相等比较。
var a = &#39;42&#39;
var b = true
a == b  //false

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>复制代码结果是false，这让人很容易掉坑里。如果严格按照“抽象相等比较算法”，这个结果也就是意料之中的。</p></blockquote><blockquote><p>若Type(y)为Boolean， 返回比较x == ToNumber(y)的结果，即返回&#39;42&#39; == 1，结果为false。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;0&quot; == false    // true
false == 0      // true
false == &quot;&quot;     // true
false == []     // true
&quot;&quot; == 0          // true
&quot;&quot; == []         // true
0 == []          // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果两边的值中有true或者false，千万不要使用== 如果两边的值中有[]、&quot;&quot;、或者0，尽量不要使用==</p><p>隐式强制转换在部分情况下确实很危险，为了安全起见就要使用===</p>`,21),d=[a];function u(t,r){return n(),i("div",null,d)}const c=e(s,[["render",u],["__file","Y003-强制和隐式类型转换.html.vue"]]);export{c as default};
