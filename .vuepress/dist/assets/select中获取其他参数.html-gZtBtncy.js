import{_ as n,o as s,c as a,d as p}from"./app-1IAv0yAY.js";const t={},e=p(`<p>在日常工作中,有时候需要获取下拉选择框除了value其他的值,在antd 官网中 可以使用api labelInValue; 每个选项的 label 包装到 value 中,会把 Select 的 value 类型从 string 变为 { value: string, label: ReactNode } 的格式</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;antd&#39;</span><span class="token punctuation">;</span>
 
<span class="token keyword">const</span> <span class="token punctuation">{</span> Option <span class="token punctuation">}</span> <span class="token operator">=</span> Select<span class="token punctuation">;</span>
 
<span class="token keyword">const</span> opts <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span><span class="token literal-property property">label</span><span class="token operator">:</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">value</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">label</span><span class="token operator">:</span><span class="token string">&#39;这里用你的数据&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">value</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token literal-property property">label</span><span class="token operator">:</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">value</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">label</span><span class="token operator">:</span><span class="token string">&#39;博客名:&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">value</span><span class="token operator">:</span><span class="token string">&#39;qdleader&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
 
<span class="token comment">// evt 就是在opt中中绑定的data</span>
  <span class="token keyword">function</span> <span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> evt</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;这里能拿到你在opts中定义的数据data:&#39;</span><span class="token punctuation">,</span> evt<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 
ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
     <span class="token operator">&lt;</span>Select
        defaultValue<span class="token operator">=</span><span class="token string">&quot;lucy&quot;</span>
        style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">120</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
        onChange<span class="token operator">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span>
      <span class="token operator">&gt;</span>
        <span class="token punctuation">{</span>opts<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>Option value<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token operator">?.</span>value<span class="token punctuation">}</span> key<span class="token operator">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span> data<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token operator">?.</span>data<span class="token punctuation">}</span><span class="token operator">&gt;</span>
            <span class="token punctuation">{</span>item<span class="token operator">?.</span>label<span class="token punctuation">}</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>Option<span class="token operator">&gt;</span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Select<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function l(c,i){return s(),a("div",null,o)}const u=n(t,[["render",l],["__file","select中获取其他参数.html.vue"]]);export{u as default};
