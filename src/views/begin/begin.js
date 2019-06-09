import React, { Component } from 'react'
import RouterView from "../../router/RouterView"
import {NavLink} from "react-router-dom"
export default class begin extends Component {
    render() {
        return (
            <div className="beginlist">
                <div className="list-left">
                    <dl>
                        <dt><img src={require("../../img/bottom.png")}/></dt>
                        <dd></dd>
                    </dl>
                    <ul>
                        <li><NavLink to="/begin/task">任务</NavLink></li>
                        <li><NavLink to="/begin/note">便签</NavLink></li>
                        <li><NavLink to="/begin/project">项目</NavLink></li>
                    </ul>
                </div>
                <div className="list-right">
                    <RouterView routes={this.props.routes}></RouterView>
                </div>
            </div>
        )
    }
}
