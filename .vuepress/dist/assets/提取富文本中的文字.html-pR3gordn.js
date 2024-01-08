import{_ as e,o as n,c as t,d as i}from"./app-tgHnmF2J.js";const l={},s=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function getSimpleText(html) {
  let re1 = new RegExp(&quot;&lt;.+?&gt;&quot;,&quot;g&quot;) //匹配html标签的正则表达式，&quot;g&quot;是搜索匹配多个符合的内容

  let msg = html.replace(re1,&#39;&#39;)
            .replace(/&amp;nbsp;/g,&quot;&quot;)
            .replace(/&amp;middot;/g,&quot;&quot;)
            .replace(/&amp;ldquo;/g,&quot;&quot;)
            .replace(/&amp;rdquo;/g,&quot;&quot;)
            .replace(/&amp;mdash;/g,&quot;&quot;)
  return msg;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),a=[s];function d(u,c){return n(),t("div",null,a)}const o=e(l,[["render",d],["__file","提取富文本中的文字.html.vue"]]);export{o as default};
