import React from "react"
import {Route,Switch,Redirect} from "react-router-dom"
function routerVive({routes=[]}){
    let routesArr = routes && routes.filter(item=>!item.redirect)
    let routesRed = routes && routes.filter(item=>item.redirect)
    return <Switch>    
            {
                routesArr.map((item,index)=>{
                    return <Route key={index} path={item.path} render={(props)=>{
                        return <item.component {...props} routes={item.children}/>
                    }}/>
                }).concat(routesRed.map((item,index)=><Redirect key={index} to={item.redirect} from={item.path} />))
            }
        </Switch>
}
export default routerVive;