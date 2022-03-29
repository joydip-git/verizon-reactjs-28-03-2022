import React from 'react'
import withValue from './withValue'

const Click = (props) => {
    console.log('click component rendered as part of WithValue')
    const { value, valueHandler, x } = props
    return (
        <>
            <span>X:{x}</span>
            <br />
            <span>Click Value:&nbsp;{value}</span>
            <br />
            <button onClick={valueHandler}>Increase Value</button>
        </>
    )
}
export default withValue(Click)