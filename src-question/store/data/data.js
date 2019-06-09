import React from "react"
let datas = {
    question:[
        {
            title:"今天你感觉如何？",
            id:1,
            select:-1,
            success:2,
            check:[
                {
                    title:"我还活着",
                    id:0
                },
                {
                    title:"我感觉不太好",
                    id:1,
                },
                {
                    title:"我活腻了",
                    id:2
                },
                {
                    title:"想好好活着",
                    id:3
                }
            ]
        },
        {
            title:"你还要我怎样？",
            id:2,
            select:-1,
            success:1,
            check:[
                {
                    title:"想要你活着",
                    id:0
                },
                {
                    title:"你说呢",
                    id:1,
                },
                {
                    title:"我觉得你活腻了",
                    id:2
                },
                {
                    title:"我还想好好活着呢",
                    id:3
                }
            ]
        }
    ],
    index:0,//控制题目显示的下标
    curdata:{},//当前屏幕数据
    date:Date.now(),
    time:0,
    tips:"",
    open:false
}

const renderli = (data)=>{
    let arr = data.sort((a,b)=>Math.random() - 0.5)
    let str = ['A','B','C','D']
    arr.map((item,i)=>item.title=str[i]+":"+item.title)
    return arr.map(item=><li key={item.id}><span></span><b>{item.title}</b></li>)
}

const data = (state=datas,action)=>{
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case "CHANGE_ITEM":
        {
            let {ind} = action;
            newState.index = ind;
            newState.curdata = newState.question[newState.index];
        }
        return newState;
        case "CHANGE_CHECK":
        {
            let {id} = action;
            let {index} = newState;
            newState.question[index].select = id;//改变select的-1，变成自己选的id
            if(newState.question.length-1 === index){
                index = newState.question.length-1;
            }
            else{
                index++;
            }
            newState.index = index;//下一道题
            newState.curdata = newState.question[index];//然后把下一道题赋给curdata
            // console.log(newState.question,'--------question')
        }
        return newState;
        case "SUBMIT":
        {
            newState.time = Date.now()-newState.date;
            newState.tips = "您一共用时"+Math.floor(newState.time/1000/60)+"分"+Math.floor(newState.time/1000)+"秒"
            newState.open = true;
        }
        return newState;
        default :
        {   
            newState.curdata = newState.question[newState.index];
            newState.question.forEach(item=>{
                renderli(item.check)
            })
            return newState;
        }
    }
    
}
export default data;