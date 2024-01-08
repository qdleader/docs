import{_ as t,o as e,c as i,d as n}from"./app-C59QzqDT.js";const l={},o=n(`<p>我们经常会在项目中碰到需求，二维码使用，并修改二维码的样式。</p><p>我们这里用一下vue-qr</p><p>###下载</p><blockquote><p>npm install vue-qr --save-dev</p></blockquote><p>#在组件中使用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   &lt;vue-qr
		class=&quot;nccq_img&quot;
		:logoSrc=&quot;config.imagePath&quot;
		:logoCornerRadius=&quot;0&quot;
		:text=&quot;config.value&quot;
	&gt;&lt;/vue-qr&gt;
	
	
	&lt;script&gt;
	import VueQr from &quot;vue-qr&quot;;
export default {
		data() {
			return {
				config: {
					value: &quot;http://www.baidu.com&quot;, //显示的值、跳转的地址
					imagePath: require(&quot;../../static/img/BMFLittle.png&quot;) //中间logo的地址
				}, //获取bmf二维码
			};
		},
		components: {
			VueQr
		},
	}
	&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之后你可以methods里面修改config.value 值，二维码也会相应改变。</p><blockquote><p>接下来介绍下vue-qr的一些常用属性：</p></blockquote><blockquote><p>text 欲编码的内容 size 　　　　　　　　　　　　尺寸, 长宽一致, 包含外边距 margin 　　　　　　　　　　　二维码图像的外边距, 默认 20px colorDark　　　　　　　　　　实点的颜色 colorLight 　　　　　　　　　 空白区的颜色 bgSrc 　　　　　　　　　　欲嵌入的背景图地址 gifBgSrc 　　　　　　　　 欲嵌入的背景图 gif 地址,设置后普通的背景图将失效。设置此选项会影响性能 backgroundColor 　　　　　　背景色 backgroundDimming 　　　　 叠加在背景图上的颜色, 在解码有难度的时有一定帮助 logoSrc 　　　　　　　　　　 嵌入至二维码中心的 LOGO 地址 logoMargin LOGO 　　　　　 标识周围的空白边框, 默认为0 logoBackgroundColor Logo 背景色,需要设置 logo margin logoCornerRadius LOGO 标识及其边框的圆角半径, 默认为0 whiteMargin 若设为 true, 背景图外将绘制白色边框</p></blockquote>`,9),s=[o];function r(d,u){return e(),i("div",null,s)}const a=t(l,[["render",r],["__file","V003-项目中生成二维码.html.vue"]]);export{a as default};
