import{_ as n,o as i,c as e,d as s}from"./app-1IAv0yAY.js";const a={},l=s(`<p>题目描述：</p><p>实现一个LazyMan，可以按照以下方式调用: LazyMan(“Hank”)输出: Hi! This is Hank!</p><p>LazyMan(“Hank”).sleep(10).eat(“dinner”)输出 Hi! This is Hank! //等待10秒.. Wake up after 10 Eat dinner~</p><p>LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出 Hi This is Hank! Eat dinner~ Eat supper~</p><p>LazyMan(“Hank”).eat(“supper”).sleepFirst(5)输出 //等待5秒 Wake up after 5 Hi This is Hank! Eat supper</p><p>实现如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class _LazyMan {
  constructor(name) {
    this.tasks = []
    const task = () =&gt; {
      console.log(\`Hi! This is \${name}\`)
      this.next()
    }
    this.tasks.push(task)
    setTimeout(() =&gt; {
      this.next()
    }, 0)
  }
  next() {
    const task = this.tasks.shift()
    task &amp;&amp; task()
  }
  sleep(time) {
    this.sleepWrapper(time, false)
    return this
  }
  sleepFirst(time) {
    this.sleepWrapper(time, true)
    return this
  }
  sleepWrapper(time, first) {
    const task = () =&gt; {
      setTimeout(() =&gt; {
        console.log(\`Wake up after \${time}\`)
        this.next()
      }, time * 1000)
    }
    if (first) {
      this.tasks.unshift(task)
    } else {
      this.tasks.push(task)
    }
  }
  eat(food) {
    const task = () =&gt; {
      console.log(\`Eat \${food}\`);
      this.next();
    };
    this.tasks.push(task);
    return this;
  }
}

// 测试
const lazyMan = (name) =&gt; new _LazyMan(name)

lazyMan(&#39;Hank&#39;).sleep(1).eat(&#39;dinner&#39;)

lazyMan(&#39;Hank&#39;).eat(&#39;dinner&#39;).eat(&#39;supper&#39;)

lazyMan(&#39;Hank&#39;).eat(&#39;supper&#39;).sleepFirst(5)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),d=[l];function v(t,r){return i(),e("div",null,d)}const u=n(a,[["render",v],["__file","cold-005实现lazyMan函数.html.vue"]]);export{u as default};
