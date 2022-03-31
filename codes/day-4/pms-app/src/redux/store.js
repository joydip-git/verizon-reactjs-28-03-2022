import { createLogger } from "redux-logger";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { productStateReducer } from "./reducers";

const loggerMiddleware = createLogger()
const rootReducer = combineReducers({
    productState: productStateReducer
})
const store = createStore(
    rootReducer, applyMiddleware(loggerMiddleware))

export default store