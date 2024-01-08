import{_ as n,o as t,c as e,d as i}from"./app-1IAv0yAY.js";const s={},l=i(`<p><img src="https://images.cnblogs.com/cnblogs_com/bbqq1314/1810663/t_200721021744微信图片_20200721101717.png?a=1595297889212" alt="dsc"></p><p><img src="https://images.cnblogs.com/cnblogs_com/bbqq1314/1810663/t_2007210217571.png?a=1595297889212" alt="12"> 要达到这种效果，我用个在vue中的实现方法。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
            &lt;div class=&quot;BroadcasterDetail_text&quot;&gt;
                {{contentTextCurrent}}
                &lt;span @click=&quot;showAll&quot;&gt;
                    &lt;cite v-show=&quot;this.contentTextBtn == &#39;展开&#39;&quot;&gt;...&lt;/cite&gt;{{contentTextBtn}}
                &lt;/span&gt;
            &lt;/div&gt;
&lt;/template&gt;




data() {
	return {
		    contentText:&#39;&#39;, //全部text
            contentTextCurrent:&#39;&#39;, //切去后的text
            contentTextBtn:&#39;展示&#39;
	}
}

mounted() {
	        let len = 52;
        this.contentText = &#39; 火政想种战长称里农想应之始组究命深然引满几西建厂方省电想元放很要真报新队议常手感群门造同行啊发啊发发啊发出火政想种战长称里农想应之始组究命深然引满几西建厂方省电想元放很要真报新队议常手感群门造同行啊发啊发发啊发出。&#39;

        let contentText1 = this.contentText.substring(0,len);  
        this.contentTextCurrent = contentText1
        this.contentTextBtn = &#39;展开&#39;
}


methods: {
	  // 点击展示收起
	showAll() {
		if(this.contentTextBtn == &#39;展开&#39;) {
			this.contentTextBtn = &#39;收起&#39;
			this.contentTextCurrent = this.contentText
		} else {
			// alert(1)
			let len = 52;
			let contentText1 = this.contentText.substring(0,len);  
			this.contentTextCurrent = contentText1
			this.contentTextBtn = &#39;展开&#39;
		}
	},
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),d=[l];function c(v,a){return t(),e("div",null,d)}const u=n(s,[["render",c],["__file","展开收起详情.html.vue"]]);export{u as default};
