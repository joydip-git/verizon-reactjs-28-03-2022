import React, { Component, PureComponent } from 'react'
import { fetchProductById } from '../../../services/productservice'

export default class ViewProduct extends Component {
    //export default class ViewProduct extends PureComponent {
    constructor() {
        super()
        console.log('[VP] created')
    }
    state = {
        selectedProduct: null,
        loading: true,
        errorMsg: ''
    }
    shouldComponentUpdate(newProps, newState) {
        //this.state
        //this.props
        console.log('[VP] SCU')
        if (this.state.selectedProduct === null || (newProps.productId !== this.props.productId || newState.selectedProduct.productId !== this.state.selectedProduct.productId)) {
            return true
        }
        return false
    }
    render() {
        console.log('[VP] rendered')
        console.log(this.props.productId)
        const { loading, errorMsg, selectedProduct } = this.state
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
    componentDidMount() {
        console.log('[VP] mounted')
        this.getData()
    }
    componentDidUpdate(oldProps, oldState) {
        console.log('[VP] updated')
        console.log(this.props.productId)
        if (oldProps.productId !== this.props.productId) {
            this.getData()
            // try {
            //     this.getData()
            // }
            // catch (err) {

            // }
        }
        // else {
        //     throw new Error('same product id...not fetching data again')
        // }
    }
    getData() {
        fetchProductById(this.props.productId)
            .then(
                (resp) => {
                    this.setState({
                        selectedProduct: resp.data,
                        loading: false,
                        errorMsg: ''
                    })
                },
                (err) => {
                    this.setState({
                        selectedProduct: null,
                        loading: false,
                        errorMsg: err.message
                    })
                }
            )
    }
}
