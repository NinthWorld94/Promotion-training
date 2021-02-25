function my_instanof(o1,o2) {
    if(typeof o1 !=='object'||o1===null) return false
    let res = false
    while(o1.__proto__){
        return o1.__proto__===o2.prototype ? res=true : o1.__proto__=o1.__proto__.__proto__
    }
    return res
}
// function my_instance_of(leftVaule, rightVaule) {
//     if(typeof leftVaule !== 'object' || leftVaule === null) return false;
//     let rightProto = rightVaule.prototype,
//         leftProto = leftVaule.__proto__;
//     while (true) {
//         if (leftProto === null) {
//             return false;
//         }
//         if (leftProto === rightProto) {
//             return true;
//         }
//         leftProto = leftProto.__proto__
//     }
// }
// my_instanof([],Array)
let fn = function name(params) {
    
}
var fn1 = new fn()
let d = new Date()
let s = 'ssss'
console.log(my_instanof(fn1,fn))
console.log(my_instanof(d,Date))
console.log(my_instanof(s,String))
// console.log(my_instance_of({},Object))
