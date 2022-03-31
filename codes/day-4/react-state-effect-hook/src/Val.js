import React, { Component, useEffect } from 'react'
import PropTypes from 'prop-types'

const Val = ({ valData, valHandler }) => {
    console.log('[Val] rendered')
    return (
        <div>
            Val:&nbsp;{valData}
            <br />
            <button onClick={valHandler}>Increase</button>
        </div>
    )
}
Val.propTypes = {
    valData: PropTypes.number.isRequired,
    valHandler: PropTypes.func.isRequired
}
export default Val
/*
function memoHoc(OC) {
    class MemoHOC extends Component {
        shouldComponentUpdate(newProps) {
            for (const newPropName in newProps) {
             if (typeof (newPropName) !== Function) {
                for (const currentPropName in this.props) {
                   
                        if (newPropName[newPropName] !== this.props[currentPropName]) {
                            return true
                        }
                    }
                }
            }
            return false
        }
        render() {
            return <OC {...this.props} />
        }
    }
    return MemoHOC
}
*/
