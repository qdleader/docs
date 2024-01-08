import{_ as n,o as s,c as a,d as e}from"./app-C59QzqDT.js";const p={},t=e(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
## Reflect 有返回值

对于某个对象，赋值并不总是成功的。

例如，我们把 input 的name属性设置为只读，如下：
js
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">get</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39;text&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


传统的使用等于号进行的属性赋值并不能知道最后是否执行成功，需要开发者自己进行进一步的检测。

例如：
js
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>input<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">&#39;qdleader&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

上面一行赋值返回值是<span class="token string">&#39;qdleader&#39;</span>，至于改变输入框的type属性值是否成功，不得而知。

js
<span class="token comment">// 输出 false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;qdleader&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

但是下面一行语句使用的Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>方法，就可以知道是否设置成功，因为Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>的返回值是<span class="token boolean">true</span>或者<span class="token boolean">false</span>（只要参数类型准确）。


##  Reflect方法还有个好处，不会因为报错而中断正常的代码逻辑执行

<span class="token function">js</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> frozen <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;yyy&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    Object<span class="token punctuation">.</span><span class="token function">freeze</span><span class="token punctuation">(</span>frozen<span class="token punctuation">)</span><span class="token punctuation">;</span>

    frozen<span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;qdleader&#39;</span><span class="token punctuation">;</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;no log&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

会出现下面的TypeError错误：

Uncaught TypeError<span class="token operator">:</span> Cannot assign to read only property ‘name’ <span class="token keyword">of</span> object ‘#<span class="token operator">&lt;</span>Object<span class="token operator">&gt;</span>’
后面的语句console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;no log&#39;</span><span class="token punctuation">)</span>就没有被执行。

但是如果使用Reflect方法，则console语句是可以执行的，例如：

<span class="token function">js</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> frozen <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;yyy&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    Object<span class="token punctuation">.</span><span class="token function">freeze</span><span class="token punctuation">(</span>frozen<span class="token punctuation">)</span><span class="token punctuation">;</span>

    Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>frozen<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;qdleader&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;no log&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>



## receiver参数


receiver是接受者的意思，表示调用对应属性或方法的主体对象，通常情况下，receiver参数是无需使用的，但是如果发生了继承，为了明确调用主体，receiver参数就需要出马了。

比方说下面这个例子：

<span class="token keyword">let</span> people <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">_name</span><span class="token operator">:</span> <span class="token string">&#39;外星人&#39;</span><span class="token punctuation">,</span>
  <span class="token keyword">get</span> <span class="token function">name</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> peopleQD <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>people<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">get</span> <span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> target<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> threePeople <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">__proto__</span><span class="token operator">:</span> peopleQD<span class="token punctuation">,</span>
  <span class="token literal-property property">_name</span><span class="token operator">:</span> <span class="token string">&#39;三体人&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 结果是外星人</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>threePeople<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
实际上，这里预期显示应该是“三体人”，而不是“外星人”。

这个时候，就需要使用receiver参数了，代码变化部分参见下面标红的那一行：

<span class="token keyword">let</span> people <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">_name</span><span class="token operator">:</span> <span class="token string">&#39;外星人&#39;</span><span class="token punctuation">,</span>
  <span class="token keyword">get</span> <span class="token function">name</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> peopleQD <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>people<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">get</span> <span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 也可以简写为 Reflect.get(...arguments) </span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> threePeople <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">__proto__</span><span class="token operator">:</span> peopleQD<span class="token punctuation">,</span>
  <span class="token literal-property property">_name</span><span class="token operator">:</span> <span class="token string">&#39;三体人&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 结果是三体人 </span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>threePeople<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
此时，运行结果就是预期的“三体人”了


实际上 Reflect 的函数可以接收第三个参数，即函数调用过程中的 <span class="token keyword">this</span>
比如：
js
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">get</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Ben&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token string">&quot;18&quot;</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span> obj2<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 输出 18Ben</span>



### Reflect对象经常和Proxy代理一起使用，原因有三点：

<span class="token operator">&gt;</span> Reflect提供的所有静态方法和Proxy第<span class="token number">2</span>个handle参数方法是一模一样的。具体见后面的对比描述。
<span class="token operator">&gt;</span> Proxy get<span class="token operator">/</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>方法需要的返回值正是Reflect的get<span class="token operator">/</span><span class="token keyword">set</span>方法的返回值，可以天然配合使用，比直接对象赋值<span class="token operator">/</span>获取值要更方便和准确。
<span class="token operator">&gt;</span> receiver参数具有不可替代性。


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[t];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","proxy 中为什么使用Reflect的.html.vue"]]);export{r as default};
