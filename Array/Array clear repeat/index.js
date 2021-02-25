/* set方法 */

// function clearRepeat(arr){
//     const set = new Set(arr)
//     return [...set]
// }
// const arr = [1,1,2,3,3,,,'y',]
// console.log(clearRepeat(arr))

/* reduce方法 */
// function clearRepeat(arr){
//     arr.reduce((prev,cur,index)=>{
//         if(prev.indexOf(cur)===-1) prev[index]=cur
//     },[])
// }
// let unique_3 = arr => arr.reduce((pre, cur) => pre.includes(cur) ? pre : [...pre, cur], []);

//fillter方法 高级效果最好
function clearRepeat(arr){
    const obj = {}
    return arr.filter((ele)=>{
        return obj.hasOwnProperty(typeof ele + ele)?false:obj[typeof ele + ele]=true
    })
}
var array = [1, 1, '1', '1', null, null, 
                undefined, undefined, 
                new String('1'), new String('1'), 
                /a/, /a/,
                NaN, NaN
            ];
console.log(clearRepeat(array))

