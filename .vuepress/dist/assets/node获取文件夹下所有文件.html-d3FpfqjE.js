import{_ as i,o as e,c as n,d as s}from"./app-FRQgbCNf.js";const l={},r=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * fileDisplay(url, callback)
 * @param url: 你即将读取的文件夹路径
 * @param callback: 回调函数
 */

// node fs模块
const fs = require(&#39;fs&#39;);
// node path模块
const path = require(&#39;path&#39;);
// 收集所有的文件路径
const arr = [];
let timer = null;
const fileDisplay = (url, cb) =&gt; {
  const filePath = path.resolve(url);
  //根据文件路径读取文件，返回文件列表
  fs.readdir(filePath, (err, files) =&gt; {
    if (err) return console.error(&#39;Error:(spec)&#39;, err)
    files.forEach((filename) =&gt; {
      //获取当前文件的绝对路径
      const filedir = path.join(filePath, filename);
      // fs.stat(path)执行后，会将stats类的实例返回给其回调函数。
      fs.stat(filedir, (eror, stats) =&gt; {
        if (eror) return console.error(&#39;Error:(spec)&#39;, err);
        // 是否是文件
        const isFile = stats.isFile();
        // 是否是文件夹
        const isDir = stats.isDirectory();
        if (isFile) {
          // 这块我自己处理了多余的绝对路径，第一个 replace 是替换掉那个路径，第二个是所有满足\\\\的直接替换掉
          arr.push(filedir.replace(__dirname, &#39;&#39;).replace(/\\\\/img, &#39;/&#39;))
          // 最后打印的就是完整的文件路径了
          if (timer) clearTimeout(timer)
          timer = setTimeout(() =&gt; cb &amp;&amp; cb(arr), 200)
        }
        // 如果是文件夹
        if (isDir) fileDisplay(filedir, cb);
      })
    });
  });
}
// 测试代码
fileDisplay(&#39;./src&#39;, (arr) =&gt; {
  console.log(arr, &#39;-=&#39;)
})
// commonjs规范
module.exports = fileDisplay;
// es6 规范
// export default fileDisplay

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),d=[r];function a(v,c){return e(),n("div",null,d)}const m=i(l,[["render",a],["__file","node获取文件夹下所有文件.html.vue"]]);export{m as default};
