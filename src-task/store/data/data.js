let data = (state={data:[]},action)=>{
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case "INIT_FN":
        {
            let {data,tasktype,taskclass} = action;
            newState.data = data;
            newState.tasktype = tasktype;
            newState.taskclass = taskclass;
        }
        return newState;
        case "ADD_TYPE":
        {
            let {typename} = action;
            newState.data.push({title:typename,open:true,id:newState.data.length+1})
        }
        return newState;
        case "ADD_TASK":
        {
            // let {} = action;
            console.log(action,'------action')
        }
        return newState;
        default :return state;
    }
}
export default data;