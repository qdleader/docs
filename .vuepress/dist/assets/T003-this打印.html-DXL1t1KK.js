import{_ as n,o as e,c as i,d as s}from"./app-xrgnhFxe.js";const d={},l=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var name = 222

var a = {
  name: 111,
  say: function() {
    console.log(this.name)
  }
}

var fun  = a.say
fun()
a.say()

var b = {
  name: 333,
  say: function (fun) {
    fun()
  }
}

b.say(a.say)

b.say = a.say
b.say()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答案</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>222
111


222
333

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),a=[l];function v(c,r){return e(),i("div",null,a)}const m=n(d,[["render",v],["__file","T003-this打印.html.vue"]]);export{m as default};
