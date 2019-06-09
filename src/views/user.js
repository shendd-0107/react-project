import React, { Component } from 'react'
import Router from "../router/RouterView"
class User extends Component {
    render() {
        return (
            <Router routes={this.props.routes}/>
        )
    }
}
export default User;