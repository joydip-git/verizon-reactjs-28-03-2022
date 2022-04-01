import React, { useState, useEffect, createRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
//import ErrorBoundary from '../../../common/ErrorBoundary'
import FilterProduct from '../filter-product/FilterProduct'
import ProductTable from '../product-table/ProductTable'
//import ViewProduct from '../view-product/ViewProduct'
import { fetchProductsCallbackCreator } from '../../../redux/callbackCreators'

function ProductList() {

    const { products, loading, errorMessage } = useSelector(stateMap => stateMap.allProductsState)
    const dispatchFnRef = useDispatch()
    //const [selectedProductId, setSelectedProductId] = useState(0)
    const filterProductInputRef = createRef()

    // const selectProductHandler = (pid) => {
    //     setSelectedProductId(pid)
    // }
    // const focusInput = () => {
    //     if (this.filterProductInputRef.current !== null) {
    //         this.filterProductInputRef.current.focus()
    //     }
    // }

    useEffect(
        () => {
            //fetchData()
            const fetchProductsCallback = fetchProductsCallbackCreator()
            dispatchFnRef(fetchProductsCallback)
        }, []
    )
    console.log('rendered')
    let design = ''
    if (loading) {
        design = <span>Loading products...</span>
    } else if (errorMessage !== '') {
        design = <span>{errorMessage}</span>
    } else if (products.length === 0) {
        design = <span>no record found</span>
    } else {
        design = (
            <>
                <div>
                    <FilterProduct ref={filterProductInputRef} />
                    <br />
                    {/* <ProductTable products={products} selectHandler={selectProductHandler} /> */}
                    <ProductTable products={products} />
                </div>
            </>
        )
    }
    return design;
}

export default ProductList

/*
   sortByPriceHandler = () => {
       const copyArray = [...this.state.products]
       // const updated = copyArray.map(p => {
       //     return { ...p, price: p.price * 2 }
       // })
       const updated = copyArray.sort((p1, p2) => p1.price - p2.price)
       this.setState({
           products: updated
       })
   }*/
/*
const fetchData = () => {
    dispatchFnRef(fetchInitiateActionCreator())
    fetchProducts()
        .then(
            (resp) => {
                dispatchFnRef(fetchSuccessActionCreator(resp.data))
                focusInput()
            },
            (errResp) => {
                dispatchFnRef(fetchFailedActionCreator(errResp.message))
            }
        )
}
*/

/* {
                    selectedProductId > 0 && (
                        <ErrorBoundary
                            errorLogger={(errObj) => console.log(errObj)}>
                            <ViewProduct productId={selectedProductId} />
                        </ErrorBoundary>
                    )
                } */