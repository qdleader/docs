import{_ as e,o as n,c as i,d}from"./app-tgHnmF2J.js";const s={},l=d(`<p>#1.单文件组件的命名</p><p>以大写开头的驼峰命名，或者全部小写中间已中划线分割。</p><p>bad</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>myComponent.vue

mycomponent.vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>good：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>my-component.vue

MyComponent.vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>未完待续。。。</p><p>#1.基本的组件应该加上前缀。</p><p>应用特定样式和约定的基础组件 (也就是展示类的、无逻辑的或无状态的组件) 应该全部以一个特定的前缀开头，比如 Base、App 或 V。</p><p>bad:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>components/
|- MyButton.vue
|- VueTable.vue
|- Icon.vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>good</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>components/
|- BaseButton.vue
|- BaseTable.vue
|- BaseIcon.vue


components/
|- AppButton.vue
|- AppTable.vue
|- AppIcon.vue


components/
|- VButton.vue
|- VTable.vue
|- VIcon.vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#紧密耦合的组件名</p><p>#和父组件紧密耦合的子组件应该以父组件名作为前缀命名</p><p>如果一个组件只在某个父组件的场景下有意义，这层关系应该体现在其名字上。因为编辑器通常会按字母顺序组织文件，所以这样做可以把相关联的文件排在一起。</p><p>bad:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>components/
|- TodoList.vue
|- TodoItem.vue
|- TodoButton.vue

components/
|- SearchSidebar.vue
|- NavigationForSearchSidebar.vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>good:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>components/
|- TodoList.vue
|- TodoListItem.vue
|- TodoListItemButton.vue

components/
|- SearchSidebar.vue
|- SearchSidebarNavigation.vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>####完整单词的组件名</p><p>##组件名应该倾向于完整单词而不是缩写。</p><p>bad</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>components/
|- SdSettings.vue
|- UProfOpts.vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>good</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>components/
|- StudentDashboardSettings.vue
|- UserProfileOptions.vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>####props名大小写推荐</p><p>##在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板和 JSX 中应该始终使用 kebab-case。</p><p>bad:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>props: {
  &#39;greeting-text&#39;: String
}

&lt;WelcomeMessage greetingText=&quot;hi&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>good:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>props:{
	greetingText: String
}

&lt;WelcomeMessage greeting-text=&quot;hi&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>####scope中的元素选择器</p><p>元素选择器应避免在scoped红出现。</p><p>在 scoped 样式中，类选择器比元素选择器更好，因为大量使用元素选择器是很慢的。</p><p>bad:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;button&gt;X&lt;/button&gt;
&lt;/template&gt;

&lt;style scoped&gt;
button {
  background-color: red;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>good:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;button class=&quot;btn btn-close&quot;&gt;X&lt;/button&gt;
&lt;/template&gt;

&lt;style scoped&gt;
.btn-close {
  background-color: red;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>####在事件中使用短横线命名</p><p>在发出定制事件时，最好使用短横线命名，这是因为在父组件中，我们使用相同的语法来侦听该事件。</p><p>因此，为了确保我们各组件之间的一致性，并使您的代码更具可读性，请在两个地方都坚持使用短横线命名。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
this.$emit(&#39;close-window&#39;)

// 在父组件中

&lt;popup-window @close-window=&quot;handleEvent()&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43),a=[l];function t(v,u){return n(),i("div",null,a)}const r=e(s,[["render",t],["__file","vb005-命名问题.html.vue"]]);export{r as default};
