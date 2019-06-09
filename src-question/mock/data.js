import Mock from "mockjs"
let Data = Mock.mock("/api/data",{
    "list|4":[
        {
            title:"@ctitle(2,4)",
        }
    ]
})
export default Data;