import Mock from "mockjs"
let datas = Mock.mock({
    "list|10":[
        {
            title:"@ctitle(2,4)",
            'id|+1':1,
            'children|10-15':[
                {   
                    title:"@ctitle(3,5)",
                    'childid|+1':11,
                    'price|10-15':10,
                    img:"@image(100)",
                    num:0
                }
            ]
        }
    ]
})
Mock.mock("/mockdatas",()=>{
    let data=null;
    if(localStorage.shop){
        data = JSON.parse(localStorage.shop);
    }
    else{
        localStorage.shop = JSON.stringify(datas.list)
        data = datas.list;
    }
    return data;
})