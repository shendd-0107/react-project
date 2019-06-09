import {createStore,combineReducers,applyMiddleware } from "redux"
import thunk from "redux-thunk"
import data from "./data/data"
import logger from "redux-logger"
const reducer = combineReducers({
    data
})
const store = createStore(reducer,applyMiddleware(logger,thunk))
export default store