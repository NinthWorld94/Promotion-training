function _new(){
    let obj = {}
    let [constructor,...args] = [...arguments]
    obj.__proto__=constructor.prototype
    const result = constructor.call(obj,...args)
    if (result && typeof result === 'function' || typeof result === 'object') {
        return result;
    }
    return obj
}
let c=function (a,b,c){
    this.a=a
    this.b=b
    this.c=c
}
c.prototype.fn1=function (a) {
    console.log(a)
}
const obj = _new(c,1,2,3)
obj.fn1(1)