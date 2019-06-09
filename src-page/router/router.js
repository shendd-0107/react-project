import React from "react"
import loadingFn from "react-loadable"
function loading(){
    return <div>loading...</div>
}
const Home = loadingFn({
    loader:()=>import("../views/home.js"),
    loading:loading
});
let routes=[
    {
        path:'/home',
        component:Home
    },
    {
        path:'/name',
        component:Home
    },
    {
        path:'/class',
        component:Home
    },
    {
        path:'/',
        redirect:"/home"
    }
]
export default routes;