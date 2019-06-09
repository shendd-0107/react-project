
const search = (state={hotdata:[],arr:[]},action)=>{

    let newState = JSON.parse(JSON.stringify(state))

    // if(localStorage.arr){
    //     newState.arr = JSON.parse(localStorage.arr)
    // }else{
    //     newState.arr = []
    // }

    newState.arr = localStorage.arr ? JSON.parse(localStorage.arr) :[]
    
    switch(action.type){
        case "INIT_DATA":
        {
            let {data} = action;
            newState.hotdata = data
        }
        return newState;
        case "SEARCH_ADD":
        {
            let {val} = action;

            let flag = newState.arr && newState.arr.find(item=>item.title === val);

            if(!flag){
                newState.arr.push({title:val})
                localStorage.arr = JSON.stringify(newState.arr);
            }
            
        }
        return newState;
        case "SEARCH_DIS":
        {
            let {index} = action;
            newState.arr.splice(index,1);
            localStorage.arr = JSON.stringify(newState.arr);
        }
        return newState;
        case "SEARCH_ALLDIS":
        {
            newState.arr.length = 0;
            localStorage.arr = JSON.stringify(newState.arr);
        }
        return newState;
        default :return state;
    }
}
export default search;