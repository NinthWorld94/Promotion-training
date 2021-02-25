function  sleep(fn,time) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(fn)
        },time)
    })
}

let saySomething = (name) => console.log(`hello,${name}`)
async function autoPlay() {
    let demo = await sleep(saySomething('zyp'),1000)
    let demo2 = await sleep(saySomething('zyc'),1000)
    let demo3 = await sleep(saySomething('wch'),1000)
}

autoPlay()
