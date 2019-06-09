import Home from "../views/home"
import Half from "../views/half"
import Find from "../views/find"
import Car from "../views/car"
import My from "../views/my"
let routes = [
    {
        path:"/home",
        component:Home
    },
    {
        path:"/half",
        component:Half
    },   
    {
        path:"/find",
        component:Find
    },  
    {
        path:"/car",
        component:Car
    },   
    {
        path:"/my",
        component:My
    },
    {
        path:"/",
        redirect:"/home"
    } 
]
export default routes;