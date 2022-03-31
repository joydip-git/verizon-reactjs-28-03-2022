import React, { useState } from 'react'

const Sample = () => {
    const [numbersState, setNumbersState] = useState({ first: 0, second: 0 })

    const updateNumbersState = (propName, propValue) => {
        setNumbersState(
            (prevState) => {
                return {
                    ...prevState,
                    [propName]: propValue
                }
            }
        )
    }
    return (
        <div>
            First: &nbsp;
            <input
                type='text'
                value={numbersState.first}
                onChange={
                    (e) => updateNumbersState('first', Number(e.target.value))

                }
            />
            <br />
            Second: &nbsp;
            <input
                type='text'
                value={numbersState.second}
                onChange={
                    (e) => updateNumbersState('second', Number(e.target.value))

                }
            />
            <br />
            <button onClick={() => alert((numbersState.first + numbersState.second).toString())}>Add</button>
        </div>
    )
}

export default Sample