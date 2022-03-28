const anilHr = new Hr(1, 'anil', 1000, 2000, 3000, 4000)
const sunilDeveloper = new Developer(1, 'sunil', 1500, 2500, 3500, 4500)

const employees = [anilHr, sunilDeveloper]

for (let i = 0; i < employees.length; i++) {
    const single = employees[i]
    console.log(`${single.empName} has salary of ${single.calculateSalary()}`)
}