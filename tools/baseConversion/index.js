function baseConversion(num,base){
    const remStack = []
    const digits= '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ' 
    let res = ''
    while(num>0){
        remStack.push(num%base)
        num = Math.floor(num / base) 
    }

    while(remStack.length){
        res += digits[remStack.pop()]
    }
    return res 
}
console.log(baseConversion(16,8))