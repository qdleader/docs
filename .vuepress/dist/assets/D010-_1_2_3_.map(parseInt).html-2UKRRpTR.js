import{_ as e,o as t,c as n,a}from"./app-C59QzqDT.js";const s={},p=a("p",null,"['1', '2', '3'].map(parseInt) 对于每个迭代map, parseInt()传递两个参数: 字符串和基数。 所以实际执行的的代码是：",-1),_=a("p",null,"['1', '2', '3'].map((item, index) => { return parseInt(item, index) }) 即返回的值分别为：",-1),r=a("p",null,"parseInt('1', 0) // 1 parseInt('2', 1) // NaN parseInt('3', 2) // NaN, 3 不是二进制 所以：",-1),o=a("p",null,"['1', '2', '3'].map(parseInt) // 1, NaN, NaN [‘1’,‘2’,‘3’].map(parseInt) 输出的是一个数组，里面的元素分别是1,NaN,NaN。map的作用是遍历数组中的每个元素，对每个元素都执行map()第一个函数的操作，这里就是都进行数字转换，返回结果是一个新的数组。当没有指定map中function传递几个参数时，默认是能传递多少就传多少，parseInt最多能接收两个参数，所以map就把前两个参数（当前值，索引值）传递给parseInt，依次举例就是parseInt(‘1’,0)返回的是1，parseInt(‘2’,1)返回的是NaN，因为第二个参数必须是2~64之间的数，parseInt(‘3’,2)返回的是NaN，因为二进制不包括3这个数字，因此会得到1,NaN,NaN的结果。",-1),N=a("p",null,"由此 ['10','10','10','10','10'].map(parseInt); // [10, NaN, 2, 3, 4] 如何在现实世界中做到这一点 如果您实际上想要循环访问字符串数组, 该怎么办？ map()然后把它换成数字？使用编号!",-1),m=a("p",null,"['10','10','10','10','10'].map(Number); // [10, 10, 10, 10, 10]",-1),c=[p,_,r,o,N,m];function l(i,I){return t(),n("div",null,c)}const u=e(s,[["render",l],["__file","D010-_1_2_3_.map(parseInt).html.vue"]]);export{u as default};