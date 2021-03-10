function debounce(fn,delay){
    let timer=null
    return function(...args){
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=>{
            fn.apply(this,args)
        },delay)
    }
}
function throtle(){
    let timer =null
    return function(...agrs){
        if(timer) return
        timer=setTimeout(()=>{
            fn.apply(this,args)
            timer=null
        },delay)
    }
}

function _new(constructor,...args){
    const obj = {}
    obj.__proto__=constructor.prototype
    const res=constructor.apply(obj,agrs)
    if(typeof res==='function'||typeof res==='object'&&res!==null) return res
    return obj
}

function deepClone(obj){
    let res
    if (obj instanceof Date) return new Date
    if (obj instanceof RegExp) return new RegExp(obj)  
    if(typeof obj !== 'object'||typeof obj ==null) return obj
    obj instanceof Array?res=[]:res={}
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            res[key]=deepClone(obj[key])
        }
    }
    return  res
}


// const str = '   sdsadsa222_dsad1   '
// console.log(str)
// console.log(str.replace(/^\s+/,'').replace(/\s+$/,''))

// const key =/^/


// function myFlat(arr){
//     return arr.reduce((prev,cur)=>{
//         return cur instanceof Array?[...prev,...myFlat(cur)]:[...prev,cur]
//     },[])
// }
// arr=[1,2,3,[2,3],[44,[2,[1]]]]
// console.log(myFlat(arr))
// const arr = [1,1,2,3,3]
// function noRepeat(arr){
//     return [...new Set(arr)]
// }
// let obj={}
// let arr1=arr.filter((cur)=>{
//     return obj.hasOwnProperty(typeof cur + cur )?false:obj[typeof cur + cur]=true
// })
// console.log(noRepeat(arr1))


//冒泡排序
Array.prototype.bublingSort = function(){
    for(let i=0;i<this.length;i++){
        for(let j = 0;j<this.length-i;j++){
            if(this[j]>this[j+1]){
                const tmp =this[j]
                this[j]=this[j+1]
                this[j+1] =tmp
            }
        }
    }
}
// const arr2 = [5,4,3,2,1]
// arr2.bublingSort()
// console.log(arr2)

//选择排序
Array.prototype.SelectionSort = function (){
    for(let i=0;i<this.length;i++){
        let min = i
        for(let j=i+1;j<this.length;j++){
            if(this[min]>this[j]) {
                min = j
            }
        }
        tmp=this[i]
        this[i]=this[min]
        this[min]= tmp
    }
}
// const arr2 = [5,4,3,2,1]
// arr2.SelectionSort()
// console.log(arr2)
//插入排序
Array.prototype.insertSort = function (){
    for(let i =1 ;i<this.length;i++){
        let j=i
        let tmp =this[i]
        while(j){
            if(this[j-1]>tmp){
                this[j]=this[j-1]
            }else{
                break
            }
            j--
        }
        this[j]=tmp
    }
}
// const arr2 = [5,4,3,2,1]
// arr2.insertSort()
// console.log(arr2)
//归并排序
Array.prototype.mergeSort = function(){
    const rec =(arr)=>{
        if(arr.length===1) return arr
        const mid = Math.floor(arr.length/2)
        let left = arr.slice(0,mid)
        let right = arr.slice(mid,arr.length)
        const orderLeft = rec(left)
        const orderRight = rec(right)
        const res = []
        while(orderLeft.length||orderRight.length){
            if(orderLeft.length&&orderRight.length){
                 orderLeft[0]>orderRight[0]
                ?res.push(orderRight.shift())
                :res.push(orderLeft.shift())
            }
            else if(orderLeft.length){
                res.push(orderLeft.shift())
            }
            else if(orderRight.length){
                res.push(orderRight.shift())
            }
        }
        return res 
    }
    const arr = rec(this)
    arr.forEach((e,i) => {
        this[i]=e
    });
}
// const arr2 = [5,4,3,2,1]
// arr2.mergeSort()
// console.log(arr2)
//快速排序
Array.prototype.quickSort = function(){
    const rec =  (arr)=>{
        if(arr.length<=1) return arr;
        let mid = arr[0]
        const left =[]
        const right = []
        for(let i=1;i<arr.length;i++){
            if(arr[i]<mid){
                left.push(arr[i])
            }else{
                right.push(arr[i])
            }
        }
        return [...rec(left),mid,...rec(right)]
    }
    const res = rec(this)
    res.forEach((e,i)=>{
        this[i]=e
    })
}
// const arr2 = [5,4,3,2,1]
// arr2.quickSort()
// console.log(arr2)
//二分查找
