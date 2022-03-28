function add(a, b) {
    return (a + b)
}

function subtract(a, b) {
    return (a - b)
}

module.exports = {
    addFn: add,
    subFn: subtract
}
console.log('utility file module')
console.log(module)
