import React from 'react'
import ThemedContext, { themes } from './theme-context'

const Check = (props) => {
    return (
        <ThemedContext.Provider value={themes.dark}>
            <ThemedContext.Consumer>
                {
                    (value) => {
                        return (
                            <div style={{ backgroundColor: value.background }}>
                                {
                                    props.children
                                }
                            </div>
                        )
                    }
                }
            </ThemedContext.Consumer>
        </ThemedContext.Provider>
    )
}

export default Check