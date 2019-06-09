import React from "react"
import loadable from "react-loadable"

function Loading(){
    return <div>loading...</div>
}

const Home = loadable({
    loader:()=>import("../views/home"),
    loading:Loading
})
const User = loadable({
    loader:()=>import("../views/user"),
    loading:Loading
})
const Login = loadable({
    loader:()=>import("../views/user/login"),
    loading:Loading
})
const Registor = loadable({
    loader:()=>import("../views/user/registor"),
    loading:Loading
})
const Begin = loadable({
    loader:()=>import("../views/begin/begin"),
    loading:Loading
})
const Note = loadable({
    loader:()=>import("../views/begin/note"),
    loading:Loading
})
const Project = loadable({
    loader:()=>import("../views/begin/prject"),
    loading:Loading
})
const Task = loadable({
    loader:()=>import("../views/begin/task"),
    loading:Loading
})

let routes = [
    {
        path:"/home",
        component:Home
    },
    {
        path:"/user",
        component:User,
        children:[
            {
                path:"/user/login",
                component:Login
            },
            {
                path:"/user/registor",
                component:Registor
            },
            {
                path:"/user",
                redirect:"/user/login"
            }
        ]
    },
    {
        path:"/begin",
        component:Begin,
        children:[
            {
                path:"/begin/task",
                component:Task
            },
            {
                path:"/begin/note",
                component:Note
            },
            {
                path:"/begin/project",
                component:Project
            },
            {
                path:"/begin",
                redirect:"/begin/task"
            }
        ]
    },
    {
        path:"/",
        redirect:"/home"
    }
]
export default routes;