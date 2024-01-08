import{_ as e,o as n,c as s,d as i}from"./app-qTEUp92E.js";const l={},t=i(`<p>useRef 获取dom</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function App() {
    const testRef = React.useRef(null)
    const h1Ref = React.useRef(null)

    useEffect(() =&gt; {
        console.log(testRef.current);
        console.log(h1Ref.current);
    })

    return (
        &lt;div&gt;
            &lt;TestC ref={testRef} /&gt;
            &lt;h1 ref={h1Ref}&gt;this is h1&lt;/h1&gt;
        &lt;/div&gt;
    )
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d=[t];function c(r,a){return n(),s("div",null,d)}const u=e(l,[["render",c],["__file","useRef.html.vue"]]);export{u as default};
