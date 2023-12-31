import{_ as t,o as u,c as o,d as e}from"./app-C59QzqDT.js";const q={},i=e(`<p>####常规语法</p><p>Easy Mock 引入了 Mock.js，下面只提供部分语法展示。更详尽的用例及文档请参考 Mock.js 官网。</p><p>支持生成随机的文本、数字、布尔值、日期、邮箱、链接、图片、颜色等 支持扩展更多数据类型，支持自定义函数和正则</p><p>一. 基础使用</p><p>{ &quot;code&quot;: 0, &quot;data&quot;: { &quot;projects|5-10&quot;: [{ //随机生成5-10条 &quot;adpartment|1&quot;: [&quot;研发部&quot;, &quot;市场部&quot;, &quot;运营部&quot;], &quot;address&quot;: &quot;@county(true)&quot;, &quot;position&quot;: &quot;员工&quot;, &quot;post&quot;: &quot;admin&quot;, }] } }</p><p>1.常用类</p><p>&quot;id|+1&quot;: 1, //id的递增 &quot;name&quot;: &quot;@cname&quot;, // 姓名 &quot;email&quot;: &quot;@email&quot;, //邮箱 &quot;mobile&quot;: /^(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/, //生成手机11位号 可以使用正则表达式 &quot;sex&quot;: &quot;@boolean, // 随机boolean</p><p>2.数据类</p><p>&quot;Boolean&quot;: &quot;@boolean&quot;, // 布尔值 &quot;natural&quot;: &quot;@natural&quot;, // natural( min, max ) &quot;integer&quot;: &quot;@integer&quot;, // integer( min, max ) &quot;float&quot;: &quot;@float(22,99,1,2)&quot;, // float( min, max, dmin, dmax ) &quot;string&quot;: &quot;@string&quot;, //string(type,min,max) lower小写，upper大写，number数字，symbol符号， &quot;range&quot;: &quot;@range&quot;, //range( start, stop, step ) step为间隔为，最后返回值为数组</p><p>3.时间</p><p>&quot;date&quot;: &quot;@date&quot;, // 日期 &quot;time&quot;: &quot;@time&quot;, // 时间 &quot;dataTime&quot;: &quot;@datetime&quot;, // 日期+时间 &quot;Now&quot;: &quot;@now&quot;, // 当前的日期时间</p><p>4.文章</p><p>凡是@后加c就是为中文；例如name为英文，cname则是中文</p><p>&quot;paragraph&quot;: &quot;@cparagraph&quot;, // 段落 &quot;title&quot;:&quot;@ctitle(1,10)&quot;,//标题，长度为1-10 &quot;sentence&quot;: &quot;@csentence&quot;, //句子 &quot;first&quot;: &quot;@cfirst&quot;, //姓氏</p><p>5.区域类</p><p>&quot;region&quot;: &quot;@region&quot;, //方位 &quot;province&quot;: &quot;@province&quot;, //省份 &quot;city&quot;: &quot;@city&quot;, // 城市 +(true)，可以获取到上一级，例如：@city(true) 可以获取到省市</p><p>6.图片类</p><p>&quot;avatar&quot;:&quot;@image&quot; &quot;avatar&quot;:&quot;@image(&#39;50x50&#39;,&#39;red&#39;,&#39;#fff&#39;,&#39;文字‘)&quot;</p><p>7.对象和数组</p><p>&quot;city|2-4&quot;: { &quot;110000&quot;: &quot;北京市&quot;, &quot;120000&quot;: &quot;天津市&quot;, &quot;130000&quot;: &quot;河北省&quot;, &quot;140000&quot;: &quot;山西省&quot; } &quot;city|1&quot;: [ &quot;北京市&quot;, &quot;天津市&quot;, &quot;河北省&quot;, &quot;山西省&quot; ]</p><p>二. 混合使用</p><p>&quot;avatar&quot;:&quot;@image(&#39;50x50&#39;,&#39;@color&#39;,&#39;#fff&#39;,&#39;@word‘)&quot;</p><p>##数据占位符</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;string|1-2&quot;: &quot;@string&quot;,
  &quot;integer&quot;: &quot;@integer(10, 30)&quot;,
  &quot;float&quot;: &quot;@float(60, 100, 2, 2)&quot;,
  &quot;boolean&quot;: &quot;@boolean&quot;,
  &quot;date&quot;: &quot;@date(yyyy-MM-dd)&quot;,
  &quot;datetime&quot;: &quot;@datetime&quot;,
  &quot;now&quot;: &quot;@now&quot;,
  &quot;url&quot;: &quot;@url&quot;,
  &quot;email&quot;: &quot;@email&quot;,
  &quot;region&quot;: &quot;@region&quot;,
  &quot;city&quot;: &quot;@city&quot;,
  &quot;province&quot;: &quot;@province&quot;,
  &quot;county&quot;: &quot;@county&quot;,
  &quot;upper&quot;: &quot;@upper(@title)&quot;,
  &quot;guid&quot;: &quot;@guid&quot;,
  &quot;id&quot;: &quot;@id&quot;,
  &quot;image&quot;: &quot;@image(200x200)&quot;,
  &quot;title&quot;: &quot;@title&quot;,
  &quot;cparagraph&quot;: &quot;@cparagraph&quot;,
  &quot;csentence&quot;: &quot;@csentence&quot;,
  &quot;range&quot;: &quot;@range(2, 10)&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>result:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;string&quot;: &quot;&amp;b(V&quot;,
  &quot;integer&quot;: 29,
  &quot;float&quot;: 65.93,
  &quot;boolean&quot;: true,
  &quot;date&quot;: &quot;2013-02-05&quot;,
  &quot;datetime&quot;: &quot;1983-09-13 16:25:29&quot;,
  &quot;now&quot;: &quot;2017-08-12 01:16:03&quot;,
  &quot;url&quot;: &quot;cid://vqdwk.nc/iqffqrjzqa&quot;,
  &quot;email&quot;: &quot;u.ianef@hcmc.bv&quot;,
  &quot;region&quot;: &quot;华南&quot;,
  &quot;city&quot;: &quot;通化市&quot;,
  &quot;province&quot;: &quot;陕西省&quot;,
  &quot;county&quot;: &quot;嵊州市&quot;,
  &quot;upper&quot;: &quot;DGWVCCRR TLGZN XSFVHZPF TUJ&quot;,
  &quot;guid&quot;: &quot;c09c7F2b-0AEF-B2E8-74ba-E1efC0FecEeA&quot;,
  &quot;id&quot;: &quot;650000201405028485&quot;,
  &quot;image&quot;: &quot;http://dummyimage.com/200x200&quot;,
  &quot;title&quot;: &quot;Orjac Kwovfiq Axtwjlop Xoggxbxbw&quot;,
  &quot;cparagraph&quot;: &quot;他明林决每别精与界受部因第方。习压直型示多性子主求求际后世。严比加指安思研计被来交达技天段光。全千设步影身据当条查需府有志。斗中维位转展新斯克何类及拉件科引解。主料内被生今法听或见京情准调就品。同六通目自观照干意音期根几形。&quot;,
  &quot;csentence&quot;: &quot;命己结最方心人车据称温增划眼难。&quot;,
  &quot;range&quot;: [2, 3, 4, 5, 6, 7, 8, 9]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
 &quot;cname&quot;: &quot;@cname&quot;,//中文人名
 &quot;id&quot;: &quot;@id&quot;,//生成20 位数字
 &quot;title&quot;: &quot;@ctitle&quot;,//中文title
 &quot;city&quot;: &quot;@city&quot;,//中文城市
 &quot;ip&quot;: &quot;@ip&quot;,//ip 地址
 &quot;email&quot;: &quot;@email&quot;,//email
 &quot;url&quot;: &quot;@url&quot;,//url
 &quot;cfirst&quot;: &quot;@cfirst&quot;,//姓名，姓
 &quot;clast&quot;: &quot;@clast&quot;,//姓名，名
 &quot;cword&quot;: &quot;@cword(&#39;123456&#39;)&quot;,//123456 从中选取一个字符
 &quot;csentence&quot;: &quot;@csentence(1,5)&quot;,//文字文段
 &quot;csentence5&quot;: &quot;@csentence(5)&quot;,//文字文段
 &quot;cparagraph&quot;: &quot;@cparagraph(1,3)&quot;,//文字文段
 &quot;string&quot;: &quot;@string(11)&quot;,//输出11 个字符长度的字符串
 &quot;float&quot;: &quot;@float(0,10)&quot;,//0 到 10 的浮点数
 &quot;int&quot;: &quot;@integer(60,70)&quot;,//60 到 70 之间的整数
 &quot;boolean&quot;: &quot;@boolean&quot;,//boolean 类型 true,false
 &quot;array|1-3&quot;: [{
 &quot;id&quot;: &quot;@integer(1,10)&quot;,//整数 1到10 取整数
 &quot;name&quot;: &quot;cname&quot;
 }],//数组（随机 1 到3个）
 &quot;array_sort_add|+1&quot;: [&quot;1&quot;, &quot;2&quot;, &quot;3&quot;],//数组1，2，3轮询输出
 &quot;boolean|1-2&quot;: true,//boolean 类型 true,false
 &quot;actionType|1&quot;: [&#39;click_url&#39;, &#39;open_resource_detail&#39;, &#39;open_resource_search&#39;],
 &quot;payload&quot;: function() {
       var returnClickUrl = {
         &quot;linkUrl&quot;: &quot;http://tob.zhisland.com/apph5&quot;
       };
       var returnResourceDetail = {
         &quot;resourceId&quot;: &quot;606&quot;
       };
       var returnResourceSearch = {
         &quot;keyWords&quot;: &quot;&quot;,
         &quot;tagCategory&quot;: &quot;1&quot;,
         &quot;tag&quot;: &quot;1&quot;
       };
       var s = this.actionType == &#39;click_url&#39; ? returnClickUrl : this.actionType == &#39;open_resource_detail&#39; ? returnResourceDetail : returnResourceSearch;
       return s;
  }//function 返回设置返回的数据
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里只是一些常用语法，更多详细内容可以看他官网。</p>`,28),n=[i];function a(l,s){return u(),o("div",null,n)}const r=t(q,[["render",a],["__file","easymock常规语法.html.vue"]]);export{r as default};
