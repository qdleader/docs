import{_ as e,o as n,c as i,d as r}from"./app-otDwoQZb.js";const t={},a=r(`<h2 id="_1-object-prototype-tostring-call" tabindex="-1"><a class="header-anchor" href="#_1-object-prototype-tostring-call" aria-hidden="true">#</a> 1.Object.prototype.toString.call()</h2><blockquote><p>Object.prototype.toString.call(任意类型的值)，返回一个字符串 &#39;[object 类型]&#39;，这种方法对所有数据类型都能判断，即使是null或者undefined;</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Object.prototype.toString.call(&#39;An&#39;) // &quot;[object String]&quot;
Object.prototype.toString.call(1) // &quot;[object Number]&quot;
Object.prototype.toString.call(Symbol(1)) // &quot;[object Symbol]&quot;
Object.prototype.toString.call(null) // &quot;[object Null]&quot;
Object.prototype.toString.call(undefined) // &quot;[object Undefined]&quot;
Object.prototype.toString.call(function(){}) // &quot;[object Function]&quot;
Object.prototype.toString.call({name: &#39;An&#39;}) // &quot;[object Object]&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-instanceof" tabindex="-1"><a class="header-anchor" href="#_2-instanceof" aria-hidden="true">#</a> 2. instanceof</h2><p>instanceof的内部机制是判断目标对象的原型链是不是能找到prototype. 使用instanceof判断一个对象是不是数组，instanceof会判断这个对象的原型链上有没有数组的原型，找到就返回true,否则返回false</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[] instanceof Array //true
var x={}
x instanceof Array //false
x.__proto__=Array.prototype
x instanceof Array //true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="instanceof-算法机制" tabindex="-1"><a class="header-anchor" href="#instanceof-算法机制" aria-hidden="true">#</a> instanceof 算法机制</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    function instance_of(L,R){
        var O=R.prototype;
        L=L.__proto__;
        while(true){
            if(L===null){
                return false;
            }
            if(O===L){
                return true;
            }
            L=L.__proto__;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-array-isarray" tabindex="-1"><a class="header-anchor" href="#_3-array-isarray" aria-hidden="true">#</a> 3.Array.isArray()</h2><p>Array.isArray()优于 instanceof 的地方在于：Array.isArray()可以检测 iframes</p><p>Array.isArray()与Object.prototype.toString.call() Array.isArray()是es6新增的语法，当不存在Array.isArray()方法时，可以用Object.prototype.toString.call()实现，Array.isArray()的polyfill 通常如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if(!Array.isArray){
  Array.isArray=function(arr){
  return Object.prototype.toString.call(arr)===&#39;[object Array]&#39;;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),l=[a];function s(d,o){return n(),i("div",null,l)}const u=e(t,[["render",s],["__file","Arr006-判断是否是数组的几种方法.html.vue"]]);export{u as default};
