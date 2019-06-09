import {createStore,combineReducers} from "redux"
import shop from "./shop/index"
let reducer=combineReducers({
    shop
})
let store =createStore(reducer)

export default store;