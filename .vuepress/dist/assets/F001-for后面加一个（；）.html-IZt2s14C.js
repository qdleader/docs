import{_ as e,o as n,c as i,d as s}from"./app-qTEUp92E.js";const l={},d=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const length = 4;
const number = [];
for(var i = 0; i &lt; length; i ++); {
	numbers.push(i + 1)
}

number;  // =&gt; ?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#答案是: [5]</p><p>#解析：</p><blockquote><p>上面for后面加上分号，js会认为语句结束，所以for循环执行了四次空语句，当退出循环的时候，此时的i值为4. 然后执行{ numbers.push(i + 1)};最终numbers内容只有一个数字5.</p></blockquote><p>相当于：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const length = 4;
const numbers = [];
for(var i = 0; i &lt; length; i ++) {
	//do nothing
}


{
	numbers.push(i + 1)
}


numbers; //=&gt; [5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),r=[d];function t(a,c){return n(),i("div",null,r)}const u=e(l,[["render",t],["__file","F001-for后面加一个（；）.html.vue"]]);export{u as default};
