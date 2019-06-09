import React, { Component } from 'react'
import {connect} from "react-redux"
 class List extends Component {
    render() {
        let {checked,children,title,index,setCount}=this.props;
        return (
            <div>
                  <h4>
                     <span><input type="checkbox" checked={checked} onChange={()=>{

                     }}/></span>
                     <span>{title}</span>
                     <span>领劵</span>
                 </h4>
                {
                    children.map((item,key)=><dl key={key}>
                    <dt>
                        <input type="checkbox" checked={item.checked} onChange={()=>{
                         
                     }}/>
                    </dt>
                    <dd>
                        <h4>
                             <img src={item.img}/>
                        </h4>
                        <p>
                            <span className="title">{item.title}</span>
                            <span >￥{item.price}</span>
                            <span >数量：
                                <button onClick={()=>{
                                    setCount(index,key,false)
                                }}>-</button>
                                <b>{item.count}</b>
                                <button onClick={()=>{
                                    setCount(index,key,true)
                                }}>+</button>
                            </span>
                        </p>
                    </dd>
                </dl>)
                }
            </div>
        )
    }
}
const mapStateToProps=state=>{
    // console.log(state)
    return {
        
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        setCount(index,key,flag){
            dispatch({
                type:flag?"ADD":"DEL",
                index,
                key,
                count:1
            }) 
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(List);