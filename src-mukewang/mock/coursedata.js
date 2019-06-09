import Mock from "mockjs"
Mock.mock("/api/left",{
    "list|5":[
        {
            'title|+1':['前端课程','后台演练','移动项目','前沿练习','JAVA'],
            'id|+1':1,
            'link|+1':['web','php','ios','before','java']
        }
    ]
})
Mock.mock("/api/right",({body})=>{
    let {name} = JSON.parse(body);
    return Mock.mock({
        "list|10-13":[
            {
                title:"@ctitle(2,4)",
                tag:name,
                "id|+1":1,
                img:"@image(100x80)",
                'person|2000-3000':1
            }
        ]
    })
})

Mock.mock("/api/work",({body})=>{
    let {page,size} = JSON.parse(body);
    let  num = (page - 1) * size;
    return Mock.mock({
        ["list|"+size]:[
            {
                title:"@ctitle(2,4)",
                'tag|+1':num,
                img:"@image(100x100)",
                'id|+1':1
            }
        ]
    })
})


let users = [
    {
        user:111,
        pwd:222
    },
    {
        user:'qqq',
        pwd:'www'
    }
]

localStorage.users = JSON.stringify(users)

let username = JSON.parse(localStorage.users);

Mock.mock("/api/login",({body})=>{
    let {user,pwd} = JSON.parse(body);
    let isuser = username.find(item=>item.user === user*1)
    if(isuser){
        if(isuser.pwd === pwd*1){
            return {
                code:1,
                msg:"登录成功"
            }
        }
        else{
            return {
                code:0,
                msg:"密码错误"
            }
        }
    }
    else{
        return {
            code:2,
            msg:"用户不存在，请注册"
        }
    }
})

Mock.mock("/api/Regainer",({body})=>{
    let {user,pwd} = JSON.parse(body);
    let isuser = username.find(item=>item.user === user*1)
    if(isuser){
        return {
            code:0,
            msg:"用户已存在"
        }
    }
    else{
        username.push({user,pwd})
        localStorage.users = JSON.stringify(username);
        return {
            code:1,
            msg:"您的用户名已注册，请返回登录"
        }
    }
})

Mock.mock("/api/detail",({body})=>{
    let {id} = JSON.parse(body)
    return {id,title:"我是详情页的"+id,price:'100000'+id,num:1,check:false}
})
Mock.mock("/api/search_hot",{
    "list|5-10":[
        {
            title:"@ctitle(2,4)"
        }
    ]
})