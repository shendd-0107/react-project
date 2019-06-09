import React, { Component } from 'react'
import {connect} from "react-redux"
 class Shop extends Component {

    render() {
        let {data,shopCheckFn,titleCheckFn,addFn,sum} = this.props;
        return (
            <div className="shop"> 
                {
                    data.map((item,index)=><div className="list" key={item.id}>
                        <h3><input type="checkbox" checked={item.shopCheck} onChange={()=>{
                            shopCheckFn(item.id,!item.shopCheck)
                        }}/>{item.shop}</h3>
                        {
                            item.children.map((item1,index1)=><li key={item1.id}>
                                <h4><input type="checkbox" checked={item1.titleCheck} onChange={()=>{
                                    console.log(item.id,item1.id,!item1.titleCheck,'---------checked')
                                    titleCheckFn(item.id,item1.id,!item1.titleCheck)
                                    
                                }}/>{item1.title}</h4>
                                <p>{item1.price}</p>
                                <p>
                                    <span onClick={()=>{
                                        addFn(index,index1,false)
                                    }}>-</span>
                                    <span>{item1.count}</span>
                                    <span onClick={()=>{
                                        addFn(index,index1,true)
                                    }}>+</span>
                                </p>
                            </li>)
                        }
                    </div>)
                }
                {
                    <h3>总价：{sum}</h3>
                }
            </div>
        )
    }
}

const states = state=>{
    return {
        data:state.data.arr,
        sum:state.data.sum
    }
}
const dispatchs = dispatch=>{
    return {
        shopCheckFn(id,shopCheck){
            dispatch({
                type:"SHOP_CHECK",
                id,
                shopCheck
            })
        },
        titleCheckFn(shopid,id,titleCheck){
            dispatch({
                type:"TITLE_CHECK",
                shopid,
                id,
                titleCheck
            })
        },
        addFn(index,index1,flag){    
            dispatch({
                type:flag ? "ADD" : "DIS",
                index,
                index1,
                
            })
        }
    }
}

export default connect(states,dispatchs)(Shop);
