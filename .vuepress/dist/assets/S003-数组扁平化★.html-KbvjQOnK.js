import{_ as e,o as i,c as n,d as a}from"./app-G0TSq-iO.js";const r={},d=a(`<h1 id="s003-数组扁平化★" tabindex="-1"><a class="header-anchor" href="#s003-数组扁平化★" aria-hidden="true">#</a> S003-数组扁平化★</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 源数组：[1, [2, [3, [4, 5]]]]
// 降维后数组：[1, 2, 3, 4, 5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let arr1 = []
function flutten(arr) {
  for(let i in arr) {
    if(typeof arr[i] === &#39;object&#39;) {
      arr1.concat(flutten(arr[i]))
    }else {
      arr1.push(arr[i])
    }
  }
  return arr1;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-数组遍历-递归" tabindex="-1"><a class="header-anchor" href="#_1-数组遍历-递归" aria-hidden="true">#</a> 1.数组遍历 + 递归</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function flutten(arr) {
  let res = [];
  arr.map(item =&gt; {
      if(Array.isArray(item)) {
        res = res.concat(flutten(item))
      } else {
        res.push(item)
      }
    })
    return res;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="递归" tabindex="-1"><a class="header-anchor" href="#递归" aria-hidden="true">#</a> 递归</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function flat(arr) {
  const isDeep = arr.some(item =&gt; item instanceof Array)
  if(!isDeep) {
    return arr
  }

  const res = Array.prototype.concat.apply([],arr)
  return flat(res)
}

const res = flat( [1,2,[3,4],5])
console.log(res)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-join-split-map-适用于里面都是数字的" tabindex="-1"><a class="header-anchor" href="#_2-join-split-map-适用于里面都是数字的" aria-hidden="true">#</a> 2.join + split + map (适用于里面都是数字的)</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function flutten(arr) {
  arr.join(&#39;,&#39;).split(&#39;,&#39;).map(item =&gt; {
      return Number(item)
    })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-tosting-split-map-适用于里面都是数字的" tabindex="-1"><a class="header-anchor" href="#_3-tosting-split-map-适用于里面都是数字的" aria-hidden="true">#</a> 3.toSting + split + map (适用于里面都是数字的)</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function flutten(arr) {
  arr.toString().split(&#39;,&#39;).map(item =&gt; {
      return Number(item)
    })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-扩展运算符" tabindex="-1"><a class="header-anchor" href="#_4-扩展运算符" aria-hidden="true">#</a> 4.扩展运算符</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function flutten(arr) {
  while(arr.some(item =&gt; Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-reduce" tabindex="-1"><a class="header-anchor" href="#_5-reduce" aria-hidden="true">#</a> 5.reduce</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function flutten(arr) {
  return arr.reduce((result,item) =&gt; {
      return result.concat(Array.isArray(item)?flutten(item):item)
    },[])
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-正则" tabindex="-1"><a class="header-anchor" href="#_6-正则" aria-hidden="true">#</a> 6.正则</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let result = JSON.parse(&#39;[&#39; + JSON.stringify(arr).replace(/\\[|\\]/g,&#39;&#39;) + &#39;]&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_7-使用flat" tabindex="-1"><a class="header-anchor" href="#_7-使用flat" aria-hidden="true">#</a> 7.使用flat</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
let result = arr.flat(Infinity)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我们详细说一下es6 新增的方法flat</p><blockquote><p>es6提供的新方法flat(depth) let a = [1,[2,3]]; a.flat(); // [1,2,3] a.flat(1); //[1,2,3] flat(depth) 方法中的参数depth，代表展开嵌套数组的深度，默认是1</p></blockquote><blockquote><p>所以我们可以添加参数1，或者直接调用flat()来对2维数组进行扁平化，如果我们可以提前知道数组的维度，对这个数组进行扁平化处理，参数depth的值就是数组的维度减一。</p></blockquote><blockquote><p>let a = [1,[2,3,[4,[5]]]]; a.flat(4-1); // [1,2,3,4,5] a是4维数组 其实还有一种更简单的办法，无需知道数组的维度，直接将目标数组变成1维数组。depth的值设置为Infinity。</p></blockquote><blockquote><p>let a = [1,[2,3,[4,[5]]]]; a.flat(Infinity); // [1,2,3,4,5] a是4维数组</p></blockquote><p>这个方法里面flat性能是最好的。</p>`,25),s=[d];function l(t,c){return i(),n("div",null,s)}const v=e(r,[["render",l],["__file","S003-数组扁平化★.html.vue"]]);export{v as default};
