import React, { Component } from 'react'
import {connect} from "react-redux"
import List from "../components/list"
 class Home extends Component {
    render() {
        let {shop:{allPrice,list}}=this.props;
        console.log(allPrice,list)
        return (
            <div id="app">
                <header>
                    <span> &lt;  购物 </span>
                    <span>管理</span>
                </header>
                <main>
                    {
                        list.map((item,index)=><List key={index} {...item} index={index}/>)
                    }
                </main>
                <footer>
                    <span><input type="checkbox"/> 全选</span>
                    <span>合计:￥{allPrice}</span>
                </footer>
            </div>
        )
    }
}
const mapStateToProps=state=>{
    // console.log(state)
    return {
        shop:state.shop
    }
}
const mapDispatchToProps=dispatch=>{
    return {

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);