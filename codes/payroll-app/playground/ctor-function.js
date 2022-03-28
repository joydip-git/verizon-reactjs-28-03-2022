//2. constructor function
function employee(id, name, basic, da, hra) {
    this.empId = id;
    this.empName = name;
    this.empBasic = basic;
    this.empDa = da;
    this.empHra = hra;
}
employee.prototype.calculateSalary = function () {
    return this.empBasic + this.empDa + this.empHra
}