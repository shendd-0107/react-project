import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
 class Footer extends Component {
  render() {
    return (
      <footer>
          <span><NavLink to="/home">首页</NavLink></span>
          <span><NavLink to="/half">分类</NavLink></span>
          <span><NavLink to="/find">发现</NavLink></span>
          <span><NavLink to="/car">购物车</NavLink></span>
          <span><NavLink to="/my">我的</NavLink></span>
      </footer>
    )
  }
}
export default Footer;
