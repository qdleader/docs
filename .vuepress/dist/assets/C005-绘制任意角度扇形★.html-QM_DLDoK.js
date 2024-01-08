import{_ as i,o as n,c as s,d as e}from"./app-Ni1_oyYA.js";const l={},d=e(`<h1 id="c005-绘制任意角度扇形★" tabindex="-1"><a class="header-anchor" href="#c005-绘制任意角度扇形★" aria-hidden="true">#</a> C005-绘制任意角度扇形★</h1><blockquote><p>扇形制作原理，底部一个纯色原形，里面2个相同颜色的半圆，可以是白色,内部半圆按一定角度变化，就可以产生出扇形效果</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>       .shanxing{
            position: relative;
            width: 200px;
            height: 200px;
            border-radius: 100px;
            background-color: yellow;
        }
        .sx1{
            position: absolute;
            width: 200px;
            height: 200px;
            transform: rotate(0deg);
            clip: rect(0px,100px,200px,0px); /*这个clip属性用来绘制半圆，在clip的rect范围内的内容显示出来，使用clip属性，元素必须是absolute的 */
            border-radius: 100px;
            background-color: #f00;
            /*-webkit-animation: an1 2s infinite linear; */
        }


        .sx2{
            position: absolute;
            width: 200px;
            height: 200px;
            transform: rotate(0deg);
            clip: rect(0px,100px,200px,0px);
            border-radius: 100px;
            background-color: #f00;
            /*-webkit-animation: an2 2s infinite linear;*/
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   
   
   
      /*绘制一个60度扇形*/
        .shanxing1 .sx1{transform: rotate(-30deg);}
        .shanxing1 .sx2{transform: rotate(-150deg);}

        /*绘制一个85度扇形*/
        .shanxing2 .sx1{transform: rotate(-45deg);}
        .shanxing2 .sx2{transform: rotate(-140deg);}

        /*绘制一个向右扇形，90度扇形*/
        .shanxing3 .sx1{transform: rotate(45deg);}
        .shanxing3 .sx2{transform: rotate(-45deg);}

        /*绘制一个颜色扇形 */
        .shanxing4 .sx1{transform: rotate(45deg);background-color: #fff;}
        .shanxing4 .sx2{transform: rotate(-45deg);background-color: #fff;}

        /*绘制一个不同颜色半圆夹角 */
        .shanxing5 .sx1{transform: rotate(45deg);background-color: #f00;}
        .shanxing5 .sx2{transform: rotate(-45deg);background-color: #0f0;}
		
	
		
   &lt;p&gt;/*绘制一个60度扇形*/&lt;/p&gt;
	&lt;div class=&quot;shanxing shanxing1&quot;&gt;
		&lt;div class=&quot;sx1&quot;&gt;&lt;/div&gt;
		 &lt;div class=&quot;sx2&quot;&gt;&lt;/div&gt;
	&lt;/div&gt;
	&lt;p&gt;/*绘制一个85度扇形*/&lt;/p&gt;
	&lt;div class=&quot;shanxing shanxing2&quot;&gt;
		&lt;div class=&quot;sx1&quot;&gt;&lt;/div&gt;
		 &lt;div class=&quot;sx2&quot;&gt;&lt;/div&gt;
	&lt;/div&gt;
	&lt;p&gt;/*绘制一个向右扇形，90度扇形*/&lt;/p&gt;
	&lt;div class=&quot;shanxing shanxing3&quot;&gt;
		&lt;div class=&quot;sx1&quot;&gt;&lt;/div&gt;
		 &lt;div class=&quot;sx2&quot;&gt;&lt;/div&gt;
	&lt;/div&gt;
	&lt;p&gt;/*绘制一个颜色扇形 */&lt;/p&gt;
	&lt;div class=&quot;shanxing shanxing4&quot;&gt;
		&lt;div class=&quot;sx1&quot;&gt;&lt;/div&gt;
		 &lt;div class=&quot;sx2&quot;&gt;&lt;/div&gt;
	&lt;/div&gt;

	&lt;p&gt;/*绘制一个不同颜色半圆夹角 */&lt;/p&gt;
	&lt;div class=&quot;shanxing shanxing5&quot;&gt;
		&lt;div class=&quot;sx1&quot;&gt;&lt;/div&gt;
		 &lt;div class=&quot;sx2&quot;&gt;&lt;/div&gt;
	&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),t=[d];function a(v,r){return n(),s("div",null,t)}const u=i(l,[["render",a],["__file","C005-绘制任意角度扇形★.html.vue"]]);export{u as default};
