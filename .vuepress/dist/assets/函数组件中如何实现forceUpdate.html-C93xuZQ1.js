import{_ as e,o as n,c as a,d}from"./app-G0TSq-iO.js";const i={},t=d(`<h2 id="方法1" tabindex="-1"><a class="header-anchor" href="#方法1" aria-hidden="true">#</a> 方法1:</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    const [,forceUpdate] = useReducer((x) =&gt; x + 1,0)

    const handleClick = () =&gt; {
        forceUpdate()
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法二" tabindex="-1"><a class="header-anchor" href="#方法二" aria-hidden="true">#</a> 方法二</h2><p>自定义hook</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function useForceUpdate() {
    const [state,setState] = setState(0);
    const update = useCallback(() =&gt; {
        setState((prev) =&gt; prev + 1)
    })
    return update;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),s=[t];function c(r,l){return n(),a("div",null,s)}const o=e(i,[["render",c],["__file","函数组件中如何实现forceUpdate.html.vue"]]);export{o as default};
