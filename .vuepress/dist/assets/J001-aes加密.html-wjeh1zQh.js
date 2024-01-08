import{_ as e,o as n,c as i,d as s}from"./app-Ni1_oyYA.js";const d={},l=s(`<p>##先下载crypto-js</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install crypto-js --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>#新建一个单独的aes.js文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import CryptoJS from &#39;crypto-js&#39;;

let AesKey = &quot;iam520hellomryk&quot;;
    let CBCIV = &quot;16-Bytes--String&quot;;
    // 加密选项
    let CBCOptions = {
        iv: CryptoJS.enc.Utf8.parse(CBCIV),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    }

    //加密
    export const encrypt = (data) =&gt; {
        let key = CryptoJS.enc.Utf8.parse(AesKey);
        let secretData = CryptoJS.enc.Utf8.parse(data);
        let encrypted = CryptoJS.AES.encrypt(
            secretData,
            key,
            CBCOptions
        );
        return encrypted.toString();
    }

    export const decrypt = (data) =&gt; {
        let key = CryptoJS.enc.Utf8.parse(AesKey);
        let decrypt = CryptoJS.AES.decrypt(
            data,
            key,
            CBCOptions
        );
        return CryptoJS.enc.Utf8.stringify(decrypt).toString();
    }




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在引入的页面</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { encrypt, decrypt } from &quot;@/common/js/aes.js&quot;;



    // console.log(encrypt(&quot;羊羊羊呀&quot;))
    // console.log(decrypt(&quot;Hxr4/Ulnanpb9tB38sSLJVGZQ5ccB+rkNZM4ujfNZC8=&quot;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个加密后结果是经过base64处理的，不用再用base64多进行一次编码了。 另外由于有的编码后的结果中会有+号，导致后端解析出错，可以让后端换个解码方式就可以。。</p>`,7),t=[l];function r(a,c){return n(),i("div",null,t)}const u=e(d,[["render",r],["__file","J001-aes加密.html.vue"]]);export{u as default};
