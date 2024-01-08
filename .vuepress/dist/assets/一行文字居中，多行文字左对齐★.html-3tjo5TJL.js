import{_ as i,o as e,c as n,d as l}from"./app-gxPsN6Nl.js";const d={},s=l(`<h1 id="一行文字居中-多行文字左对齐★★" tabindex="-1"><a class="header-anchor" href="#一行文字居中-多行文字左对齐★★" aria-hidden="true">#</a> 一行文字居中，多行文字左对齐★★</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;content&quot;&gt;
  &lt;p&gt;dsc&lt;/p&gt;
&lt;/div&gt;


&lt;style&gt;
/*当文字为一行是，则P的宽度小于div的宽度，p标签居中显示在盒子内，文字也就居中了 ;当大于一行时，P的宽度和div的宽度是一致的 ,文字就居左对齐了*/
  .content {
    width:150px;
    text-align:center;
  }

  /*display: inline-block使P的宽度根据文字的宽度伸缩 */
  .content p {
    display:inline-block;
    text-align:left;
  }
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-flex-方式" tabindex="-1"><a class="header-anchor" href="#_2-flex-方式" aria-hidden="true">#</a> 2.flex 方式</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;box&quot;&gt;
  &lt;div class=&quot;linetwo&quot;&gt;12wsd&lt;/div&gt;
&lt;/div&gt;


&lt;style&gt;
.box {
  width:200px;
  height:100px;

  display:flex;
  justify-content:center;
  flex-direction: column;
  &lt;!-- white-space:pre-wrap; --&gt;
}

.lineTwo {
  text-overflow: -o-ellipsis-lastline;
  overflow:hidden;
  text-overflow:ellipsis;
  display:-webkit-box;
  -webkit-line-clamp:2;
  line-clamp:2;
  -webkit-box-orient:vertical;
}
&lt;/style&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-方式三" tabindex="-1"><a class="header-anchor" href="#_3-方式三" aria-hidden="true">#</a> 3.方式三</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div&gt;
     &lt;p&gt;&lt;span&gt;单行居中，多行居左&lt;/span&gt;&lt;/p&gt;
 &lt;/div&gt;

 &lt;style&gt;
     p{
         display:inline-block;   
         text-align:left;
     }
     span{
         display:-webkit-box;
         -webkit-line-clamp:2;
         -webkit-box-orient:vertical;
         overflow:hidden;
         text-overflow:ellipsis;
     }
     div{
         border: 1px solid red;
         font-size: 30px;
         text-align:center;
         width: 800px;
         height: 500px;
     }
 &lt;/style&gt;




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),v=[s];function a(t,r){return e(),n("div",null,v)}const u=i(d,[["render",a],["__file","一行文字居中，多行文字左对齐★.html.vue"]]);export{u as default};
