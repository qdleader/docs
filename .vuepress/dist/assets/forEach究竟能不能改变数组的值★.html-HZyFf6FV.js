import{_ as e,o as n,c as l,d as i}from"./app-gxPsN6Nl.js";const d={},r=i(`<h1 id="foreach究竟能不能改变数组的值★" tabindex="-1"><a class="header-anchor" href="#foreach究竟能不能改变数组的值★" aria-hidden="true">#</a> forEach究竟能不能改变数组的值★</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    let obj = {&#39;1&#39;:1}
    let oldArr = [&#39;1&#39;,1,obj,true]
    oldArr.forEach((el)=&gt;{
      el = 1
    })
    console.log(oldArr)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从例子一来看forEach并不改变原数组 例子二：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    let obj = {&#39;1&#39;:1}
    let oldArr = [&#39;1&#39;,1,obj,true]
    oldArr.forEach((el)=&gt;{
      if(typeof el == &#39;object&#39;){
        el[&#39;2&#39;]=2
      }
      el = 2
    })
    console.log(oldArr)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例子二里的obj的值是被改变了的，那么forEach究竟改不改变原数组呢？ 所以我们回到概念，forEach方法只是操作数据而已，数组里的数据是如何引用的呢？ js的数据有基本数据类型和引用数据类型，同时引出堆内存和栈内存的概念。对于基本数据类型：Number、String 、Boolean、Null和Undefined，它们在栈内存中直接存储变量名和值。而Object对象的真实数据存储在堆内存中，它在栈内存中存储的是变量名和堆内存的位置。 而在forEach方法里操作了obj对象，实际操作的是对象本身，而数据只是引用了对象的栈内存地址，所以数组里的数据相应改变。 那么为什么forEach方法不能改变数组里的基本变量呢？</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    let a = 1
    let obj = {&#39;1&#39;:1}
    let oldArr = [&#39;1&#39;,1,obj,true,a]
    oldArr.forEach((el)=&gt;{
      if(typeof el == &#39;object&#39;){
        el[&#39;2&#39;]=2
      }
      el = 2
    })
    a  = 2
    console.log(oldArr) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不仅forEach方法无法改变，直接在外面操作a变量也无法改变。 因为数组内的基本变量，在栈内存内生成了自己的值，并非引用栈内存的地址。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    let a = 1
    let obj = {&#39;1&#39;:1}
    let oldArr = [&#39;1&#39;,1,obj,true,a]
    oldArr.forEach((el,index)=&gt;{
      // if(typeof el == &#39;object&#39;){
      //   el[&#39;2&#39;]=2
      // }
      oldArr[index] =2
    })
    console.log(oldArr)
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>神奇的事发生了，基本数据类型也被改变了。 因为我们使用forEach方法的时候对于每个数据都创建了一个变量el，我们操作的是el变量，对于基本数据类型，el变量就是新创建的一个内存。el变量改变并不影响基本原来地址值的改变。而el变量对应的是引用数据类型时，实际还是一个引用地址，操作它，仍旧操作的是对应的堆内存。</p><p>总结：forEach方法里操作对象生效，想要操作里面的基本数据类型，就用arr[i]的形式直接操作数组。</p>`,10),s=[r];function a(c,v){return n(),l("div",null,s)}const t=e(d,[["render",a],["__file","forEach究竟能不能改变数组的值★.html.vue"]]);export{t as default};
