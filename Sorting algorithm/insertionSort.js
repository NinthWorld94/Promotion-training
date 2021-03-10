Array.prototype.insertionSort = function (){
    for (let j =1; j<this.length;j++){
        const temp = this[j]
        let i = j
        while(i){
            if(this[i-1]>temp){
                this[i]=this[i-1]
            }
            else{
                break
            }
            i--;
        }
        this[i]=temp
    }
    console.log(this)
}
const arr = [5,4,3,2,1]
arr.insertionSort()
