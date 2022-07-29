function promiseReduce(asyncFunctions, reduce, initialValue) {
    new Promise (function (resolve, reject) {
        resolve(reduce)
    })
}

var fn1 = () => {
    console.log('fn1')
    return Promise.resolve(1)
}
var fn2 = () => new Promise(resolve => {
    console.log('fn2')
    setTimeout(() => resolve(2), 1000)
})