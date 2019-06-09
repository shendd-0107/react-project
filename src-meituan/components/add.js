import React, { Component } from 'react'
import {connect} from "react-redux"
class Add extends Component {
    render() {
        let {num,index1,index,addFn} = this.props;
        return (
            <div>
                { num ? <button 
                onClick={()=>{
                    addFn(index,index1,false)
                }}>-</button>:""}
                { num ? <span>{num}</span> :""}
                <button 
                onClick={()=>{
                    addFn(index,index1,true)
                }}>+</button>
            </div>
        )
    }
}
export default connect(state=>{
    return {}
},dispatch=>{
    return {
        addFn(index,index1,flag){
            dispatch({
                type:flag ? "ADD" : "DIS",
                index,
                index1
            })
        }
    }
})(Add);
