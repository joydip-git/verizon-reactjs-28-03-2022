import { createLogger } from "redux-logger";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { productStateReducer, allProductStateReducer } from "./reducers";

const loggerMiddleware = createLogger()
const rootReducer = combineReducers({
    productState: productStateReducer,
    allProductsState: allProductStateReducer
})
const store = createStore(
    rootReducer, applyMiddleware(loggerMiddleware))

export default store