import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
class Home extends Component {
    render() {
        return (
            <div className="wrap">
                <div className="top">
                    <div className="top-header">
                        <span><img src="http://s.gxtodo.com/static/img/logo.png" alt=""/></span>
                        <p>
                            <span className="logins"><NavLink to="/user/login">登录</NavLink></span>
                            <span className="regs"><NavLink to="/user/registor">注册</NavLink></span>
                        </p>
                    </div>
                    <div className="top-bottom">
                        <div className="bottom-img">
                            <p>
                                <NavLink to="/user/login">《开始使用</NavLink>
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default Home