import{_ as e,o as n,c as i,d as s}from"./app-Ni1_oyYA.js";const l={},d=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class MyPromise {
  constructor(executor) { // executor执行器
    this.status = &#39;pending&#39; // 等待状态
    this.value = null // 成功或失败的参数
    this.fulfilledCallbacks = [] // 成功的函数队列
    this.rejectedCallbacks = [] // 失败的函数队列
    const that = this
    function resolve(value) { // 成功的方法
      if (that.status === &#39;pending&#39;) {
        that.status = &#39;resolved&#39;
        that.value = value
        that.fulfilledCallbacks.forEach(myFn =&gt; myFn(that.value)) //执行回调方法
      }
    }
    function reject(value) { //失败的方法
      if (that.status === &#39;pending&#39;) {
        that.status = &#39;rejected&#39;
        that.value = value
        that.rejectedCallbacks.forEach(myFn =&gt; myFn(that.value)) //执行回调方法
      }
    }
    try {
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }
  then(onFulfilled, onRejected) {
    if (this.status === &#39;pending&#39;) {
      // 等待状态，添加回调函数到成功的函数队列
      this.fulfilledCallbacks.push(() =&gt; {
        onFulfilled(this.value)
      })
      // 等待状态，添加回调函数到失败的函数队列
      this.rejectedCallbacks.push(() =&gt; {
        onRejected(this.value)
      })
    }
    if (this.status === &#39;resolved&#39;) { // 支持同步调用
      console.log(&#39;this&#39;, this)
      onFulfilled(this.value)
    }
    if (this.status === &#39;rejected&#39;) { // 支持同步调用
      onRejected(this.value)
    }
  }
}

// 测试
function fn() {
  return new MyPromise((resolve, reject) =&gt; {
    setTimeout(() =&gt; {
      if(Math.random() &gt; 0.6) {
        resolve(1)
      } else {
        reject(2)
      }
    }, 1000)
  })
}
fn().then(
  res =&gt; {
    console.log(&#39;res&#39;, res) // res 1
  },
  err =&gt; {
    console.log(&#39;err&#39;, err) // err 2
  })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),v=[d];function a(r,c){return n(),i("div",null,v)}const u=e(l,[["render",a],["__file","S025手写promise.html.vue"]]);export{u as default};
