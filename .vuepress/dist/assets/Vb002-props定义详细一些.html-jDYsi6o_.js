import{_ as e,o as n,c as i,d as s}from"./app-tgHnmF2J.js";const d={},l=s(`<p>###prop定义尽量详细，</p><blockquote><p>细致的 prop 定义有两个好处：</p></blockquote><blockquote><p>它们写明了组件的 API，所以很容易看懂组件的用法； 在开发环境下，如果向一个组件提供格式不正确的 prop，Vue 将会告警，以帮助你捕获潜在的错误来源。</p></blockquote><p>#bad</p><p>props:[&#39;status&#39;],</p><p>#good:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>props:{
	status:String
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#better:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 更好的做法！
props: {
  status: {
    type: String,
    required: true,
    validator: function (value) {
      return [
        &#39;syncing&#39;,
        &#39;synced&#39;,
        &#39;version-conflict&#39;,
        &#39;error&#39;
      ].indexOf(value) !== -1
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>###注意 props 会在组件实例创建之前进行校验，所以在 default 或 validator 函数里，诸如 data、computed 或 methods 等实例属性还无法使用。</p>`,10),r=[l];function a(t,c){return n(),i("div",null,r)}const u=e(d,[["render",a],["__file","Vb002-props定义详细一些.html.vue"]]);export{u as default};
