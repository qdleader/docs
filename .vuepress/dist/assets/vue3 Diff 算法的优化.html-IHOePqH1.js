import{_ as e,o as f,c as d,d as a}from"./app-otDwoQZb.js";const i={},u=a('<p>vue2是全量进行diff,而vue3使用了静态标记,只对打标记的节点进行diff vue2中的虚拟dom是进行全量的对比，在运行时会对所有节点生成一个虚拟节点树，当页面数据发生变更好，会遍历判断虚拟dom所有节点（包括一些不会变化的节点）有没有发生变化；vue3在diff算法中相比vue2增加了静态标记, 在模版编译时，编译器会在动态标签末尾加上 /* Text*/ PatchFlag。也就是在生成VNode的时候，同时打上标记，patch 过程中就会判断这个标记来 Diff 优化流程，跳过一些静态节点对比</p><h2 id="vue2、vue3-的-diff-算法实现差异主要体现在-处理完首尾节点后-对剩余节点的处理方式。" tabindex="-1"><a class="header-anchor" href="#vue2、vue3-的-diff-算法实现差异主要体现在-处理完首尾节点后-对剩余节点的处理方式。" aria-hidden="true">#</a> vue2、vue3 的 diff 算法实现差异主要体现在：处理完首尾节点后，对剩余节点的处理方式。</h2><p>在 vue2 中是通过对旧节点列表建立一个 { key, oldVnode }的映射表，然后遍历新节点列表的剩余节点，根据newVnode.key在旧映射表中寻找可复用的节点，然后打补丁并且移动到正确的位置。 而 vue3 则是建立一个存储新节点数组中的剩余节点在旧节点数组上的索引的映射关系数组，建立完成这个数组后也即找到了可复用的节点，然后通过这个数组计算得到最长递增子序列，这个序列中的节点保持不动，然后将新节点数组中的剩余节点移动到正确的位置。</p><h2 id="vue3的diff对比vue2的优化部分" tabindex="-1"><a class="header-anchor" href="#vue3的diff对比vue2的优化部分" aria-hidden="true">#</a> Vue3的diff对比Vue2的优化部分</h2><p>Vue2 是全量 Diff（当数据发生变化，它就会新生成一个DOM树，并和之前的DOM树进行比较，找到不同的节点然后更新。）；Vue3 是静态标记 + 非全量 Diff（Vue 3在创建虚拟DOM树的时候，会根据DOM中的内容会不会发生变化，添加一个静态标记。之后在与上次虚拟节点进行对比的时候，就只会对比这些带有静态标记的节点。） 使用最长递增子序列优化对比流程，可以最大程度的减少 DOM 的移动，达到最少的 DOM 操作</p><h2 id="vue3的diff算法核心" tabindex="-1"><a class="header-anchor" href="#vue3的diff算法核心" aria-hidden="true">#</a> Vue3的diff算法核心</h2><p>基本原理 首先进行新老节点头尾对比，头与头、尾与尾对比，寻找未移动的节点。 然后创建一个新节点在旧节点中的位置的映射表，这个映射表的元素如果不为空，代表可复用。 然后根据这个映射表计算出最长递增子序列，这个序列中的结点代表可以原地复用。之后移动剩下的新结点到正确的位置即递增序列的间隙中。</p>',7),t=[u];function r(c,h){return f(),d("div",null,t)}const o=e(i,[["render",r],["__file","vue3 Diff 算法的优化.html.vue"]]);export{o as default};
