// Promise.resolve().then(()=>{
//     console.log(1)
// }).catch(()=>{
//     console.log(2)
// }).then(()=>{
//     console.log(3)
// })

// 打印13

// Promise.resolve().then(()=>{
//     console.log(1)
//     throw new Error('erro1')
// }).catch(()=>{
//     console.log(2)
// }).then(()=>{
//     console.log(3)
// })

// 打印123

// Promise.resolve().then(()=>{
//     console.log(1)
//     throw new Error('error1')
// }).catch(()=>{
//     console.log(2)
// }).catch(()=>{
    // console.log(3)
// })

// 打印12

const img1 = document.createElement('img')
const p = new Promise((resolve,reject)=>{
    img1.src='./img.jpg'
    img1.onload=()=>{
        resolve(img1)
    }
    img1.onerror=()=>{
        reject('err')
    }
})
.then((img)=>{
    console.log(img.width)
    console.log(p instanceof Promise)
})
console.log(p instanceof Promise)
console.log(p)
