import{_ as n,o as e,c as i,d}from"./app-tSvYcIf0.js";const s={},u=d(`<blockquote><p>将可复用功能抽离为外部JS文件</p></blockquote><blockquote><p>函数名/文件名以use开头，形如：useXX</p></blockquote><blockquote><p>引用时将响应式变量或者方法显式解构暴露出来如：const {nameRef，Fn} = useXX() （在setup函数解构出自定义hooks的变量和方法）</p></blockquote><h2 id="加法-hook" tabindex="-1"><a class="header-anchor" href="#加法-hook" aria-hidden="true">#</a> 加法 hook</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { ref, watch } from &#39;vue&#39;;
const useAdd= ({ num1, num2 })  =&gt;{
    const addNum = ref(0)
    watch([num1, num2], ([num1, num2]) =&gt; {
        addFn(num1, num2)
    })
    const addFn = (num1, num2) =&gt; {
        addNum.value = num1 + num2
    }
    return {
        addNum,
        addFn
    }
}
export default useAdd


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="减法-hook" tabindex="-1"><a class="header-anchor" href="#减法-hook" aria-hidden="true">#</a> 减法 hook</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//减法功能-Hook
import { ref, watch } from &#39;vue&#39;;
export function useSub  ({ num1, num2 }){
    const subNum = ref(0)
    watch([num1, num2], ([num1, num2]) =&gt; {
        subFn(num1, num2)
    })
    const subFn = (num1, num2) =&gt; {
        subNum.value = num1 - num2
    }
    return {
        subNum,
        subFn
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在组建中使用：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div&gt;
        num1:&lt;input v-model.number=&quot;num1&quot; style=&quot;width:100px&quot; /&gt;
        &lt;br /&gt;
        num2:&lt;input v-model.number=&quot;num2&quot; style=&quot;width:100px&quot; /&gt;
    &lt;/div&gt;
    &lt;span&gt;加法等于:{{ addNum }}&lt;/span&gt;
    &lt;br /&gt;
    &lt;span&gt;减法等于:{{ subNum }}&lt;/span&gt;
&lt;/template&gt;
​
&lt;script setup&gt;
import { ref } from &#39;vue&#39;
import useAdd from &#39;./useAdd.js&#39;     //引入自动hook 
import { useSub } from &#39;./useSub.js&#39; //引入自动hook 
​
const num1 = ref(2)
const num2 = ref(1)
//加法功能-自定义Hook（将响应式变量或者方法形式暴露出来）
const { addNum, addFn } = useAdd({ num1, num2 })
addFn(num1.value, num2.value)


//减法功能-自定义Hook (将响应式变量或者方法形式暴露出来)
const { subNum, subFn } = useSub({ num1, num2 })
subFn(num1.value, num2.value)
&lt;/script&gt;
​

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue3自定义hooks可以灵活传递任何参数来改变它的逻辑-参数不限于其他hook的暴露出来的变量" tabindex="-1"><a class="header-anchor" href="#vue3自定义hooks可以灵活传递任何参数来改变它的逻辑-参数不限于其他hook的暴露出来的变量" aria-hidden="true">#</a> Vue3自定义Hooks可以灵活传递任何参数来改变它的逻辑，参数不限于其他hook的暴露出来的变量</h2><p>算平均的Hook</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//平均功能-Hook
import { ref, watch } from &quot;vue&quot;;
export function useAverage(addNum) {
  const averageNum = ref(0);
  watch(addNum, (addNum) =&gt; {
    averageFn(addNum);
  });
  const averageFn = (addNum) =&gt; {
    averageNum.value = addNum / 2;
  };
  return {
    averageNum,
    averageFn,
  };
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组件内使用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//组件内
//加法功能-自定义Hook（将响应式变量或者方法形式暴露出来）
const { addNum, addFn } = useAdd({ num1, num2 })
addFn(num1.value, num2.value)//主动调用，返回最新addNum


//平均功能-自定义Hook- hook传入参数值来其他hook暴露出来的变量
const { averageNum, averageFn} = useAverage(addNum)
averageFn(addNum.value)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Vue3自定义Hooks可以灵活传递任何参数来改变它的逻辑，参数不限于其他hook的暴露出来的变量，这提高了Vue3在抽象逻辑方面的灵活性。</p><h3 id="_3、mixin同名变量会被覆盖-vue3自定义hook可以在引入的时候对同名变量重命名" tabindex="-1"><a class="header-anchor" href="#_3、mixin同名变量会被覆盖-vue3自定义hook可以在引入的时候对同名变量重命名" aria-hidden="true">#</a> 3、Mixin同名变量会被覆盖，Vue3自定义Hook可以在引入的时候对同名变量重命名</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Vue3自定义Hooks
//加法功能-自定义Hook（将响应式变量或者方法形式暴露出来）
const { totalNum:addNum, addFn } = useAdd({ num1, num2 })
addFn(num1.value, num2.value)

//减法功能-自定义Hook (将响应式变量或者方法形式暴露出来)
const { totalNum:subNum, subFn } = useSub({ num1, num2 })
subFn(num1.value, num2.value)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在Vue3自定义Hooks中，虽然加法和减法Hooks都返回了totalNum，但是利用ES6对象解构很轻松给变量重命名</p></blockquote>`,18),l=[u];function a(v,m){return e(),i("div",null,l)}const t=n(s,[["render",a],["__file","vue3中的hooks.html.vue"]]);export{t as default};
