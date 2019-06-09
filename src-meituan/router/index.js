import React from "react";
import {BrowserRouter,Switch,Route,Redirect} from "react-router-dom"
import loadable from "react-loadable"
function Loading(){
    return <div>Loading..</div>
}
const Home = loadable({
    loader:()=>import("../views/home.js"),
    loading:Loading
})
const Order = loadable({
    loader:()=>import("../views/order.js"),
    loading:Loading
})
const Shop = loadable({
    loader:()=>import("../views/shop.js"),
    loading:Loading
})
class Router extends React.Component{
    render(){
        return <BrowserRouter>
            <Switch>
                <Route path="/home" component={Home}></Route>
                <Route path="/shop" component={Shop}></Route>
                <Route path="/order" component={Order}></Route>
                <Redirect from="/" to="/home"></Redirect>
            </Switch>
        </BrowserRouter>
    }
}
export default Router;