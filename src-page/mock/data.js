import Mock from "mockjs"
Mock.mock("/api/data",{
    "list|20-30":[
        {
            name:"@cname",
            title:"@title(1)",
            "id|+1":1,
            'type|1':[1,2,3]
        }
    ]
})