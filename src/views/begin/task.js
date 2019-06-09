import React, { Component } from 'react'
import Header from "../../components/begin-header"
import * as action from "../../store/action/data.action"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import "../../mock/data"
import List from "../../components/list"
 class Task extends Component {
    state={
        fore:[]
    }
    render() {
        let {data} = this.props
        return (
            <div>
                <Header><h3>任务</h3></Header>
                <main>
                    {
                        data && data.data.map((item,index)=><List key={index} {...item}/>)
                    }
                </main>
            </div>
        )
    }
    componentDidMount(){
        this.props.getdata("/api/data")
    }
}
export default connect(state=>{
    return state;
},dispatch=>{   
    return bindActionCreators(action,dispatch)
})(Task)
