import{_ as e,o as s,c as n,d as t}from"./app-otDwoQZb.js";const i={},r=t(`<p>编写一个函数来查找字符串数组中的最长公共前缀。 如果不存在公共前缀，返回空字符串 &quot;&quot;。</p><p>示例 1：</p><p>输入：strs = [&quot;flower&quot;,&quot;flow&quot;,&quot;flight&quot;] 输出：&quot;fl&quot;</p><p>示例 2：</p><p>输入：strs = [&quot;dog&quot;,&quot;racecar&quot;,&quot;car&quot;] 输出：&quot;&quot; 解释：输入不存在公共前缀。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const longestCommonPrefix = function (strs) {
  const str = strs[0];
  let index = 0;
  while (index &lt; str.length) {
    const strCur = str.slice(0, index + 1);
    for (let i = 0; i &lt; strs.length; i++) {
      if (!strs[i] || !strs[i].startsWith(strCur)) {
        return str.slice(0, index);
      }
    }
    index++;
  }
  return str;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),l=[r];function d(o,u){return s(),n("div",null,l)}const a=e(i,[["render",d],["__file","S016-手写查找公用数组前缀.html.vue"]]);export{a as default};
