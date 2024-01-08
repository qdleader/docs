import{_ as n,o as i,c as e,d as s}from"./app-1IAv0yAY.js";const d={},l=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import React,{Component} from &quot;react&quot;
//子组件
class Son extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const {isShow} =this.props;
    return(
      &lt;div onClick={isShow}&gt;
          我是子组件
       &lt;/div&gt;
    )
  }
}

export default class sonCallfather extends Component{
    constructor(props){
      super(props);
      this.state={
        isshow:true
      }
    }

    hideSon =() =&gt;{
      this.setState({
        isshow:false
      });
    }

    showSon =() =&gt;{
      this.setState({
        isshow:true
      });
    }

    render(){
      const {isshow} =this.state;
      return(
        &lt;div&gt;
            子组件在父组件里面展示
            {isshow ? &lt;Son isShow={this.hideSon}/&gt; :
              &lt;div onClick={this.showSon}&gt;
                    我影藏了，点我就出来
              &lt;/div&gt;}  
        &lt;/div&gt;
      )
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),v=[l];function r(t,a){return i(),e("div",null,v)}const u=n(d,[["render",r],["__file","子组件调用父组件方法.html.vue"]]);export{u as default};
