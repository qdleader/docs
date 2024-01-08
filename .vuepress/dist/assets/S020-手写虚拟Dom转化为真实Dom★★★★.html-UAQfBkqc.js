import{_ as e,o as n,c as i,d}from"./app-C59QzqDT.js";const l={},s=d(`<p>{ tag:&quot;DIV&quot;, attrs:{ id:&#39;app&#39; }, children:[ { tag:&#39;SPAN&#39;, children:[ {tag:&#39;A&#39;,children:[]} ] }, { tag:&#39;SPAN&#39;, children:[ {tag:&#39;A&#39;,children:[]}, {Tag:&#39;A&#39;,children:[]} ] } ] }</p><p>转化为真实dom</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div id=&quot;app&quot;&gt;
  &lt;span&gt;
    &lt;a&gt;&lt;/a&gt;
  &lt;/span&gt;
  &lt;span&gt;
    &lt;a&gt;&lt;/a&gt;
    &lt;a&gt;&lt;/a&gt;
  &lt;/span&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 真正的渲染函数
function _render(vnode) {
  // 如果是数字类型转化为字符串
  if (typeof vnode === &quot;number&quot;) {
    vnode = String(vnode);
  }
  // 字符串类型直接就是文本节点
  if (typeof vnode === &quot;string&quot;) {
    return document.createTextNode(vnode);
  }
  // 普通DOM
  const dom = document.createElement(vnode.tag);
  if (vnode.attrs) {
    // 遍历属性
    Object.keys(vnode.attrs).forEach((key) =&gt; {
      const value = vnode.attrs[key];
      dom.setAttribute(key, value);
    });
  }
  // 子数组进行递归操作 这一步是关键
  vnode.children.forEach((child) =&gt; dom.appendChild(_render(child)));
  return dom;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),t=[s];function a(v,r){return n(),i("div",null,t)}const u=e(l,[["render",a],["__file","S020-手写虚拟Dom转化为真实Dom★★★★.html.vue"]]);export{u as default};
