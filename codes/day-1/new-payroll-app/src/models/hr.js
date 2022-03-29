//const empModuleExports = require('./employee')

import { Employee } from './employee'
export class Hr extends Employee {
    constructor(id, name, basic, da, hra, gratuity) {
        super(id, name, basic, da, hra)
        this.empGratuity = gratuity
    }
    calculateSalary() {
        const partialSalary = super.calculateSalary()
        return partialSalary + this.empGratuity
    }
}
// module.exports = {
//     Hr: Hr
// }