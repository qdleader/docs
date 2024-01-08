import{_ as e,o as n,c as i,d as s}from"./app-Ni1_oyYA.js";const r={},l=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * @param {string} queryString 输入框输入的内容
 * @param {Array} lists 要筛选的数组
 * @param {string} str 要筛选的数组中要搜的对应的name
 * @return {Array} 筛选完的数组
 */
// 公用的搜索数组方法
export function querySearchPublic(queryString, lists, str) {
  let results = lists
  if (queryString != &quot;&quot;) {
    results = queryString
      ? lists.filter(createFilter(queryString, str))
      : lists;
  }
  return results;
}
function createFilter(queryString, str) {
  let con = [&quot;&quot;, ...queryString, &quot;&quot;].join(&quot;.*&quot;); //转化成正则格式的字符串
  let reg = new RegExp(con); //正则
  return (lists) =&gt; {
    return reg.test(lists[str]);
  };
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),t=[l];function d(u,a){return n(),i("div",null,t)}const v=e(r,[["render",d],["__file","前端进行搜索.html.vue"]]);export{v as default};
