import{_ as n,o as i,c as e,d as l}from"./app-1IAv0yAY.js";const d={},s=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var name = &#39;王&#39;,age= 17;
var obj1 = {
  name:&#39;校长&#39;,
  objAge:this.age,
  myFun:function(fm,t) {
    console.log(this.name+ &quot;年龄&quot;+ this.age, &quot;来自&quot; + fm + &quot;去往&quot; + t)
  }
}
var db ={
  name:&#39;德玛&#39;,
  age:99
}
obj1.myFun.call(db,&#39;成都&#39;,&#39;上海&#39;);　　　　 // 德玛 年龄 99  来自 成都去往上海
obj1.myFun.apply(db,[&#39;成都&#39;,&#39;上海&#39;]);      // 德玛 年龄 99  来自 成都去往上海
obj1.myFun.bind(db,&#39;成都&#39;,&#39;上海&#39;)();       // 德玛 年龄 99  来自 成都去往上海
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>call 、bind 、 apply 这三个函数的第一个参数都是 this 的指向对象，传null或undefined 默认指向 window ，第二个参数差别就来了：</p></blockquote><blockquote><p>call 的参数是直接放进去的，第二第三第 n 个参数全都用逗号分隔，直接放到后面 obj.myFun.call(db,&#39;成都&#39;, ... ,&#39;string&#39; )。</p></blockquote><blockquote><p>apply 的所有参数都必须放在一个数组里面传进去 obj.myFun.apply(db,[&#39;成都&#39;, ..., &#39;string&#39; ])。</p></blockquote><blockquote><p>bind 除了返回是函数以外，它 的参数和 call 一样。 当然，三者的参数不限定是 string 类型，允许是各种类型，包括函数 、 object 等等！</p></blockquote><p>下面输出什么？</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
&lt;script type=&quot;text/javascript&quot;&gt;
  function fn(a,b) {
    this.xxx = 3
    console.log(a,b,this)
  }
  fn(1,2)
  console.log(xxx)

  const obj = {m:0}
  fn.call(obj,1,2)

  fn.apply(obj,[1,2])
  fn.apply(null,[1,2])
  fn.apply(undefined,[1,2])
  fn.apply(&#39;12&#39;,[1,2])
  fn.apply(&#39;&#39;,[1,2])
  fn.apply(12,[1,2])
  fn.apply([1,2])














  // 结果
  // 1 2 Window 
  //  3
  //  1 2 {m: 0, xxx: 3}
  // 1 2 {m: 0, xxx: 3}
  1 2 Window 
  1 2 Window 
  1 2 String {&quot;12&quot;, xxx: 3}
  1 2 String {&quot;&quot;, xxx: 3}
  1 2 Number {12, xxx: 3}

  undefined undefined (2) [1, 2, xxx: 3]
&lt;/script&gt;



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),v=[s];function a(c,u){return i(),e("div",null,v)}const r=n(d,[["render",a],["__file","Q007-call和apply及bind区别.html.vue"]]);export{r as default};
