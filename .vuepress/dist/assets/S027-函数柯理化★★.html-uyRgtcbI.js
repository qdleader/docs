import{_ as e,o as i,c as d,e as s,d as n}from"./app-tgHnmF2J.js";const l={},r=n(`<p>大概来说，柯里化有如下特点：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>简洁代码：柯里化应用在较复杂的场景中，有简洁代码，可读性高的优点。
参数复用：公共的参数已经通过柯里化预置了。
延迟执行：柯里化时只是返回一个预置参数的新函数，并没有立刻执行，实际上在满足条件后才会执行。
管道式流水线编程：利于使用函数组装管道式的流水线工序，不污染原函数。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 实现一个add方法，使计算结果能够满足如下预期：
add(1)(2)(3) = 6;
add(1, 2, 3)(4) = 10;
add(1)(2)(3)(4)(5) = 15;

function add() {
    // 第一次执行时，定义一个数组专门用来存储所有的参数
    var _args = Array.prototype.slice.call(arguments);

    // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
    var _adder = function() {
        _args.push(...arguments);
        return _adder;
    };

    // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
    _adder.toString = function () {
        return _args.reduce(function (a, b) {
            return a + b;
        });
    }
    return _adder;
}

add(1)(2)(3)                // 6
add(1, 2, 3)(4)             // 10
add(1)(2)(3)(4)(5)          // 15
add(2, 6)(1)     
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>es6 简化版</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function add(...args) {
  let allArgs = [...args];
  function fn(...newArgs) {
    allArgs = [...allArgs, ...newArgs];
    return fn;
  }
  fn.toString = function () {
    if (!allArgs.length) {
      return;
    }
    return allArgs.reduce((sum, cur) =&gt; sum + cur);
  };
  return fn;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function curry(fn) {
  // 保存预置参数
  const presetArgs = [].slice.call(arguments, 1)
  // 返回一个新函数
  function curried () {
    // 新函数调用时会继续传参
    const restArgs = [].slice.call(arguments)
    const allArgs = [...presetArgs, ...restArgs]
    return curry.call(null, fn, ...allArgs)
  }
  // 重写toString
  curried.toString = function() {
    return fn.apply(null, presetArgs)
  }
  return curried;
}

function dynamicAdd() {
  return [...arguments].reduce((prev, curr) =&gt; {
    return prev + curr
  }, 0)
}
var add = curry(dynamicAdd);
add(1)(2)(3)(4) // 10
add(1, 2)(3, 4)(5, 6) // 21


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),a=n(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    function add () {
      // 第一次执行时，定义一个数组专门用来存储所有的参数
      var _args = Array.prototype.slice.call(arguments);

      // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
      var _adder = function () {
        _args.push(...arguments);
        return _adder;
      };

      // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
      _adder.toString = function () {
        return _args.reduce(function (a, b) {
          return a + b;
        });
      }
      return _adder;
    }

    alert(add(1, 22)(3)(3))

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    function curring () {
      let allArgs = [...arguments];
      let inner = function () {
        allArgs.push(...arguments);
        return inner
      }
      inner.toString = function () {
        return allArgs.reduce((pre, cur) =&gt; {
          return pre + cur
        })
      }
      return inner
    }

    alert(curring(1)(2)(3))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function v(u,c){return i(),d("div",null,[r,s(`
Chrome最新版本在使用 console.log 测试无限柯里化时，已经达不到预期效果，估计与 Chrome console.log 内部实现有关，大家测试时可以用 alert 试试。 `),a])}const m=e(l,[["render",v],["__file","S027-函数柯理化★★.html.vue"]]);export{m as default};
