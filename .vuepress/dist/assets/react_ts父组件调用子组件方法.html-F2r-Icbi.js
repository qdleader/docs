import{_ as e,o as i,c as n,d as s}from"./app-qTEUp92E.js";const d={},l=s(`<p>父组件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>child: any = {}  //主要加这个
onRef = (ref: any) =&gt; {
    this.child = ref
}
showEditAdminModal = (admin?: IAdmin) =&gt; {
    // 调用子组件
    this.child.getEnableProvinces()
 }


 &lt;ChangeArea
          onRef={this.onRef}
          visible={this.state.showEditAdminModal}
          cancel={this.hideEditAdminModal}
      /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子组件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>interface IProps {
    visible: boolean
    cancel: (refresh?: boolean) =&gt; void
    onRef: (ref: any) =&gt; void
}

componentDidMount() {
    this.props.onRef(this)
}

getEnableProvinces() {

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),a=[l];function v(c,r){return i(),n("div",null,a)}const m=e(d,[["render",v],["__file","react_ts父组件调用子组件方法.html.vue"]]);export{m as default};
