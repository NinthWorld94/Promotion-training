Promise.myrace = function (arr) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < arr.length; i++) {
            // 同时也能处理arr数组中非Promise对象
            if (!(arr[i] instanceof Promise)) {
                Promise.resolve(arr[i]).then(resolve, reject)
            } else {
                arr[i].then(resolve, reject)
            }

        }
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

Promise.myrace([p1, p2, p3]).then(data => {
    console.log(data); 
}, err => {
    console.log('err')
})