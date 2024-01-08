import{_ as t,o as i,c as n,d as e}from"./app-FRQgbCNf.js";const l={},d=e(`<h1 id="c006-css实现三角形★-html" tabindex="-1"><a class="header-anchor" href="#c006-css实现三角形★-html" aria-hidden="true">#</a> C006-css实现三角形★.html</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
	&lt;head&gt;
		&lt;meta charset=&quot;utf-8&quot;&gt;
		&lt;title&gt;&lt;/title&gt;
	&lt;/head&gt;
	&lt;style type=&quot;text/css&quot;&gt;
		.trangle-top {
			width: 0;
			height: 0;
			border:50px solid transparent;
			border-bottom-color: red;
		}
		.trangle-bottom {
			width: 0;
			height: 0;
			border:50px solid transparent;
			border-top-color: red;
		}
		.trangle-left {
			width: 0;
			height: 0;
			border:50px solid transparent;
			border-right-color: red;
		}
				.trangle-right {
			width: 0;
			height: 0;
			border:50px solid transparent;
			border-left-color: red;
		}
	/* 	.tra-top {
			width: 0;
			height: 0;
			border-left:50px solid red;
			border-right:50px solid #333;
			border-bottom:50px solid green;
		} */
		
		
		
		.tra-left-top {
			width: 0;
			height: 0;
			border-left:50px solid red;
			border-right:50px solid #fff;
			border-bottom:50px solid #fff;
		}
				.tra-right-top {
			width: 0;
			height: 0;
			border-left:50px solid #fff;
			border-right:50px solid red;
			border-bottom:50px solid #fff;
		}
		.tra-left-bottom {
			width: 0;
			height: 0;
			border-left:50px solid red;
			border-right:50px solid #fff;
			border-top:50px solid #fff;
		}
		.tra-right-bottom {
			width: 0;
			height: 0;
			border-left:50px solid #fff;
			border-right:50px solid red;
			border-top:50px solid #fff;
		}
	&lt;/style&gt;
	&lt;body&gt;
		&lt;!-- 向上的三角形 --&gt;
		&lt;div class=&quot;trangle-top&quot;&gt;
			
		&lt;/div&gt;
	
		&lt;!-- 向左的三角形 --&gt;
		&lt;div class=&quot;trangle-left&quot;&gt;
			
		&lt;/div&gt;
					&lt;!-- 向下的三角形 --&gt;
		&lt;div class=&quot;trangle-bottom&quot;&gt;
			
		&lt;/div&gt;
		
				&lt;!-- 向右的三角形 --&gt;
		&lt;div class=&quot;trangle-right&quot;&gt;
			
		&lt;/div&gt;
		
		
		
		
		&lt;!-- 直角三角形 直角在左上--&gt; 
		&lt;div class=&quot;tra-left-top&quot;&gt;
			
		&lt;/div&gt;
				&lt;!-- 直角三角形 直角在右上--&gt; 
		&lt;div class=&quot;tra-right-top&quot;&gt;
			
		&lt;/div&gt;
				&lt;!-- 直角三角形 直角在左下--&gt; 
		&lt;div class=&quot;tra-left-bottom&quot;&gt;
			
		&lt;/div&gt;
				&lt;!-- 直角三角形 直角在右下--&gt; 
		&lt;div class=&quot;tra-right-bottom&quot;&gt;
			
		&lt;/div&gt;
		
	&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),s=[d];function v(r,a){return i(),n("div",null,s)}const b=t(l,[["render",v],["__file","C006-css实现三角形★.html.vue"]]);export{b as default};
