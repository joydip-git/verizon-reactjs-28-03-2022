const utilityModuleExports = require('./utility')
console.log(utilityModuleExports)
console.log('welcome to modules')
var addRes = utilityModuleExports.addFn(12, 13)
var subRes = utilityModuleExports.subFn(12, 3)

console.log(addRes)
console.log(subRes)
/*
console.log('index file module')
console.log(module)
*/