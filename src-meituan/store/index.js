import {createStore,combineReducers,applyMiddleware} from "redux"
import data from "./data/data"
import logger from "redux-logger"
import thunk from "redux-thunk"
const reducer = combineReducers({
    data
})
const store = createStore(reducer,applyMiddleware(logger,thunk))
export default store;