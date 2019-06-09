import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
export default class Left extends Component {
  state={
    data:[
      {
        path:"allpro",
        title:"所有项目"
      },
      {
        path:"myctreate",
        title:"我创建的"
      },
      {
        path:"myjoin",
        title:"我参与的"
      },
      {
        path:"closed",
        title:"已归档"
      }
    ]
  }
  render() {
    return (
      <div className="left">
        <h3><span>项目</span><b>+</b></h3>
        {
          this.state.data.map((item,index)=><p key={index}>
              <NavLink to={"/"+item.path}>{item.title}</NavLink>
          </p>)
        }
        {/* <p>
            <NavLink to="/allpro">所有项目</NavLink>
        </p>
        <p>
            <NavLink to="/myctreate">我创建的</NavLink>
        </p>
        <p>
            <NavLink to="/myjoin">我参与的</NavLink>
        </p>
        <p>
            <NavLink to="/closed">已归档</NavLink>
        </p> */}
      </div>
    )
  }
}
