import{_ as e,o as i,c as n,d as a}from"./app-tSvYcIf0.js";const s={},d=a(`<h1 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install --save echarts-for-react
npm install --save echarts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="引入" tabindex="-1"><a class="header-anchor" href="#引入" aria-hidden="true">#</a> 引入</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import ReactECharts from &#39;echarts-for-react&#39;;


// render echarts option.
&lt;ReactECharts option={this.getOption()} /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>getOption =()=&gt; {
    let option = {
        title:{
          text:&#39;用户骑行订单&#39;
        },
        tooltip:{   //展示数据
          trigger:&#39;axis&#39;
        },
        xAxis:{
          data:[&#39;周一&#39;,&#39;周二&#39;,&#39;周三&#39;,&#39;周四&#39;,&#39;周五&#39;,&#39;周六&#39;,&#39;周日&#39;]
        },
        yAxis:{
          type:&#39;value&#39;
        },
        series:[
          {
            name:&#39;订单量&#39;,
            type:&#39;bar&#39;,
            data:[1000,2000,1500,3000,2000,1200,800]
          }
        ]
    }
    return option;
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>echarts api https://echarts.apache.org/examples/zh/index.html#chart-type-pie</p><p>echarts-for-react api https://www.npmjs.com/package/echarts-for-react</p>`,7),t=[d];function l(r,c){return i(),n("div",null,t)}const m=e(s,[["render",l],["__file","react中使用echart.html.vue"]]);export{m as default};
