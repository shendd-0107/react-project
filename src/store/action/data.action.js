import axios from "axios"
export const getdata = (url)=>{
    return dispatch =>{
        axios.get(url).then(res=>{
            dispatch({
                type:"INIT_DATA",
                data:res.data.list
            })
        })
    }
}