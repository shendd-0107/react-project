// import axios from "axios"

export const carFn = (obj)=>{
    return {
        type:"CAR_FN",
        obj
    }
}
export const checkFn=(index,check)=>{
    return {
        type:'CHECK_FN',
        index,
        check
    }
}
export const checkAll=(check)=>{
    return {
        type:'CHECK_ALL',
        check
    }
}