import axios from "axios"
export const initFn = () => {
        return {
            type:"INIT_FN",
            res:'111'
        }
    }
export const changeItem = (ind) => {
        return {
            type:"CHANGE_ITEM",
            ind
        }
    }
export const changeCheck = (id) => {
        return {
            type:"CHANGE_CHECK",
            id
        }
    }
export const submit = () => {
        return {
            type:"SUBMIT",
            
        }
    }
