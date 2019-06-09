import Mock from "mockjs"

let users = [
    {
        user:'111',
        pwd:'222'
    },
    {
        user:'123',
        pwd:'123'
    }
]
localStorage.users = JSON.stringify(users);
Mock.mock("/api/user",({body})=>{
    let {user,pwd} = JSON.parse(body)
    let username = JSON.parse(localStorage.users);
    let flag = username.find(item=>item.user === user)
    if(flag){
        if(flag.pwd===pwd){
            return {code:1,msg:"您已登录成功"}
        }
        else{
            return {code:0,msg:"密码错误"}
        }
    }
    else{
        return {code:2,msg:"您还没有注册过哦~"}
    }
})

let list=[
    {
        title:"很重要-很紧急",
        color:"tomato",
        back:"#fcc",
        id:1,
        children:[{}]
    },
    {
        title:"重要-不紧急",
        color:"#fcc",
        back:"tomato",
        id:2,
        children:[{}]
    },
    {
        title:"不重要-紧急",
        color:"#090",
        back:"#09f",
        id:3,
        children:[{}]
    },
    {
        title:"不重要-不紧急",
        color:"#09f",
        back:"#090",
        id:4,
        children:[{}]
    }
]

Mock.mock("/api/data",{
    list
})

