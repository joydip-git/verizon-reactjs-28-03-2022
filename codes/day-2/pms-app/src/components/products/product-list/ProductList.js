import React, { Component, Fragment } from 'react'
import { fetchProducts } from '../../../services/productservice'
import ProductRow from '../product-row/ProductRow'

class ProductList extends Component {
    constructor() {
        super()
        this.state = {
            products: [],
            loading: true,
            errorMessage: ''
        }
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
                //<Fragment>
                <>
                    {/* <button onClick={this.sortByPriceHandler}>Update Price</button> */}
                    <div className='container'>
                        <div className='tbl tbl-responsive'>
                            <br />
                            <table className='table'>
                                <thead style={{ backgroundColor: 'burlywood' }}>
                                    <tr>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Rating</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.map(
                                            (p) => {
                                                return <ProductRow productData={p} key={p.productId} />
                                            }
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
                //</Fragment>
            )
        }
        return design
    }
    componentDidMount() {
        fetchProducts()
            .then(
                (resp) => {
                    this.setState({
                        products: resp.data,
                        loading: false,
                        errorMessage: ''
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
}

export default ProductList

// class Frag extends Component {
//     render() {
//         return this.props.children;
//     }
// }