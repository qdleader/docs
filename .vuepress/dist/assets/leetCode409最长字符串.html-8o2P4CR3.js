import{_ as e,o as n,c as i,d as l}from"./app-xrgnhFxe.js";const s={},d=l(`<h1 id="leetcode409最长字符串" tabindex="-1"><a class="header-anchor" href="#leetcode409最长字符串" aria-hidden="true">#</a> leetCode409最长字符串</h1><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><blockquote><p>给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。</p></blockquote><blockquote><p>在构造过程中，请注意区分大小写。比如 &quot;Aa&quot; 不能当做一个回文字符串。</p></blockquote><blockquote><p>注意: 假设字符串的长度不会超过 1010。</p></blockquote><blockquote><p>示例 1:</p></blockquote><blockquote><p>输入: &quot;abccccdd&quot;</p></blockquote><blockquote><p>输出: 7</p></blockquote><blockquote><p>解释: 我们可以构造的最长的回文串是&quot;dccaccd&quot;, 它的长度是 7。</p></blockquote><h2 id="解析" tabindex="-1"><a class="header-anchor" href="#解析" aria-hidden="true">#</a> 解析</h2><blockquote><p>偶数的最长 把每个字母都对应的放到数组里面，对象里面放对应的个数</p></blockquote><blockquote><p>个数为偶数，一定会组成会问的，个数为奇数的减一即可</p></blockquote><blockquote><p>最总生成的num一定是偶数，如果num小于s的长度，那么num + 1即可</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var longestPalindrome = function(s) {
    if(s.length &gt; 1010) {
        return
    }
    let num = 0;
    let nowObj = {},arr =[];
    for(let i = 0; i &lt; s.length; i ++) {
         if(arr.indexOf(s.charAt(i)) == -1) {
            nowObj[s.charAt(i)] = 1
            arr.push(s.charAt(i))
         } else {
            nowObj[s.charAt(i)] += 1
         }
    }
    console.log(&quot;nowObj&quot;,nowObj)
    console.log(&quot;nowObj&quot;,arr)
    for(let i = 0; i &lt; arr.length; i ++) {
        if((nowObj[arr[i]]) % 2 == 0) {
            num += nowObj[arr[i]]
        } else {
            num += nowObj[arr[i]] - 1
        }
    }
    if(num &lt; s.length) {
        return num + 1;
    } else {
        return num;
    }
};

console.log(longestPalindrome(&quot;cccdd&quot;))

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#拓展</p><p>js实现找出字符串中的最长回文串</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var longestPalindrome = function(s) {
        if(s.length &gt; 1010) {
            return
        }
        let num = 0;
        let str = &#39;&#39;
        for(let i = 0; i &lt; s.length; i ++) {
             str = &#39;&#39;
            for(let j = i; j &lt; s.length ; j ++) {
                str += s.charAt(j)
                if(str.split(&#39;&#39;).reverse().join(&#39;&#39;) == str) {
                    if(str.length &gt; num) {
                        num = str.length;
                    }

                }
            }
        }
        return num;
    };

    console.log(longestPalindrome(&quot;abccccdd&quot;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),r=[d];function c(a,t){return n(),i("div",null,r)}const v=e(s,[["render",c],["__file","leetCode409最长字符串.html.vue"]]);export{v as default};
