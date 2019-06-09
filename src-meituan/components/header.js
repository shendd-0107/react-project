import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
class Header extends Component {
    render() {
        return (
            <header>
                <span><NavLink to="/home">菜单</NavLink></span>
                <span><NavLink to="/shop">商家</NavLink></span>
                <span><NavLink to="/order">评价</NavLink></span>
            </header>
        )
    }
}
export default Header;
