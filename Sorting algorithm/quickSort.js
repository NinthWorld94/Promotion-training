Array.prototype.quickSort = function (){
    const sort = (arr)=>{
        if(arr.length<=1) return arr;
        let right=[]
        let left = []
        let mid = arr[0]
        for(let i=1;i<arr.length;i++){
            if(arr[i]>mid){
                right.push(arr[i])
            }else{
                left.push(arr[i])
            }
        }
         return  [...sort(left),mid,...sort(right)]
    }
    const res=sort(this)
    res.forEach((cur,index)=> {
        this[index]=cur
    });
    console.log(this)
}
const arr = [5,4,3,2,1]
arr.quickSort()
