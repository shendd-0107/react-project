import React, { Component } from 'react'
import * as search from "../store/action/search"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
class Search extends Component {
    state={
        val:'',
        str:[]
    }
    render() {
        let {hotdata,arr} = this.props.searchdata
        let {searchVal,delFn,alldelFn} = this.props;
        let {val} = this.state
        return (
            <div className="search">
                <div className="search-header">
                    <span 
                        onClick={()=>{
                            searchVal(val)
                            this.setState({val:''})
                        }}>
                        搜索
                    </span>
                    <p>
                        <input type="text" autoFocus placeholder="请输入你想要的课程" value={val} 
                            onChange={(e)=>this.setState({val:e.target.value})}/>
                    </p>
                    <span>
                        取消
                    </span>
                </div>
                <div className="search-main">
                    <div className="search-hot">
                        <h3>热门搜索</h3>
                        <div className="hot-p">
                            {
                                hotdata && hotdata.map((item,index)=><p key={index}>{item.title}</p>)
                            }
                        </div>
                    </div>
                    <div className="search-history">
                        <h3>历史记录<span onClick={()=>{alldelFn()}}>x</span></h3>
                        <div className="history-p">
                            {
                                 arr ? 
                                 arr.map((item,index)=><p key={index}>{item.title}
                                    <b onClick={()=>{delFn(index)}}>x</b>
                                 </p>) 
                                 :
                                 <p>'暂无历史记录'</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.initFn("/api/search_hot")
        
    }
    
}
export default connect(state=>{
    console.log(state,'-----state')
    return state
},dispatch=>{
    return bindActionCreators(search,dispatch)
})(Search)