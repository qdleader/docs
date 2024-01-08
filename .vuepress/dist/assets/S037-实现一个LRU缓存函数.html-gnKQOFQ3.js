import{_ as e,o as i,c as n,d as s}from"./app-xrgnhFxe.js";const l={},a=s(`<h2 id="s037-实现一个lru缓存函数" tabindex="-1"><a class="header-anchor" href="#s037-实现一个lru缓存函数" aria-hidden="true">#</a> S037-实现一个LRU缓存函数</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class LRUCache {
  constructor(size) {
    this.size = size
    this.cache = new Map()
  }

  get(key) {
    const hasKey = this.cache.has(key)
    if (hasKey) {
      const val = this.cache.get(key)
      this.cache.delete(key)
      this.cache.set(key, val)
      return val
    } else {
      return -1
    }
  }

  put(key, val) {
    const hasKey = this.cache.has(key)
    if (hasKey) {
      this.cache.delete(key)
    }
    this.cache.set(key, val)
    if (this.cache.size &gt; this.size) {
      this.cache.delete(this.cache.keys().next().value)
    }
  }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d=[a];function c(v,r){return i(),n("div",null,d)}const u=e(l,[["render",c],["__file","S037-实现一个LRU缓存函数.html.vue"]]);export{u as default};
