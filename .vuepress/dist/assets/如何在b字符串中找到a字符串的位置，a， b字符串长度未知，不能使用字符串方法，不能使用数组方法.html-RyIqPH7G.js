import{_ as n,o as e,c as i,d}from"./app-FRQgbCNf.js";const s={},l=d(`<h1 id="如何在b字符串中找到a字符串的位置-a-b字符串长度未知-不能使用字符串方法-不能使用数组方法★" tabindex="-1"><a class="header-anchor" href="#如何在b字符串中找到a字符串的位置-a-b字符串长度未知-不能使用字符串方法-不能使用数组方法★" aria-hidden="true">#</a> 如何在b字符串中找到a字符串的位置，a， b字符串长度未知，不能使用字符串方法，不能使用数组方法★</h1><p>思路: 如果不能使用字符串的相应方法，我们可以把字符串转换成数组，使用递归函数不断去比对相应的数组索引，然后把满足条件的索引打印出来</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let str1 = &quot;gsvcxqdleaderusdcvdaqdleadersjcvdgcvhsdc&quot;;
let str2 = &#39;qdleader&#39;

let arr1 = str1.split(&#39;&#39;)
let arr2 = str2.split(&#39;&#39;)

function test(arr) {
  for(let i = 0; i &lt; arr1.length; i ++) {
    if(arr[0] == arr1[i]) {
      let num = 0;
      function findIndex(arr) {
        if(arr[num] == arr[i + num]) {
          if(num == arr.length - 1) {
            console.log(&quot;索引是：&quot;,num)
          }
          num ++;
          findIndex(arr2)
        } else {
          return;
        }
      }
      findIndex(arr2)
    }
  }
}

test(arr2)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),r=[l];function a(v,_){return e(),i("div",null,r)}const t=n(s,[["render",a],["__file","如何在b字符串中找到a字符串的位置，a， b字符串长度未知，不能使用字符串方法，不能使用数组方法.html.vue"]]);export{t as default};
