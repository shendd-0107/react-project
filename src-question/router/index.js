import React from "react"
import {BrowserRouter,Switch,Route,Redirect} from "react-router-dom"
import Home from "../views/home"
import Exam from "../views/exam"
class Router extends React.Component{
    render(){
        return <BrowserRouter>
            <Switch>
                <Route path="/home" component={Home}></Route>
                <Route path="/exam/:id" component={Exam}></Route>
                <Redirect from="/" to="/home"></Redirect>
            </Switch>
        </BrowserRouter>
    }
}
export default Router;
