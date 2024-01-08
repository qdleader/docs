import{_ as e,o as n,c as i,d as a}from"./app-qTEUp92E.js";const d={},s=a(`<h2 id="_1-单文件组件文件的大小写" tabindex="-1"><a class="header-anchor" href="#_1-单文件组件文件的大小写" aria-hidden="true">#</a> 1.单文件组件文件的大小写</h2><blockquote><p>单文件组件的文件名应该要么始终是单词大写开头 (PascalCase)，要么始终是横线连接 (kebab-case)。我们推荐大写开头</p></blockquote><h3 id="bad" tabindex="-1"><a class="header-anchor" href="#bad" aria-hidden="true">#</a> bad:</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>components/
|-mycomponent.vue 

components/
|-myComponent.vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="good" tabindex="-1"><a class="header-anchor" href="#good" aria-hidden="true">#</a> good:</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>components/
|-MyComponent.vue 

components/
|-my-component.vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-基础组件命名" tabindex="-1"><a class="header-anchor" href="#_2-基础组件命名" aria-hidden="true">#</a> 2.基础组件命名</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>应用特定样式和约定的基础组件 (也就是展示类的、无逻辑的或无状态的组件) 应该全部以一个特定的前缀开头，比如 Base、App 或 V。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="bad-1" tabindex="-1"><a class="header-anchor" href="#bad-1" aria-hidden="true">#</a> bad:</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>components/
|-MyButton.vue 
|-VueTable.vue 
|-Icon.vue 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="good-1" tabindex="-1"><a class="header-anchor" href="#good-1" aria-hidden="true">#</a> good:</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>components/
|-BaseButton.vue 
|-BaseTable.vue 
|-BaseIcon.vue 


components/
|-AppButton.vue 
|-AppTable.vue 
|-AppIcon.vue 

components/
|-VButton.vue 
|-VTable.vue 
|-VIcon.vue 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-单例组件名" tabindex="-1"><a class="header-anchor" href="#_3-单例组件名" aria-hidden="true">#</a> 3.单例组件名</h2><p>只应该拥有单个活跃实例的组件应该以 The 前缀命名，以示其唯一性。</p><h3 id="bad-2" tabindex="-1"><a class="header-anchor" href="#bad-2" aria-hidden="true">#</a> bad:</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>components/
|-Heading.vue 
|-MySidebar.vue 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="good-2" tabindex="-1"><a class="header-anchor" href="#good-2" aria-hidden="true">#</a> good:</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>components/
|-TheHeading.vue 
|-TheSidebar.vue 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="紧密耦合的组件名强烈推荐" tabindex="-1"><a class="header-anchor" href="#紧密耦合的组件名强烈推荐" aria-hidden="true">#</a> 紧密耦合的组件名强烈推荐</h2><p>和父组件紧密耦合的子组件应该以父组件名作为前缀命名。</p><p>如果一个组件只在某个父组件的场景下有意义，这层关系应该体现在其名字上。因为编辑器通常会按字母顺序组织文件，所以这样做可以把相关联的文件排在一起</p><h3 id="bad-3" tabindex="-1"><a class="header-anchor" href="#bad-3" aria-hidden="true">#</a> bad:</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>components/
|-ShopList.vue 
|-ShopItem.vue 
|-ShopButton.vue 


components/
|-SearchSidebar.vue 
|-NavigationForSearchSidebar.vue 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="good-3" tabindex="-1"><a class="header-anchor" href="#good-3" aria-hidden="true">#</a> good:</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>components/
|-ShopList.vue 
|-ShopListItem.vue 
|-ShopListItemButton.vue 

components/
|-SearchSidebar.vue 
|-SearchSidebarNavigation.vue 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="模板中的组件名大小写" tabindex="-1"><a class="header-anchor" href="#模板中的组件名大小写" aria-hidden="true">#</a> 模板中的组件名大小写</h1><h2 id="good-4" tabindex="-1"><a class="header-anchor" href="#good-4" aria-hidden="true">#</a> good</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Vue.component(&#39;MyComponent&#39;, {
  // ...
})
import MyComponent from &#39;./MyComponent.vue&#39;
export default {
  name: &#39;MyComponent&#39;,
  // ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在template 中可以</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>好例子
&lt;MyComponent/&gt;

&lt;my-component&gt;&lt;/my-component&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="prop-名大小写强烈推荐" tabindex="-1"><a class="header-anchor" href="#prop-名大小写强烈推荐" aria-hidden="true">#</a> Prop 名大小写强烈推荐</h2><p>在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板和 JSX 中应该始终使用 kebab-case。</p><p>我们单纯的遵循每个语言的约定。在 JavaScript 中更自然的是 camelCase。而在 HTML 中则是 kebab-case。</p><h3 id="bad-4" tabindex="-1"><a class="header-anchor" href="#bad-4" aria-hidden="true">#</a> bad</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>props: {
  &#39;greeting-text&#39;: String
}
&lt;WelcomeMessage greetingText=&quot;hi&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="good-5" tabindex="-1"><a class="header-anchor" href="#good-5" aria-hidden="true">#</a> good</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>props: {
  greetingText: String
}
&lt;WelcomeMessage greeting-text=&quot;hi&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37),l=[s];function r(t,v){return n(),i("div",null,l)}const u=e(d,[["render",r],["__file","vue规范之组件命名篇.html.vue"]]);export{u as default};
