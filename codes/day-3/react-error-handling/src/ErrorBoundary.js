import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ErrorBoundary extends Component {
    static propTypes = {
        errorLogger: PropTypes.func.isRequired
    }
    state = {
        errorMessage: null
    }
    static getDerivedStateFromError(errorInfo) {
        return {
            errorMessage: errorInfo
        }
    }
    render() {
        console.log('EB rendered')
        let design = ''
        if (this.state.errorMessage !== null) {
            design = <span>Error Occurred</span>
        } else {
            design = this.props.children
        }
        return design
    }
    componentDidCatch(errorInfo, errorStack) {
        // this.setState({
        //     errorMessage: errorInfo
        // })
        this.props.errorLogger({ errorInfo, errorStack })
    }
}
