class Employee {
    constructor(id, name, basic, da, hra) {
        this.empId = id;
        this.empName = name;
        this.empBasic = basic;
        this.empDa = da;
        this.empHra = hra;
    }
    calculateSalary() {
        return this.empBasic + this.empDa + this.empHra
    }
}