import{_ as e,o as n,c as i,d as s}from"./app-FRQgbCNf.js";const d={},r=s(`<p>新建一个 setProjectConfig.js</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// import * as fs from &#39;fs&#39;;
// eslint-disable-next-line import/no-commonjs
var fs = require(&#39;fs&#39;)

const config = {}
const testAppId = &#39;wx1aab7b704999fc09&#39;
const prodAppId = &#39;wx614f86ea71308014&#39;
switch (process.env.TARO_APP_API) {
  case &#39;dev&#39;:
    config.appid = testAppId
    break
  case &#39;prod&#39;:
    config.appid = prodAppId
    break
  default:
    config.appid = testAppId
}



function writeJson () {
  fs.readFile(&#39;./project.config.json&#39;, function (err, data) {
    if (err) {
      return console.error(err)
    }
    var person = { ...JSON.parse(data.toString()), ...config }
    var str = JSON.stringify(person)
    fs.writeFile(&#39;./project.config.json&#39;, str, (writeFileErr) =&gt; {
      if (writeFileErr) {
        console.error(writeFileErr);
      } else {
        console.log(&#39;----------修改成功-------------&#39;);
      }
    })
  })
}

writeJson()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在package.json中 新增命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;build:weapp&quot;: &quot;cross-env TARO_APP_API=prod node ./setProjectConfig.js &amp;&amp; taro build --type weapp &quot;,
&quot;builddev:weapp&quot;: &quot;taro build --type weapp &quot;,
&quot;dev:weapp&quot;: &quot;cross-env TARO_APP_API=dev node ./setProjectConfig.js &amp;&amp; npm run builddev:weapp -- --watch&quot;,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[r];function a(v,c){return n(),i("div",null,l)}const o=e(d,[["render",a],["__file","taro中dev和线上打包不同的小程序.html.vue"]]);export{o as default};
