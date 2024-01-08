import{_ as e,o as n,c as i,d as l}from"./app-qTEUp92E.js";const d={},t=l(`<h1 id="d008-dom绑定事件的几种方式★★" tabindex="-1"><a class="header-anchor" href="#d008-dom绑定事件的几种方式★★" aria-hidden="true">#</a> D008-DOM绑定事件的几种方式★★</h1><h2 id="_1-在dom元素中直接绑定" tabindex="-1"><a class="header-anchor" href="#_1-在dom元素中直接绑定" aria-hidden="true">#</a> 1.在DOM元素中直接绑定</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;input type=&quot;button&quot; onclick=&quot;fn()&quot;/&gt;

&lt;script&gt;
function fn() {
  console.log(&quot;执行方法1&quot;)
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-在js中直接绑定" tabindex="-1"><a class="header-anchor" href="#_2-在js中直接绑定" aria-hidden="true">#</a> 2.在js中直接绑定</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>document.getElementById(&#39;btn&#39;).onclick = function() {
  console.log(&quot;方法2&quot;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="绑定事件监听函数" tabindex="-1"><a class="header-anchor" href="#绑定事件监听函数" aria-hidden="true">#</a> 绑定事件监听函数</h2><blockquote><p>事件监听函数addEventListener() 或attachEvent()</p></blockquote><p>事件监听分别定义了三个时间阶段，依次是：捕获阶段，目标阶段，和冒泡阶段</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>element.addEventListener(event, function, useCapture)


event:(必需)事件名，支持所有的Dom事件。
function:(必需)指定要事件触发时候执行的函数
useCapture:（可选）指定事件是否在捕获或冒泡阶段执行。true，捕获。false，冒泡。默认false。

element.addEventListener(DOM事件名,事件触发时执行函数,指定是否是冒泡执行 不填时候默认为false false为冒泡)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>document.getElementById(&#39;btn&#39;).addEventListener(&#39;onclick&#39;,&#39;aaa&#39;)

function aaa() {
  console.log(&#39;123&#39;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在ie中，dom事件名必须加on</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>element.attachEvent(&#39;onclick&#39;,aaa)

function aaa() {
  console.log(&#39;aaaa&#39;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以封装一个通用的就是</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//绑定监听事件
function listen(ele,type,fn) {
  if(ele.addEventListener) {
    ele.addEventListener(type,fn)
  } else {
    ele.attachEvent(&#39;on&#39;+ type,fn)
  }
}

//解除事件监听
function removeEventHandler(ele,type,fn) {
  if(ele.removeEventListener) {
    ele.removeEventListener(type,fn)
  } else {
    ele.detachEvent(&#39;on&#39; + type,fn)
  }
}

let btnInput = document.getElementById(&#39;btn&#39;);

listen(btnInput,&#39;click&#39;,hello1);//添加事件 hello1
listen(btnInput,&#39;click&#39;,hello2);//添加事件 hello2

removeEventHandler(btnInput,&#39;click&#39;,hello1) //移除事件hello1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于我们正常写，然后绑定多个事件时候：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let btn1 = document.getElementById(&#39;btn1&#39;);
btn1.onclick = function() {
  console.log(&#39;hello1&#39;)
}
btn1.onclick = function() {
  console.log(&#39;hello2&#39;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们会发现：常规的事件绑定只执行最后绑定的事件。</p><p>所以事件监听的一大优点就是</p><blockquote><p>可以绑定多个事件，并可以解除相应的绑定</p></blockquote><h2 id="事件委托" tabindex="-1"><a class="header-anchor" href="#事件委托" aria-hidden="true">#</a> 事件委托</h2><p>事件委托就是利用冒泡的原理，把事件加到父元素或祖先元素上，触发执行效果。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let btn6 = document.getElementById(&#39;btn6&#39;)
document.onclick = function(event) {
  let event = event || window.event;
  let target = event.target || event.srcElement
  if(target == btn6) {
    alert(&quot;我是按钮6&quot;)
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过下面两个例子</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let btn1 = document.getElementById(&#39;btn1&#39;)
let btn2 = document.getElementById(&#39;btn2&#39;)
let btn3 = document.getElementById(&#39;btn3&#39;)

item1.onclick = function() {
  console.log(&#39;btn1&#39;)
}

item2.onclick = function() {
  console.log(&#39;btn2&#39;)
}

item3.onclick = function() {
  console.log(&#39;btn3&#39;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但通过事件委托ne</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let btn1 = document.getElementById(&#39;btn1&#39;)
let btn2 = document.getElementById(&#39;btn2&#39;)
let btn3 = document.getElementById(&#39;btn3&#39;)

document.addEventListener(&#39;click&#39;,function(event) {
    let target = event.target
    if(target == btn1) {
      console.log(&#39;btn1&#39;)
    } else if(target == btn2) {
        console.log(&#39;btn2&#39;)
    } else if(target == btn3) {
        console.log(&#39;btn3&#39;)
    }
  })

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因此呢，得出</p><h2 id="事件委托优点" tabindex="-1"><a class="header-anchor" href="#事件委托优点" aria-hidden="true">#</a> 事件委托优点</h2><blockquote><p>1.提高JavaScript性能。事件委托可以显著的提高事件的处理速度，减少内存的占用。</p></blockquote><p>那么还有优点吗？</p><p>看下面这两个例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;ul id=&quot;list&quot;&gt;
 &lt;li id=&quot;item1&quot; &gt;item1&lt;/li&gt;
 &lt;li id=&quot;item2&quot; &gt;item2&lt;/li&gt;
 &lt;li id=&quot;item3&quot; &gt;item3&lt;/li&gt;
&lt;/ul&gt;



let oUl = document.getElementById(&quot;list&quot;);
let oLi = oUl.getElementsByTagName(&quot;li&quot;);

for(var i = 0; i &lt; oLi.length; i ++) {
  (function(i) {
    oLi[i].onclick = function() {
      console.log(i)
    }
  }(i))
}

let newLi = document.createElement(&#39;li&#39;)
let newText = document.createTextNode(&#39;item4&#39;)
newLi.appendChild(newText);
oLi.appendChild(newLi)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你会发现点击第四个按钮时候是不生效的。。。</p><p>但你用事件监听写呢</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let oUl = document.getElementById(&quot;list&quot;);

document.addEventListener(&#39;click&#39;,function(event) {
    let target = event.target;
    if(target == &#39;Li&#39;) {
      console.log(target.innerHTML)
    }
  })


  let newLi = document.createElement(&#39;li&#39;);
  let newText = document.createTextNode(&#39;item4&#39;);

  newLi.appendChild(newText)
  oUl.appendChild(newLi)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>item4有事件响应。说明事件委托可以为新添加的DOM元素动态的添加事件。</p><p>所以得出</p><h2 id="事件委托第二个优点" tabindex="-1"><a class="header-anchor" href="#事件委托第二个优点" aria-hidden="true">#</a> 事件委托第二个优点</h2><blockquote><p>可以对动态创建的DOM元素进行事件绑定:</p></blockquote>`,39),s=[t];function a(v,c){return n(),i("div",null,s)}const u=e(d,[["render",a],["__file","D008-DOM绑定事件的几种方式★★.html.vue"]]);export{u as default};
