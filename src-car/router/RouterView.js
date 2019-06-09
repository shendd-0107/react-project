import React from "react";
import {Switch,Route,Redirect} from "react-router-dom"
class RouterView extends React.Component{
    render(){
        let {routes} = this.props;
        let routesArr = routes && routes.filter(item=>!item.redirect)
        let routesRed = routes && routes.filter(item=>item.redirect)
        // console.log(routes,'---routes')
        return <Switch>
                {
                    routesArr.map((item,index)=><Route key={index} path={item.path} render={(props)=><item.component {...props} routes={item.children}></item.component>} 
                    ></Route>).concat(routesRed.map((item,index)=><Redirect key={index} from={item.path} to={item.redirect}/>))
                }
            </Switch>
        
    }
}
export default RouterView;