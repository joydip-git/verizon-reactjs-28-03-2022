import React, { forwardRef } from 'react'

const FilterProduct = (props, refObj) => {
    return (
        <div>
            Filter:&nbsp;<input type='text' ref={refObj} />
        </div>
    )
}

export default forwardRef(FilterProduct)