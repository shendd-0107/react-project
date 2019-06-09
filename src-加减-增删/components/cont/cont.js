import React, { Component } from 'react'
import {connect} from "react-redux"
 class Cont extends Component {
  render() {
    let {arr,clickFn} = this.props;
    return (
      <div>
        {
            arr.map((item,index)=><li key={index} onClick={()=>{
                clickFn(index);
            }}>{item.title}</li>)
        }
      </div>
    )
  }
  
}
const states = state=>{
  return {
    arr:state.arr
  }
}
const dispatchs = dispatch=>{
  return {
    clickFn(index){
      dispatch({
          type:"DIS_DIS",
          ind:index
      })
    }
  }
}

export default connect(states,dispatchs)(Cont)
