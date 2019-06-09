import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import RouterView from "../router/RouterView"
export default class second1 extends Component {
  render() {
    return (
      <div>
        二级1
        <p>
          <span><NavLink to="/allpro/second1/three1">三级1</NavLink></span>
        <span><NavLink to="/allpro/second1/three2">三级2</NavLink></span>
        </p>
        
        <p>
          <RouterView routes={this.props.routes}></RouterView>
        </p>
      </div>
    )
  }
}
