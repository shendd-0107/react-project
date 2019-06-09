import React, { Component } from 'react'
import {connect} from "react-redux"
import * as action from "../store/action/action"
import {bindActionCreators} from "redux"
class My extends Component {
    render() {
        let {shopcar,sumprice,allCheck,checkFn,checkAll} = this.props
        return (
            <div className="my">
                <div className="my-header"><h3>{localStorage.username}({shopcar.length})</h3></div>
                <div className="my-main">
                    {
                        shopcar && shopcar.map((item,index)=>
                        <dl key={item.id}>
                            <dt>
                                <input type="checkbox" checked={item.check} 
                                    onChange={()=>checkFn(index,!item.check)}/>
                                <img src="" alt=""/>
                            </dt>
                            <dd>
                                <p>{item.title}</p><p>数量：{item.num}</p><p>价格：{item.price}</p>
                            </dd>
                        </dl>)
                    }
                </div>
                <div className="my-header">
                    <h3>总价：{sumprice}
                    全选
                        <input type="checkbox" checked={allCheck} 
                            onChange={()=>{checkAll(!allCheck)}}
                        />
                        <button onClick={()=>{localStorage.removeItem('username')}}>退出</button>
                    </h3>
                    
                    
                </div>
            </div>
        )
    }
}
export default connect(state=>{
    return {
        shopcar:state.data.shopcar,
        sumprice:state.data.sumprice,
        allCheck:state.data.allCheck,
    };
},dispatch=>{
    return bindActionCreators(action,dispatch)
})(My)