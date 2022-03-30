import React, { Component, createRef } from 'react'
import Nested from './Nested'
import NestedFC from './NestedFC';

export default class Parent extends Component {
    constructor() {
        super()
        this.parentInputElementRef = null;
        this.parentInputElementRefObj = createRef()
        this.nestedComponentObjRef = createRef()
    }
    state = {
        val: ''
    }

    setParentElementRef = (elementRef) => {
        this.parentInputElementRef = elementRef
    }
    showValue = (data) => {
        //console.log(data)
        this.setState({
            val: data
        })
    }

    focusInputOfParent = () => {
        // if (this.parentInputElementRef !== null) {
        //     console.log(this.parentInputElementRef)
        //     this.parentInputElementRef.focus()
        // }
        if (this.parentInputElementRefObj.current !== undefined) {
            console.log(this.parentInputElementRefObj)
            console.log(this.parentInputElementRefObj.current)
            this.parentInputElementRefObj.current.focus()
            //console.log(this.parentInputElementRefObj.current.value)
        }
    }
    render() {
        return (
            <div>
                Val:&nbsp;<span>{this.state.val}</span>
                <br />
                Value:&nbsp;
                {/* <input type='text' onChange={
                    (e) => {
                        this.showValue(e.target.value)
                    }
                } ref={this.setParentElementRef} /> */}
                <input type='text' onChange={
                    (e) => {
                        this.showValue(e.target.value)
                    }
                } ref={this.parentInputElementRefObj} />
                <br />
                <Nested showHandler={this.showValue} ref={this.nestedComponentObjRef} />
                <br />
                <br />
                <NestedFC />
            </div>
        )
    }
    componentDidMount() {
        //this.focusInputOfParent()
        //this.focusOnNestedInput()
        this.nestedComponentObjRef.current.focusOnNestedInput()
    }
}
