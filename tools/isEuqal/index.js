const obj1= {a:1,b:2,c:{d:100,f:200}}
const obj2= {a:1,b:2,c:{d:100,f:200,c:{}}}
function isEqual(obj1,obj2){
    const isObject=(obj)=>{
        return typeof obj ==='object'&&obj!=='null'
    }
    if(!isObject(obj1)||!isObject(obj2)){
        return obj1===obj2
    }
    if(obj1===obj2) return true
    else{
        const obj1keys=Object.keys(obj1)
        const obj2keys=Object.keys(obj2)
        if(obj1keys.length!==obj2keys.length) return false
        for(let key in obj1){
            const res = isEqual(obj1[key],obj2[key])
            if(!res){
                return false
            }
        }
    }
    return true
}
console.log(isEqual(obj1,obj2))