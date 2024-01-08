import{_ as e,o as n,c as i,d as l}from"./app-C59QzqDT.js";const s={},r=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 向上取两位小数
upFixed (num, fix) {
  // num为原数字，fix是保留的小数位数
  let result = &#39;0&#39;
  if (Number(num) &amp;&amp; fix &gt; 0) { // 简单的做个判断
    fix = +fix || 2
    num = num + &#39;&#39;
    if (/e/.test(num)) { // 如果是包含e字符的数字直接返回
      result = num
    } else if (!/\\./.test(num)) { // 如果没有小数点
      result = num + \`.\${Array(fix + 1).join(&#39;0&#39;)}\`
    } else { // 如果有小数点
      num = num + \`\${Array(fix + 1).join(&#39;0&#39;)}\`
      let reg = new RegExp(\`-?\\\\d*\\\\.\\\\d{0,\${fix}}\`)
      let floorStr = reg.exec(num)[0]
      if (+floorStr &gt;= +num) {
        result = floorStr
      } else {
        let floorNumber = +floorStr + +\`0.\${Array(fix).join(&#39;0&#39;)}1\`
        let point = /\\./.test(floorNumber + &#39;&#39;) ? &#39;&#39; : &#39;.&#39;
        let floorStr2 = floorNumber + point + \`\${Array(fix + 1).join(&#39;0&#39;)}\`
        result = reg.exec(floorStr2)[0]
      }
    }
  }
  return result
},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),d=[r];function u(v,t){return n(),i("div",null,d)}const m=e(s,[["render",u],["__file","小数向上取两位.html.vue"]]);export{m as default};
