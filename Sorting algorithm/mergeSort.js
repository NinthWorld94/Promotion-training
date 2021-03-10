Array.prototype.mergeSort = function(){
    const rec = (arr)=>{
        if(arr.length===1) return arr
        let mid = Math.floor(arr.length/2)
        let left = arr.slice(0,mid)
        let right = arr.slice(mid,arr.length)
        const orderLeft = rec(left)
        const orderRight = rec(right)
        let res= []
        while(orderLeft.length || orderRight.length){
            if(orderLeft.length&&orderRight.length){
                res.push(orderRight[0]<orderLeft[0]
                    ?orderRight.shift()
                    :orderLeft.shift())
            }else if(orderLeft.length){
                res.push(orderLeft.shift())
            }else if(orderRight.length){
                res.push(orderRight.shift())
            }
        }
        return res
    }
    const arr = rec(this);
    arr.forEach((ele,index)=> {
        this[index]=ele
    });
}
const arr = [5,4,3,2,1]
arr.mergeSort()
console.log(arr)