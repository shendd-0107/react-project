let arr = {arr:[
    {
        shop:"尔给",
        id:0,
        shopCheck:false,
        children:[
            {
                title:"漂亮的林妹妹",
                price:9998,
                count:0,
                id:11,
                shopid:0,
                titleCheck:false
            },
            {
                title:" you are very cute",
                price:1908,
                count:0,
                shopid:0,
                id:22,
                titleCheck:false
            }
        ]
    },
    {
        shop:"沙娜马",
        id:1,
        shopCheck:false,
        children:[
            {
                title:"林妹妹",
                price:88,
                count:0,
                id:33,
                shopid:1,
                titleCheck:false
            },
            {
                title:"小仙女",
                price:889,
                count:0,
                id:44,
                shopid:1,
                titleCheck:false
            },
            {
                title:"大傻子",
                price:19,
                count:0,
                shopid:1,
                id:55,
                titleCheck:false
            }
        ]
    }
],
sum:0
}

let data = (state=arr,action)=>{
    let newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case "SHOP_CHECK":
        {
            let {id,shopCheck} = action;
            let ind = newState.arr.findIndex(item=>item.id === id)
            newState.arr[ind].shopCheck = shopCheck;
            
            newState.arr[ind].children.forEach(item1=>item1.titleCheck=shopCheck)
            

            return newState;
        }
        case "TITLE_CHECK":
        {
            let {id,shopCheck,shopid} = action;
            let ind = newState.arr.findIndex(item=>item.id === shopid)
            newState.arr[ind].children.find(item1=>item1.id===id).titleCheck = shopCheck;
            
            newState.arr[ind].shopCheck = newState[ind].children.every(item1=>item1.titleCheck)
            // console.log(newState,'-----title')

            return newState;
        }
        case "ADD":
        {
            let {index,index1} = action;
            newState.arr[index].children[index1].count += 1;

            newState.sum = newState.arr.map(item=>item.children.
            reduce((prev,item)=>prev+item.price*item.count,0))
            newState.sum =newState.sum.reduce((p,n)=>p+n,0)
            
        }
        return newState;
        case "DIS":
        {
            let {index,index1} = action;
            newState.arr[index].children[index1].count -= 1;
            newState.sum = newState.arr.forEach(item=>item.children.reduce((prev,item)=>prev+item.price*item.count,0))
        }
        return newState;
        default :return state
    }
}
export default data;
