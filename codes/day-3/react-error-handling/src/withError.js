import React, { Component } from 'react'

const withError = (WrappedComponent, errorLogger) => {
    class WithErrorBoundary extends Component {
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
                design = <WrappedComponent {...this.props} />
            }
            return design
        }
        componentDidCatch(errorInfo, errorStack) {
            errorLogger({ errorInfo, errorStack })
        }
    }
    return WithErrorBoundary
}
export default withError