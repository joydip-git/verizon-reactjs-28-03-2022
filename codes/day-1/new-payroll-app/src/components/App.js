import { EmployeeList } from "./EmployeeList"
import { Welcome } from "./welcome"
import React from 'react'

export function App() {
    // const welElement = Welcome()
    // const tblElement = EmployeeList()

    // const mainDivElement = React.createElement('div', null, [welElement, tblElement])
    const mainDivElement = (
        <div>
            <Welcome />
            <br />
            <EmployeeList />
        </div>
    )
    return mainDivElement
}
/**
 * {
 *    type:'div',
 *    props:{
 *     children:[
 *     
 *      {
 *       type:'h2',
 *          props:{
 *          id:'mainHeader',
 *       style:{},
 *          children:'welcome to employee payroll'
 *      }
 *       }

 *     ]
 *    }
 * }
 */