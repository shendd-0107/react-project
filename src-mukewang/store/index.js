import {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import data from "./data/data"
import searchdata from "./data/search_data"
const reducer = combineReducers({
    data,searchdata
})
const store = createStore(reducer,applyMiddleware(thunk))
export default store;