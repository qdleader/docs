import{_ as e,o as n,c as i,d as l}from"./app-1IAv0yAY.js";const a={},s=l(`<p>?用法</p><p>除了表示可选参数外，常用于防御性编程</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const a = fetch(...) || {}		// 假设a是从后端拿到的一个对象类型数据
const unsafeData = a.b.c		// 这样写时不安全的，无法确保b是否有值，如果为空则b.c会进行报错
const safeData = a?.b?.c		// 实际上就是相当于 const safeData = a &amp;&amp; a.b &amp;&amp; a.b.c

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>!</p><p>! 叫非空断言操作符号，和?. 这个符号相反，这个符号表示对象后面的属性一定不是null 和 undefined</p><p>比如</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let chartRef = ref&lt;HTMLElement&gt;;



echarts.init(chartRef.value)  // 这么写此时会报错，因为chartRef.value 有可能是undefined

有两种解决方案
1.
echarts.init(chartRef.value as HTMLElement)

2.
echarts.init(chartRef.value!)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><blockquote><ol><li>属性或参数中使用 ？：表示该属性或参数为可选项</li></ol></blockquote><blockquote><ol start="2"><li>属性或参数中使用 ！：表示强制解析（告诉typescript编译器，这里一定有值），常用于vue-decorator中的@Prop</li></ol></blockquote><blockquote><ol start="3"><li>变量后使用 ！：表示类型推断排除null、undefined</li></ol></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
if (!!getItem(&#39;Authorization&#39;)) {
console.log(&#39;已登录&#39;)
}


var o={flag1:true};  
var test1=!!o.flag1;//等效于var test1=o.flag1||false;  
console.log(test1);//true
var test2=!!o.flag2;//等效于var test2=o.flag2||false;  
console.log(test2);//false 而不是undefined 或 null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于对null与undefined用 ! 操作符时都会产生true的结果， 所以用两个感叹号的作用就在于， 如果设置了o中flag的值（非 null/undefined/0&quot;&quot;/等值），自然test就会取跟o.flag一样的值； 如果没有设置，test就会默认为false，而不是 null或undefined。</p>`,13),t=[s];function d(c,r){return n(),i("div",null,t)}const v=e(a,[["render",d],["__file","ts中的_和!用法.html.vue"]]);export{v as default};
