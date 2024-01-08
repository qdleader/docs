import{_ as n,o as i,c as e,d as s}from"./app-tSvYcIf0.js";const l={},d=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>

const hexcase = 0;  /* hex output format. 0 - lowercase; 1 - uppercase        */
// const b64pad = &quot;&quot;; /* base-64 pad character. &quot;=&quot; for strict RFC compliance   */
const chrsz = 8;  /* bits per input character. 8 - ASCII; 16 - Unicode      */

// let binb2hex;


// function b64_sha1(s: string): string { return binb2b64(coreSha1(str2binb(s), s.length * chrsz)); }
// function str_sha1(s: string): string { return binb2str(coreSha1(str2binb(s), s.length * chrsz)); }
// function hex_hmac_sha1(key: string, data: string): string { return binb2hex(core_hmac_sha1(key, data)); }
// function b64_hmac_sha1(key: string, data: string): string { return binb2b64(core_hmac_sha1(key, data)); }
// function str_hmac_sha1(key: string, data: string): string { return binb2str(core_hmac_sha1(key, data)); }

/*
 * Perform a simple self-test to see if the VM is working
 */

// function sha1_vm_test(): boolean {
//     return hex_sha1(&quot;abc&quot;) == &quot;a9993e364706816aba3e25717850c26c9cd0d89d&quot;;
// }

/*
 * Calculate the SHA-1 of an array of big-endian words, and a bit length
 */
function rol(num: number, cnt: number): number {
    return (num &lt;&lt; cnt) | (num &gt;&gt;&gt; (32 - cnt));
}

function safeAdd(x: number, y: number): number {
    const lsw = (x &amp; 0xFFFF) + (y &amp; 0xFFFF);
    const msw = (x &gt;&gt; 16) + (y &gt;&gt; 16) + (lsw &gt;&gt; 16);
    return (msw &lt;&lt; 16) | (lsw &amp; 0xFFFF);
}
function sha1Ft(t: number, b: number, c: number, d: number): number {
    if (t &lt; 20) return (b &amp; c) | ((~b) &amp; d);
    if (t &lt; 40) return b ^ c ^ d;
    if (t &lt; 60) return (b &amp; c) | (b &amp; d) | (c &amp; d);
    return b ^ c ^ d;
}

/*
 * Determine the appropriate additive constant for the current iteration
 */
function sha1Kt(t: number): number {
    return (t &lt; 20) ? 1518500249 : (t &lt; 40) ? 1859775393 :
        (t &lt; 60) ? -1894007588 : -899497514;
}

function coreSha1(x: number[], len: number): number[] {
    /* append padding */
    x[len &gt;&gt; 5] |= 0x80 &lt;&lt; (24 - len % 32);
    x[((len + 64 &gt;&gt; 9) &lt;&lt; 4) + 15] = len;

    const w = Array(80);
    let a = 1732584193;
    let b = -271733879;
    let c = -1732584194;
    let d = 271733878;
    let e = -1009589776;

    for (let i = 0; i &lt; x.length; i += 16) {
        const olda = a;
        const oldb = b;
        const oldc = c;
        const oldd = d;
        const olde = e;

        for (let j = 0; j &lt; 80; j++) {
            if (j &lt; 16) w[j] = x[i + j];
            else w[j] = rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
            const t = safeAdd(safeAdd(rol(a, 5), sha1Ft(j, b, c, d)),
                safeAdd(safeAdd(e, w[j]), sha1Kt(j)));
            e = d;
            d = c;
            c = rol(b, 30);
            b = a;
            a = t;
        }

        a = safeAdd(a, olda);
        b = safeAdd(b, oldb);
        c = safeAdd(c, oldc);
        d = safeAdd(d, oldd);
        e = safeAdd(e, olde);
    }
    return [a, b, c, d, e];

}

/*
 * Perform the appropriate tripconst combination function for the current
 * iteration
 */


/*
 * Calculate the HMAC-SHA1 of a key and some data
 */
// function core_hmac_sha1(key: string, data: string): number[] {
//     let bkey = str2binb(key);
//     if (bkey.length &gt; 16) bkey = coreSha1(bkey, key.length * chrsz);

//     const ipad = Array(16), opad = Array(16);
//     for (const i = 0; i &lt; 16; i++) {
//         ipad[i] = bkey[i] ^ 0x36363636;
//         opad[i] = bkey[i] ^ 0x5C5C5C5C;
//     }

//     const hash = coreSha1(ipad.concat(str2binb(data)), 512 + data.length * chrsz);
//     return coreSha1(opad.concat(hash), 512 + 160);
// }

/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


/*
 * Bitwise rotate a 32-bit number to the left.
 */


/*
 * Convert an 8-bit or 16-bit string to an array of big-endian words
 * In 8-bit function, characters &gt;255 have their hi-byte silently ignored.
 */
function str2binb(str: string): number[] {
    const bin: number[] = [];
    const mask = (1 &lt;&lt; chrsz) - 1;
    for (let i = 0; i &lt; str.length * chrsz; i += chrsz)
        bin[i &gt;&gt; 5] |= (str.charCodeAt(i / chrsz) &amp; mask) &lt;&lt; (32 - chrsz - i % 32);
    return bin;
}

/*
 * Convert an array of big-endian words to a string
 */
// function binb2str(bin: number[]): string {
//     const str = &quot;&quot;;
//     const mask = (1 &lt;&lt; chrsz) - 1;
//     for (const i = 0; i &lt; bin.length * 32; i += chrsz)
//         str += String.fromCharCode((bin[i &gt;&gt; 5] &gt;&gt;&gt; (32 - chrsz - i % 32)) &amp; mask);
//     return str;
// }

/*
 * Convert an array of big-endian words to a hex string.
 */
function binb2hex(binarray: number[]): string {
    const hexTab = hexcase ? &quot;0123456789ABCDEF&quot; : &quot;0123456789abcdef&quot;;
    let str = &quot;&quot;;
    for (let i = 0; i &lt; binarray.length * 4; i++) {
        str += hexTab.charAt((binarray[i &gt;&gt; 2] &gt;&gt; ((3 - i % 4) * 8 + 4)) &amp; 0xF) +
        hexTab.charAt((binarray[i &gt;&gt; 2] &gt;&gt; ((3 - i % 4) * 8)) &amp; 0xF);
    }
    return str;
}

/*
 * Convert an array of big-endian words to a base-64 string
 */
// function binb2b64(binarray: number[]): string {
//     const tab = &quot;ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/&quot;;
//     const str = &quot;&quot;;
//     for (const i = 0; i &lt; binarray.length * 4; i += 3) {
//         const tripconst = (((binarray[i &gt;&gt; 2] &gt;&gt; 8 * (3 - i % 4)) &amp; 0xFF) &lt;&lt; 16)
//             | (((binarray[i + 1 &gt;&gt; 2] &gt;&gt; 8 * (3 - (i + 1) % 4)) &amp; 0xFF) &lt;&lt; 8)
//             | ((binarray[i + 2 &gt;&gt; 2] &gt;&gt; 8 * (3 - (i + 2) % 4)) &amp; 0xFF);
//         for (const j = 0; j &lt; 4; j++) {
//             if (i * 8 + j * 6 &gt; binarray.length * 32) str += b64pad;
//             else str += tab.charAt((tripconst &gt;&gt; 6 * (3 - j)) &amp; 0x3F);
//         }
//     }
//     return str;
// }

export function hexSha1(s: string): string { return binb2hex(coreSha1(str2binb(s), s.length * chrsz)).toUpperCase(); }
export function hexSha2(s: string): string { return binb2hex(coreSha1(str2binb(s), s.length * chrsz)); }
// 字符串加密成 hex 字符串

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),r=[d];function a(t,v){return i(),e("div",null,r)}const b=n(l,[["render",a],["__file","vue3中sha1加密的ts写法.html.vue"]]);export{b as default};
