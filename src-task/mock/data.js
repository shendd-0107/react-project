import Mock from "mockjs"
let type = [
    {
        title:"正在运行中",
        id:1,
        open:true,
        task :[
            {
                title:"task1",
                typeid:"11",
                tasktype:0
            }
        ]

    },
    {
        title:"已归档",
        id:2,
        open:false
    }
]
let tasktype = [
    {
        hot:"普通",
        id:0
    },
    {
        hot:"紧急",
        id:1
    },
    {
        hot:"非常紧急",
        id:2
    }
]
let taskclass = [
    {
        hot:"WEB",
        id:0
    },
    {
        hot:"JAVA",
        id:1
    },
    {
        hot:"IOS",
        id:2
    }
]

Mock.mock("/api/data",{
    type,tasktype,taskclass
})