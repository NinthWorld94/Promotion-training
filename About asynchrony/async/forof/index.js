/*
**
    for of 的遍历是一种异步的遍历相比于for in 和 foreach
    如何理解呢？如下
*/
//定义一个乘法返回一个Promise
function muti(num){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(num*num)
        },1000)
    })
}

const nums = [1,2,3]


// nums.forEach(async (ele)=>{
//     const res =await muti(ele)
//     console.log(res)
// })
//用foreach遍历时上述代码1s后迅速将三个promise对象返回并调用awit把then放入event loop中
//所以1s打印1 4 9

!(async function(){
    for(let i of nums){
        const res=await muti(i)
        console.log(res)
    }
})() 
//而上面这种写法呢可以实现搁一秒打印一个结果