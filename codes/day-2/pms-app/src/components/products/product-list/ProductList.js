import React, { Component } from 'react'
import { fetchProducts } from '../../../services/productservice'

class ProductList extends Component {
    constructor() {
        super()
        this.state = {
            products: [],
            loading: true,
            errorMessage: ''
        }
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
                <table>
                    <thead>
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
                                    return (<tr>
                                        <td>
                                            <img src={p.imageUrl} alt='NA' style={{ margin: '2px', width: '50px' }} />
                                        </td>
                                        <td>
                                            {p.productName}
                                        </td>
                                        <td>
                                            {p.price}
                                        </td>
                                        <td>
                                            {p.starRating}
                                        </td>
                                        <td>
                                            <button>Delete</button>
                                        </td>
                                    </tr>)
                                }
                            )
                        }
                    </tbody>
                </table>
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