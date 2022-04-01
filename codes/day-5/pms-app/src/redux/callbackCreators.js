import * as actionCreators from './actionCreators'
import * as productService from '../services/productservice'

export const fetchProductByIdCallbackCreator = (productId) => {
    return (dispatchFnFromStore) => {
        dispatchFnFromStore(actionCreators.fetchInitiateActionCreator())
        productService.fetchProductById(productId)
            .then(
                (resp) => {
                    const p = resp.data
                    dispatchFnFromStore(actionCreators.fetchSuccessActionCreator(p))
                },
                (err) => {
                    dispatchFnFromStore(actionCreators.fetchFailedActionCreator(err.message))
                }
            )
    }
}

export const fetchProductsCallbackCreator = () => {
    return (disptachFnFromStore) => {
        disptachFnFromStore(actionCreators.fetchInitiateActionCreator())
        productService.fetchProducts()
            .then(
                (resp) => {
                    disptachFnFromStore(actionCreators.fetchSuccessActionCreator(resp.data))
                },
                (errResp) => {
                    disptachFnFromStore(actionCreators.fetchFailedActionCreator(errResp.message))
                }
            )
    }
}