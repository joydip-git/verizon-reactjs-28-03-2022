import React, { useEffect } from 'react'
import { fetchProductById } from '../../../services/productservice'
import PropTypes from "prop-types";
import { useSelector, useDispatch } from 'react-redux'
import { fetchInitiateActionCreator, fetchSuccessActionCreator, fetchFailedActionCreator } from '../../../redux/actionCreators'

const ViewProduct = ({ productId }) => {
    const { loading, errorMessage: errorMsg, product: selectedProduct } = useSelector(stateMap => stateMap.productState)

    const dispatchFnRef = useDispatch()

    const getData = () => {
        dispatchFnRef(fetchInitiateActionCreator())
        fetchProductById(productId)
            .then(
                (resp) => {
                    const p = resp.data
                    dispatchFnRef(fetchSuccessActionCreator(p))
                },
                (err) => {
                    dispatchFnRef(fetchFailedActionCreator(err.message))
                }
            )
    }
    useEffect(
        () => {
            getData()
        }, [productId]
    )

    console.log('[VP] rendered')

    let design = ''
    if (loading) {
        design = <span>Loading...</span>
    } else if (errorMsg !== '') {
        design = <span>{errorMsg}</span>
    } else if (selectedProduct === null) {
        design = <span>No record found</span>
    } else {
        design = <span>{selectedProduct.productName}</span>
    }
    return design
}

ViewProduct.propTypes = {
    productId: PropTypes.number.isRequired
}
export default ViewProduct
