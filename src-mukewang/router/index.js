import React from "react"
import {BrowserRouter} from "react-router-dom"
import RouterView from "./RouterView"
import routes from "./router"
class Router extends React.Component{
    render(){
        return <BrowserRouter>
            <RouterView routes={routes}></RouterView>
        </BrowserRouter>
    }
}
export default Router;