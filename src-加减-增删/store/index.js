import {createStore,combineReducers} from "redux"

const num = (state=0,action)=>{
    switch(action.type){
        case "ADD":
        {
            let {count} = action;
            state += count
            return state;
        }
        case "DIS":
        {
            let {count} = action;
            state -= count
            return state;
        }
        default : return state;
    }
}

const arr = (state=[{title:"今天你又是"},{title:"可爱迷人的~"}],action)=>{
    console.log(state,"-------state")
    let newState = [...state]
    switch(action.type){
        case "ADD_ADD":
        {
            let {title} = action;
            newState.push({title})
            return newState;
        }
        case "DIS_DIS":
        {
            let {ind} = action;
            newState.splice(ind,1)
            return newState;
        }
        default : return state;
    }
}

// const reducer = (state={num:1,arr:[]},action)=>{
//     let newState = {...state}
//     return {
//         num:num(newState.num,action),
//         arr:arr(newState.arr,action)
//     }
// }

const _combine = (obj)=>{
    return (state={num:0,arr:[{title:"今天你又是"},{title:"可爱迷人的~"}]},action)=>{
        console.log(obj);
        return {
            num:obj.num(state.num,action),
            arr:obj.arr(state.arr,action)
        }
    }
}

const reducer = _combine({
    num,
    arr    
})

const store = createStore(reducer);
export default store;