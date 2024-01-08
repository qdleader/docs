import{_ as e,o as n,c as i,d}from"./app-C59QzqDT.js";const l={},s=d(`<h1 id="vue实现响应式原理即vue如何监听data的每个属性的变化★★★★" tabindex="-1"><a class="header-anchor" href="#vue实现响应式原理即vue如何监听data的每个属性的变化★★★★" aria-hidden="true">#</a> vue实现响应式原理即vue如何监听data的每个属性的变化★★★★</h1><h2 id="重要指数-★★★★" tabindex="-1"><a class="header-anchor" href="#重要指数-★★★★" aria-hidden="true">#</a> 重要指数：★★★★</h2><p>记住两点</p><blockquote><p>1、使用 Object.defineProprety实现响应式原理 2、 data属性代理到vm(即是Vue实例)上</p></blockquote><h2 id="object-defineproperty-是如何使用的" tabindex="-1"><a class="header-anchor" href="#object-defineproperty-是如何使用的" aria-hidden="true">#</a> Object.defineProperty 是如何使用的？</h2><blockquote><p>Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。 因为 Object.defineProperty() 是ES6新增的一个方法，所有我们使用vue不支持IE低版本浏览器</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> /*----------  defineProperty 基本使用  ------------*/
        let obj = {}
        let name = &#39;qdleader&#39;

        Object.defineProperty(obj, &#39;name&#39;, {
            get: function () {
                console.log(&#39;get&#39;)
                return name
            },
            set: function (newValue) {
                console.log(&#39;set&#39;)
                name = newValue
            }

        })
       console.log(obj.name)
       obj.name = &#39;yyyang&#39;
        // 输出
        // get
        // qdleader
        // set
		
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>defineProperty这个原理就是拦截对象，给对象的属性增加 set 和 get方法，因为核心是 defineProperty所以还需要对数组的方法进行拦截</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>对对象进行拦截
function observer(target){
  // 如果不是对象数据类型直接返回即可
  if(typeof target !== &#39;object&#39;){
    return target
  }
  // 重新定义key
  for(let key in target){
    defineReactive(target,key,target[key])
  }
}
function update(){
  console.log(&#39;update view&#39;)
}
function defineReactive(obj,key,value){
  observer(value); // 有可能对象类型是多层，递归劫持
  Object.defineProperty(obj,key,{
    get(){
      // 在get 方法中收集依赖
      return value
    },
    set(newVal){
      if(newVal !== value){
        observer(value);
        update(); // 在set方法中触发更新
      }
    }
  })
}
const obj = {name:&#39;qdleader&#39;}
observer(obj);
obj.name = &#39;new-name&#39;;
输出：
update view

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
数组方法劫持
const oldProtoMehtods = Array.prototype
const proto = Object.create(oldProtoMehtods)
function update(){
  console.log(&#39;update view&#39;)
}
function defineReactive(obj,key,value){
  observer(value) // 有可能对象类型是多层，递归劫持
  Object.defineProperty(obj,key,{
    get(){
      // 在get 方法中收集依赖
      return value
    },
    set(newVal){
      if(newVal !== value){
        observer(value)
        update() // 在set方法中触发更新
      }
    }
  })
}
[&#39;push&#39;,&#39;pop&#39;,&#39;shift&#39;,&#39;unshift&#39;].forEach(method=&gt;{
  Object.defineProperty(proto, method,{
    get(){
      update()
      return oldProtoMehtods[method]
    }
  })
})
function observer(target){
  if(typeof target !== &#39;object&#39;){
    return target
  }
  // 如果不是对象数据类型直接返回即可
  if(Array.isArray(target)){
    Object.setPrototypeOf(target, proto)
    // 给数组中的每一项进行observr
    for(let i = 0 ; i &lt; target.length; i++){
      observer(target[i])
    }
    return
  }
  // 重新定义key
  for(let key in target){
    defineReactive(target, key, target[key])
  }
}
let obj = {hobby:[{name:&#39;zhuanzhuan&#39;}]}
observer(obj)
// 使用[&#39;push&#39;,&#39;pop&#39;,&#39;shift&#39;,&#39;unshift&#39;] 方法，更改数组会触发视图更新
obj.hobby.push(&#39;转转&#39;)
// 更改数组中的对象也会触发视图更新
obj.hobby[0].name = &#39;new-name&#39;
console.log(obj.hobby)
输出：
update view
update view
[ { name: [Getter/Setter] }, &#39;qdleader&#39; ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="object-defineproperty缺点" tabindex="-1"><a class="header-anchor" href="#object-defineproperty缺点" aria-hidden="true">#</a> Object.defineProperty缺点：</h2><blockquote><p>无法监听数组的变化</p></blockquote><blockquote><p>需要深度遍历，浪费内存</p></blockquote><h1 id="模拟实现vue响应式" tabindex="-1"><a class="header-anchor" href="#模拟实现vue响应式" aria-hidden="true">#</a> 模拟实现Vue响应式</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 模拟实现Vue响应式
       let vm = {} // 我们把这个看做是Vue的一个实例
        // data看作是Vue实例的data属性
        let data = {
            price:100,
            name:&#39;qdleader&#39;
        }


        let key, value

        for (const key in data) {
            if (data.hasOwnProperty(key)) { 
               (function(key){
                Object.defineProperty(vm,key,{  // 将data属性代理到vm上
                    get:function(){
                        console.log(&#39;get&#39;,data[key])  // 监听
                        return data[key]
                    },
                    set:function(newValue){
                        console.log(&#39;set&#39;,newValue) // 监听
                        data[key] = newValue
                    }
                })
               })(key)
                
            }
        }


        console.log(vm.name)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),v=[s];function a(r,t){return n(),i("div",null,v)}const c=e(l,[["render",a],["__file","D005-vue实现响应式原理即vue如何监听data的每个属性的变化★★★★.html.vue"]]);export{c as default};
