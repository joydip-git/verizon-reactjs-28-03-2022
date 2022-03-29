//const empModuleExports = require('./employee')

import { Employee } from './employee'
export class Developer extends Employee {
    constructor(id, name, basic, da, hra, incentive) {
        super(id, name, basic, da, hra)
        this.empIncentive = incentive
    }
    calculateSalary() {
        return super.calculateSalary() + this.empIncentive
    }
}
// module.exports = {
//     Developer: Developer
// }