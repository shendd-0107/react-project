import '../../mock/mockdata'
import axios from "axios"
export const initFn = url=>{
    return dispatch=>{
        axios.get(url).then(res=>{
            dispatch({
                type:"INIE_FN",
                data:res.data
            })
        })
    }
}
