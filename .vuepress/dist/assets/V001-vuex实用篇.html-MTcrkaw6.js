import{_ as s,r as d,o as l,c as t,a as e,b as i,f as v,d as a}from"./app-C59QzqDT.js";const r={},c=e("p",null,"##1.首先在main.js中引入",-1),m=e("p",null,"import store from './store/index.js'",-1),u=a(`<p>##2.然后在main.js同级建立store文件夹</p><p>在store文件夹里面分别建立actions.js, getters.js, index.js, mutations.js,types.js</p><p>比如现在需求在组件A控制组件B中的一个状态的显隐。</p><p>在组件A中</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
import {mapGetters, mapActions} from &#39;vuex&#39;;
	data() {
		return {
			
		}
	},
    methods: {
        //点击弹出
        ...mapActions([
            &#39;buyPop&#39;
        ]),
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.触发后进入store中的index文件 index文件中的内容是固定的：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import Vue from &#39;vue&#39;
import Vuex from &#39;vuex&#39;

Vue.use(Vuex);

import mutations from &#39;./mutations&#39;
import actions from &#39;./actions&#39;
import getters from &#39;./getters&#39;

export default new Vuex.Store({
	modules:{
		mutations
    },
    actions,
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>*2.然后进入actions里面</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import * as types from &#39;./types&#39;

export default {
    //点击弹出付款弹出层
    buyPop:({
        commit
    }) =&gt; {
        commit(types.BUYPOP)
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>*3.然后维护下types文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export const BUYPOP = &#39;BUYPOP&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后到了mutations文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import {
    BUYPOP,
} from &#39;./types&#39;
import getters from &#39;./getters&#39;

const state = {
    cpShow:false,  //控制付款弹出层展示隐藏
};

const mutations = {
    //底部购买组件出现弹出付钱板块
    [BUYPOP](state) {
        state.cpShow = true;
    },

};
export default {
	state,
	mutations,
	getters
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后进入getters文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
const getters = {
	//获取弹出层状态
	cpShow(state) {
		return state.cpShow
    },
}

export default getters;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后store文件就处理完毕了，那么在B组件中怎么调用呢？</p><p>着啥急，这不就来了嘛。。</p><p>B组件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
	&lt;div&gt;
			&lt;div v-show=&quot;cpShow&quot;&gt;被控制的木偶&lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import {mapGetters, mapActions} from &#39;vuex&#39;;
export default {
    data() {
        return {
                                    
        };
    },
    computed:{
        ...mapGetters({
                cpShow:&#39;cpShow&#39;
	   })

    },
    methods: {

    }
};
&lt;/script&gt;


//调用时候可以直接this.cpShow
写法嘛很多种：
        ...mapGetters({
                cpShow:&#39;cpShow&#39;
	   })
	   
	   或者
	           ...mapGetters([
	            &#39;cpShow&#39;
	   ])
	   都在可以

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这就是一个完整的使用流程喽！</p><p>加群加群微信搜索qdleader，回复加群</p>`,21);function o(b,p){const n=d("App");return l(),t("div",null,[c,m,e("p",null,[i("new Vue({ el: '#app', router, store, components: { App }, template: '"),v(n),i("' })")]),u])}const g=s(r,[["render",o],["__file","V001-vuex实用篇.html.vue"]]);export{g as default};
