import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import RouterView from "../router/RouterView"
import "../mock/data"
import axios from "axios"
 class Home extends Component {
  state={
     data:[],
     newData:[]
  }
  render() {
    let {data} = this.state;
    console.log(data,'-------------')
    return (
      <div className="wrap">
        <div className="left">
          <p><NavLink to="/home">所有</NavLink></p>
          <p><NavLink to="/name">点名列表</NavLink></p>
          <p><NavLink to="/class">调课列表</NavLink></p>
        </div>
        <div className="right">
          1111
        </div>
      </div>
    )
  }
  componentDidMount(){
    let {location:{pathname}} = this.props;
    if(pathname === '/class'){
      this.setState({newArr:data && data.map()})
    }
    axios.get("/api/data").then(({data:{list}})=>{
      this.setState({data:list})
    })
  }
}

export default Home
