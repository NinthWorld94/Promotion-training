Function.prototype.myBind = function (context,...args){
    return (...newArgs)=>{
        return this.call(context,...args,...newArgs)
    }
}








// const fn2 = fn1.bind1(1,2,3)
// fn1(1,2,3)
// fn2()
// fn1.bind1({x:200},1,2,3)
// let fn1 = function (a,b,c) {
//     console.log('this',this)
//     console.log(a,b,c)
// }


// Function.prototype.bind1 = function (obj,...prams) {
//     const self = this 
//     return function () {
//         self.apply(obj,prams)
//     }
// }
