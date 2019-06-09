import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
export default class Footer extends Component {
  render() {
    return (
      <footer>
        <NavLink to="/moive">电影</NavLink>
        <NavLink to="/house">影院</NavLink>
        <NavLink to="/myhouse" >我的</NavLink>
      </footer>
    )
  }
}
