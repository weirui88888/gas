let arrayIsSorted = require('./Array/is-sorted')

let sliceArray = require('./Array/array-first')

let flatArray = require('./Array/flat')

let arr = ['a', ['b', ['c', 'f', 'g', ['m', 'n']]], 'd', ['e']]

let twoArrayHandle = require('./Array/array-diff')

// 判断一个数组是不是经过排序的
console.log(arrayIsSorted([1, 2, 3]))

// 支持传入自定义比较器
console.log(arrayIsSorted([3, 2, 1], (a, b) => b - a))

// 获取数组的前N个数据
console.log(sliceArray([1, 2, 3, 4, 5], 10))

// 拍平一个数组，es6的flat
console.log(flatArray(arr))

// 数组 并集duplicate和交集intersection（差级的意义有点混乱）
console.log(twoArrayHandle([1, 3, 234], [4, 2343, 34534, 134235], 'duplicate'))
