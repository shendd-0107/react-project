import {createStore,combineReducers,applyMiddleware} from "redux"
import data from "./data/data"
import thunk from "redux-thunk"
const reducer = combineReducers({
    data
})
const store = createStore(reducer,applyMiddleware(thunk))
export default store;