function ceateCache(){
    const data ={}
    return{
        set:function (key,value){
            data.key=value
        },
        get:function(key){
            return data[key]
        }
    }
}