const { default: axios } = require('axios')
const { createStore, applyMiddleware, combineReducers } = require('redux')
const { createLogger } = require('redux-logger')
//state
const initialNumberState = {
    counter: 0
}
const initialProductState = {
    loading: true,
    errorMessage: '',
    product: null
}

//action types
const INCREASE_ACTION = 'INCREASE'
const DECREASE_ACTION = 'DECREASE'

const INITIATE_FETCH = 'INITIATE_FETCH'
const FETCH_SUCCESS = 'FETCH_SUCCESS'
const FETCH_FAILED = 'FETCH_FAILED'

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

const fetchInitiateActionCreator = () => {
    return {
        type: INITIATE_FETCH
    }
}
const fetchSuccessActionCreator = (data) => {
    return {
        type: FETCH_SUCCESS,
        value: data
    }
}
const fetchFailedActionCreator = (err) => {
    return {
        type: FETCH_FAILED,
        value: err
    }
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

const productStateReducer = (state = initialProductState, action) => {
    let newState = null
    switch (action.type) {
        case INITIATE_FETCH:
            newState = {
                ...state,
                loading: true,
                errorMessage: '',
                product: null
            }
            break;
        case FETCH_SUCCESS:
            newState = {
                ...state,
                loading: false,
                errorMessage: '',
                product: action.value
            }
            break;

        case FETCH_FAILED:
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

//store
const loggerMiddleware = createLogger()
const rootReducer = combineReducers({
    numberState: numberStateReducer,
    productState: productStateReducer
})
const store = createStore(
    rootReducer, applyMiddleware(loggerMiddleware))
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
store.dispatch(increaseActionCreator(4))
store.dispatch(decreaseActionCreator(2))

const fetchData = () => {
    store.dispatch(fetchInitiateActionCreator())
    axios.get('http://127.0.0.1:8081/products/1')
        .then(
            (resp) => {
                const p = resp.data
                store.dispatch(fetchSuccessActionCreator(p))
            },
            (err) => {
                store.dispatch(fetchFailedActionCreator(err.message))
            }
        )
}
fetchData()

//dispatch