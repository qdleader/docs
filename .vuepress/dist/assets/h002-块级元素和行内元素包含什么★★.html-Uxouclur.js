import{_ as i,o as n,c as e,d as l}from"./app-gxPsN6Nl.js";const d={},s=l(`<h1 id="h002-块级元素和行内元素包含什么★★" tabindex="-1"><a class="header-anchor" href="#h002-块级元素和行内元素包含什么★★" aria-hidden="true">#</a> h002-块级元素和行内元素包含什么★★</h1><h2 id="块级元素" tabindex="-1"><a class="header-anchor" href="#块级元素" aria-hidden="true">#</a> 块级元素</h2><blockquote><p>1 独占一行 2.可以设置宽高，如果不设置默认为父集宽的的100%</p></blockquote><p>包括：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>div

ul li

ol li

h1-h6

dl dt dd

p

form

hr

table

thead

tbody

th

tr

td

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="行内元素" tabindex="-1"><a class="header-anchor" href="#行内元素" aria-hidden="true">#</a> 行内元素</h2><blockquote><ol><li>与其他行内元素并排。 2.不能设置宽高，默认宽度就是文字宽度。</li></ol></blockquote><p>包括：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>span

var

strong

cite

em

i

b

a


textarea

small

br
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>三、inline-block</p><p>inline-block 的元素（如input、img)既具有 block 元素可以设置宽高的特性，同时又具有 inline 元素默认不换行的特性。当然不仅仅是这些特性， 比如 inline-block 元素也可以设置 vertical-align（因为这个垂直对齐属性只对设置了inline-block的元素有效） 属性。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>img

input

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用inline-block时候就是会有间隙产生，去除方法有两个。</p><p>1.直接设置margin-left:-number;</p><p>2.父集设置：word-spacing:-number;</p>`,15),a=[s];function v(r,c){return n(),e("div",null,a)}const b=i(d,[["render",v],["__file","h002-块级元素和行内元素包含什么★★.html.vue"]]);export{b as default};
