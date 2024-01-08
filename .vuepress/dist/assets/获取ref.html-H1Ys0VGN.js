import{_ as e,o as n,c as i,d as t}from"./app-1IAv0yAY.js";const s={},l=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import React from &#39;react&#39;;
import ReactDOM from &#39;react-dom&#39;


class Demo extends React.Component {
    state = {count :0}
    myRef = React.createRef()
    show = () =&gt; {
        alert(this.myRef.current.value)
    }
    render() {
        return (
            &lt;div&gt;
                &lt;input type=&quot;text&quot; ref={this.myRef}/&gt;
                &lt;Button onClick={this.show}&gt;展示&lt;/Button&gt;
            &lt;/div&gt;
        )
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),d=[l];function r(a,c){return n(),i("div",null,d)}const m=e(s,[["render",r],["__file","获取ref.html.vue"]]);export{m as default};
