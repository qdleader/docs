# S015-手写map方法

```js

//循环实现数组 map 方法
    const selfMap = function (fn, context) {
        let arr = Array.prototype.slice.call(this) //map方法不会改变原数组
        let mappedArr = Array(arr.length) 
        for (let i = 0; i < arr.length; i++) {
            // 稀疏数组，跳出当前循环
            if (!arr.hasOwnProperty(i)) {
                continue
            }
            mappedArr[i] = fn.call(context, arr[i], i, this) //方法的三个参数，currentValue, 当前下标， 当前数组
        }
        return mappedArr
    }

    Array.prototype.selfMap = selfMap
    var arr1 = [1, 2, 3]
    arr1.length = 5

    let arrMap = arr1.selfMap(function (x) {
        return x * 2
    })
    // [2, 4, 6, empty × 2]

```
