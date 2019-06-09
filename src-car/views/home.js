import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import RouterView from "../router/RouterView"

 class Home extends Component {
    state={
        open:false,
        navopen:false,
        setH:'',
        data:[],
        navdata:[
            {
                title:"首页",
                path:"/home/homes",
            },
            {
                title:"找车",
                path:"/home/find"
            },
            {
                title:"二手车",
                path:"/home/old"
            },
            {
                title:"论坛",
                path:"/home/talk"
            },
            {
                title:"服务",
                path:"/home/waiter"
            }
        ],
        downdata:[
            {
                title:"车商城",
                path:"/home/shop"
            },
            {
                title:"金融",
                path:"/home/moeny"
            }
        ]
    }
    render() {
        let {navdata,open,downdata,navopen} = this.state;
        let {routes} = this.props
        return (
            <div className="wrap">
                <header><h3>汽车之家</h3><span className="ipt"></span><b>手机</b></header>
                <nav className={`nav ${open?"active" :""} ${navopen?"action" :""}`} ref="nav">
                    <ul>
                        {
                            navdata.map((item,index)=><p key={index}><NavLink to={item.path}>{item.title}</NavLink></p>)    
                        }
                    </ul>
                    
                    <p className="btn" onClick={()=>{this.setState({open:true})}}></p>
                    <div className="list">
                        {
                            downdata.map((item,index)=><p key={index}><NavLink to={item.path}>{item.title}</NavLink></p>)
                        }
                    </div>
                    <div className="dialog"  onClick={()=>{this.setState({open:false})}}></div>
                </nav>
                <main>
                    <RouterView routes={routes}></RouterView>
                </main>
            </div>
        )
    }
    componentDidMount(){
        document.addEventListener("scroll",this.scrollFn.bind(this));
    }
    scrollFn(e){
        let scl = document.documentElement.scrollTop;
        this.setH = this.refs.nav.offsetHeight;
        let {navopen} = this.state;
        if(this.setH<scl){
            !navopen && this.setState({navopen:true})
        }
        else{
            navopen && this.setState({navopen:false})
        }
    }
}
export default Home;
