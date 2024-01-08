import{_ as e,o as n,c as i,d}from"./app-G0TSq-iO.js";const s={},l=d(`<h1 id="将秒数转化为时分秒的时间格式" tabindex="-1"><a class="header-anchor" href="#将秒数转化为时分秒的时间格式" aria-hidden="true">#</a> 将秒数转化为时分秒的时间格式</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export const formatSeconds = (date) =&gt; {
    if (date == 0) return &#39;00:00&#39;;
    if (!date) return;
    console.log(&quot;秒数&quot;,date)
    var secondTime = parseInt(date);// 秒
    var minuteTime = 0;// 分
    var hourTime = 0;// 小时

    if(secondTime &gt; 60) {//如果秒数大于60，将秒数转换成整数
        //获取分钟，除以60取整数，得到整数分钟
        minuteTime = parseInt(secondTime / 60);
        //获取秒数，秒数取佘，得到整数秒数
        secondTime = parseInt(secondTime % 60);
        //如果分钟大于60，将分钟转换成小时
        if(minuteTime &gt; 60) {
            //获取小时，获取分钟除以60，得到整数小时
            hourTime = parseInt(minuteTime / 60);
            //获取小时后取佘的分，获取分钟除以60取佘的分
            minuteTime = parseInt(minuteTime % 60);
        }
    }
    if(hourTime == 0) {
        return addZero(minuteTime)+&quot;:&quot;+addZero(secondTime)
    } else {
        return addZero(hourTime)+&quot;:&quot;+addZero(minuteTime)+&quot;:&quot;+addZero(secondTime)
    }

}
s
function addZero(num) {
    if(num&lt;10)
        return &quot;0&quot; + num;
    return num;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>//带星期的时间</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 格式化日期 年月日 
var date = new Date();
console.log(date.getFullYear()); // 返回当前日期的年  2019
console.log(date.getMonth() + 1); // 月份 返回的月份小1个月   记得月份+1 呦
console.log(date.getDate()); // 返回的是 几号
console.log(date.getDay()); // 3  周一返回的是 1 周六返回的是 6 但是 周日返回的是 0
// 我们写一个 2022年 7月 10日 星期日
var year = date.getFullYear();
var month = date.getMonth() + 1;
var dates = date.getDate();
var arr = [&#39;星期日&#39;, &#39;星期一&#39;, &#39;星期二&#39;, &#39;星期三&#39;, &#39;星期四&#39;, &#39;星期五&#39;, &#39;星期六&#39;];
var day = date.getDay();
console.log(&#39;今天是：&#39; + year + &#39;年&#39; + month + &#39;月&#39; + dates + &#39;日 &#39; + arr[day]);

// 格式化日期 时分秒
var date = new Date();
console.log(date.getHours()); // 时
console.log(date.getMinutes()); // 分
console.log(date.getSeconds()); // 秒
// 要求封装一个函数返回当前的时分秒 格式 08:08:21
function getTimer() {
    var time = new Date();
    var h = time.getHours();
    h = h &lt; 10 ? &#39;0&#39; + h : h;
    var m = time.getMinutes();
    m = m &lt; 10 ? &#39;0&#39; + m : m;
    var s = time.getSeconds();
    s = s &lt; 10 ? &#39;0&#39; + s : s;
    return h + &#39;:&#39; + m + &#39;:&#39; + s;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),a=[l];function v(r,t){return n(),i("div",null,a)}const u=e(s,[["render",v],["__file","将秒数转化为时分秒的时间格式.html.vue"]]);export{u as default};
