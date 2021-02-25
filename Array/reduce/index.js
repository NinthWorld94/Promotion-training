Array.prototype.myReduce=function (fn,init) {
    typeof init === 'undefined'? result=this[0]:result = init
    let i=0
    self = this
    while (i<this.length){
        result = fn(result,self[i],i,self)
        i++
    }
    return result
}


const arr = [1,2,3]
console.log(arr.myReduce(function(prev,cur,i,arr){  console.log(cur,i,arr); return prev+cur},0))
