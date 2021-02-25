const asy = function(x, time) {
    return new Promise((resolve, reject) =>{
        console.log(4)
        setTimeout(()=>{
            resolve(x)
        }, time)
    })
}

const add = async function() {
    console.log(3)
    const a = await asy(5, 10000)
    console.log(a)
    const b = await asy(6, 5000)
    console.log(b)
    const c =  await asy(7, 200)
    console.log(c)
    const d = a + b +c  
    console.log(d)
}

console.log(1)
add();
console.log(2)

/*
    **
    script   start
    async1   start
    async2   
    promise1 
    script end
    async1 end 
    promise2
    setTimeout
    **
*/