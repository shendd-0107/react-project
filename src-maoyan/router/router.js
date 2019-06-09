
import React from "react"
import LoadingFn from "react-loadable"
function loading(){
    return <div>loading...</div>
}

// function LoadingFn({loader,loading}){
//     return class extends React.Component{
//         state={
//             Com:loading
//         }
//         render(){
//             let {Com} = this.state;
//             return <Com {...this.props}></Com>
//         }
//         componentDidMount(){
//             loader().then(res=>{
//                 this.setState({
//                     Com:res.default
//                 })
//             })
//         }
//     }
// }

const Moive = LoadingFn({
    loader:()=>import("../views/moive.js"),
    loading:loading
})
const House = LoadingFn({
    loader:()=>import("../views/house.js"),
    loading:loading
})
const Myhouse = LoadingFn({
    loader:()=>import("../views/myhouse.js"),
    loading:loading
})
const Search = LoadingFn({
    loader:()=>import("../views/search.js"),
    loading:loading
})
const Shop = LoadingFn({
    loader:()=>import("../views/shop.js"),
    loading:loading
})
const City = LoadingFn({
    loader:()=>import("../views/city.js"),
    loading:loading
})
const Now = LoadingFn({
    loader:()=>import("../components/now"),
    loading:loading
})
const Wait = LoadingFn({
    loader:()=>import("../components/wait.js"),
    loading:loading
})
const Login = LoadingFn({
    loader:()=>import("../views/login.js"),
    loading:loading
})

let routes=[
    {
        path:"/house",
        component:House
    },
    {
        path:"/moive",
        component:Moive,
        children:[
            {
                path:"/moive",
                redirect:"/moive/now"
            },
            {
                path:"/moive/now",
                component:Now
            },
            {
                path:"/moive/wait",
                component:Wait
            },
        ]
    },
    {
        path:"/myhouse",
        component:Myhouse
    },
    {
        path:"/search",
        component:Search
    },
    {
        path:"/shop",
        component:Shop
    },
    {
        path:'/',
        redirect:"/moive"
    },
    {
        path:'/city',
        component:City
    },
    {
        path:'/login',
        component:Login
    }
]
export default routes;