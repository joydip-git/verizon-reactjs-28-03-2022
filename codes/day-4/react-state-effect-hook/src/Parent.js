import React, { useState } from 'react'
import Name from './Name'
import Val from './Val'

const Parent = () => {
    console.log('[Parent] rendered')
    const [valState, setValState] = useState(0)
    const [nameState, setNameState] = useState('')

    const updateNameState = (newName) => {
        setNameState(newName)
    }
    const updateValState = () => {
        setValState(
            (prevNum) => prevNum + 1
        )
    }
    return (
        <div>
            <Name nameData={nameState} nameHandler={updateNameState} />
            <br />
            <Val valData={valState} valHandler={updateValState} />
        </div>
    )
}

export default Parent