import{_ as i,o as n,c as e,d as l}from"./app-FRQgbCNf.js";const s={},d=l(`<p>vue 3 diif 用的就是单调递增子序列</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    var lengthOfLIS = function (nums) {
      let n = nums.length;
      if (n &lt;= 1) {
        return n;
      }
      let tail = [nums[0]];//存放最长上升子序列数组
      for (let i = 0; i &lt; n; i++) {
        if (nums[i] &gt; tail[tail.length - 1]) {//当nums中的元素比tail中的最后一个大时 可以放心push进tail
          tail.push(nums[i]);
        } else {//否则进行二分查找
          let left = 0;
          let right = tail.length;
          while (left &lt; right) {
            let mid = (left + right) &gt;&gt; 1;
            if (tail[mid] &lt; nums[i]) {
              left = mid + 1;
            } else {
              right = mid;
            }
          }
          tail[left] = nums[i];//将nums[i]放置到合适的位置，此时前面的元素都比nums[i]小
        }
      }
      return tail.length;
    };
    console.log(&#39;lengthOfLIS&#39;, lengthOfLIS([1, 2, 1, 23, 542, 6, 246]));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
    var lengthOfLIS = function (nums) {
      let n = nums.length;
      if (n &lt;= 1) {
        return n;
      }
      let tail = [nums[0]];//存放最长上升子序列数组
      for (let i = 0; i &lt; n; i++) {
        if (nums[i] &gt; tail[tail.length - 1]) {//当nums中的元素比tail中的最后一个大时 可以放心push进tail
          tail.push(nums[i]);
        } else {//否则进行二分查找
          let left = 0;
          let right = tail.length - 1;
          while (left &lt; right) {
            let mid = Math.floor((left + right) / 2);
            // let mid = left + ((right - left) &gt;&gt; 1);
            if (tail[mid] &lt; nums[i]) {
              left = mid + 1;
            } else {
              right = mid;
            }
          }
          if (tail[left] &lt; nums[i]) {
            tail[left] = nums[i]
          };
          //将nums[i]放置到合适的位置，此时前面的元素都比nums[i]小
        }
      }
      return tail.length;
    };
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),t=[d];function v(a,u){return n(),e("div",null,t)}const m=i(s,[["render",v],["__file","S039-单调递增子序列★★★.html.vue"]]);export{m as default};
