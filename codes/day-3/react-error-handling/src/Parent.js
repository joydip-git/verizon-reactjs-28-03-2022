import React, { Component } from 'react'

export default class Parent extends Component {
    state = {
        val: 0
    }
    valHandler = () => {

    }

    fetchData = () => {

    }
    render() {
        return (
            <>
                <input />
                <div onMouseOver={this.valHandler}>
                    Val:&nbsp;{this.state.val}
                </div>
            </>
        )
    }
}
