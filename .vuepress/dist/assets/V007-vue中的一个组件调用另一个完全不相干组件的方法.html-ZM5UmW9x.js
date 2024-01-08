import{_ as e,o as n,c as i,d as s}from"./app-C59QzqDT.js";const d={},l=s(`<h1 id="一个组件调用你项目中任意一个组件的方法" tabindex="-1"><a class="header-anchor" href="#一个组件调用你项目中任意一个组件的方法" aria-hidden="true">#</a> 一个组件调用你项目中任意一个组件的方法</h1><p>两个组件之间没有任何关系，没有相互引用。父子组件或兄弟组件的关系。</p><p>这个方法成了，可以实现组件的高度分离。</p><p>这里我提供给大家一个vue的一方法：</p><p>A 调用 B中的一个方法，A 与 B 没有任何关系。</p><p>思路是vuex中存一个属性，A 组件 调用commit方法改变这个属性， B 组件中获取这个属性，并监听，当监听到这个属性变化时候，即可调用要调的方法。</p><p>A 组件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
import { mapGetters, mapActions } from &quot;vuex&quot;;
export default {
   methods:{
     ...mapActions([&quot;doF&quot;]),
     &lt;!-- A触发vuex属性的变化 --&gt;
     changeData() {
       this.doF()
     }
   }
}

&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vuex中：</p><p>mutations.js</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import {
    DOF,
} from &#39;./types&#39;
import getters from &#39;./getters&#39;

const state = {
    commentDataShow:false,//控制调用first-list中commentData方法
};

const mutations = {
    //A触发dof后改变commentDataShow状态
    [DOF](state) {
        state.commentDataShow = !state.commentDataShow
    },

};

export default {
	state,
	mutations,
	getters
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>getters.js</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { mapGetters } from &quot;vuex&quot;;

const getters = {
    //调用第一层列表list
    commentDataShow(state) {
        return state.commentDataShow
    },

}

export default getters;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个展示的vuex中关键的代码，具体vuex使用可以看vuex那一篇文档。</p><p>B组件:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
import { mapGetters, mapActions } from &quot;vuex&quot;;
export default {
  computed: {
       ...mapGetters({
           commentDataShow: &quot;commentDataShow&quot;
       })
   },
   watch:{

       commentDataShow() {
           this.commentData()
       }
   },
   methods:{
     &lt;!-- 要调用的方法 --&gt;
     commentData() {
       //doSomething
     }
   }
}

&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样这个功能就实现了。</p><p>另外另一种情况，两个组件公用一个父组件，而两个子组件来回调方法呢？</p><p>除了上面这方法，我们也可以，在这个父组件中设置一个属性，一个组件改变这个属性，当父组件监听到属性变化了，就调用另一个子组件方法，也可以做到。</p>`,19),t=[l];function a(v,r){return n(),i("div",null,t)}const c=e(d,[["render",a],["__file","V007-vue中的一个组件调用另一个完全不相干组件的方法.html.vue"]]);export{c as default};
