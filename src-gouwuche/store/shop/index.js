import data from "./mock/index"
const index=(state=data,action)=>{
   let newstate=JSON.parse(JSON.stringify(state));
   
    switch(action.type){
        case "ADD":
        {
            let {index,key,count}=action;
        
            newstate.list[index].children[key].count+=count
            // console.log(newstate.list[index])
        }
        return newstate;
        case "DEL":
        {
            let {index,key,count}=action;
            newstate.list[index].children[key].count-=count
        }
        return newstate;
        default:
        return state;
    }
    
}

export default index;