import{_ as t,o,c as e,d as r}from"./app-xrgnhFxe.js";const c={},a=r('<h2 id="为什么object-prototype-tostring-call-可以如此准确的判断类型" tabindex="-1"><a class="header-anchor" href="#为什么object-prototype-tostring-call-可以如此准确的判断类型" aria-hidden="true">#</a> 为什么Object.prototype.toString.call()可以如此准确的判断类型？</h2><h2 id="为什么object-prototype-tostring-call-可以准确判断数据类型" tabindex="-1"><a class="header-anchor" href="#为什么object-prototype-tostring-call-可以准确判断数据类型" aria-hidden="true">#</a> 为什么Object.prototype.toString.call()可以准确判断数据类型</h2><p>我们需要了解，不论是Array,还是Date，所有数据类型。都是从对象衍生而来的。本质上，Array和Date还有Function啥的他们就是对象。 虽然他们都被称为对象，对象也是有很多类型的。比如Date,他就是时间对象‘ [object Date] ’, Array,他就是数组对象‘[object Array]’等等。简而言之，<strong>js中所有的数据类型，都只是对象的一种类型</strong>。所以，js中有一句话叫，万物皆对象。 而Object.prototype.toString() 这个函数作用就是，返回当前调用者的对象类型。</p><p><strong>言简意赅的说:所有数据类型都是对象的一种类型，而Object.prototype.toString可以返回当前调用者的对象类型。</strong></p><h3 id="object-prototype-tostring-call-为什么要加call" tabindex="-1"><a class="header-anchor" href="#object-prototype-tostring-call-为什么要加call" aria-hidden="true">#</a> Object.prototype.toString.call()为什么要加call();</h3><p>因为Object.prototype.toString()返回的是调用者的类型。不论你toString()本身的入参写的是什么，在Object.prototype.toString()中，他的调用者永远都是Object.prototype;所以，在不加call()情况下，我们的出来的结果永远都是 &#39;[object Object]&#39;</p><p><strong>call(),是为了改变Object.prototype.toString这个函数都指向。让Object.prototype.toString这个方法指向我们所传入的数据。</strong></p><h4 id="为什么一定要用object-prototype-tostring-call" tabindex="-1"><a class="header-anchor" href="#为什么一定要用object-prototype-tostring-call" aria-hidden="true">#</a> 为什么一定要用Object.prototype.toString.call()</h4><p>为什么一定要用Object.prototype.toString.call()这个方法，那么长，写起来很麻烦，我直接在当前数据本身去调用toString()，然后让他顺着原型链去找，最后找到Object.prototype.toString这个方法不行吗？连call都省下了。 还真不行。 因为，每个数据类，他们都重写了toString()方法。所以，如果我们拿数据本身去toString()，是得不到对象类型的。</p><p>我们在数组的原型上又发现了一个toString方法，证明toString方法被重写了。所以，直接使用数据本身去调用toString。是无法调用到Object.prototype.toString的。而且，在数组上被重写之后的toString方法，作用也不再是返回对象类型了。而是打印数组内容。 所以，我们只能使用Object.prototyoe.toString.call();的形式去获取对象属性</p><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><blockquote><p>js中所有的数据类型，本质上都是对象，而这些数据类型不过是对象的一种类型而已。 Object.prototype.toString这个方法是用于返回当前调用者的对象类型的 call是为了让Object.prototype.toString方法指向我们指定的数据。否则返回永远都是[object Object]</p></blockquote>',12),p=[a];function n(i,l){return o(),e("div",null,p)}const b=t(c,[["render",n],["__file","Q011-Object.prototype.toString().call为什么判断类型时候这么准.html.vue"]]);export{b as default};
