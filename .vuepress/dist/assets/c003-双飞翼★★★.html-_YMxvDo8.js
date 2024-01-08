import{_ as i,o as n,c as e,d as l}from"./app-C59QzqDT.js";const d={},s=l(`<h1 id="双飞翼-★★★" tabindex="-1"><a class="header-anchor" href="#双飞翼-★★★" aria-hidden="true">#</a> 双飞翼.★★★</h1><h2 id="已知容器高度已知-左右宽度分别为300-中间自适应。有几种方法" tabindex="-1"><a class="header-anchor" href="#已知容器高度已知-左右宽度分别为300-中间自适应。有几种方法" aria-hidden="true">#</a> 已知容器高度已知，左右宽度分别为300，中间自适应。有几种方法？</h2><p>1.float</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;box&quot;&gt;
  &lt;div class=&quot;left&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;right&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;center&quot;&gt;&lt;/div&gt;
&lt;/div&gt;



.box {
  width:100%;
}
.box div{
  height:100px;
}
.left {
  float:left;
  width:300px;
}
.center {
  margin-left:300px;
  margin-right:300px;
}
.right {
  float:right;
  width:300px;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.absolute</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;box&quot;&gt;
  &lt;div class=&quot;left&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;center&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;right&quot;&gt;&lt;/div&gt;

&lt;/div&gt;

.box {
  width:100%;
  position:relative;
}
.box div{
  height:100px;
  position:absolute;
}

.left {
  width:300px;
  left:0;
}
.right {
  right:0;
  width:300px;
}
.center {
  left:300px;
  right:300px;
}
或
.center {
  margin-left:300px;
  margin-right:300px;
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.flex</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;box&quot;&gt;
  &lt;div class=&quot;left&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;center&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;right&quot;&gt;&lt;/div&gt;

&lt;/div&gt;

.box {
  width:100%;
  display:flex;
}
.box div{
  height:100px;
}

.left {
  flex: 0 1 300px;
}
.right {
    flex: 0 1 300px;
}
.center {
  flex:1;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.table</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;box&quot;&gt;
  &lt;div class=&quot;left&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;center&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;right&quot;&gt;&lt;/div&gt;

&lt;/div&gt;

.box {
  width:100%;
  display:table;
}
.box div{
  height:100px;
  display:table-cell;
}

.left {
  width:300px;
}
.right {
  width:300px;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5.grid</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;box&quot;&gt;
  &lt;div class=&quot;left&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;center&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;right&quot;&gt;&lt;/div&gt;

&lt;/div&gt;

.box {
  width:100%;
  display:grid;
  grid-template-columns:300px auto 300px;
  grid-template-rows:100px;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6.圣杯</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
1：HTML部分一定先写main中间盒子，必须先渲染。
2：三个盒子设置float： left
3：中间盒子宽度width： 100%独占一行
4：使用margin-left属性将左右两边的盒子拉回与中间盒子同一行
.left{ margin-left: -100%};向左走一个父盒子的宽度
.right{ margin-left: 负的自身宽度}
5： 父盒子设置padding给两边盒子留出位置(设置box-sizing)
6：左右盒子使用相对定位占据padding部分，都需要左移自身宽度，避免遮挡中间盒子的内容。


&lt;body&gt;
      &lt;div class=&quot;parent&quot;&gt;
        &lt;div class=&quot;main&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;left&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;right&quot;&gt;&lt;/div&gt;  
    &lt;/div&gt;
&lt;/body&gt;
 &lt;style&gt;
        *{
            padding: 0;
            margin: 0;
        }
      .parent{
            /* 父盒子设置padding为左右两个盒子空出位置，以免遮挡中间盒子的内容 */
            padding: 0 200px;
            box-sizing: border-box;
        }
        .left {
            width: 200px;
            height: 200px;
            background-color: blue;
            float: left;
            /* 使其去上一行 */
            margin-left: -100%;
            /* 定位到正确的位置 */
            position: relative;
            left: -200px;
        }
        .main {
            width:100%;
            height: 200px;
            float: left;
            background-color: red;
        }
        .right {
            width:200px;
            float: left;
            height: 200px;
            background-color: yellow;
            /* 使其去上一行 */
            margin-left: -200px;
            /* 定位到正确的位置 */
            position: relative;
            left: 200px;
        }
    &lt;/style&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),v=[s];function a(t,r){return n(),e("div",null,v)}const u=i(d,[["render",a],["__file","c003-双飞翼★★★.html.vue"]]);export{u as default};
