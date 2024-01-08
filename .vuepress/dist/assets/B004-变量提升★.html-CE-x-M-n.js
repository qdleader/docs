import{_ as e,o as n,c as i,d}from"./app-Ni1_oyYA.js";const s={},l=d(`<h1 id="b004-变量提升★" tabindex="-1"><a class="header-anchor" href="#b004-变量提升★" aria-hidden="true">#</a> B004-变量提升★</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(function() {

	try{
		throw new Error()
	} catch(x) {
		var x = 1,y = 2;
		console.log(x)
	}
	console.log(x)
	console.log(y)
})()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="解析" tabindex="-1"><a class="header-anchor" href="#解析" aria-hidden="true">#</a> 解析</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 我们都知道var是在预编译阶段会有一个变量提升，这种类型很容易解决，但是当遇到在catch(x)中与已有变量重名的情况，一定要区分两者之间的关系。

// 用变量提升的方法，把程序重写并分析如下：

// (function () {
//     var x,y;  // 外部变量提升
//     try {
//         throw new Error();
//     } catch (x/* 内部的x */) {
//         x = 1; //内部的x，和上面声明的x不是一回事！！
//          y = 2; //内部没有声明，作用域链向上找，外面的y
//         console.log(x); //当然是1
//     }
//     console.log(x);  //只声明，未赋值，undefined
//     console.log(y);  //就是2了
// })();
// 这样子就很清晰，之后注意预编译的过程，把变量和函数定义进行提升后，进行分析，会清楚很多

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),a=[l];function r(c,v){return n(),i("div",null,a)}const u=e(s,[["render",r],["__file","B004-变量提升★.html.vue"]]);export{u as default};
