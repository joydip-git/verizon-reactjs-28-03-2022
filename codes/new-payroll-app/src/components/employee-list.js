import { employees } from "../repository/employeerepository";

function createHeader(tblObj) {
    const trHeader = document.createElement('tr');
    trHeader.setAttribute('style', 'background-color:burlywood')

    const tdNameColmn = document.createElement('td')
    tdNameColmn.innerText = 'NAME'

    const tdIdColmn = document.createElement('td')
    tdIdColmn.innerText = 'ID'

    const tdSalColmn = document.createElement('td')
    tdSalColmn.innerText = 'SALARY '

    trHeader.appendChild(tdNameColmn)
    trHeader.appendChild(tdIdColmn)
    trHeader.appendChild(tdSalColmn)

    tblObj.appendChild(trHeader)
}

function createBody(tblObj) {
    for (let i = 0; i < employees.length; i++) {
        const single = employees[i]

        const trObj = document.createElement('tr');

        const tdName = document.createElement('td')
        tdName.innerText = single.empName

        const tdId = document.createElement('td')
        tdId.innerText = single.empId.toString()

        const tdSalary = document.createElement('td')
        tdSalary.innerText = single.calculateSalary().toString()

        trObj.appendChild(tdName)
        trObj.appendChild(tdId)
        trObj.appendChild(tdSalary)

        tblObj.appendChild(trObj)
    }
}
export function employeelist() {
    const tblObj = document.createElement('table');
    createHeader(tblObj)
    createBody(tblObj)
    return tblObj;
}