import{_ as n,o as i,c as e,d as s}from"./app-1IAv0yAY.js";const l={},d=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;Title&lt;/title&gt;
    &lt;style&gt;
        *{
            margin: 0;
            padding: 0;
        }
        body{
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #34495e;
        }
        .heart{
            width: 200px;
            height: 200px;
            background: red;
            transform: rotate(45deg) scale(.5);
            animation-name: hd;
            animation-duration: 2s;
            animation-iteration-count: infinite;
        }
        .heart::before{
            content: &quot;&quot;;
            width: 200px;
            height: 200px;
            border-radius: 50%;
            position: absolute;
            background: red;
            transform: translateX(-100px);
        }
        .heart::after{
            content: &quot;&quot;;
            width: 200px;
            height: 200px;
            border-radius: 50%;
            position: absolute;
            background: red;
            transform: translateY(-100px);
        }
        @keyframes hd {
            25%{
                transform: rotate(45deg) scale(1);
            }
            50%{
                transform: rotate(45deg) scale(.5);
            }
            75%{
                transform: rotate(45deg) scale(1);
            }
            to{
                transform: rotate(45deg) scale(.5);
            }
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div class=&quot;heart&quot;&gt;&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),a=[d];function v(t,r){return i(),e("div",null,a)}const u=n(l,[["render",v],["__file","C007-css3心跳动画.html.vue"]]);export{u as default};
