import{_ as e,r as t,o as l,c as s,a as i,b as r,f as d,d as a}from"./app-tgHnmF2J.js";const v={},c=a(`<p>#003- 快速排序</p><p>快排核心思想是 ：</p><p>选定一个基准x，将比x小的值放到左边，比x大的值放到右边。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const partition = (arr, left, right) =&gt; {
	let x = arr[left];
	let i = left;
	let j = right;
	
	while(i &lt; j) {
		//先从前往后找小的，没找的的话一直继续
			while( i &lt; j &amp;&amp; arr[j] &gt; x) {
				j --;
			}
			//找到了，将值填入坑里面，a[j]又变成了坑
			if(i &lt; j) {
				a[i] = a[j];
			}
			
			//然后从前往后找大的，没找到继续找。
			while(i &lt; j &amp;&amp; arr[i] &lt; x) {
				i ++;
			}
			//找到了，将值填入之前的坑里。
			if(i &lt; j) {
				a[j] = a[i]
			}
		}
		
		//将基准值填入坑
		a[i] = x;
		return i;
	}
	
	const quickSort = (arr,left,right) =&gt; {
		const length = arr.length;
		const start = left || 0;
		const end = right !== undefined ? right : length - 1;
		
		if(start &lt; end) {
			const index = partition(arr, start, end;)
			quickSort(arr, start, index - 1);//调整基准值左边
			quickSort(arr,index + 1,end); //调整基准值右边
		}
		return arr;
	}




使用：
const newArr = [2, 3, 1, 4, 6, 5, 9, 8, 7];

// 测试下
let result = quickSort(newArr);
console.log(result);   // [1, 2, 3, 4, 5, 6, 7, 8, 9]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>未完待续。。。</p><p>#快排算法2</p><p>算法参考某个元素值，将小于它的值放到左数组中，大于它的值放在右数组中。然后进行递归进行左右数组的操作。返回合并的数组就是已经排好顺序的数组了。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function quickSort(arr) {
	if(arr.length &lt; = 1) {
		return arr;
	}
	let leftArr = [];
	let rightArr = [];
	let q = arr[0];
	
	for(let i = 1; i &lt; arr.length; i ++) {
		if(arr[i] &gt; q) {
			rightArr.push(arr[i])
		} else {
			leftArr.push(arr[i])
		}
	}
	return [].concat(quickSort(leftArr),[q],quickSort(rightArr));
}

module.exports = quickSort;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),u={href:"http://math.hws.edu/eck/jsdemo/sortlab.html",target:"_blank",rel:"noopener noreferrer"};function m(b,o){const n=t("ExternalLinkIcon");return l(),s("div",null,[c,i("p",null,[i("a",u,[r("一个容易理解的快排动画"),d(n)])])])}const h=e(v,[["render",m],["__file","S003-快速排序.html.vue"]]);export{h as default};
