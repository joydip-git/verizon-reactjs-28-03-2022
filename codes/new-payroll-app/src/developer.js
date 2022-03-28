class Developer extends Employee {
    constructor(id, name, basic, da, hra, incentive) {
        super(id, name, basic, da, hra)
        this.empIncentive = incentive
    }
    calculateSalary() {
        return super.calculateSalary() + this.empIncentive
    }
}