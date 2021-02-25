function flatDeep(arr){
    return arr.reduce((res,cur)=>{
       return Array.isArray(cur)?[...res,...flatDeep(cur)]: [...res,cur]
    },[])
}

// let flatDeep = (arr) => {
//     return arr.reduce((res, cur) => {
//         if(Array.isArray(cur)){
//             return [...res, ...flatDeep(cur)]
//         }else{
//             return [...res, cur]
//         }
//     },[])
// }

const array=[[[1,2,3],2,[1,2,5],6],7]
const a2 = flatDeep(array)
console.log(a2)