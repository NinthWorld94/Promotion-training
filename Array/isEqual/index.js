const isEqual = (obj1,obj2)=>{
        let res = true
        if(Object.keys(obj1).sort().join('')!==Object.keys(obj2).sort().join('')) {return res = false}
        for(let key in obj1){
            typeof obj1[key] ==='object'&&obj1[key]!==null  &&typeof obj2[key] ==='object'&&obj2[key]
            ? res=isEqual(obj1[key],obj2[key])
            :obj1[key]===obj2[key]? res: res=false
        }
        return res
    }
    const obj1 = {a:10,b:{x:100,y:200,z:{K:100}},}
    const obj2 = {a:10,b:{x:100,y:200,z:100}}
    console.log(isEqual(obj1,obj2))