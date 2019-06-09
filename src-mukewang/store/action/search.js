import axios from "axios"
import "../../mock/coursedata"
export const initFn = (url)=>{
    return dispatch=>{
        axios.get(url).then(res=>{
            return dispatch({
              type:"INIT_DATA",
              data:res.data.list
            })
        })
    }
}
export const searchVal = (val)=>{
    return {
        type:"SEARCH_ADD",
        val
    }
}
export const delFn = (index)=>{
    return {
        type:"SEARCH_DIS",
        index
    }
}
export const alldelFn = ()=>{
    return {
        type:"SEARCH_ALLDIS",
    }
}