
import React from "react"
import Allpro from "../views/Allpro"
import Myctreate from "../views/myctreate"
import Myjoin from "../views/myjoin"
import Closed from "../views/closed"
import Second1 from "../views/second1";
import Second2 from "../views/second2";
let routes = [
    {
        path:"/allpro",
        component:Allpro,
        children:[
            {
                path:"/allpro/second1",
                component:Second1,
                children:[
                    {
                        path:"/allpro/second1",
                        redirect:"/allpro/second1/three1"
                    },
                    {
                        path:"/allpro/second1/three1",
                        component:()=>{
                            return <p>三级1</p>
                        }
                    },
                    {
                        path:"/allpro/second1/three2",
                        component:()=>{
                            return <p>三级2</p>
                        }
                    }
                ]
            },
            {
                path:"/allpro/second2",
                component:Second2
            },
            {
                path:"/allpro",
                redirect:"/allpro/second1"
            }
        ]
    },
    {
        path:"/myctreate",
        component:Myctreate
    },
    {
        path:"/myjoin",
        component:Myjoin
    },
    {
        path:"/closed",
        component:Closed
    },
    {
        path:"/",
        redirect:"/allpro"
    }
]

export default routes;