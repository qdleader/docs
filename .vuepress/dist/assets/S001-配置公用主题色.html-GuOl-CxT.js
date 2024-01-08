import{_ as e,o as n,c as i,d as l}from"./app-Ni1_oyYA.js";const d={},s=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
// 默认主题的变量集合
$default-theme : (
  base-color: #2A2B2E,//背景色
  btn-color: #383A3D, // 按钮背景色
  btn1-color:#4B4D52, // 编辑按钮背景色
  text-color:#fff,//字体颜色
  text1-color:#AFB0B3,//字体色灰色颜色
  text2-color:#ff9800,//字体高亮色颜色

);
// 后台主题的变量集合
$ht-theme : (
  base-color: gray,//背景色
  btn-color: rgb(221, 195, 195), // 按钮背景色
  btn1-color:#4B4D52, // 编辑按钮背景色
  text-color:#fff,//字体颜色
  text1-color:#AFB0B3,//字体色灰色颜色
  text2-color:#ff9800,//字体高亮色颜色
);
//定义主题对象
$themes: (// key为主题  value为主题的变量集合
  default-theme: $default-theme,
  ht-theme: $ht-theme
);


// 生成主题背景色样式
@mixin base-background(){
    @each $themename , $theme in $themes {
        [data-theme = &#39;#{$themename}&#39;] &amp; {
            background-color: map-get($map: $theme, $key: base-color );
        }
    }
}
// 按钮背景色
@mixin btn-background(){
    @each $themename , $theme in $themes {
        [data-theme = &#39;#{$themename}&#39;] &amp; {
            background-color: map-get($map: $theme, $key: btn-color );
        }
    }
}
// 按钮背景高亮色
@mixin  btn1-background(){
    @each $themename , $theme in $themes {
        [data-theme = &#39;#{$themename}&#39;] &amp; {
            background-color: map-get($map: $theme, $key: text2-color );
        }
    }
}
// 编辑按钮背景色
@mixin  btn1-color(){
  @each $themename , $theme in $themes {
      [data-theme = &#39;#{$themename}&#39;] &amp; {
          background-color: map-get($map: $theme, $key: btn1-color );
      }
  }
}
// 生成主题字体色样式
@mixin text-color(){
    @each $themename , $theme in $themes {
        [data-theme = &#39;#{$themename}&#39;] &amp; {
            color: map-get($map: $theme, $key: text-color ) !important;
        }
    }
}
@mixin text1-color(){
  @each $themename , $theme in $themes {
      [data-theme = &#39;#{$themename}&#39;] &amp; {
          color: map-get($map: $theme, $key: text1-color ) !important;
      }
  }
}
@mixin text2-color(){
  @each $themename , $theme in $themes {
      [data-theme = &#39;#{$themename}&#39;] &amp; {
          color: map-get($map: $theme, $key: text2-color ) !important;
      }
  }
}
// 边框色
@mixin border-color(){
  @each $themename , $theme in $themes {
      [data-theme = &#39;#{$themename}&#39;] &amp; {
          border-color: map-get($map: $theme, $key: btn-color ) !important;
      }
  }
}



@function getVal($theme, $keyPath) {
  @return map-get($map: $theme, $key: $keyPath);
}
@mixin withColor($attribute, $keyPath) {
  @each $themename, $theme in $themes {
    [data-theme=&quot;#{$themename}&quot;] &amp; {
      #{$attribute}: map-get($map: $theme, $key: $keyPath);
    }
  }
}



// 使用
.actuary{
  @include base-background()
}
.ibox-title{
   @include text-color();
}


.aqcu-li-ri-line {
  @include withColor(&quot;color&quot;, &quot;text-color&quot;);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>background:#2A2B2E; 就可以换成 @include base-background()</p><p>在根节点的div 上面挂上</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div
  class=&quot;block&quot;
  data-theme=&quot;default-theme&quot;
&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>就可以使用啦</p>`,5),a=[s];function m(v,c){return n(),i("div",null,a)}const t=e(d,[["render",m],["__file","S001-配置公用主题色.html.vue"]]);export{t as default};
