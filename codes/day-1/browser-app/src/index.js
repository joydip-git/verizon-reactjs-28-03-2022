const utilityModuleExports = require('./utility')
function call() {
    alert('welcome to react js')
}

function callAdd() {
    utilityModuleExports.addFn(12, 13)
}

function callSub() {
    utilityModuleExports.subFn(12, 3)
}