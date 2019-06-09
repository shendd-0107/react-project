import React, { Component } from 'react'
import Left from "../component/left"
import {NavLink} from "react-router-dom"
import RouterView from "../router/RouterView"
 class Allpro extends Component {
  render() {
    return (
      <div className="wrap">
          <Left></Left>
          <div className="right">
            <header>
              <span>
                <NavLink to="/allpro/second1">二级1</NavLink>
              </span>
              <span>
              <NavLink to="/allpro/second2">二级2</NavLink>
              </span>
            </header>
            <main>
              <RouterView routes={this.props.routes}></RouterView>
            </main>
          </div>
          
      </div>
    )
  }
}
export default Allpro
