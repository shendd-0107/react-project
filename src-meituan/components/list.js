import React, { Component } from 'react'
import Add from "../components/add"
class List extends Component {
    render() {
        let {title,price,num,img,index1,index} = this.props;
        return (
            <dl className="list">
                <dt>
                    <img src={img} alt=""/>
                </dt>
                <dd>
                    <h4>{title}</h4>
                    <p>￥：{price}</p>
                    <Add num={num} index1={index1} index={index}></Add>
                </dd>
            </dl>
        )
    }
}
export default List