import axios from "axios"
import React, { Component } from 'react'
import "../mock/data"
import Items from "./items"
export default class now extends Component {
  state={
    movieList:[]
  }
  render() {
  let {movieList} = this.state;
    return (
      <div className="now">
        { movieList && movieList.map((item,index)=><Items key={index} {...item} />)}
      </div>
    )
  }
  componentDidMount(){
    axios.get("/api/reYi").then(({data:{reYi:{movieList}}})=>{
      this.setState({movieList});
    })
  }
}
