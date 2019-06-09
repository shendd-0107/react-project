import React from "react"
import Loadable from "react-loadable"

function Loading(){
    return <div>loading...</div>
}

const Home = Loadable({
    loader:()=>import("../views/home"),
    loading:Loading
})
const Homes = Loadable({
    loader:()=>import("../views/home/homes"),
    loading:Loading
})
const Find = Loadable({
    loader:()=>import("../views/home/find"),
    loading:Loading
})
const Old = Loadable({
    loader:()=>import("../views/home/old"),
    loading:Loading
})
const routes = [
    {
        path:"/home",
        component:Home,
        children:[
            {
                path:"/home/homes",
                component:Homes
            },
            {
                path:"/home/find",
                component:Find
            },
            {
                path:"/home/old",
                component:Old
            },
            {
                path:"/home",
                redirect:"/home/homes"
            }
        ]
    },
    {
        path:"/",
        redirect:"/home"
    }
]
export default routes;