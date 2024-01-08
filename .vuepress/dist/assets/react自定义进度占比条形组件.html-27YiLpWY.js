import{_ as i,o as e,c as n,d as s}from"./app-G0TSq-iO.js";const l={},r=s(`<p>新建ProgressBar.tsx组件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>

import React, { Component } from &#39;react&#39;;
import PropTypes from &#39;prop-types&#39;;
interface IProps {
    nums: number
    data: number
    progressColor: string
}
interface IState {
    bgColor:string
    progressColor:string
}
 class ProgressBar extends Component&lt;IProps,IState&gt; {
  constructor(props: any) {
    super(props);
    this.state = {
      bgColor: &#39;#000&#39;,
      progressColor: &#39;#aaa&#39;,
    };
  }

  renderProgress() {
    const progressItemStyle = {
      width: \`\${100 / this.props.nums }%\`,
      height: &#39;100%&#39;,
      lineHeight: &#39;100%&#39;,
      padding: &#39;0px 4px&#39;,
      fontWeight: 800,
      // color: \`rgb(\${this.props.progressColor}\`,
    };
    let progressItemLength = this.props.nums * (this.props.data / 100);
    var ele = [];
    for (let i = 0; i &lt; progressItemLength; i++) {
      ele.push(
        &lt;div
          style={Object.assign(progressItemStyle, {
            color: \`rgb(\${this.props.progressColor}\`,
          })}
          key={i}
        &gt;
          /
        &lt;/div&gt;,
      );
    }
    return ele;
  }

  componentDidMount() {
    if (this.props.data &gt;= 90) {
      this.setState({ bgColor: &#39;#FFF5F5&#39;, progressColor: &#39;#F45A59&#39; });
    } else if (this.props.data &gt;= 80) {
      this.setState({ bgColor: &#39;#FAF5EE&#39;, progressColor: &#39;#F5982C&#39; });
    } else if (this.props.data &gt;= 60) {
      this.setState({ bgColor: &#39;#D4E9FA&#39;, progressColor: &#39;#2A7CFF&#39; });
    } else {
      this.setState({ bgColor: &#39;#BAEBD0&#39;, progressColor: &#39;#2AC870&#39; });
    }
  }
  render() {
    const progressStyle = {
      display: &#39;flex&#39;,
      color: this.state.progressColor,
      // margin: &#39;0 5px&#39;,
    };

    const progressArticleStyle = {
      height: &#39;18px&#39;,
      width: &#39;78%&#39;,
      display: &#39;flex&#39;,
      borderRadius: &#39;10px&#39;,
      overflow: &#39;hidden&#39;,
      marginTop: &#39;5px&#39;,
      color: this.state.progressColor,
      background: this.state.bgColor,
      border: \`1px solid \${this.state.progressColor}\`,
    };

    return (
      &lt;div style={progressStyle}&gt;
        &lt;div style={progressArticleStyle}&gt;{this.renderProgress()}&lt;/div&gt;
        &lt;div style={{ width: &#39;22%&#39;, marginLeft: &#39;5px&#39; }}&gt;
          {this.props.data}%
        &lt;/div&gt;
      &lt;/div&gt;
    );
  }
}

// ProgressBar.propTypes = {
//   nums: PropTypes.number.isRequired,
//   data: PropTypes.number.isRequired,
// };

export default ProgressBar;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在需要的组件直接引入即可</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
import ProgressBar from &#39;../../componments/ProgressBar&#39;



&lt;ProgressBar nums={40} data={50} progressColor=&quot;#000000&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>data数据就是占比的百分比（1-100）</p><p>nums就是里面条格数，自己根据进度条长度，调到一个适合的值即可</p>`,6),d=[r];function v(a,t){return e(),n("div",null,d)}const o=i(l,[["render",v],["__file","react自定义进度占比条形组件.html.vue"]]);export{o as default};
