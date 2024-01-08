import{_ as e,o as i,c as t,d as n}from"./app-C59QzqDT.js";const s={},l=n(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let i;
for (i = 0; i &lt; 3; i ++) {
	const log = () =&gt; {
		console.log(i)
	}
	setTimeout(log,100);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#答案： 3 3 3</p><p>#解析：</p><p>for() 迭代3次，在每次迭代时候，都会创建一个新函数log，log函数捕获变量i，然后， setTimeout()调度log()的执行。</p><p>当for循环完成时候变量i的值为3.</p><p>100ms后setTimeout调用的3 个 log() 回调。log() 读取变量 i 的当前值，即 3。</p>`,6),o=[l];function d(c,a){return i(),t("div",null,o)}const m=e(s,[["render",d],["__file","B-001.html.vue"]]);export{m as default};
