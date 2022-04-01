import React, { Component } from 'react'
import ThemedContext from './theme-context'

/*
export class ThemedButton extends Component {
    //static contextType = ThemedContext
    render() {
        //const theme = this.context
        // console.log(this.context)
        // return (
        //     <button style={{ backgroundColor: theme.background, color: theme.foreground }}>
        //         {this.props.text}
        //     </button>
        // )
        return (
            <ThemedContext.Consumer>
                {
                    (value) => {
                        return (<button style={{ backgroundColor: value.background, color: value.foreground }} >
                            {this.props.text}
                        </button>)
                    }
                }
            </ThemedContext.Consumer>
        )
    }
}
*/

const ThemedButton = (props) => {
    return (
        <ThemedContext.Consumer>
            {
                (value) => {
                    return (<button style={{ backgroundColor: value.background, color: value.foreground }} >
                        {props.text}
                    </button>)
                }
            }
        </ThemedContext.Consumer>
    )
}

export default ThemedButton