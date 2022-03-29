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
var anilObj = new Employee(1, 'anil', 100, 200, 300)
console.log(Employee.prototype)
console.log(anilObj.calculateSalary())
