import React, { Component } from 'react'
import "../mock/format"
import axios from "axios"
 class City extends Component {
  state={
    data:[]
  }
  render() {
    console.log(this.state)
    return (
      <div className="city">
        
      </div>
    )
  }
  componentDidMount(){
    axios.get("/api/city").then(({data:{city}})=>{
      this.setState({data:city.Data})
    })
  }
}
export default City

