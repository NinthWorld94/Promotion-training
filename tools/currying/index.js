function currying(fn, ...args) {
    return fn.length > args.length ?
        function (...arguments) { return currying(fn, ...args, ...arguments) } :
        fn.apply(null,args)
}


// let currying = (fn, ...args) =>
//             fn.length > args.length ?
//             (...arguments) => currying(fn, ...args, ...arguments) :
//             fn(...args)
let addSum = (a, b, c) => a + b + c
let add = currying(addSum)
console.log(add(1)(2)(3))
console.log(add(1, 2)(3))
console.log(add(1, 2))


