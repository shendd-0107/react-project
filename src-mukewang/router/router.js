import React from "react";
import Loader from "react-loadable"
function Loading(){
    return <div>loading...</div>
}
const Home = Loader({
    loader:()=>import("../views/index.js"),
    loading:Loading
})
const Index = Loader({
    loader:()=>import("../views/index/index.js"),
    loading:Loading
})
const Course = Loader({
    loader:()=>import("../views/index/course"),
    loading:Loading
})
const Job = Loader({
    loader:()=>import("../views/index/job"),
    loading:Loading
})
const Note = Loader({
    loader:()=>import("../views/index/note"),
    loading:Loading
})
const Question = Loader({
    loader:()=>import("../views/index/question"),
    loading:Loading
})
const Work = Loader({
    loader:()=>import("../views/index/work"),
    loading:Loading
})
const Zhuan = Loader({
    loader:()=>import("../views/index/zhuan"),
    loading:Loading
})
const Right = Loader({
    loader:()=>import("../views/course/right"),
    loading:Loading
})
const Search = Loader({
    loader:()=>import("../views/search.js"),
    loading:Loading
})
const Login = Loader({
    loader:()=>import("../views/login.js"),
    loading:Loading
})
const Regainer = Loader({
    loader:()=>import("../views/regainer.js"),
    loading:Loading
})
const My = Loader({
    loader:()=>import("../views/my.js"),
    loading:Loading
})
const Detail = Loader({
    loader:()=>import("../views/detail/detail.js"),
    loading:Loading
})

let routes = [
    {
        path:'/home',
        component:Home,
        children:[
            {
                path:'/home/index',
                component:Index
            },
            {
                path:'/home/course',
                component:Course,
                children:[
                    {
                        path:'/home/course/:c',
                        component:Right
                    },
                    {
                        path:'/home/course',
                        redirect:"/home/course/web"
                    }
                ]
            },
            {
                path:'/home/job',
                component:Job
            },
            {
                path:'/home/note',
                component:Note
            },
            {
                path:'/home/question',
                component:Question
            },
            {
                path:'/home/work',
                component:Work
            },
            {
                path:'/home/zhuan',
                component:Zhuan
            },
            {
                path:"/home",
                redirect:"/home/index"
            }
        ]
    },
    {
        path:"/search",
        component:Search
    },
    {
        path:"/login",
        component:Login
    },
    {
        path:"/regainer",
        component:Regainer
    },
    {
        path:"/my",
        component:My
    },
    {
        path:"/detail/:id",
        component:Detail
    },
    {
        path:'/',
        redirect:"/home"
    }
]
export default routes;