import React, { Component } from 'react'
import RouterView from "../router/RouterView"
import Header from "../components/header"
import {NavLink} from "react-router-dom"
class Index extends Component {
    render() {
        let {routes} = this.props
        return (
            <div className="wrap">
                <div className="header">
                    <span><img src="https://m.imooc.com/static/wap/static/common/img/logo2.png" alt=""/></span>
                    <p>
                        <NavLink to="/search">搜索</NavLink>
                    </p>
                    <p>
                        <NavLink to={localStorage.username?"/my":"/login"} >{localStorage.username ? localStorage.username : "登录"}</NavLink>
                    </p>
                </div>
                <main>
                    <Header></Header>
                        <RouterView routes={routes}></RouterView>
                </main>
            </div>
        )
    }
}

export default Index;