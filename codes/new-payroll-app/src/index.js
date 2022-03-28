// const hrModuleExports = require('./hr')
// const devModuleExports = require('./developer')

import { Hr } from "./hr";
import { Developer } from "./developer";

function printSalarySlips() {
    const anilHr = new Hr(1, 'anil', 1000, 2000, 3000, 4000)
    const sunilDeveloper = new Developer(1, 'sunil', 1500, 2500, 3500, 4500)

    const employees = [anilHr, sunilDeveloper]

    for (let i = 0; i < employees.length; i++) {
        const single = employees[i]
        alert(`${single.empName} has salary of ${single.calculateSalary()}`)
    }
}
document.getElementById('btnLoad').addEventListener('click', printSalarySlips)

console.log('welcome to modular JS code...')