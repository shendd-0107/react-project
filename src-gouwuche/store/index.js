import {createStore,combineReducers} from "redux"
import data from "./data/data"

const reducer = combineReducers({
    data
})

let store = createStore(reducer)
export default store;