import{_ as e,o as n,c as i,e as s,d}from"./app-FRQgbCNf.js";const r={},l=d(`<p>#des 加密</p><p>##先下载crypto-js</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install crypto-js --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>#新建一个单独的aes.js文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import CryptoJS from &#39;crypto-js&#39;;
//DES加密
export const encryptBy = (message) =&gt; {
    var key = &#39;l2345678&#39;;
    function encryptByDES (message, key) {
      var keyHex = CryptoJS.enc.Utf8.parse(key)
      var option = {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7}
      var encrypted = CryptoJS.DES.encrypt(message, keyHex, option)
    //   var encrypted = CryptoJS.DES.encrypt(message, key, option)
      return encrypted.ciphertext.toString()
    }
    return encryptByDES(message, key);
}
//DES解密
export const decryptBy = (message) =&gt; {
    var key = &#39;l2345678&#39;;
    //DES  ECB模式解密
    function decryptByDES(message,key){
    var keyHex = CryptoJS.enc.Utf8.parse(key);
    var decrypted = CryptoJS.DES.decrypt({
    ciphertext: CryptoJS.enc.Hex.parse(message)
    }, keyHex, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
    });
    var result_value = decrypted.toString(CryptoJS.enc.Utf8);
    return result_value;
    }
    return decryptByDES(message, key);
}


// console.log(encryptBy(&#39;123456&#39;));//加密
//  console.log(decryptBy(&#39;103e702e0737327c&#39;));//解密

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在引入的页面</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { encryptBy, decryptBy } from &quot;@/common/js/des.js&quot;;



    // console.log(encryptBy(&quot;羊羊羊呀&quot;))
    // console.log(decryptBy(&quot;Hxr4/Ulnanpb9tB38sSLJVGZQ5ccB+rkNZM4ujfNZC8=&quot;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function t(a,c){return n(),i("div",null,[l,s(" 待完善 ")])}const o=e(r,[["render",t],["__file","J002-des加密.html.vue"]]);export{o as default};
