import{_ as n,o as e,c as i,d as l}from"./app-FRQgbCNf.js";const s={},r=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * @param {Number} num num为原数字
 * @param {Number} fix fix是保留的小数位数
 * @param {Number} rule 要处理数据的规则，0 向上取整；1 向下取整；2，四舍五入
 * @return {Number} 处理完的数字
 */
// 商品用量 换算规则
export function getNumber(num, fix, rule) {
  let results = 0;
  if (rule == 0) {
    results = upFixed(num, fix)
  } else if (rule == 1) {
    results = downFixed(num, fix)
  } else if (rule == 2) {
    results = num.toFixed(fix)
  }
  return results;
}
// 向上取整
function upFixed(num, fix) {
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
}
// 向下取整
function downFixed(num, fix) {
  // num为原数字，fix是保留的小数位数
  let result = &#39;0&#39;, num1 = Number(fix) + 2;
  let num2 = num.toFixed(num1);
  result = num2.substring(0, num2.indexOf(&quot;.&quot;) + 3);
  return result;
}
// 向下取整
export function checkEmpty(str) {
  if (str == &#39;undefined&#39; || !str || !/[^\\s]/.test(str)) {
    return true;
  } else {
    return false;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),d=[r];function u(v,m){return e(),i("div",null,d)}const t=n(s,[["render",u],["__file","处理数字方法.html.vue"]]);export{t as default};
