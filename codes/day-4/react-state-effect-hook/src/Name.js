import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
/*
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
    componentWillUnmount() {
        console.log('[Name] unmounted')
    }
}
*/
const Name = (props) => {
    const { nameData, nameHandler } = props


    //if you do not pass any dependency list the callback will be called every time (after rendering the component)
    useEffect(
        () => {
            //write side effect causing code, which will be executed every time
            console.log('this is executed every time')
            // this.x = 10
            var a = 20
            //after causing side effect return a callback to clean up resources the next time the component is rendered
            return () => {
                //console.log(this.x)
                console.log(a)
                console.log('clean up happens every time')
            }
        }
    )

    // useEffect(
    //     () => {
    //         //side effect code
    //         //write side effect causing code, which will be executed every time
    //         console.log('this is executed every time')
    //         //DO not return a callback for clean -up
    //     }
    // )

    // useEffect(
    //     () => {
    //         //DO not write any side effect causing code
    //         return () => {
    //             console.log('clean up happens every time')
    //         }
    //     }
    // )

    useEffect(
        () => {
            //write side effect causing code, which will be executed ONE time, during mounting of the component
            console.log('this is executed only one timme...the very first time, when component is mounted')
            // this.x = 10
            var a = 20
            //after causing side effect return a callback to clean up resources when the component is unmounted
            return () => {
                // console.log(this.x)
                console.log(a)
                console.log('clean up happens only one timme...when the component is unmounted')
            }
        },
        []
    )

    useEffect(
        () => {
            //write side effect causing code
            console.log('this is executed, inclduing the first time also, when the nameData receives new value..applying style ')

            //after causing side effect return a callback to clean up resources the next time the component is rendered
            return () => {
                console.log('cleann up happens, inclduing the first time also, when the nameData receives new value..applying style ')
            }
        },
        [nameData]
    )
    useEffect(
        () => {
            console.log('this is executed, inclduing the first time also, when the nameData receives new value...fetching data')
            return () => {
                console.log('claen up happens, inclduing the first time also, when the nameData receives new value...fetching data')
            }
        },
        [nameData]
    )
    console.log('[Name] rendered')
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
Name.propTypes = {
    nameData: PropTypes.string.isRequired,
    nameHandler: PropTypes.func.isRequired
}
export default Name
