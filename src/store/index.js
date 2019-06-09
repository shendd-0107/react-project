import {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import data from  "./data/data"
const reducer = combineReducers({
    data
})
const store = createStore(reducer,applyMiddleware(thunk))
export default store;