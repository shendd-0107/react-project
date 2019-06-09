import React, { Component } from 'react'
import Header from "../components/header"
import {bindActionCreators} from "redux"
import * as action from "../store/action/action"
import {connect} from "react-redux"
import List from "../components/list"
import BScroll from "better-scroll"
class Home extends Component {
    state={
        current:0
    }
    render() {
        let {data,sum} = this.props;
        let {current} = this.state;
        return (
            <div className="wrap">
                <Header></Header>
                <main>
                    <div className="left">
                        {
                            data && data.map((item,index)=><p className={current === index ? "active" :""} key={item.id} 
                            onClick={()=>this.leftFn(index)}
                            >{item.title}</p>)
                        }
                    </div>
                    <div className="right">
                        <div className="wrapper">
                            {
                                data.map((item,index)=><div key={item.id}><h3 ref={"left"+index}>{item.title}</h3>
                                    {
                                        item.children.map((item1,index1)=><List key={item1.childid} index={index} index1={index1} {...item1}></List>)
                                    }
                                </div>)
                            }
                        </div>
                    </div>
                </main>
                <footer><h3>总价：￥ <b>{sum}</b></h3></footer>
            </div>
        )
    }
    componentDidMount(){
        let {initFn} = this.props;
        initFn("/mockdatas")
        this.better = new BScroll(".right",{
            probeType:3
        })
    }
    leftFn(ind){
        this.setState({current:ind})
        this.better.scrollTo(0,-this.refs['left'+ind].offsetTop,1000)
    }
}
export default connect(state=>{ 
    console.log(state,'-----state')
    return {
        data:state.data.data,
        sum:state.data.sum
    }
},dispatch=>{
    return bindActionCreators(action,dispatch)
})(Home)