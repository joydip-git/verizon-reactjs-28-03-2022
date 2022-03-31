const { createStore, applyMiddleware } = require('redux')
const { createLogger } = require('redux-logger')
//state
const initialNumberState = {
    counter: 0
}

//action types
const INCREASE_ACTION = 'INCREASE'
const DECREASE_ACTION = 'DECREASE'

//action
const increaseActionCreator = (increaseByValue) => {
    const increaseAction = {
        type: INCREASE_ACTION,
        value: increaseByValue
    }
    return increaseAction
}

const decreaseActionCreator = (decreaseByValue) => {
    const decreaseAction = {
        type: DECREASE_ACTION,
        value: decreaseByValue
    }
    return decreaseAction
}

//reducer
function numberStateReducer(state = initialNumberState, action) {
    let newState = null
    switch (action.type) {
        case INCREASE_ACTION:
            newState = {
                ...state,
                counter: state.counter + action.value
            }
            break;
        case DECREASE_ACTION:
            newState = {
                ...state,
                counter: state.counter - action.value
            }
            break;

        default:
            newState = {
                ...state
            }
            break;
    }
    return newState
}

//store
const loggerMiddleware = createLogger()
const store = createStore(
    numberStateReducer, applyMiddleware(loggerMiddleware))
// const store = {
//     state: null,
//     dispatch: function (request) {
//         if (this.state === null) {
//             this.state = numberStateReducer(initialNumberState, request)
//         } else {
//             this.state = numberStateReducer(this.state, request)
//         }
//     }
// }


//will be written in a component
// store.dispatch(increaseActionCreator(4))
// store.dispatch(decreaseActionCreator(2))


//dispatch