import { employees } from "../repository/employeerepository";
import React from 'react'

function createHeader() {
    const tdNameColmn = React.createElement('td', null, 'NAME')
    const tdIdColmn = React.createElement('td', null, 'ID')
    const tdSalColmn = React.createElement('td', null, 'SALARY')

    const trHeader = React.createElement(
        'tr',
        { style: { backgroundColor: 'burlywood' } },
        [tdNameColmn, tdIdColmn, tdSalColmn]
    );
    return trHeader
}

function createBody() {
    const rows = []
    for (let i = 0; i < employees.length; i++) {
        const single = employees[i]
        const tdName = React.createElement(
            'td',
            {
                onMouseOver: function () {
                    alert(single.empBasic)
                }
            },
            single.empName)

        const tdId = React.createElement('td', null, single.empId.toString())
        const tdSalary = React.createElement('td'.null, single.calculateSalary().toString())

        const trObj = React.createElement('tr', null, [tdName, tdId, tdSalary]);
        rows.push(trObj)
    }
    const tblBody = React.createElement('tbody', null, rows)
    return tblBody
}
export function EmployeeList() {
    // const tableHeader = createHeader()
    // const tableBody = createBody()
    // const tblObj = React.createElement('table', null, [tableHeader, tableBody]);
    const headerStyle = { backgroundColor: 'burlywood' }
    const tblObj = (
        <table>
            <thead>
                <tr style={headerStyle}>
                    <th>NAME</th>
                    <th>ID</th>
                    <th>SALARY</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>

                    </td>
                    <td>

                    </td>
                    <td>

                    </td>
                </tr>
            </tbody>
        </table>
    )
    return tblObj;
}