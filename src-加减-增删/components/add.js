import React, { Component } from 'react'
import {connect} from "react-redux"

class Add extends Component {
  render() {
    let {clickAdd,num} = this.props;
    return (
        <div>
            <button onClick={()=>{
            clickAdd(false);
            }}>-</button>
            <span>{num}</span>
            <button onClick={()=>{
            clickAdd(true);
            }}>+</button>
        </div>
        )
    }
}

const states = state=>{
    return {
        num:state.num
        }
    }
    const dispatchs = dispatch=>{
        return {
            clickAdd(flag){
                if(flag){
                    dispatch({
                    type:"ADD",
                    count:1
                    })
                }
                else{
                    dispatch({
                    type:"DIS",
                    count:1
                    })
                }
            }
        }
    }
  
export default connect(states,dispatchs)(Add)

