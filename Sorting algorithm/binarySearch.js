Array.prototype.binarySearch = function(item){
    let low = 0
    let high = this.length-1
    while(low<=high){
        const mid = Math.floor((low+high)/2)
        if(this[mid]===item){
            return mid
        }
        else if(this[mid]<item){
            low=mid+1
        }else{
            high=mid-1
        }
    }
    return -1
}
const arr = [5,4,3,2,1]
console.log(arr.binarySearch(3))