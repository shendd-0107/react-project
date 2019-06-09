import React, { Component } from 'react'

export default class Beginheader extends Component {
    render() {
        return (
            <header>
                {this.props.children}             
            </header>
        )
    }
}
