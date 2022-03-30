import React, { useState } from 'react'

const Sample = () => {
    const [valueState, setValueState] = useState(0)
    const [showState, setShowState] = useState(true)
    const [objState, setObjState] = useState({ name: 'NA', salary: 0 })

    const increaseValueHandler = () => {
        setValueState(
            (oldNumber) => {
                return oldNumber + 1
            }
        )
    }
    console.log('Sample rendered')
    return (
        <>
            <button onClick={
                () => {
                    setShowState(
                        (prevState) => (!prevState)
                    )
                }
            }>{showState ? 'Hide' : 'Show'}</button>
            <br />
            Name:&nbsp;
            <input
                type='text'
                value={objState.name}
                onChange={
                    (e) => {
                        // setObjState({
                        //     ...objState,
                        //     name: e.target.value
                        // })
                        setObjState(
                            (oldStateObj) => {
                                return {
                                    ...oldStateObj,
                                    name: e.target.value
                                }
                            }
                        )
                    }
                }
            />
            <br />
            <span>{objState.name} and {objState.salary !== undefined ? objState.salary : 'vanished'}</span>
            <br />
            {
                showState && (
                    <div>
                        Value:&nbsp;{valueState}
                        <br />
                        <button onClick={increaseValueHandler}>Increase</button>
                    </div>
                )
            }
        </>
    )
}

export default Sample

/**
 * function useState(initialState){
 * let data = initialState //data={ name: 'NA', salary: 0 }
 * function updateData(newState={ name: e.target.value }){
 *  data= newState
 * }
 * return [data,updateData]
 * }
 * 
 */