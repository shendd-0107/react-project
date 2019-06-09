import React from "react"
import routes from "./router.js"
import RouterVive from "./RouterView"
import {BrowserRouter} from "react-router-dom"
class Index extends React.Component{
    render(){
        return <BrowserRouter>
            <RouterVive routes={routes} ></RouterVive>
        </BrowserRouter>
    }
}
export default Index;