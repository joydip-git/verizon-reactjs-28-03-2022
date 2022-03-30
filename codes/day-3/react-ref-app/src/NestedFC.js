import React, { createRef, forwardRef } from 'react'

const NestedFC = (props, refObjRef) => {
    //const nestedFcElementRef = createRef()
    return (
        <div>
            Nested FC:&nbsp;
            {/* <input type='text' ref={nestedFcElementRef} /> */}
            <input type='text' ref={refObjRef} />
            <br />
            {/* <button onClick={
                () => {
                    if (nestedFcElementRef.current !== null) {
                        nestedFcElementRef.current.focus()
                    }
                }
            }>Focus</button> */}
        </div>
    )
}
export default forwardRef(NestedFC)