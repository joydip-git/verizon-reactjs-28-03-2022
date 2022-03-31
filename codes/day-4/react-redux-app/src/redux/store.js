import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import { numberStateReducer } from "./reducers";

//store
const loggerMiddleware = createLogger()
const reducerMap = combineReducers({
    numberState: numberStateReducer
})
const store = createStore(reducerMap, applyMiddleware(loggerMiddleware))

export default store
