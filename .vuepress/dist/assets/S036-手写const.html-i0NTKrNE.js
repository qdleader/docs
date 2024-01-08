import{_ as n,o as e,c as i,d as s}from"./app-pokGQ7aS.js";const l={},a=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function __const(data, value) {
    window[data] = value // 把要定义的data挂载到window下，并赋值value
	let c=1
    Object.defineProperty(window, data, { 
        enumerable: true, // 可枚举
        configurable: false, // 可配置
        get: function () {
			return value
        },
        set: function (newVal) {
			if(c&gt;=1) throw new TypeError(&#39;Assignment to constant variable&#39;)
           c++
		   value = newVal
        }
    })
}
__const(&#39;a&#39;, 10)
a = 10 // 报错
console.log(a)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),d=[a];function t(c,v){return e(),i("div",null,d)}const u=n(l,[["render",t],["__file","S036-手写const.html.vue"]]);export{u as default};
