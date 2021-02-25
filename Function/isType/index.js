//isType函数，也属于「偏函数」的范畴，
//偏函数实际上是返回了一个包含「预处理参数」的新函数。

const isType =  
(type)=> (obj)=> Object.prototype.toString.call(obj)===`[object ${type}]`
let isArray = isType('Array')
let isFunciton = isType('Function')
const arr = []
const fn=function(){}
console.log(isArray(arr))
console.log(isFunciton(fn))
console.log(Object.prototype.toString.call(arr))
console.log(Object.prototype.toString.call(fn))
