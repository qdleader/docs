import{_ as e,o as i,c as a,d as s}from"./app-1IAv0yAY.js";const n={},t=s(`<h1 id="roo1-setstate更改数据试图不变化" tabindex="-1"><a class="header-anchor" href="#roo1-setstate更改数据试图不变化" aria-hidden="true">#</a> Roo1-setState更改数据试图不变化</h1><ol><li>由于dataSource是list对象，如果采用如下方法，则只是操作引用：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  handleDataSource = () =&gt; {
    let temp = this.state.dataSource;    

    temp.push({
      id: &#39;qdleader&#39;,
    });

    this.setState({
      dataSource : temp,
    });

  }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>temp.push其实就是相当于this.state.dataSource.push，引用没有改变，只是改变了引用指向的内存数据， React认为虚拟DOM并没有改变，因此，不会重新渲染页面。这就会导致Table组件的dataSource改变了，但是Table并没有重新渲染。</p><p>2.更新代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  handleDataSource = () =&gt; {
    let temp = [...this.state.dataSource];    

    temp.push({
      id: &#39;qdleader&#39;,
    });

    this.setState({
      dataSource : temp,
    });

  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重新建一个list对象，这时temp的引用和this.state.dataSource的引用不同，在this.setState方法中，React认为是改变了dataSource，因此会重新渲染页面。</p><ol start="3"><li>每次重新渲染Table时，Table的columns也会重新渲染。</li></ol>`,8),d=[t];function l(r,c){return i(),a("div",null,d)}const u=e(n,[["render",l],["__file","Roo1-setState更改数据试图不变化.html.vue"]]);export{u as default};
