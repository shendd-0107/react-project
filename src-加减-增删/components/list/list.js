import React, { Component } from 'react'
import {connect} from "react-redux"
 class List extends Component {
  state={
      text:''
  }
  render() {
    let {keyup} = this.props;
    console.log(this.props);
    return (
      <div>
        <input type="text" value={this.state.text} onChange={(e)=>{
            this.setState({text:e.target.value})
        }} 
        onKeyUp={(e)=>{
            (e.keyCode === 13) && keyup(this.state.text)
        }}
        />
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
    keyup(text){
        dispatch({
          type:"ADD_ADD",
          title:text
        })
    }
  }
}

export default connect(states,dispatchs)(List)
