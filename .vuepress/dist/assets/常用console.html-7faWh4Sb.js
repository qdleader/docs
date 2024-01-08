import{_ as e,o as n,c as i,d as s}from"./app-1IAv0yAY.js";const l={},o=s(`<p><strong>Console定义样式;</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
   2. Console.table方法;
   3. Console包对象;
   4. Console.timeㅣ console.timeEnd[OK]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
// prints the text to the console as  a log message
console.log(&#39;This is a log message&#39;);

// prints the text to the console as an informational message
console.info(&#39;This is some information&#39;); 

// prints the text to the console as an error message
console.error(&#39;This is an error&#39;);

// prints the text to the console as a warning
console.warn(&#39;This is a warning&#39;);

// prints the geometry of the document body as an object
console.log(document.body.getBoundingClientRect());

// prints the geometry of the document body as a table
console.table(document.body.getBoundingClientRect());

// shows a list of techologies as a collapsed group
let technologies = [&quot;HTML&quot;, &quot;CSS&quot;, &quot;SVG&quot;, &quot;ECMAScript&quot;];
console.groupCollapsed(&#39;Technolgies&#39;);
technologies.forEach(tech =&gt; {console.info(tech);})
console.groupEnd(&#39;Technolgies&#39;);



console.time()

console.timeEnd()



console.log(&#39;%c this is a message&#39;,&#39;color:#0f0;&#39;)
console.log(&#39;%c this %c is a %c message&#39;,&#39;color:#f00;&#39;,&#39;font-size:20px;&#39;,&#39;color:blue;background:yellow;&#39;)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),d=[o];function a(c,t){return n(),i("div",null,d)}const v=e(l,[["render",a],["__file","常用console.html.vue"]]);export{v as default};
