import React from "react"
import {BrowserRouter} from "react-router-dom"
import routes from "./routes"
import RouterView from "./RouterView"
class Router extends React.Component{
    render(){
        return <BrowserRouter>
            <RouterView routes={routes}></RouterView>
        </BrowserRouter>
    }
}
export default Router;