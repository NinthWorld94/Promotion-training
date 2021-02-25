Function.prototype.myApply= function (){
    let [context,args]=[...arguments]
    context==null ? context = window :context = Object(context) 
    const fn = Symbol('fn')
    context[fn] =this
    const res = context[fn](...args)
    delete context[fn]
    return res
}
var tags =1;
const wd = {
    name:"window",
    tags:2
}
const obj = {
    tags:3,
    fn:function(x,y){
        return x*this.tags+y/this.tags
    }
}
console.log(obj.fn.myApply(null,[2,2])) 
console.log(obj.fn(2,2)) 
console.log(obj.fn.myApply(wd,[2,2])) 

console.log(obj.fn)
console.log(obj.fn.apply(null,[2,2])) 
console.log(obj.fn.apply(wd,[2,2]))