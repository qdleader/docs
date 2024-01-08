import{_ as n,o as i,c as e,d as s}from"./app-otDwoQZb.js";const l={},d=s(`<p>手写-如何找到数组中第一个没出现的最小正整数 怎么优化</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。

示例 1：

输入：nums = [1,2,0]
输出：3

示例 2：

输入：nums = [3,4,-1,1]
输出：2

示例 3：

输入：nums = [7,8,9,11,12]
输出：1
复制代码
这是一道字节的算法题 目的在于不断地去优化算法思路

第一版
O(n^2) 的方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const firstMissingPositive = (nums) =&gt; {
  let i = 0;
  let res = 1;
  while (i &lt; nums.length) {
    if (nums[i] == res) {
      res++;
      i = 0;
    } else {
      i++;
    }
  }
  return res;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二版 时间空间均为 O(n)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const firstMissingPositive = (nums) =&gt; {
  const set = new Set();
  for (let i = 0; i &lt; nums.length; i++) {
    set.add(nums[i]);
  }
  for (let i = 1; i &lt;= nums.length + 1; i++) {
    if (!set.has(i)) {
      return i;
    }
  }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终版 时间复杂度为 O(n) 并且只使用常数级别空间</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const firstMissingPositive = (nums) =&gt; {
  for (let i = 0; i &lt; nums.length; i++) {
    while (
      nums[i] &gt;= 1 &amp;&amp;
      nums[i] &lt;= nums.length &amp;&amp; // 对1~nums.length范围内的元素进行安排
      nums[nums[i] - 1] !== nums[i] // 已经出现在理想位置的，就不用交换
    ) {
      const temp = nums[nums[i] - 1]; // 交换
      nums[nums[i] - 1] = nums[i];
      nums[i] = temp;
    }
  }
  // 现在期待的是 [1,2,3,...]，如果遍历到不是放着该放的元素
  for (let i = 0; i &lt; nums.length; i++) {
    if (nums[i] != i + 1) {
      return i + 1;
    }
  }
  return nums.length + 1; // 发现元素 1~nums.length 占满了数组，一个没缺
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),v=[d];function a(u,r){return i(),e("div",null,v)}const c=n(l,[["render",a],["__file","S018-手写数组中第一个没出现的最小正整数.html.vue"]]);export{c as default};
