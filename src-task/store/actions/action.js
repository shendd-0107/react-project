import "../../mock/data"
import axios from "axios"
export const initFn = (url)=>{
    return dispatch=>{
        axios.get(url).then(res=>{
            dispatch({
                type:"INIT_FN",
                data:res.data.type,
                tasktype:res.data.tasktype,
                taskclass:res.data.taskclass
            })
        })
    }
}
export const handleOk = (typename)=>{
    return {
        type:"ADD_TYPE",
        typename
    }
}
export const taskOk = (obj)=>{
    return {
        type:"ADD_TASK",
        obj
    }
}