import React, { Component } from 'react'
import axios from "axios"
import "../../mock/coursedata"
import RouterView from "../../router/RouterView"
import BScroll from "better-scroll"
import {NavLink} from "react-router-dom"
export default class course extends Component {
    state={
        left:[]
    }
    render() {
        let {left} = this.state
        let {routes} = this.props
        return (
            <div className="courseBox">
                <div className="left">
                    {
                        left && left.map((item,index)=><NavLink key={item.id} 
                        to={{pathname:`/home/course/${item.link}`}}>{item.title}</NavLink>)
                    }
                </div>
                <div className="right">
                    <RouterView routes={routes}></RouterView>
                </div>
            </div>
        )
    }
   
    componentDidMount(){
        axios.get("/api/left").then(res=>{
            this.setState({left:res.data.list})
            new BScroll(".right")
        })
    }
    
}
