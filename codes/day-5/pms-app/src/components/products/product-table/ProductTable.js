import React from 'react'
import PropTypes from 'prop-types'
import ProductRow from '../product-row/ProductRow'

const ProductTable = ({ products, selectHandler }) => {
    return (
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
                                return <ProductRow productData={p} key={p.productId} selectHandler={selectHandler} />
                            }
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
ProductTable.propTypes = {
    products: PropTypes.array.isRequired,
    selectHandler: PropTypes.func.isRequired
}
export default ProductTable