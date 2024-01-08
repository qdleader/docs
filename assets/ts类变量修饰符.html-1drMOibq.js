import{_ as e,o as n,c as i,d as s}from"./app-tSvYcIf0.js";const l={},d=s(`<p>TS提供给了我们三个修饰符</p><p>public 共有属性 都可以访问到 protected 保护属性 只有这个类的内部和子类中可以访问到 private 私有属性 只有这个类中可以访问到，子类都访问不到</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Parent {
    public name = &#39;qdleader&#39;
    age = 18
    say() {
        console.log(this.name)
    }
}

class child extends Parent {
    callParent() {
        super.say()
    }
}

let p = new Person()
p.say()  // qdleader
console.log(p.name) // qdleader
let c = new child()
console.log(c.name)  // qdleader


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="private" tabindex="-1"><a class="header-anchor" href="#private" aria-hidden="true">#</a> private</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
class Parent {
    private name = &#39;qdleader&#39;
    age = 18
    say() {
        console.log(this.name)
    }
}

class child extends Parent {
    callParent() {
        super.name // 获取不到
        super.say()
    }
}

let p = new Person()
p.say()  // qdleader
console.log(p.name) // 报错 获取不到
let c = new child()
console.log(c.name)  // 报错 获取不到

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="protected" tabindex="-1"><a class="header-anchor" href="#protected" aria-hidden="true">#</a> protected</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
class Parent {
    protected name = &#39;qdleader&#39;
    age = 18
    say() {
        console.log(this.name)
    }
}

class child extends Parent {
    callParent() {
        super.name // 可以获取到
        super.say()
    }
}

let p = new Person()
p.say()  // qdleader
console.log(p.name) // 报错 获取不到
let c = new child()
console.log(c.name)  // 报错 获取不到

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="static" tabindex="-1"><a class="header-anchor" href="#static" aria-hidden="true">#</a> static</h2><p>class Person { name: string; static age: number = 20; //定义静态属性 //构造函数 constructor(name: string) { this.name = name; } //静态方法 无返回值 static run(): void { console.log(<code>\${Person.age}静态属性</code>); //获取静态属性，结果是20静态属性 //不能直接获取内部的属性 比如this.name } work(): string { return <code>我是\${this.name}</code>; } } let p = new Person(&quot;张三&quot;); //实例化 Person.run(); //结果是20静态属性 调用静态方法 console.log(p.work()); console.log(Person.age); //调用静态属性</p>`,9),a=[d];function r(c,v){return n(),i("div",null,a)}const u=e(l,[["render",r],["__file","ts类变量修饰符.html.vue"]]);export{u as default};
