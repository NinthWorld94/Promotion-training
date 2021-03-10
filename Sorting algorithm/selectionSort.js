Array.prototype.selectionSort = function(){
    for(let i =0 ;i<this.length-1;i++){
        let min =i
        for(let j = i ;j<this.length;j++){
            if(this[j]<this[min]) min = j
        }
        if(min!==i){
            let temp = this[i]
            this[i] = this[min]
            this[min] = temp
        }
    }
    return this
}
const arr = [5,4,3,2,1]
console.log(arr.selectionSort())
//时间复杂度On2A/*  */