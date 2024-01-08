import{_ as e,o as i,c as n,d as s}from"./app-1IAv0yAY.js";const d={},a=s(`<p>redux与vuex一样是一个组件的状态（数据）管理器，当我们需要在项目各组件中共享数据时可以使用。 redux是一个第三方的库，本身和react没有任何关系，react-redux也是一个第三方库，可以帮助我们在react项目中更好的使用redux。</p><h2 id="store-状态库-用于存放组件中的state。" tabindex="-1"><a class="header-anchor" href="#store-状态库-用于存放组件中的state。" aria-hidden="true">#</a> store（状态库）：用于存放组件中的state。</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
   action（动作）：redux将每一次更改动作定义为一个action，如
   const action = { type:&#39;input_change&#39;, val:123 }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reducers-执行-是一个纯函数-将根据action的不同来修改state。" tabindex="-1"><a class="header-anchor" href="#reducers-执行-是一个纯函数-将根据action的不同来修改state。" aria-hidden="true">#</a> reducers（执行）：是一个纯函数，将根据action的不同来修改state。</h2><h2 id="dispatch-分发-组件中通过dispatch-action-来实现动作的提交。" tabindex="-1"><a class="header-anchor" href="#dispatch-分发-组件中通过dispatch-action-来实现动作的提交。" aria-hidden="true">#</a> dispatch（分发）：组件中通过dispatch(action)，来实现动作的提交。</h2><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install react react-redux --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>用react-redux管理todoList数据</p></blockquote><p>action（动作）分析：</p><pre><code>&gt; 输入框输入
&gt; 按钮提交
&gt; 列表点击删除
</code></pre><h2 id="创建action" tabindex="-1"><a class="header-anchor" href="#创建action" aria-hidden="true">#</a> 创建action</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
import actionTypes from &#39;./actionTypes&#39;
 
const actionCreator = {
  getInputChangeAction: (val) =&gt; ({
    type: actionTypes.CHANGE_INPUT_VLAUE,
    value: val
  }),
  btnClickAction: (val) =&gt; ({
    type: actionTypes.BTN_CLICK,
    value: val
  }),
  listDelAction: (val) =&gt; ({
    type: actionTypes.LIST_DEL,
    index: val
  })
}
 
export default actionCreator;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>action的type定义为常量放在actionType.js中统一管理，以避免type手写出错的可能。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>actionTypes.js

const types = {
  CHANGE_INPUT_VLAUE: &#39;change_input_value&#39;,
  BTN_CLICK: &#39;btn_click&#39;,
  LIST_DEL: &#39;list_del&#39;
}
 
export default types;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="定义reducer" tabindex="-1"><a class="header-anchor" href="#定义reducer" aria-hidden="true">#</a> 定义reducer</h2><p>reducer.js</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import actionTypes from &#39;./actionTypes&#39;;
 
const defaultState = {
  inputValue: &#39;&#39;,
  list: [],
};
export default (state = defaultState, action) =&gt; {
  // reducer 可以接受state，但是绝不能修改state
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case actionTypes.CHANGE_INPUT_VLAUE:
      newState.inputValue = action.value;
      break;
    case actionTypes.BTN_CLICK:
      newState.list.push(action.value);
      newState.inputValue = &#39;&#39;;
      break;
    case actionTypes.LIST_DEL:
      newState.list.splice(action.index, 1);
      break;
    default:
      break;
  }
  return newState;
};
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建store" tabindex="-1"><a class="header-anchor" href="#创建store" aria-hidden="true">#</a> 创建store</h2><p>index.js</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { createStore } from &#39;redux&#39;;
import reducer from &#39;./reducer&#39;;
 
const store = createStore(reducer);
 
export default store;
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="利用react-redux" tabindex="-1"><a class="header-anchor" href="#利用react-redux" aria-hidden="true">#</a> 利用react-redux</h2><p>index.js</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import React from &#39;react&#39;;
import ReactDOM from &#39;react-dom&#39;;
import { Provider } from &#39;react-redux&#39;
import store from &#39;./store&#39;
import TodoList from &#39;./components/TodoList&#39;;
 
// if (process.env.NODE_ENV === &quot;development&quot;) {
// require(&#39;./mock/index.js&#39;);
// }
 
ReactDOM.render(
  &lt;Provider store={store}&gt;
    &lt;TodoList /&gt;
  &lt;/Provider&gt;,
  document.getElementById(&#39;root&#39;)
);
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>React-Redux 提供Provider组件，可以让容器组件拿到state。上面代码中，Provider在根组件外面包了一层，这样一来，TodoList的所有子组件就默认都可以拿到state了。</p><h3 id="组件中创建state、dispatch的映射关系" tabindex="-1"><a class="header-anchor" href="#组件中创建state、dispatch的映射关系" aria-hidden="true">#</a> 组件中创建state、dispatch的映射关系</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const mapStateToProps = state =&gt; {
  return {
    value: state.inputValue,
    list: state.list,
  };
};
 

const mapDispatchToProps = dispatch =&gt; {
  return {
    inputChange: e =&gt; dispatch(actions.getInputChangeAction(e.target.value)),
    btnClick: value =&gt; dispatch(actions.btnClickAction(value)),
    listClick: index =&gt; dispatch(actions.listDelAction(index)),
  };
};
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>意思就是将state与dispatch都映射到props，那么组件内就可以直接通过props来访问。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// ui组件
const TodoList = props =&gt; {
  const { value, list, inputChange, btnClick, listClick } = props;
  return (
    &lt;div&gt;
      &lt;div&gt;
        &lt;input onChange={inputChange} value={value}&gt;&lt;/input&gt;
        &lt;button onClick={() =&gt; btnClick(value)}&gt;提交&lt;/button&gt;
      &lt;/div&gt;
      &lt;ul&gt;
        {list.map((item, index) =&gt; {
          return (
            &lt;li key={index} onClick={() =&gt; listClick(index)}&gt;
              {item}
            &lt;/li&gt;
          );
        })}
      &lt;/ul&gt;
    &lt;/div&gt;
  );
};
 

// connect连接组件

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完整代码：TodoList.js</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import React from &#39;react&#39;;
import { connect } from &#39;react-redux&#39;;
import actions from &#39;../store/actionCreator&#39;;
 
const mapStateToProps = state =&gt; {
  return {
    value: state.inputValue,
    list: state.list,
  };
};
 
const mapDispatchToProps = dispatch =&gt; {
  return {
    inputChange: e =&gt; dispatch(actions.getInputChangeAction(e.target.value)),
    btnClick: value =&gt; dispatch(actions.btnClickAction(value)),
    listClick: index =&gt; dispatch(actions.listDelAction(index)),
  };
};
 
// todolist组件目前只有dom可以写成函数组件以提升效率；
// ui组件
const TodoList = props =&gt; {
  const { value, list, inputChange, btnClick, listClick } = props;
  return (
    &lt;div&gt;
      &lt;div&gt;
        &lt;input onChange={inputChange} value={value}&gt;&lt;/input&gt;
        &lt;button onClick={() =&gt; btnClick(value)}&gt;提交&lt;/button&gt;
      &lt;/div&gt;
      &lt;ul&gt;
        {list.map((item, index) =&gt; {
          return (
            &lt;li key={index} onClick={() =&gt; listClick(index)}&gt;
              {item}
            &lt;/li&gt;
          );
        })}
      &lt;/ul&gt;
    &lt;/div&gt;
  );
};
 
// 容器组件
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就实现了通过react-redux管理组件状态（数据）。</p>`,31),l=[a];function t(r,v){return i(),n("div",null,l)}const u=e(d,[["render",t],["__file","redux的使用.html.vue"]]);export{u as default};
