import React, { Component, createRef } from 'react'

export default class Nested extends Component {
    constructor() {
        super()
        this.nestedInputElementRefObj = createRef()
    }
    sayHello = () => {
        alert('hello')
    }
    focusOnNestedInput = () => {
        this.nestedInputElementRefObj.current.focus()
    }
    render() {
        return (
            <div>
                <input type='text' onChange={
                    (e) => {
                        this.props.showHandler(e.target.value)
                    }
                } ref={this.nestedInputElementRefObj} />
                <br />
                <button onClick={this.sayHello}>Say Hello</button>
            </div>
        )
    }
    componentDidMount() {
        //this.focusOnNestedInput()
    }
}
