import React from 'react'
export function Welcome() {
    const title = 'welcome to employee payroll'
    // const header = React.createElement(
    //     'h2',
    //     {
    //         id: 'mainHeader',
    //         style: { backgroundColor: 'lime', fontFamily: 'Segoe UI' }
    //     },
    //     title
    // );
    const headerStyle = { backgroundColor: 'lime', fontFamily: 'Segoe UI' }
    const header = (
        <h2
            id='mainHeader'
            style={headerStyle}
        >
            {title}
        </h2>
    )
    return header
}
/**
 * {
 *    type:'h2',
 *    props:{
 *      id:'mainHeader',
 *      style:{},
 *      children:'welcome to employee payroll'
 *    }
 * }
 */