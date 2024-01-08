import{_ as e,o as i,c as n,d as s}from"./app-gxPsN6Nl.js";const d={},l=s(`<h2 id="js-实现一个带并发限制的异步调度器-scheduler-保证同时运行的任务最多有两个" tabindex="-1"><a class="header-anchor" href="#js-实现一个带并发限制的异步调度器-scheduler-保证同时运行的任务最多有两个" aria-hidden="true">#</a> JS 实现一个带并发限制的异步调度器 Scheduler，保证同时运行的任务最多有两个</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> addTask(1000,&quot;1&quot;);
 addTask(500,&quot;2&quot;);
 addTask(300,&quot;3&quot;);
 addTask(400,&quot;4&quot;);
 的输出顺序是：2 3 1 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>整个的完整执行流程：</p><p>一开始1、2两个任务开始执行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>500ms时，2任务执行完毕，输出2，任务3开始执行
800ms时，3任务执行完毕，输出3，任务4开始执行
1000ms时，1任务执行完毕，输出1，此时只剩下4任务在执行
1200ms时，4任务执行完毕，输出4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Scheduler {
  constructor(limit) {
    this.queue = [];
    this.maxCount = limit;
    this.runCounts = 0;
  }
  add(time, order) {
    const promiseCreator = () =&gt; {
      return new Promise((resolve, reject) =&gt; {
        setTimeout(() =&gt; {
          console.log(order);
          resolve();
        }, time);
      });
    };
    this.queue.push(promiseCreator);
  }
  taskStart() {
    for (let i = 0; i &lt; this.maxCount; i++) {
      this.request();
    }
  }
  request() {
    if (!this.queue || !this.queue.length || this.runCounts &gt;= this.maxCount) {
      return;
    }
    this.runCounts++;
    this.queue
      .shift()()
      .then(() =&gt; {
        this.runCounts--;
        this.request();
      });
  }
}
const scheduler = new Scheduler(2);
const addTask = (time, order) =&gt; {
  scheduler.add(time, order);
};
addTask(1000, &quot;1&quot;);
addTask(500, &quot;2&quot;);
addTask(300, &quot;3&quot;);
addTask(400, &quot;4&quot;);
scheduler.taskStart();


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),a=[l];function r(u,v){return i(),n("div",null,a)}const c=e(d,[["render",r],["__file","S028-实现有并行限制的 Promise 调度器.html.vue"]]);export{c as default};
