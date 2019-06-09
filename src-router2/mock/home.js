import Mock from "mockjs"
Mock.mock("/api/homedata",{
    "list|6":[
        {
            timeBegin:"@time()",
            "children|10-15":[
                {
                    "title":"@ctitle(5,10)",
                    "price|10-15":10,
                    "incl":"@ctitle(10,15)",
                    "go":"@boolean()",
                    "img":"@image(100)"
                }
            ]
        }
    ]
})