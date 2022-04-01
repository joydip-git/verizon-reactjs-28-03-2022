import { createLogger } from "redux-logger";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { productStateReducer, allProductStateReducer } from "./reducers";
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const loggerMiddleware = createLogger()
const rootReducer = combineReducers({
    productState: productStateReducer,
    allProductsState: allProductStateReducer
})
const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(loggerMiddleware, thunkMiddleware)))

export default store