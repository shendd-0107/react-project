import React from "react";
import {BrowserRouter} from "react-router-dom"
import routes from "./router"
import RouterVive from './RouterView'
function Router(){
    return <BrowserRouter>
        <RouterVive routes={routes}></RouterVive>
    </BrowserRouter>
}
export default Router;