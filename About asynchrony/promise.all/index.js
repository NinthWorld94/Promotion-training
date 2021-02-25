Promise.myall = function (arr) {
    let res = []
    let completeNum = 0 
    return new Promise((resolve, reject) => {
        arr.forEach((cur,index) => {
            Promise.resolve(cur).then((value)=>{
                res[index]=value
                completeNum++
                if(completeNum ===arr.length) resolve(res)
            }).catch((err)=>{
                reject(err)
            })
        });
    })
}
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(11)
    }, 2000);
})
let p2 = new Promise((resolve, reject) => {
    reject('asfs')

})
let p3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(33);
    }, 4000);
})
Promise.myall([p3, p1, 3, 4]).then(data => {
    console.log(data); 
    console.log(err)
});


