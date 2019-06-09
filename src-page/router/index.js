import React from "react"
import {BrowserRouter} from "react-router-dom"
import routes from "./router"
import RouterView from "./RouterView"
function Router(){
    return <BrowserRouter>
        <RouterView routes={routes}></RouterView>
    </BrowserRouter>
}
export default Router;