import{_ as e,o as i,c as n,d as s}from"./app-tgHnmF2J.js";const l={},d=s(`<p>/**</p><ul><li>题目: JS实现一个带并发限制的异步调度器Scheduler，保证同时运行的任务最多有两个。完善代码中Scheduler类，使得以下程序能正确输出</li><li>条件: 只能修改Sheduler **/</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    class Scheduler {
        constructor() {
            this.cache = [] // 缓存任务数据
            this.task = [] // 当前执行任务队列
            this._max = 2 // 最大并发任务
        }
        add(promiseCreator) {
            return new Promise(resolve =&gt; {
                promiseCreator.resolve = resolve; // 保存当前promise的状态
                if (this.task.length &lt; this._max) { // 最大并发任务处理
                    this.runWork(promiseCreator)
                } else {
                    this.cache.push(promiseCreator)
                }
            })
        }
        runWork(promiseCreator) {
            this.task.push(promiseCreator)
            promiseCreator().then(() =&gt; {
                promiseCreator.resolve()
                this.task.splice(this.task.indexOf(promiseCreator), 1) // 当前任务执行完成 清除task中的数据
                if (this.cache.length) {
                    this.runWork(this.cache.shift()) // 根据执行的缓存顺序执行，保证执行的有序性
                }
            })
        }
    }
    const timeout = (time) =&gt; new Promise(resolve =&gt; {
            setTimeout(resolve, time)
    })

const scheduler = new Scheduler();
const addTask = (time, order) =&gt; {
    scheduler.add(() =&gt; timeout(time)).then(() =&gt; {
        console.log(order);
    })
}

addTask(4000,&#39;1&#39;)
addTask(3500,&#39;2&#39;)
addTask(4000,&#39;3&#39;)
addTask(3000,&#39;4&#39;)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>//Scheduler ？ //4秒后打印1 //3.5秒打印2 //3进入队列，到7.5秒打印3 //...</p>`,4),r=[d];function a(v,c){return i(),n("div",null,r)}const u=e(l,[["render",a],["__file","S035-手写一个带并发限制的异步调度器Schduler.html.vue"]]);export{u as default};
