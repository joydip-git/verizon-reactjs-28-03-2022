import * as actionTypes from './actiontypes'

const initialNumberState = {
    counter: 0
}

export function numberStateReducer(state = initialNumberState, action) {
    let newState = null
    switch (action.type) {
        case actionTypes.INCREASE_ACTION:
            newState = {
                ...state,
                counter: state.counter + action.value
            }
            break;
        case actionTypes.DECREASE_ACTION:
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