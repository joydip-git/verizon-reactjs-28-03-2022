import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchProductByIdCallbackCreator } from '../../../redux/callbackCreators'

const UpdateProduct = () => {
    const { productId } = useParams()
    const { loading, errorMessage: errorMsg, product: selectedProduct } = useSelector(stateMap => stateMap.productState)
    const dispatchFnRef = useDispatch()
    useEffect(
        () => {
            dispatchFnRef(fetchProductByIdCallbackCreator(productId))
        }, [productId]
    )
    let design = ''
    if (loading) {
        design = <span>Loading...</span>
    } else if (errorMsg !== '') {
        design = <span>{errorMsg}</span>
    } else if (selectedProduct === null) {
        design = <span>No record found</span>
    } else {
        design = (
            <div>
                Name:&nbsp;<input type='text' value={selectedProduct.productName} />
            </div>
        )
    }
    return design
}

export default UpdateProduct