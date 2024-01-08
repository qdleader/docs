import{_ as n,o as s,c as a,d as e}from"./app-pokGQ7aS.js";const i={},l=e(`<h2 id="_20-有效的括号" tabindex="-1"><a class="header-anchor" href="#_20-有效的括号" aria-hidden="true">#</a> 20. 有效的括号</h2><blockquote><p>给定一个只包括 &#39;(&#39;，&#39;)&#39;，&#39;{&#39;，&#39;}&#39;，&#39;[&#39;，&#39;]&#39; 的字符串 s ，判断字符串是否有效。</p></blockquote><blockquote><p>有效字符串需满足：</p></blockquote><blockquote><p>左括号必须用相同类型的右括号闭合。 左括号必须以正确的顺序闭合。</p></blockquote><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><blockquote><p>1.首先判断这个字符串是否偶数，不是偶数直接为false 2.把左侧的括号依次放到数组里面，然后从后往前比较，如果不是一对，直接为false 3.当比较完成，看看左侧数组是不是没有了， 4.还要提防右侧括号有剩余，比如这种 ()))，用这行 if(!item) { return false }就可以</p></blockquote><h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var isValid = function(s) {
  if(s % 2 == 1 ) {
    return false
  }
  let arr1 = [];
  for(let i = 0;i &lt; s.length; i ++) {
    if(s[i] == &#39;(&#39; || s[i] == &#39;[&#39; || s[i] == &#39;{&#39;) {
      arr1.push(s[i])
    }
  }
  if(arr1.length != s.length/2) {
    return false
  }
  let arr = [];
  for(let i = 0;i &lt; s.length; i ++) {
    if(s[i] == &#39;(&#39; || s[i] == &#39;[&#39; || s[i] == &#39;{&#39;) {
      arr.push(s[i])
    } else {
      let item = arr[arr.length - 1]
      if(item == &#39;(&#39; &amp;&amp; s[i] != &#39;)&#39; ) {
        return false
      } else if(item == &#39;[&#39; &amp;&amp; s[i] != &#39;]&#39;) {
        return false
      } else if(item == &#39;{&#39; &amp;&amp; s[i] != &#39;}&#39;) {
        return false
      }
      arr.pop()
    }
  }
  return arr.length == 0
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="优化" tabindex="-1"><a class="header-anchor" href="#优化" aria-hidden="true">#</a> 优化</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if(s % 2 == 1 ) {
  return false
}
let arr = [];
for(let i = 0;i &lt; s.length; i ++) {
  if(s[i] == &#39;(&#39; || s[i] == &#39;[&#39; || s[i] == &#39;{&#39;) {
    arr.push(s[i])
  } else {
    let item = arr[arr.length - 1]
    if(!item) {
      return false
    }
    if(item == &#39;(&#39; &amp;&amp; s[i] != &#39;)&#39; ) {
      return false
    } else if(item == &#39;[&#39; &amp;&amp; s[i] != &#39;]&#39;) {
      return false
    } else if(item == &#39;{&#39; &amp;&amp; s[i] != &#39;}&#39;) {
      return false
    }
    arr.pop()
  }
}
return arr.length == 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
funtion <span class="token function">isValid</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  map <span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;(&quot;</span><span class="token operator">:</span><span class="token string">&quot;)&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;{&quot;</span><span class="token operator">:</span><span class="token string">&quot;}&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;[&quot;</span><span class="token operator">:</span><span class="token string">&quot;]&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">const</span> x <span class="token keyword">of</span> str<span class="token punctuation">)</span><span class="token punctuation">{</span>
     <span class="token keyword">if</span><span class="token punctuation">(</span>x <span class="token keyword">in</span> map<span class="token punctuation">)</span><span class="token punctuation">{</span>
       stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token keyword">continue</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span><span class="token punctuation">;</span>
     <span class="token keyword">if</span><span class="token punctuation">(</span>map<span class="token punctuation">[</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">!==</span> x<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token operator">!</span>stack<span class="token punctuation">.</span>length
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),t=[l];function r(c,p){return s(),a("div",null,t)}const u=n(i,[["render",r],["__file","leetCode20有效的括号.html.vue"]]);export{u as default};
