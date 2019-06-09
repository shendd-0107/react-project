import React, { Component } from 'react'
import axios from "axios"
import '../mock/wait'
import Items from "./items"
export default class wait extends Component {
  state={
    hot:[],
    wait:[]
  }
  render() {
    let {hot,wait} = this.state;
    return (
      <div className="wait">
        <h4>近期最受期待</h4>
        <div className="heng">
          <div className="long">
            {
              hot.coming && hot.coming.map((item,index)=>{
                return <dl key={item.id}>
                  <dt>
                    <img src={item.img} alt=""></img>
                  </dt>
                  <dd>
                    <p>
                      {item.nm}
                    </p>
                    <p className="wantto">{item.comingTitle}</p>
                  </dd>
                </dl>
              })
            }
          </div>
        </div>
        <h4>上映日期</h4>
        <div className="waitnow">
          { wait.coming && wait.coming.map((item,index)=><Items key={index} {...item} />)}
        </div>
      </div>
    )
  }
  componentDidMount(){
    axios.get("/api/hot").then(({data:{hot}})=>{
      this.setState({hot})
    })
    axios.get("/api/wait").then(({data:{wait}})=>{
      this.setState({wait})
    })
  }
}
