import React from 'react'
import withValue from './withValue'

const Hover = (props) => {
    console.log('Hover component rendered as part of WithValue')
    const { value, valueHandler, y } = props
    return (
        <div onMouseOver={valueHandler}>
            <span>Y:{y}</span>
            <br />
            <span>Hover Value:&nbsp;{value}</span>
            <br />
            Hover to increase
        </div>
    )
}
export default withValue(Hover)