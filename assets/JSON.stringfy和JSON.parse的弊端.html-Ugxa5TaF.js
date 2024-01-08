import{_ as e,o as n,c as i,d as s}from"./app-tSvYcIf0.js";const a={},r=s(`<h1 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h1><h3 id="_1-如果obj里面有时间对象-则json-stringify后再json-parse的结果-时间将只是字符串的形式-而不是对象的形式" tabindex="-1"><a class="header-anchor" href="#_1-如果obj里面有时间对象-则json-stringify后再json-parse的结果-时间将只是字符串的形式-而不是对象的形式" aria-hidden="true">#</a> 1.如果obj里面有时间对象，则JSON.stringify后再JSON.parse的结果，时间将只是字符串的形式，而不是对象的形式</h3><h3 id="_2-如果obj里有函数-undefined-则序列化的结果会把函数或-undefined丢失" tabindex="-1"><a class="header-anchor" href="#_2-如果obj里有函数-undefined-则序列化的结果会把函数或-undefined丢失" aria-hidden="true">#</a> 2.如果obj里有函数，undefined，则序列化的结果会把函数或 undefined丢失；</h3><h3 id="_3-如果被拷贝的对象中有正则表达式-则拷贝之后的对象正则表达式会变成object" tabindex="-1"><a class="header-anchor" href="#_3-如果被拷贝的对象中有正则表达式-则拷贝之后的对象正则表达式会变成object" aria-hidden="true">#</a> 3.如果被拷贝的对象中有正则表达式，则拷贝之后的对象正则表达式会变成Object</h3><h3 id="_4、json-stringify-只能序列化对象的可枚举的自有属性-例如-如果obj中的对象是有构造函数生成的-则使用json-parse-json-stringify-obj-深拷贝后-会丢弃对象的constructor-会抛弃对象的constructor-所有的构造函数会指向object" tabindex="-1"><a class="header-anchor" href="#_4、json-stringify-只能序列化对象的可枚举的自有属性-例如-如果obj中的对象是有构造函数生成的-则使用json-parse-json-stringify-obj-深拷贝后-会丢弃对象的constructor-会抛弃对象的constructor-所有的构造函数会指向object" aria-hidden="true">#</a> 4、JSON.stringify()只能序列化对象的可枚举的自有属性，例如 如果obj中的对象是有构造函数生成的， 则使用JSON.parse(JSON.stringify(obj))深拷贝后，会丢弃对象的constructor； 会抛弃对象的constructor,所有的构造函数会指向Object</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>eg:
function Person(name) {
    this.name = name;
    console.log(name)
  }

  const liai = new Person(&#39;liai&#39;);

  const test = {
    name: &#39;a&#39;,
    date: liai,
  };
  // debugger
  const copyed = JSON.parse(JSON.stringify(test));
  test.name = &#39;test&#39;
  console.error(&#39;ddd&#39;, test, copyed)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),d=[r];function t(o,c){return n(),i("div",null,d)}const u=e(a,[["render",t],["__file","JSON.stringfy和JSON.parse的弊端.html.vue"]]);export{u as default};
