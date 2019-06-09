import React from "react"
import {Switch,Route,Redirect} from "react-router-dom"
function RouterView(props){
    let {routes} = props;
    let routesArr = routes && routes.filter(item=>!item.redirect)
    let routesRed = routes && routes.filter(item=>item.redirect)
    return <Switch>
        {
            routesArr.map((item,index)=><Route key={index} path={item.path} component={item.component}></Route>).
            concat(routesRed.map((item,index)=><Redirect key={index} from={item.path} to={item.redirect}></Redirect>))
        }
    </Switch>
}
export default RouterView;
