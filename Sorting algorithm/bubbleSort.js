Array.prototype.bubbleSort= function(){
    for(let i=0;i<this.length-1;i++){
        let maxTemp=0
        for(let j=0;j<this.length-1-i;j++){
            if(this[j]>this[j+1]){
                maxTemp=this[j+1]
                this[j+1]=this[j]
                this[j]=maxTemp
            }
        }
    }
    console.log(this)
}
const arr = [5,4,3,2,1]
arr.bubbleSort()
