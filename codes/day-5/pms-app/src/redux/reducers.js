import * as actionTypes from './actionTypes'

const initialProductState = {
    loading: true,
    errorMessage: '',
    product: null
}

const initialAllProductsState = {
    products: [],
    loading: true,
    errorMessage: ''
}

export const productStateReducer = (state = initialProductState, action) => {
    let newState = null
    switch (action.type) {
        case actionTypes.INITIATE_FETCH:
            newState = {
                ...state,
                loading: true,
                errorMessage: '',
                product: null
            }
            break;
        case actionTypes.FETCH_SUCCESS:
            newState = {
                ...state,
                loading: false,
                errorMessage: '',
                product: action.value
            }
            break;

        case actionTypes.FETCH_FAILED:
            newState = {
                ...state,
                loading: false,
                errorMessage: action.value,
                product: null
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

export const allProductStateReducer = (state = initialAllProductsState, action) => {
    let newState = null
    switch (action.type) {
        case actionTypes.INITIATE_FETCH:
            newState = {
                ...state,
                loading: true,
                errorMessage: '',
                products: []
            }
            break;
        case actionTypes.FETCH_SUCCESS:
            newState = {
                ...state,
                loading: false,
                errorMessage: '',
                products: action.value
            }
            break;

        case actionTypes.FETCH_FAILED:
            newState = {
                ...state,
                loading: false,
                errorMessage: action.value,
                products: []
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

