import{_ as n,o as e,c as i,d as s}from"./app-qTEUp92E.js";const l={},d=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Foo() {
    Foo.a = function() {
        console.log(1)
    }
    this.a = function() {
        console.log(2)
    }
}

Foo.prototype.a = function() {
    console.log(3)
}
Foo.a = function() {
    console.log(4)
}

Foo.a()    // 4
let obj = new Foo();
obj.a()   //2
Foo.a()  // 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[d];function c(a,v){return e(),i("div",null,o)}const t=n(l,[["render",c],["__file","B011-变量输出.html.vue"]]);export{t as default};
