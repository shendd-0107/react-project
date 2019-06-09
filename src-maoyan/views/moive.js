import React, { Component } from 'react'
import Header from "../components/header"
import Footer from "../components/footer"
import {NavLink} from "react-router-dom"
import RouterVive from "../router/RouterView"

export default class moive extends Component {
  render() {
    let {routes,history} = this.props;
    return (
      <div className="App">
        <Header title="猫眼电影" ></Header>

        <nav className="nav">
          <p className="city" onClick={()=>{
            history.push("/city")
          }}>
            北京 
          </p>
          {/* --------------- 跳转子路由 ------------------- */}
          <p className="tiao">
            <NavLink to="/moive/now">正在上映</NavLink>
            <NavLink to="/moive/wait">即将上映</NavLink>
          </p>
          <span><NavLink to="/search">搜索</NavLink></span>
        </nav> 
        {/* --------------- main 中子路由 ------------------- */}
        <main>
          <div className="second">
            {/* <Switch>
              <Route path="/moive/now" component={Now}></Route>
              <Route path="/moive/wait" component={Wait}></Route>
              <Redirect from="/moive" to="/moive/now"></Redirect>
            </Switch> */}
            <RouterVive routes={routes}></RouterVive>
          </div>
          
        </main>
        <Footer></Footer>
    </div>
    )
  }
}
