import{_ as e,o as n,c as i,d as r}from"./app-Ni1_oyYA.js";const d={},a=r(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const list = [
  { id: 1, pid: 0, name: &#39;天津&#39; },
  { id: 2, pid: 1, name: &#39;河西区&#39; },
  { id: 3, pid: 1, name: &#39;滨海新区&#39; },
  { id: 4, pid: 1, name: &#39;津南&#39; },
  { id: 5, pid: 1, name: &#39;西青&#39; },
  { id: 6, pid: 3, name: &#39;胡家园&#39; },
  { id: 7, pid: 3, name: &#39;工人新村&#39; },
  { id: 8, pid: 3, name: &#39;人民广场&#39; }
];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>const arrayToTree = (arr, pid) =&gt; { return arr.reduce((res, current) =&gt; { if (current[&#39;pid&#39;] === pid) { current.children = arrayToTree(arr, current[&#39;id&#39;]); return res.concat(current); } return res; }, []); }; console.log(arrayToTree(list, 0))</p>`,2),s=[a];function c(t,l){return n(),i("div",null,s)}const o=e(d,[["render",c],["__file","S026-一维数组转为树结构.html.vue"]]);export{o as default};
