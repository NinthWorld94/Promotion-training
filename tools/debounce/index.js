function debounce(fn,delay=500){
    let timer=null
    return function(){
        if(timer){
            clearTimeout(timer)
        }
        timer=setTimeout(()=>{
            fn.apply(this,arguments)
            timer=null
        },delay)
    } 
}
const input =document.getElementById('input')
input.addEventListener('keyup',debounce(function(){
        // console.log(e.target.value) 
        console.log(this.value)
        console.log(this)
},3000))