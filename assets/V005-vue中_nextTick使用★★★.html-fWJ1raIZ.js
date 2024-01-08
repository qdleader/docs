import{_ as e,o as i,c as n,d as t}from"./app-tSvYcIf0.js";const l={},s=t(`<h1 id="v005-vue中-nexttick使用★★★" tabindex="-1"><a class="header-anchor" href="#v005-vue中-nexttick使用★★★" aria-hidden="true">#</a> V005-vue中$nextTick使用★★★</h1><p>this.$nextTick 会在所有的dom都加载完毕后，才执行。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  &lt;div ref=&quot;hello&quot;&gt;
      &lt;h1&gt;qdleader&lt;/h1&gt;
    &lt;/div&gt;


 created() {
      console.log(this.$refs[&#39;hello&#39;]);
      this.$nextTick(() =&gt; {
        console.log(this.$refs[&#39;hello&#39;]);
      });
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="这里打印" tabindex="-1"><a class="header-anchor" href="#这里打印" aria-hidden="true">#</a> 这里打印</h2><p>undefined</p><p>qdleader</p><ol start="2"><li></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;section&gt;
    &lt;h1 ref=&quot;hello&quot;&gt;{{ value }}&lt;/h1&gt;
    &lt;el-button type=&quot;danger&quot; @click=&quot;get&quot;&gt;点击&lt;/el-button&gt;
  &lt;/section&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        value: &#39;qdleader&#39;
      };
    },
    methods: {
      get() {
        this.value = &#39;你好啊&#39;;
        console.log(this.$refs[&#39;hello&#39;].innerText);
        this.$nextTick(() =&gt; {
          console.log(this.$refs[&#39;hello&#39;].innerText);
        });
      }
    },
    mounted() {
    },
    created() {
    }
  }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="打印" tabindex="-1"><a class="header-anchor" href="#打印" aria-hidden="true">#</a> 打印</h2><p>qdleader 和 你好呀</p><blockquote><p>在方法里直接打印的话， 由于dom元素还没有更新， 因此打印出来的还是未改变之前的值，而通过this.$nextTick()获取到的值为dom更新之后的值</p></blockquote><p>nextTick 实现原理 将传入的回调函数包装成异步任务，异步任务又分微任务和宏任务，为了尽快执行所以优先选择微任务； nextTick 提供了四种异步方法 Promise.then、MutationObserver、setImmediate、setTimeOut(fn,0)</p><p>// 判断当前环境优先支持的异步方法，优先选择微任务 // 优先级：Promise---&gt; MutationObserver---&gt; setImmediate---&gt; setTimeout // setTimeOut 最小延迟也要4ms，而 setImmediate 会在主线程执行完后立刻执行</p><p>先判断是否原生支持promise，如果支持，则利用promise来触发执行回调函数； 否则，如果支持MutationObserver，则实例化一个观察者对象，观察文本节点发生变化时，触发执行所有回调函数。MutationObserver他能监听一个DOM对象上发生的子节点删除、属性修改、文本内容修改等。 如果都不支持，则利用setTimeout设置延时为0。</p>`,14),d=[s];function a(r,v){return i(),n("div",null,d)}const u=e(l,[["render",a],["__file","V005-vue中_nextTick使用★★★.html.vue"]]);export{u as default};
