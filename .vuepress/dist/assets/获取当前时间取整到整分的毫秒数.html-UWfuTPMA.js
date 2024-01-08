import{_ as n,o as s,c as a,d as e}from"./app-tgHnmF2J.js";const t={},c=e(`<h1 id="获取当前时间取整到整分的毫秒数" tabindex="-1"><a class="header-anchor" href="#获取当前时间取整到整分的毫秒数" aria-hidden="true">#</a> 获取当前时间取整到整分的毫秒数</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>getCurrent() {
	let now = new Date();
	let year = now.getFullYear();      //年
	let m = now.getMonth() + 1;     //月
	let d = now.getDate();          //日
	let h = now.getHours();         //时
	let i = now.getMinutes();       //分
	let nowD = \`\${year}/\${m}/\${d} \${h}:\${i}\`;

	let nowDS = new Date(nowD).getTime();
	return nowDS
},

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取当天时间的0点 获取当天时间的59分59秒</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token comment">// 获取当前日期和时间</span>
  <span class="token keyword">const</span> currentDate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">// 创建一个新的日期对象，以避免修改原始对象</span>
  <span class="token keyword">const</span> endDate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>currentDate<span class="token punctuation">)</span>
  <span class="token keyword">const</span> startDate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>currentDate<span class="token punctuation">)</span>

  startDate<span class="token punctuation">.</span><span class="token function">setHours</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
  endDate<span class="token punctuation">.</span><span class="token function">setHours</span><span class="token punctuation">(</span><span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">59</span><span class="token punctuation">,</span> <span class="token number">59</span><span class="token punctuation">,</span> <span class="token number">999</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>startDate<span class="token punctuation">,</span>endDate<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[c];function p(o,i){return s(),a("div",null,l)}const r=n(t,[["render",p],["__file","获取当前时间取整到整分的毫秒数.html.vue"]]);export{r as default};
