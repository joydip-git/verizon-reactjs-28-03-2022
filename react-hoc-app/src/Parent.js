import React, { Component } from 'react'
import Click from './Click'
import Hover from './Hover'

export default class Parent extends Component {
    state = {
        value: 0
    }
    increaseValueHandler = () => {
        this.setState(
            (currentState) => {
                return {
                    value: currentState.value + 1
                }
            }
        )
    }
    render() {
        return (
            <div>
                <Click value={this.state.value} valueHandler={this.increaseValueHandler} />
                <br />
                <br />
                <Hover value={this.state.value} valueHandler={this.increaseValueHandler} />
            </div>
        )
    }
}
