import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
class Header extends Component {
    state={
        header:[
            {
                title:"首页",
                link:"/home/index"
            },
            {
                title:"课程",
                link:'/home/course',
            },
            {
                title:'实战',
                link:'/home/work'
            },
            {
                title:"就业班",
                link:'/home/job'
            },
            {
                title:"专栏",
                link:"/home/zhuan"
            },
            {
                title:"手记",
                link:"/home/note"
            },
            {
                title:"猿问",
                link:"/home/question"
            }
        ]
    }
    render() {
        let {header} = this.state;
        return (
            <header>
                {
                    header.map((item,index)=><NavLink key={index} to={item.link}>{item.title}</NavLink>)
                }
            </header>
        )
    }
}
export default Header;