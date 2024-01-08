import{_ as e,o as n,c as i,d as s}from"./app-xrgnhFxe.js";const l={},t=s(`<p>如 123ab1234d458 输出 1234</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    let str = &#39;123ab1234d458&#39;;
    let getMax = (str) =&gt; {
      let nums = str.split(&#39;&#39;);
      let start = 0, start1 = 0, end1 = 0, result = 0;
      for (let i = 0; i &lt; nums.length; i++) {
        if (nums[i] &lt;= nums[i - 1] || Number.isNaN(Number(nums[i]))) {

          if (i - start &gt; result) {
            result = Math.max(i - start, result);
            console.log(start1);
            start1 = start;
            end1 = i
          }
          start = i;
          if (nums.length - start &lt; result) {
            // return result
            break
          };
        }
      }
      return str.slice(start1, end1)
    }
    console.log(getMax(str));


    \`\`\`</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d=[t];function r(a,v){return n(),i("div",null,d)}const c=e(l,[["render",r],["__file","字符串中最长连续数字.html.vue"]]);export{c as default};
