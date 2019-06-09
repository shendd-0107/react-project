import React, { Component } from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import * as action from "../store/action/action"
import axios from "axios"
class List extends Component {
    
    render() {
        let {curdata,index,submit,tips,open} = this.props;
        console.log(tips,'------tips')
        return (
            <div className="list">
                <h3>{curdata.title}</h3>
                <ul>
                    {
                        curdata.check && curdata.check.map((item,i)=><li key={item.id}><span 

                        className={`${(curdata.select !== -1) && item.id === curdata.success ? "success" : ''} 
                        ${(curdata.select !== -1) && item.id === curdata.select ? "check" :''}`} 

                        onClick={()=>{
                            this.changeCheck(item.id)
                        }}></span><b>{item.title}</b></li>)
                    }
                </ul>
                <p>
                    <button onClick={this.changeItem.bind(this,false,index)}>上一题</button>
                    <button onClick={()=>submit()}>提交</button>
                    <button onClick={this.changeItem.bind(this,true,index)}>下一题</button>
                </p>
                {
                    open && <div className="mask-dialog">
                        <div className="cont">
                            {tips}
                        </div>
                    </div>
                }
            </div>
        )
    }
    changeItem(flag,index){
        let {changeItem,question} = this.props;
        let ind = (flag ? index+1 :index-1);
        if(ind <= 0){
            ind = 0
        }else if(ind>=question.length){
            ind = question.length-1;
        }
        changeItem(ind);
    }
    changeCheck(id){
        let {changeCheck,curdata} = this.props;
        (curdata.select === -1) && changeCheck(id)
    }
    
    componentDidMount(){
        // axios.get("/api/data").then(res=>{
        //     console.log(res);
        // })
    }
}
export default connect(state=>{
    return {
        question:state.data.question,
        curdata:state.data.curdata,
        index:state.data.index,
        tips:state.data.tips,
        open:state.data.open
    }
},dispatch=>{
    return  bindActionCreators(action,dispatch)
    
})(List)