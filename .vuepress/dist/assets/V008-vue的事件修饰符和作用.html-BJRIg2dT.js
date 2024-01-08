import{_ as u,o as a,c as r,a as n,g as c,b as l,h as s,v as d,d as v}from"./app-G0TSq-iO.js";const o={},m=v(`<p>##vue的事件修饰符和作用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>	.stop 阻止事件冒泡
	.native 绑定原生事件
	.once 事件只执行一次
	
	
	.prevent 阻止默认事件
	防止执行预设的行为（如果事件可取消，则取消该事件，而不停止事件的进一步传播），
		等同于JavaScript中的event.preventDefault()，prevent等同于JavaScript的event.preventDefault()，用于取消默认事件。
		比如我们页面的标签，当用户点击时，通常在浏览器的网址列出#：
		例如：
	&lt;a v-on:submit.prevent=&quot;doThis&quot;&gt;&lt;/a&gt;
	
	
	.caption 用于事件捕获
		与事件冒泡的方向相反，事件捕获由外到内,捕获事件：嵌套两三层父子关系，然后所有都有点击事件，
		点击子节点，就会触发从外至内 父节点-》子节点的点击事件

		&lt;a v-on:click.capture=&quot;doThis&quot;&gt;&lt;/a&gt;
		&lt;div id=&quot;app&quot;&gt; 
		　　&lt;div class=&quot;outeer&quot; @click.capture=&quot;outer&quot;&gt; 
		　　　　&lt;div class=&quot;middle&quot; @click.capture=&quot;middle&quot;&gt; 
		　　　　　　&lt;button @click.capture=&quot;inner&quot;&gt;点击我(^_^)&lt;/button&gt;
		 　　　　&lt;/div&gt;
		 　　&lt;/div&gt; 
		&lt;/div&gt;
		
		
		
		.self 将事件绑定到自身身上，相当于阻止事件冒泡
		只会触发自己范围内的事件，不包含子元素

		&lt;a v-on:click.self=&quot;doThat&quot;&gt;&lt;/a&gt;
		&lt;div id=&quot;app&quot;&gt; 
		　　&lt;div class=&quot;outeer&quot; @click.self=&quot;outer&quot;&gt; 
		　　　　&lt;div class=&quot;middle&quot; @click.self=&quot;middle&quot;&gt; 
		　　　　　　&lt;button @click.stop=&quot;inner&quot;&gt;点击我(^_^)&lt;/button&gt;
		 　　　　&lt;/div&gt;
		 　　&lt;/div&gt; 
		&lt;/div&gt;
		
		
		
		
		.passive
		Vue 还对应 addEventListener 中的 passive 选项提供了 .passive 修饰符

		&lt;!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 --&gt;
		&lt;!-- 而不会等待 \`onScroll\` 完成  --&gt;
		&lt;!-- 这其中包含 \`event.preventDefault()\` 的情况 --&gt;
		&lt;div v-on:scroll.passive=&quot;onScroll&quot;&gt;...&lt;/div&gt;

		这个 .passive 修饰符尤其能够提升移动端的性能。不要把 .passive 和 .prevent 一起使用，因为 .prevent 将会被忽略，
		同时浏览器可能会向你展示一个警告。请记住，.passive 会告诉浏览器你不想阻止事件的默认行为。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>##事件修饰符还可以串联 例如：</p>`,3),b=v(`<p>##键盘修饰符 在JavaScript事件中除了前面所说的事件，还有键盘事件，也经常需要监测常见的键值。在Vue中允许v-on在监听键盘事件时添加关键修饰符。记住所有的keyCode比较困难，所以Vue为最常用的键盘事件提供了别名： .enter：回车键 .tab：制表键 .delete：含delete和backspace键 .esc：返回键 .space: 空格键 .up：向上键 .down：向下键 .left：向左键 .right：向右键</p><p>##系统修饰键 可以用如下修饰符来实现仅在按下相应按键时才触发鼠标或键盘事件的监听器。 .ctrl .alt .shift .meta</p><p>注意：在 Mac 系统键盘上，meta 对应 command 键 (⌘)。在 Windows 系统键盘 meta 对应 Windows 徽标键 (⊞)。在 Sun 操作系统键盘上，meta 对应实心宝石键 (◆)。在其他特定键盘上，尤其在 MIT 和 Lisp 机器的键盘、以及其后继产品，比如 Knight 键盘、space-cadet 键盘，meta 被标记为“META”。在 Symbolics 键盘上，meta 被标记为“META”或者“Meta”。</p><p>例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- Alt + C --&gt;
&lt;input @keyup.alt.67=&quot;clear&quot;&gt;
&lt;!-- Ctrl + Click --&gt;
&lt;div @click.ctrl=&quot;doSomething&quot;&gt;Do something&lt;/div&gt;
1
2
3
4
注意：

请注意修饰键与常规按键不同，在和 keyup 事件一起用时，事件触发时修饰键必须处于按下状态。换句话说，只有在按住 ctrl 的情况下释放其它按键，才能触发 keyup.ctrl。而单单释放 ctrl 也不会触发事件。如果你想要这样的行为，请为 ctrl 换用 keyCode：keyup.17。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>##.exact修饰符</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.exact 修饰符允许你控制由精确的系统修饰符组合触发的事件。

&lt;!-- 即使 Alt 或 Shift 被一同按下时也会触发 --&gt;
&lt;button @click.ctrl=&quot;onClick&quot;&gt;A&lt;/button&gt;

&lt;!-- 有且只有 Ctrl 被按下的时候才触发 --&gt;
&lt;button @click.ctrl.exact=&quot;onCtrlClick&quot;&gt;A&lt;/button&gt;

&lt;!-- 没有任何系统修饰符被按下的时候才触发 --&gt;
&lt;button @click.exact=&quot;onClick&quot;&gt;A&lt;/button&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>##常用修饰符</p><p>(1).lazy 在改变后才触发（也就是说只有光标离开input输入框的时候值才会改变）</p>`,9);function p(t,e){return a(),r("div",null,[m,n("p",null,[n("a",{onClick:e[0]||(e[0]=c((...i)=>t.doThis&&t.doThis(...i),["stop","prevent"]))}),l(" 注：使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用 v-on:click.prevent.self 会阻止所有的点击，而 v-on:click.self.prevent 只会阻止对元素自身的点击。")]),b,s(n("input",{"onUpdate:modelValue":e[1]||(e[1]=i=>t.msg=i)},null,512),[[d,t.msg,void 0,{lazy:!0}]]),l(" 1 (2).number 将输出字符串转为Number类型·（虽然type类型定义了是number类型，但是如果输入字符串，输出的是string） "),s(n("input",{"onUpdate:modelValue":e[2]||(e[2]=i=>t.msg=i)},null,512),[[d,t.msg,void 0,{number:!0}]]),l(" 1 (3).trim 自动过滤用户输入的首尾空格 "),s(n("input",{"onUpdate:modelValue":e[3]||(e[3]=i=>t.msg=i)},null,512),[[d,t.msg,void 0,{trim:!0}]])])}const q=u(o,[["render",p],["__file","V008-vue的事件修饰符和作用.html.vue"]]);export{q as default};
