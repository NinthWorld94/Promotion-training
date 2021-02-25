//手写一个建议的juqery
class jQuery {
    constructor(seletcor){
        const result = document.querySelectorAll(seletcor)
        const length=result.length
        result.forEach((element,index)=> {
            this[index]=element
        });
        this.length=length
    }
    get(index){
        return this[index]
    }
    each(fn){
        for(let i=0;i<this.length;i++){
            const ele = this[i]
            fn(ele)
        }
    }
    on(type,fn){
        return this.each(ele=>{
            ele.addEventListener(type,fn,false)
        })
    }
}

//插件拓展
jQuery.prototype.dialog = function (info){
    alert(info)
}

//继承拓展

class myJQuery extends jQuery{
    constructor(seletcor){
        super(seletcor)
    }
    dialog(info){
        alert(info)
    }
}



