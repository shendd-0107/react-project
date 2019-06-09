
const data = (state={data:[]},action)=>{
    let newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case "INIT_DATA":
        {
            let {data} = action;
            newState.data = data;
        }
        return newState;
        default :return state;
    }
}
export default data;