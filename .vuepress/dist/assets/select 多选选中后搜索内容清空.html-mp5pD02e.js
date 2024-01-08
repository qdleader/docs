import{_ as s,o as n,c as a,d as e}from"./app-tgHnmF2J.js";const t={},o=e(`<h2 id="select-多选选中后搜索内容清空" tabindex="-1"><a class="header-anchor" href="#select-多选选中后搜索内容清空" aria-hidden="true">#</a> select 多选选中后搜索内容清空</h2><p>vue3 写法</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token operator">&lt;</span>el<span class="token operator">-</span>select
    v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">&quot;drawerProps.row!.reservationUserIdList&quot;</span>
    filterable
    remote
    multiple
    ref<span class="token operator">=</span><span class="token string">&quot;changeSelectPeopleRef&quot;</span>
    @change<span class="token operator">=</span><span class="token string">&quot;changeSelectPeople&quot;</span>
<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>el<span class="token operator">-</span>option
        <span class="token operator">:</span>label<span class="token operator">=</span><span class="token string">&quot;item.name&quot;</span>
        <span class="token operator">:</span>value<span class="token operator">=</span><span class="token string">&quot;item.id&quot;</span>
        v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;(item, index) in inviteArr&quot;</span>
        <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">&quot;index&quot;</span>
    <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>select<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> changeSelectPeopleRef <span class="token operator">=</span> ref<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">changeSelectPeople</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  changeSelectPeopleRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span>query <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),p=[o];function l(r,c){return n(),a("div",null,p)}const d=s(t,[["render",l],["__file","select 多选选中后搜索内容清空.html.vue"]]);export{d as default};
