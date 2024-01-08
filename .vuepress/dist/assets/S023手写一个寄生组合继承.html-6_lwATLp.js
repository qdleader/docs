import{_ as e,o as n,c as i,d as s}from"./app-xrgnhFxe.js";const l={},d=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Parent(name) {
  this.name = name;
  this.say = () =&gt; {
    console.log(111);
  };
}
Parent.prototype.play = () =&gt; {
  console.log(222);
};
function Children(name,age) {
  Parent.call(this,name);
  this.age = age;
}
Children.prototype = Object.create(Parent.prototype);
Children.prototype.constructor = Children;
// let child = new Children(&quot;yyy&quot;,18);
// // console.log(child.name);
// // console.log(child.age);
// // child.say();
// // child.play();


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="es6-继承" tabindex="-1"><a class="header-anchor" href="#es6-继承" aria-hidden="true">#</a> es6 继承</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Parent {
  constructor(name) {
    this.name = name
  }
  eat() {
    console.log(this.name + &#39; is eating&#39;)
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name)
    this.age = age
  }
}

// 测试
let xm = new Child(&#39;xiaoming&#39;, 12)
console.log(xm.name) // xiaoming
console.log(xm.age) // 12
xm.eat() // xiaoming is eating

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),a=[d];function c(v,r){return n(),i("div",null,a)}const m=e(l,[["render",c],["__file","S023手写一个寄生组合继承.html.vue"]]);export{m as default};
