import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Name extends Component {
    //export default class Name extends PureComponent {
    constructor() {
        super()
        console.log('[Name] created')
    }
    static propTypes = {
        nameData: PropTypes.string.isRequired,
        nameHandler: PropTypes.func.isRequired
    }
    shouldComponentUpdate(newProps, newState) {
        console.log('[Name] in SCU')
        if (newProps.nameData !== this.props.nameData)
            return true

        return false
    }
    render() {
        console.log('[Name] rendered')
        const { nameData, nameHandler } = this.props
        return (
            <div>
                Enter Name:&nbsp;
                <input type='text' value={nameData} onChange={
                    (e) => nameHandler(e.target.value)} />
                <br />
                <span>{nameData}</span>
            </div>
        )
    }
    componentDidMount() {
        console.log('[Name] mounted')
    }
    componentDidUpdate() {
        console.log('[Name] updated')
    }
}
