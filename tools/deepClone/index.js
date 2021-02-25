function deepClone(value){
    //对RegExp和Data对象进行处理
    if(value instanceof RegExp) return new RegExp(value)
    if(value instanceof Date) return new Date(value)
    //对普通类型进行处理
    if(value==null||typeof(value)!=='object') return value
    let result
    value instanceof Array ? result=[] : result={}
    for(key in value){
        if(value.hasOwnProperty(key)){
            result[key]=deepClone(value[key])
        }
    }
    return result
}
let obj = {
    age:20,
    name:'xxx',
    address:{
        city:'beijing',
        a:{
            b:{
                c:{
                    a:1
                }
            }
        }
    },
    arr:['a','b,1'],
    d:new RegExp(/^\s+|\s$/g),
    Date:new Date(), 
    fn:function (){
        return 1
    }
}
let a = {
    b:a
}
let cloneObj=deepClone(obj)
let x=obj===cloneObj
console.log(x)
console.log(obj)
console.log(cloneObj)
console.log(typeof fn)
console.log(a)