import{_ as a,o as e,c as n,d as t}from"./app-tgHnmF2J.js";const s={},i=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function getGreatCircleDistance (lat1, lng1, lat2, lng2){
        var radLat1 = lat1*Math.PI / 180.0;
        var radLat2 = lat2*Math.PI / 180.0;
        var a = radLat1 - radLat2;
        var b = lng1*Math.PI / 180.0 - lng2*Math.PI / 180.0;
        var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a/2),2) +
        Math.cos(radLat1)*Math.cos(radLat2)*Math.pow(Math.sin(b/2),2)));
        s = s *6378.137 ;// EARTH_RADIUS;
        s = Math.round(s * 10000) / 10000;
        return s;  // 公里数
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),d=[i];function l(r,c){return e(),n("div",null,d)}const _=a(s,[["render",l],["__file","计算两个经纬度之间的距离.html.vue"]]);export{_ as default};
