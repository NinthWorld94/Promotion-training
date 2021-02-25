function ajax(type, url, successFn) {
    const xhr = new XMLHttpRequest()
    xhr.open(type, url, isAsyc)
    xhr.onreadystatechange = () => {
        if (xhr.readyState !== 4 || xhr.status !== 200) {
            console.log(xhr.statusText)
        }
        successFn(xhr.responseText)
    }
    xhr.send(null)
}
//promise 封装 ajax
function ajaxasyc(url){
    const p = new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest()
        xhr.open('GET',url)
        xhr.onreadystatechange = ()=>{
            if(xhr.readyState===4){
                switch(xhr.status){
                    case 200:
                        resolve(JSON.parse(xhr.responseText))
                        break
                    case 404:
                        reject(new Error('server not found 404'))
                        break
                    case 500:
                        reject(new Error('server is error'))
                        break
                    default:
                        break
                }
            }
        }
        xhr.send(null)
    })
    return p
}
ajaxasyc('/手写系列/ajax/data/test.json').then((testdata)=>{
    console.log(testdata)
    return ajaxasyc('/data/test.json')
})

// .then((testdata)=>{
//     console.log(testdata)
//     return ajaxasyc('/data/test.json')
// }).then((testdata)=>{
//     console.log(testdata)
//     return ajaxasyc('/data/test.json')
// })