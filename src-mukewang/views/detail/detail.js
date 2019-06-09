import React, { Component } from 'react'
import axios from "axios"
import "../../mock/coursedata"
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import * as action from "../../store/action/action"
 class Detail extends Component {
    state={
        obj:{}
    }
    render() {
        let {title,id,price} = this.state.obj;
        
        return (
            <div>
                <dd>
                    <h3>{title}</h3>
                    <p>{price}</p>
                    <p>id:{id}</p>
                </dd>
                <dt>
                    <button type="button" onClick={()=>{
                        this.carFn()
                    }}>加入购物车</button>
                </dt>
                
            </div>
        )
    }
    carFn(){
        let {shopcar} = this.props;
        let {obj} = this.state;
        let flag = shopcar.find(item=>item.id === obj.id)
        if(localStorage.username){
            if(flag){
                alert("您选中的商品已存在")
            }
            else{
                this.props.carFn(obj)
            }
            this.props.history.push("/my")
        }
        else{
            this.props.history.push("/login")
        }
    }
    componentDidMount(){
        let {match:{params:{id}}} = this.props;
        axios.post("/api/detail",{id}).then(res=>{
            this.setState({obj:res.data})
        })
    }
}
export default connect(state=>{
    return {
        shopcar:state.data.shopcar
    }
},dispatch=>{
    return bindActionCreators(action,dispatch)
})(Detail)