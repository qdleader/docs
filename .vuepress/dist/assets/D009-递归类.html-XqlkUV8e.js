import{_ as i,o as n,c as e,d}from"./app-FRQgbCNf.js";const s={},l=d(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let arr = [
    {id: 1, name: &#39;部门1&#39;, pid: 0},
    {id: 2, name: &#39;部门2&#39;, pid: 1},
    {id: 3, name: &#39;部门3&#39;, pid: 1},
    {id: 4, name: &#39;部门4&#39;, pid: 3},
    {id: 5, name: &#39;部门5&#39;, pid: 4},
]



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[
    {
        &quot;id&quot;: 1,
        &quot;name&quot;: &quot;部门1&quot;,
        &quot;pid&quot;: 0,
        &quot;children&quot;: [
            {
                &quot;id&quot;: 2,
                &quot;name&quot;: &quot;部门2&quot;,
                &quot;pid&quot;: 1,
                &quot;children&quot;: []
            },
            {
                &quot;id&quot;: 3,
                &quot;name&quot;: &quot;部门3&quot;,
                &quot;pid&quot;: 1,
                &quot;children&quot;: [
                    // 结果 ,,,
                ]
            }
        ]
    }
]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
const getChildren = (data,result,pid) =&gt; {
  for(let item in data) {
    if(item.pid === pid) {
      let itemInfo = {
        ...item,
        children:[]
      }
      result.push(itemInfo)
      getChildren(data,itemInfo.children,itemInfo.id)
    }
  }
}


let arrayToTree = (data,pid) =&gt; {
  let result = [];
  getChildren(data,result,pid)
  return result
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法2" tabindex="-1"><a class="header-anchor" href="#方法2" aria-hidden="true">#</a> 方法2</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let arr = [
{id: 1, name: &#39;部门1&#39;, pid: 0},
{id: 2, name: &#39;部门2&#39;, pid: 1},
{id: 3, name: &#39;部门3&#39;, pid: 1},
{id: 4, name: &#39;部门4&#39;, pid: 3},
{id: 5, name: &#39;部门5&#39;, pid: 4},
]
const foo = (arr) =&gt; {
    const result = { }
    const ret = []
    // 序列化层级
    arr.forEach((item) =&gt; {
        const { pid } = item
        if (result[pid]) result[pid].push(item)
        else result[pid] = [item]
    })
    // 设定初始层级 pid：0，数组
    ret.push(...result[&#39;0&#39;])
    // 递归查找
    var fn = (arr) =&gt; {
        arr.forEach(item =&gt; {
            const { id } = item
            const children = result[id]
            if (children) {
              item.children = children
              fn(children)
            }
        })
        return ret
    }
    return fn(ret)
}
foo(arr)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),v=[l];function a(r,u){return n(),e("div",null,v)}const c=i(s,[["render",a],["__file","D009-递归类.html.vue"]]);export{c as default};
