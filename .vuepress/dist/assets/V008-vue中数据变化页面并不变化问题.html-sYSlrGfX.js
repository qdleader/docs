import{_ as e,o as i,c as n,d}from"./app-C59QzqDT.js";const s={},a=d(`<p>由于我们vue2中的数据双向绑定时候经常遇到这种，数据变化了，视图没有变化的情况，这是为什么呢？怎么解决呢？</p><h5 id="探索1" tabindex="-1"><a class="header-anchor" href="#探索1" aria-hidden="true">#</a> 探索1</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>data() {
  obj1:{}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>


btn1() {
     this.obj1.name = &#39;123&#39;    
 },          
 btn2() {
     this.obj1.name = &#39;变了呀&#39;    
 },         
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div @click=&quot;btn1&quot;&gt;按钮1&lt;/div&gt;

&lt;div @click=&quot;btn2&quot;&gt;按钮2&lt;/div&gt;

&lt;div&gt;{{obj1}}&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当点击按钮1和按钮2时候，页面上的obj1是一点没有变化的，也就是经典的那种数据变了，页面没有变。</p><p>但是，当我们给obj1一个初始属性name时候，在改变name，就会发现，页面还是同步的。</p><h5 id="探索2" tabindex="-1"><a class="header-anchor" href="#探索2" aria-hidden="true">#</a> 探索2</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>data() {
  obj1:{
    name:&#39;我是初始值&#39;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>btn1() {
     this.obj1.name = &#39;123&#39;    
 },          
 btn2() {
     this.obj1.name = &#39;变了呀&#39;    
 },         
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div @click=&quot;btn1&quot;&gt;按钮1&lt;/div&gt;

&lt;div @click=&quot;btn2&quot;&gt;按钮2&lt;/div&gt;

&lt;div&gt;{{obj1}}&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们继续探索</p><p>我们再加深一层</p><h6 id="探索3" tabindex="-1"><a class="header-anchor" href="#探索3" aria-hidden="true">#</a> 探索3</h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>data() {
  obj1:{
    name:{
      age:12
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>btn1() {
     this.obj1.name.age = &#39;123&#39;    
 },          
 btn2() {
     this.obj1.name.age = &#39;变了呀&#39;    
 },         
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div @click=&quot;btn1&quot;&gt;按钮1&lt;/div&gt;

&lt;div @click=&quot;btn2&quot;&gt;按钮2&lt;/div&gt;

&lt;div&gt;{{obj1}}&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>发现这样也是变了的</p><p>所以我们可以得出结论</p><h2 id="只有在data里初始化的数据才是响应的-vue不能检测到对象属性的添加或删除-没有在data里声明的属性不是响应的。跟对象的层级多少也没有关系的" tabindex="-1"><a class="header-anchor" href="#只有在data里初始化的数据才是响应的-vue不能检测到对象属性的添加或删除-没有在data里声明的属性不是响应的。跟对象的层级多少也没有关系的" aria-hidden="true">#</a> 只有在data里初始化的数据才是响应的，Vue不能检测到对象属性的添加或删除，没有在data里声明的属性不是响应的。跟对象的层级多少也没有关系的</h2><p>明白怎么造成的了，那咋解决呢？</p><p>比如这个改变了这个newArr的数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>newArr:[]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们直接赋值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let arr = [{name:&#39;前端架构师&#39;}]

this.newArr[0].newList = arr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>会发现数据变了，页面没有变</p><p>有几种方法来解决这个问题</p><p>#方法1. 用 Object.assign</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>this.newArr[0].newList = arr
this.newArr = Object.assign({},this.newArr)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用Object.assign 追加属性</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>this.newArr = Object.assign({}, this.newArr, {
  age: 12,
  grade: &#39;100&#39;
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="这个object-assign并不是深拷贝-只复制了一层。。" tabindex="-1"><a class="header-anchor" href="#这个object-assign并不是深拷贝-只复制了一层。。" aria-hidden="true">#</a> 这个Object.assign并不是深拷贝，只复制了一层。。</h2><p>eg1:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>data() {
  obj1:{}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>btn2() {
    this.obj1.page = 1
    this.obj1 = Object.assign({},this.obj1)
    console.log(this.obj1)
},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就同步了</p><p>但我们在往深了一层呢？</p><p>这里就有一个面试题了</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let obj = {
  a:1,
  b:{
    x:1,
    y:1,
  }
}


let obj1 = Object.assign({}, obj)
obj.a= 2

console.log(obj.a)  // 2
console.log(obj1.a)  // 1
说明第一层拷贝没问题

obj.b.x = 2
console.log(obj.b.x)  //2
console.log(obj1.b.x)  //2

说明深层没有拷贝

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#方法2. 用 this.$set</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let arr = [{name:&#39;前端架构师&#39;}]
this.$set(this.newArr[index],&#39;newList&#39;,arr)


或
Vue.set(this.newArr[index],&#39;newList&#39;,arr)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有同学说，姨？我怎么用this.$set改了也不管用呢</p><p>那是因为</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>data() {
  obj1:{

  }
}


btn2() {
  this.obj1.name = &#39;小明&#39;
  this.$set(this.obj1,name,&#39;小明&#39;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你用this.$set之前你是不是还对相同的属性做了赋值操作，把this.obj1.name = &#39;小明&#39;这个去掉就生效了。</p><h2 id="_3-生成新数组的方法" tabindex="-1"><a class="header-anchor" href="#_3-生成新数组的方法" aria-hidden="true">#</a> 3.生成新数组的方法</h2><p>数组数据变动，使用某些方法操作数组，变动数据时，有些方法无法被vue监测</p><blockquote><p>push()，pop()，shift()，unshift()，splice()，sort()，reverse()可被vue检测到 filter(), concat(), slice()。这些不会改变原始数组，但总是返回一个新数组。当使用非变异方法时，可以用新数组替换旧数组。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vue不能检测以下变动的数组：
1、当你利用索引直接设置一个项时，vm.items[indexOfItem] = newValue
2、当你修改数组的长度时，例如： vm.items.length = newLength
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比如你在监听不到变化的数组后面加个concat</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>arr 是那个变了数组

arr.concat([]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-this-forceupdate" tabindex="-1"><a class="header-anchor" href="#_4-this-forceupdate" aria-hidden="true">#</a> 4.this.$forceUpdate()</h2><blockquote><p>vue多层循环，动态改变数据后渲染的很慢或者不渲染 可在动态改变数据的方法，第一行加上</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>this.$forceUpdate();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-异步更新队列-this-nexttick" tabindex="-1"><a class="header-anchor" href="#_5-异步更新队列-this-nexttick" aria-hidden="true">#</a> 5. 异步更新队列 this.$nextTick()</h2><p>数据第一次获取到了，也渲染了，但是第二次之后数据只有在再一次渲染页面的时候更新，并不能实时更新。</p><p>Vue 异步执行 DOM 更新。只要观察到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据改变。如果同一个 watcher 被多次触发，只会被推入到队列中一次。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>data() {
  obj:&#39;未更新&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>btn2() {
  this.obj = &#39;已更新&#39;
  console.log(this.$el.textContent)  //未更新
  this.$nextTick(() =&gt; {
      console.log(this.$el.textContent)  //已更新
  })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为 $nextTick()返回一个 Promise 对象，所以上面写法可以优化一下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>async btn2() {
  this.obj = &#39;已更新&#39;
  console.log(this.$el.textContent)  //未更新

  await this.$nextTick()
  console.log(this.$el.textContent)  //已更新
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,61),l=[a];function t(v,r){return i(),n("div",null,l)}const u=e(s,[["render",t],["__file","V008-vue中数据变化页面并不变化问题.html.vue"]]);export{u as default};
