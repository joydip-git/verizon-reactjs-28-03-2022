import React, { Component, createRef, Fragment } from 'react'
import ErrorBoundary from '../../../common/ErrorBoundary'
import { fetchProducts } from '../../../services/productservice'
import FilterProduct from '../filter-product/FilterProduct'
import ProductTable from '../product-table/ProductTable'
import ViewProduct from '../view-product/ViewProduct'

class ProductList extends Component {
    constructor() {
        super()
        this.state = {
            products: [],
            loading: true,
            errorMessage: '',
            selectedProductId: 0
        }
        this.filterProductInputRef = createRef()
        console.log('created')
    }
    selectProductHandler = (pid) => {
        this.setState({ selectedProductId: pid })
    }
    sortByPriceHandler = () => {
        const copyArray = [...this.state.products]
        // const updated = copyArray.map(p => {
        //     return { ...p, price: p.price * 2 }
        // })
        const updated = copyArray.sort((p1, p2) => p1.price - p2.price)
        this.setState({
            products: updated
        })
    }
    render() {
        console.log('rendered')
        const { products, loading, errorMessage } = this.state
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
                    <div className='container'>
                        <FilterProduct ref={this.filterProductInputRef} />
                        <br />
                        <ProductTable products={products} selectHandler={this.selectProductHandler} />
                    </div>
                    <br />
                    <br />
                    {
                        this.state.selectedProductId > 0 && (
                            <ErrorBoundary
                                errorLogger={(errObj) => console.log(errObj)}>
                                <ViewProduct productId={this.state.selectedProductId} />
                            </ErrorBoundary>
                        )
                    }
                </>
            )
        }
        return design
    }
    componentDidMount() {
        console.log('mounted')

        fetchProducts()
            .then(
                (resp) => {
                    this.setState({
                        products: resp.data,
                        loading: false,
                        errorMessage: ''
                    }, () => {
                        this.focusInput()
                    })

                },
                (errResp) => {
                    this.setState({
                        products: [],
                        loading: false,
                        errorMessage: errResp.message
                    })
                }
            )
    }
    componentWillUnmount() {
        console.log('unmounted')
    }
    focusInput = () => {
        if (this.filterProductInputRef.current !== null) {
            this.filterProductInputRef.current.focus()
        }
    }
}

export default ProductList