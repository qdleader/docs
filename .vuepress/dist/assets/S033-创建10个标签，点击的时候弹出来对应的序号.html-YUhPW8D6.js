import{_ as e,o as n,c as i,d}from"./app-C59QzqDT.js";const l={},s=d(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>

var a
for(let i=0;i&lt;10;i++){
a=document.createElement(&#39;a&#39;)
a.innerHTML=i+&#39;&lt;br&gt;&#39;
a.addEventListener(&#39;click&#39;,function(e){
    console.log(this)  //this为当前点击的&lt;a&gt;
    e.preventDefault()  //如果调用这个方法，默认事件行为将不再触发。
    //例如，在执行这个方法后，如果点击一个链接（a标签），浏览器不会跳转到新的 URL 去了。我们可以用 event.isDefaultPrevented() 来确定这个方法是否(在那个事件对象上)被调用过了。
    alert(i)
})
const d=document.querySelector(&#39;div&#39;)
d.appendChild(a)  //append向一个已存在的元素追加该元素。
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),a=[s];function t(c,r){return n(),i("div",null,a)}const _=e(l,[["render",t],["__file","S033-创建10个标签，点击的时候弹出来对应的序号.html.vue"]]);export{_ as default};
