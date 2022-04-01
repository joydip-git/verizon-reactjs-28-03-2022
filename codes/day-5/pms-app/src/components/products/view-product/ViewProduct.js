import React, { useEffect } from 'react'
//import PropTypes from "prop-types";
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchProductByIdCallbackCreator } from '../../../redux/callbackCreators'

// const ViewProduct = ({ productId }) => {
const ViewProduct = () => {
    const { productId } = useParams()//{ productId:2, productCode:5}
    // const [queryParams, setQueryParams] = useSearchParams()
    // queryParams.get('productId')
    const { loading, errorMessage: errorMsg, product: selectedProduct } = useSelector(stateMap => stateMap.productState)

    const dispatchFnRef = useDispatch()

    useEffect(
        () => {
            //getData()
            const fetchProductByIdCallback = fetchProductByIdCallbackCreator(productId)
            dispatchFnRef(fetchProductByIdCallback)
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

// ViewProduct.propTypes = {
//     productId: PropTypes.number.isRequired
// }
export default ViewProduct

/**
 * 
 * const getData = () => {
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
 */
