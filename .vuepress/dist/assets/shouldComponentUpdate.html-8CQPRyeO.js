import{_ as t,o,c as s,a as e}from"./app-C59QzqDT.js";const n={},r=e("p",null,"只要是组件继承自React.Component就会存在当父组件重新render的时候，子组件也会重新执行render,即使这个子组件没有任何变化。子组件只要调用setState就会重新执行render,及时setState的参数是一个空对象。",-1),a=e("p",null,"shouldComponentUpdate(nextProps,nextState) { console.log(this.props,this.state); // 目前的props 和 state console.log(nextProps,nextState); // 要变化的目标 props 的和 目标 state if (nextProps.m1 === this.props.m1 && nextState.m2 === this.state.m2) { return false; // 没有变， 不渲染了 } else { return true; // 改变了 才渲染 } }",-1),p=e("p",null,"当shouldComponentUpdate返回为true的时候，当前组件进行render，如果返回的是false则不进行render.",-1),l=[r,a,p];function d(c,_){return o(),s("div",null,l)}const h=t(n,[["render",d],["__file","shouldComponentUpdate.html.vue"]]);export{h as default};