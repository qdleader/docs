import{_ as e,o as i,c as s,d as n}from"./app-C59QzqDT.js";const l={},u=n(`<p>vue-best</p><blockquote><p>为了过滤一个列表中的项目 (比如 v-for=&quot;user in users&quot; v-if=&quot;user.isActive&quot;)。在这种情形下，请将 users 替换为一个计算属性 (比如 activeUsers)，让其返回过滤后的列表。</p></blockquote><blockquote><p>为了避免渲染本应该被隐藏的列表 (比如 v-for=&quot;user in users&quot; v-if=&quot;shouldShowUsers&quot;)。这种情形下，请将 v-if 移动至容器元素上 (比如 ul、ol)。</p></blockquote><p>当 Vue 处理指令时，v-for 比 v-if 具有更高的优先级，所以这个模板：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;ul&gt;
  &lt;li
    v-for=&quot;user in users&quot;
    v-if=&quot;user.isActive&quot;
    :key=&quot;user.id&quot;
  &gt;
    {{ user.name }}
  &lt;/li&gt;
&lt;/ul&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因此哪怕我们只渲染出一小部分用户的元素，也得在每次重渲染的时候遍历整个列表，不论活跃用户是否发生了变化。</p><p>而我们处理后</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>computed: {
  activeUsers: function () {
    return this.users.filter(function (user) {
      return user.isActive
    })
  }
}
&lt;ul&gt;
  &lt;li
    v-for=&quot;user in activeUsers&quot;
    :key=&quot;user.id&quot;
  &gt;
    {{ user.name }}
  &lt;/li&gt;
&lt;/ul&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们将会获得如下好处：</p><p>过滤后的列表只会在 users 数组发生相关变化时才被重新运算，过滤更高效。 使用 v-for=&quot;user in activeUsers&quot; 之后，我们在渲染的时候只遍历活跃用户，渲染更高效。 解耦渲染层的逻辑，可维护性 (对逻辑的更改和扩展) 更强。</p><p>另外</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;ul v-if=&quot;shouldShowUsers&quot;&gt;
  &lt;li
    v-for=&quot;user in users&quot;
    :key=&quot;user.id&quot;
  &gt;
    {{ user.name }}
  &lt;/li&gt;
&lt;/ul&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过将 v-if 移动到容器元素，我们不会再对列表中的每个用户检查 shouldShowUsers。取而代之的是，我们只检查它一次， 且不会在 shouldShowUsers 为否的时候运算 v-for。</p>`,13),t=[u];function d(r,v){return i(),s("div",null,t)}const o=e(l,[["render",d],["__file","Vb004-v-for与v-if不要用在一个标签上.html.vue"]]);export{o as default};
