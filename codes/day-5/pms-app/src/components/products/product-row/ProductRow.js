import React from 'react'
import PropTypes from 'prop-types'

const ProductRow = (props) => {
    //const { productData, selectHandler } = props
    const { productData } = props
    return (
        <tr>
            <td>
                <img src={productData.imageUrl} alt='NA' style={{ margin: '2px', width: '50px' }} />
            </td>
            <td>
                {productData.productName}
            </td>
            <td>
                {productData.price}
            </td>
            <td>
                {productData.starRating}
            </td>
            <td>
                <button className='btn btn-danger'>Delete</button>
            </td>
        </tr>
    )
}
ProductRow.propTypes = {
    productData: PropTypes.object.isRequired,
    //selectHandler: PropTypes.func.isRequired
}
export default ProductRow

/**
 *   <img src={productData.imageUrl} alt='NA' style={{ margin: '2px', width: '50px' }} onClick={
                    () => {
                        selectHandler(productData.productId)
                    }
                } />
 */