import React, { Component } from 'react'
import axios from "axios"
import "../mock/home"
import List from "../components/list"
import Footer from "../components/footer"
export default class Home extends Component {
  state={
    data:[]
  }
  render() {
    let {data} = this.state
    return (
      <div className="wrap">
        <header></header>
        <main>
          
            <List data={data}></List>
        </main>
        <Footer></Footer>
      </div>
    )
  }
  componentDidMount(){
    axios.get("/api/homedata").then(({data:{list}})=>{
      this.setState({data:list})
    })
  }
}
