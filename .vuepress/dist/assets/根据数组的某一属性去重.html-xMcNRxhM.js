import{_ as e,o as n,c as i,d as a}from"./app-gxPsN6Nl.js";const r={},d=a(`<h2 id="方法1" tabindex="-1"><a class="header-anchor" href="#方法1" aria-hidden="true">#</a> 方法1：</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>unique(arr) {
  const res = new Map();
  return arr.filter((a) =&gt; !res.has(a.id) &amp;&amp; res.set(a.id, 1));
},

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法2" tabindex="-1"><a class="header-anchor" href="#方法2" aria-hidden="true">#</a> 方法2：</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let data = [
   {id:1,name:&#39;obj&#39;},
   {id:3,name:&#39;string&#39;},
   {id:2,name:&#39;arr&#39;},
   {id:1,name:&#39;num&#39;}
 ];

let hash = {};

data = data.reduce(function(arr, current) {

    hash[current.id] ? &#39;&#39; : hash[current.id] = true &amp;&amp; arr.push(current);

    return arr

}, []);

console.log(data)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>拓展：</p><p>js sort方法根据数组中对象的某一个属性值进行排序</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr = [{name:&#39;zopp&#39;,age:0},{name:&#39;gpp&#39;,age:18},{name:&#39;yjj&#39;,age:8}];


function compare(property){
  return function(a,b){
    var value1 = a[property];
    var value2 = b[property];
    return value1 - value2;
  }
}
console.log(arr.sort(compare(&#39;age&#39;)))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如何根据参数不同，来确定是升序排列，还是降序排序呢？</p><p>/* <em>数组根据数组对象中的某个属性值进行排序的方法</em> 使用例子：newArray.sort(sortBy(&#39;number&#39;,false)) //表示根据number属性降序排列;若第二个参数不传递，默认表示升序排序</p><ul><li>@param attr 排序的属性 如number属性</li><li>@param rev true表示升序排列，false降序排序* */</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sortBy: function(attr,rev){
  //第二个参数没有传递 默认升序排列
  if(rev == undefined){
    rev = 1;
  } else {
    rev = (rev) ? 1 : -1;
  }
  return function(a,b){
    a = a[attr];
    b = b[attr];
    if(a &lt; b){
      return rev * -1;
    }if(a &gt; b){
      return rev * 1;
    }return 0;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),s=[d];function l(v,u){return n(),i("div",null,s)}const c=e(r,[["render",l],["__file","根据数组的某一属性去重.html.vue"]]);export{c as default};
