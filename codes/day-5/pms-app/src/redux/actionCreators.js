import * as actionTypes from './actionTypes'
export const fetchInitiateActionCreator = () => {
    return {
        type: actionTypes.INITIATE_FETCH
    }
}
export const fetchSuccessActionCreator = (data) => {
    return {
        type: actionTypes.FETCH_SUCCESS,
        value: data
    }
}
export const fetchFailedActionCreator = (err) => {
    return {
        type: actionTypes.FETCH_FAILED,
        value: err
    }
}
export const fetchAllInitiateActionCreator = () => {
    return {
        type: actionTypes.INITIATE_FETCH_ALL
    }
}
export const fetchAllSuccessActionCreator = (data) => {
    return {
        type: actionTypes.FETCH_SUCCESS_ALL,
        value: data
    }
}
export const fetchAllFailedActionCreator = (err) => {
    return {
        type: actionTypes.FETCH_FAILED_ALL,
        value: err
    }
}