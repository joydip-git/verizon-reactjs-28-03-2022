import * as actionTypes from './actiontypes'

export const increaseActionCreator = (increaseByValue) => {
    const increaseAction = {
        type: actionTypes.INCREASE_ACTION,
        value: increaseByValue
    }
    return increaseAction
}

export const decreaseActionCreator = (decreaseByValue) => {
    const decreaseAction = {
        type: actionTypes.DECREASE_ACTION,
        value: decreaseByValue
    }
    return decreaseAction
}