import{_ as i,o as n,c as a,e as r,a as e,b as d,d as s}from"./app-qTEUp92E.js";const l={},t=e("h1",{id:"去掉一组整型数组的重复值",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#去掉一组整型数组的重复值","aria-hidden":"true"},"#"),d(" 去掉一组整型数组的重复值")],-1),v=s(`<p>输入： [1,2,3,12,1,14,3]</p><p>输出： [1,2,3,12,14]</p><h2 id="方法1" tabindex="-1"><a class="header-anchor" href="#方法1" aria-hidden="true">#</a> 方法1：</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let unique = function(arr) {
	let hashTable = {};
	let data = [];
	for(let i = 0 ; i &lt; arr.length; i ++) {
		if(!hashTable[arr[i]]) {
			hashTable[arr[i]] = true;
			data.push(arr[i]);
		}
	}
	return data;
}
module.exports = unique;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法二" tabindex="-1"><a class="header-anchor" href="#方法二" aria-hidden="true">#</a> 方法二：</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function unique (arr) {
  return Array.from(new Set(arr))
}

或简写为：
[...new Set(arr)] 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法3" tabindex="-1"><a class="header-anchor" href="#方法3" aria-hidden="true">#</a> 方法3</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function unique(arr){            
        for(var i=0; i&lt;arr.length; i++){
            for(var j=i+1; j&lt;arr.length; j++){
                if(arr[i]==arr[j]){         //第一个等同于第二个，splice方法删除第二个
                    arr.splice(j,1);
                    j--;
                }
            }
        }
return arr;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法4" tabindex="-1"><a class="header-anchor" href="#方法4" aria-hidden="true">#</a> 方法4：</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log(&#39;type error!&#39;)
        return
    }
    var array = [];
    for (var i = 0; i &lt; arr.length; i++) {
        if (array .indexOf(arr[i]) === -1) {
            array .push(arr[i])
        }
    }
    return array;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function c(u,m){return n(),a("div",null,[t,r(" 比如 "),v])}const o=i(l,[["render",c],["__file","S002-去掉一组整型数组的重复值.html.vue"]]);export{o as default};
