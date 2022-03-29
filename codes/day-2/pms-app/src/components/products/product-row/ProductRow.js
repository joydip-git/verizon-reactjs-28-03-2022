import React from 'react'

const ProductRow = (props) => {
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

export default ProductRow