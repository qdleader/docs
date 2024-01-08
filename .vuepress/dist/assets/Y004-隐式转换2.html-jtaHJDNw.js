import{_ as e,o as n,c as i,d as l}from"./app-Ni1_oyYA.js";const u={},s=l(`<p>Javascript 隐式强制类型转换</p><p>这里直接上各种类型之间的转换结果，如果没有明白，那就带着问题往下读。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>❞
+、==、||、&amp;&amp;
+ (重点)
1 + &quot;1&quot; // &#39;11&#39;
1 + &quot;string&quot; // &quot;1tring&quot; （加非数字字符串）
1 + true // 2
1 + false //1
1 + [] // &quot;1&quot;
1 + [1,2,3] // &quot;11,2,3&quot;
1 + {}  // &quot;1[object Object]&quot;
1 + null // 1
1 + undefined // 1
null + undefined // NaN

true + 1 // 2
true + &quot;1&quot; // &quot;true1&quot;
true + &quot;true&quot; // &quot;truetrue&quot; （加非数字字符串）
true + true // 2
true + false // 1
true + [] // &quot;true&quot;
true + [1,2,3] // &quot;true1,2,3&quot;
true + &quot;true[object Object]&quot; // NaN
true + null // 1
true + undefined // NaN

false + 1 // 1
false + &quot;1&quot; // &quot;false1&quot;
false + &quot;string&quot; // &quot;falsestring&quot; （加非数字字符串）
false + false // 0
false + true // 1
false + [] // &quot;false&quot;
false + {}  // &quot;false[object Object]&quot;

[] + 1 // &quot;1&quot;
[] + &quot;1&quot; // &quot;1&quot;
[] + &quot;string&quot; // &quot;string&quot; （加非数字字符串）
[] + true  // &quot;true&quot;
[] + false // &quot;false&quot;
[] + [] // &quot;&quot;
[1] + [1] // &quot;11&quot;
[] + {} // &quot;[object Object]&quot; （注意！！！）
[] + null // &quot;null&quot;
[] + undefined // &quot;undefined&quot;

{} + 1 // 1
{} + &quot;1&quot; // 1
{} + &quot;string&quot; // NaN
{} + true // 1
{} + false // 0
{} + [] // 0 （注意！！！）
{ a:1 } + [] // 0（注意！！！）
{} + [1] // 1 （注意！！！）
{} + [1,2,3] // NaN （注意！！！）
{} + {} // &quot;[object Object][object Object]&quot;
{} + null // 0
{} + undefined // NaN

-Infinity + Infinity // NaN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p><p>如果某个操作数是字符串或者能够转换为字符串的话， + 将进行拼接操作。可见在 + 操作中字符串的拼接「优先级」高于数字的 +。 如果一个操作数是对象（包括数组），则首先对其调用ToPrimitive操作，该抽象操作再调用[[DefalutValue]]，以数字作为上下文，保证了优先调用valueOf()方法，可见在 + 操作时，引用类型内部调用valueOf()方法的「优先级」高于toString()。 数组或者对象在调用valueOf()方法如果无法获取到基本类型值（数字），会转而调用toString()。 代码演示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 这里提供valueOf()方法，
var daRui = {
    valueOf: function() {
        return 18
    },
    toString: function() {
        return &quot;daRUI&quot;
    }
}

daRui + 7 // 25
daRui + &quot;7&quot; // &quot;187&quot;
daRui + &quot;hello&quot; // &quot;18hello&quot;

// 这里仅提供toString()方法，
var daRui = {
    toString: function() {
        return &quot;daRUI&quot;
    }
}

daRui + 7 // &quot;daRUI7&quot;
daRui + &quot; hello&quot; // &quot;daRUI hello&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>特别说明:</p><p>数组中的toString()方法是经过改写的，故[1,2,3]会转为&quot;1,2,3&quot;，[] 会转为&quot;&quot;。 对象的toString()方法会返回 &quot;[object Class]&quot;，Object.prototype.toString.call([]) 返回 &quot;[object Array]&quot;。 [] + {}得到”[object Object]“，而{} + [] 得到 0。这是因为 {} (花括号)在JS中有两种含义： 当 {} 在 + 后面时，表示对象{} 当 {} 位于 + 前面时，{} 表示一个独立的「空代码块」，所以{} + [] 操作相当于进行的是 +<a href="%E4%B8%80%E5%85%83%E6%93%8D%E4%BD%9C%E7%AC%A6%E8%BD%AC%E6%8D%A2%E6%93%8D%E4%BD%9C"></a> 将 [] 转为0 ==（重点）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1 == &#39;1&#39; // true
1 == true // true
1 == [] // false
1 == [1] // true
1 == {}  // false

true == &quot;1&quot; // true
true == &quot;true&quot; // false
true == [] // true
true == [1]  // true
true == {} // false

[] == &quot;1&quot;// false
[] == true  // false
[] == false // true
[] == []  // false (注意！！！)
[] == {} // false
[] == ![] // true (注意！！！)

{} == 1 // Unexpected token &#39;==&#39;
{} == &quot;1&quot; // Unexpected token &#39;==&#39;
{} == true // Unexpected token &#39;==&#39;
{} == false // Unexpected token &#39;==&#39;
{} == [] // Unexpected token &#39;==&#39;
{} == {} // false (注意！！！)

&quot;0&quot; == null // false
&quot;0&quot; == undefined // false
&quot;0&quot; == false // true (注意！！！)
&quot;0&quot; == NaN // false
&quot;0&quot; == 0 // true
&quot;0&quot; == &quot;&quot; // false

false == null // false (注意！！！)
false == undefined // false (注意！！！)
false == NaN // false
false == 0 // true (注意！！！)
false == &quot;&quot; // true (注意！！！)
false == [] // true (注意！！！)
false == {} // false

&quot;&quot; == null // false
&quot;&quot; == undefined //false
&quot;&quot; == NaN // false
&quot;&quot; == 0 //true (注意！！！)
&quot;&quot; == [] // true (注意！！！)
&quot;&quot; == {} // false

0 == null // false
0 == undefined // false
0 == NaN // false
0 == [] // true  (注意！！！)
0 == {} // false
+0 == -0 // true

null == null // true
null == undefined // true  (注意！！！)
null == &quot;&quot; // false
null == 0 // false
undefined == &quot;&quot; // false
undefined == 0 // false

NaN == NaN // false  可以使用isNaN() 判断是不是NaN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p><p>== 操作，最重要的时在两个操作数的转换过程！关于 == 操作ES5 规范11.9.3给出了明确规范：</p><p>字符串和数字之间的相等比较：</p><p>如果Type(x)是数字，Type(y)是字符串，则返回 x == ToNumber(y)的结果。 如果Type(x)是字符串，Type(y)是数字，则返回ToNumber(x) == y的结果。 其他类型值和布尔类型之间的相等比较：</p><p>如果Type(x)是布尔类型，这返回ToNumber(x) == y的结果 如果Type(y)是布尔类型，则返回x == ToNumber(y) 的结果 null和undefined之间的相等比较</p><p>如果x为null，y为undefined，则结果为true 如果x为undefined，y为null，则结果为true 对象和非对象之间的相等比较：</p><p>如果Type(x)是字符串或者数字，Type(y)是对象，则返回x == ToPrimitive(y)的结果 如果Type(x)是对象，Type(y)是字符串或者数字，则返回toPrimitive(x) == y的结果 对象和对象之间比较:</p><p>在Javascript中对象属于引用类型，对象之间的比较，本质比较的是内存地址。所以都为false。</p><p>❝ == 相等操作中，如果两边的操作数不同的话，都会进行类型转换，而且优先转为数字，再进行比较，如果转换后还不同则再次转换，直到相同为止。这里以 字符串类型 == 布尔类型做介绍：</p><p>首先字符串类型转为Number 类型，这时比较的是 数字类型 == 布尔类型 再将布尔类型转为Number类型，这时比较的是数字类型 == 数字类型 这也就不难解释为什么&quot;0&quot; == false了</p><p>如果连个操作数中有引用类型，这会先将引用类型转换为基本类型，在进行上面的操作，进行比较。</p><p>再说[] == ![] // true:</p><p>这里!操作的优先级是高于 == 的，![] 首先转换为false 此时比较双方是 [] == false，这里会将 [] 再次转换为 0 此时比较双方是 0 == false，接下来就不难理解了 ❞ ！！、&amp;&amp;、||（重点） !! 将值转为布尔值</p><p>// 除将下面的转为false其余全部为true</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>!! &quot;&quot;
!! 0
!! -0
!! +0
!! null
!! undefined
!! NaN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>&amp;&amp;、|| ❝ &amp;&amp;与||逻辑运算符的特殊之处在于，两者返回的是两个操作数中的一个（且仅一个），即选择两个操作数中的一个，然后返回它的「值」。这两个逻辑运算符首先会对第一个操作数执行条件判断，如果其不是布尔值就先进行ToBoolean强制类型转换，然后在执行条件判断。</p><p>对于||来说，如果条件判断结果为true就返回第一个操作数的值，如果为false就返回第二个操作数的值。</p><p>&amp;&amp;则相反，如果条件判断结果为true就返回第一个操作数的值，如果为false就返回第一个操作数的值。</p><p>​ ——《你不知道的Javascript上卷》</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>❞
18 || &quot;daRui&quot; // 18
undefined || &quot;daRui&quot; // &quot;daRui&quot;
18 &amp;&amp; &quot;daRui&quot; // daRui
null &amp;&amp; &quot;daRui&quot; // null
null || {} // {}
null &amp;&amp; {} // null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结:</p><p>||与&amp;&amp;返回的都是操作数中两个中的一个，这个严格意义上说并不是一种转换，而是一种选择</p><p>日常开发中的 if (a||b) {return true}的过程，其实是先获取到 a||b的值再进行的判断</p><p>这里说 ||和&amp;&amp;的原因是它可以简化我们日常开发中的代码，使代码更简洁，例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   18 || &quot;daRui&quot;
   // 相当于
   18 ? 18 : &quot;daRui&quot;

   18 &amp;&amp; &quot;daRui&quot; // daRui
   // 相当于
   18 ? &quot;daRui&quot; : 18
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34),d=[s];function a(v,t){return n(),i("div",null,d)}const c=e(u,[["render",a],["__file","Y004-隐式转换2.html.vue"]]);export{c as default};
